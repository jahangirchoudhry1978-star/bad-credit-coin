const { Connection, Keypair, PublicKey, VersionedTransaction } = require('@solana/web3.js');
const { 
    withdrawWithheldTokensFromMint, 
    harvestWithheldTokensToMint, 
    TOKEN_2022_PROGRAM_ID, 
    getAssociatedTokenAddressSync,
    getMint
} = require('@solana/spl-token');
const bs58 = require('bs58').default || require('bs58');
const axios = require('axios');
require('dotenv').config();

// --- CONFIG ---
const connection = new Connection(process.env.SOLANA_RPC_URL, 'confirmed');
const mintAddress = new PublicKey(process.env.BCC_MINT_ADDRESS);
const authority = Keypair.fromSecretKey(bs58.decode(process.env.REAPER_KEY));

/**
 * The "Reaper" Logic: Harvest -> Withdraw -> Swap
 */
async function runTaxReaper() {
    console.log(`\n--- 🧹 REAPER START: ${new Date().toLocaleString()} ---`);
    
    try {
        // 1. HARVEST: Move withheld tokens from user accounts to the Mint
        // On Token-2022, fees stay in user accounts until 'harvested' to the mint
        console.log("📡 Scanning network for withheld fees...");
        const allAccounts = await connection.getProgramAccounts(TOKEN_2022_PROGRAM_ID, {
            filters: [
                { dataSize: 170 }, // Size of Token-2022 account
                { memcmp: { offset: 0, bytes: mintAddress.toBase58() } }
            ]
        });

        const accountsToHarvest = allAccounts.map(a => a.pubkey);
        
        if (accountsToHarvest.length > 0) {
            console.log(`🌾 Harvesting from ${accountsToHarvest.length} accounts...`);
            // Note: Limited to 30 accounts per harvest TX to prevent size errors
            const harvestSig = await harvestWithheldTokensToMint(
                connection,
                authority,
                mintAddress,
                accountsToHarvest.slice(0, 30),
                undefined,
                TOKEN_2022_PROGRAM_ID
            );
            console.log(`✅ Harvested to Mint: https://solscan.io/tx/${harvestSig}`);
        }

        // 2. WITHDRAW: Pull from Mint to your Authority Wallet
        const ata = getAssociatedTokenAddressSync(mintAddress, authority.publicKey, false, TOKEN_2022_PROGRAM_ID);
        
        console.log("📥 Withdrawing fees from Mint to Authority wallet...");
        const withdrawSig = await withdrawWithheldTokensFromMint(
            connection,
            authority,
            mintAddress,
            ata,
            authority,
            [],
            undefined,
            TOKEN_2022_PROGRAM_ID
        );
        console.log(`✅ Withdrawn: https://solscan.io/tx/${withdrawSig}`);

        // 3. SWAP: Use Jupiter to turn BCC into SOL
        await new Promise(r => setTimeout(r, 5000)); // Wait for blockchain indexer
        
        const tokenAccount = await connection.getParsedTokenAccountsByOwner(
            authority.publicKey, 
            { mint: mintAddress }, 
            'confirmed'
        );
        
        const amount = tokenAccount.value[0].account.data.parsed.info.tokenAmount.amount;

        if (parseInt(amount) < 1000) {
            console.log("💤 Insufficient tokens to swap. Minimum not met.");
        } else {
            console.log(`🔄 Swapping ${amount} BCC for SOL...`);
            const quote = await axios.get(`https://api.jup.ag/swap/v1/quote?inputMint=${mintAddress.toString()}&outputMint=So11111111111111111111111111111111111111112&amount=${amount}&slippageBps=150`);
            
            const swapRes = await axios.post('https://api.jup.ag/swap/v1/swap', {
                quoteResponse: quote.data,
                userPublicKey: authority.publicKey.toString(),
                wrapAndUnwrapSol: true,
                dynamicComputeUnitLimit: true,
                prioritizationFeeLamports: 2000000
            });

            const swapBuf = Buffer.from(swapRes.data.swapTransaction, 'base64');
            const transaction = VersionedTransaction.deserialize(swapBuf);
            transaction.sign([authority]);

            const txid = await connection.sendRawTransaction(transaction.serialize());
            console.log(`💰 SOL RECEIVED! View on Solscan: https://solscan.io/tx/${txid}`);
        }

    } catch (e) {
        console.error("❌ Reaper Cycle Failed:", e.message);
    }
    
    console.log(`--- 💤 REAPER SLEEPING: Next run in 6 hours ---`);
}

// THE 6-HOUR LOOP
const SIX_HOURS = 6 * 60 * 60 * 1000;
runTaxReaper(); // Run immediately on start
setInterval(runTaxReaper, SIX_HOURS);