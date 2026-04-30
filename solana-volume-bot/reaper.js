const { Connection, Keypair, PublicKey, VersionedTransaction } = require('@solana/web3.js');
const { 
    withdrawWithheldTokensFromMint, 
    harvestWithheldTokensToMint, 
    TOKEN_2022_PROGRAM_ID, 
    getAssociatedTokenAddressSync
} = require('@solana/spl-token');
const bs58Raw = require('bs58');
const bs58 = bs58Raw.default || bs58Raw;
const axios = require('axios');
require('dotenv').config();

const connection = new Connection(process.env.SOLANA_RPC_URL, 'confirmed');
const mintAddress = new PublicKey(process.env.BCC_MINT_ADDRESS);
const authority = Keypair.fromSecretKey(bs58.decode(process.env.REAPER_KEY));

async function runTaxReaper() {
    console.log(`\n--- 🧹 REAPER START: ${new Date().toLocaleString()} ---`);
    
    try {
        // STEP 1: HARVEST
        console.log("📡 [STEP 1/4] Scanning network for withheld fees...");
        const allAccounts = await connection.getProgramAccounts(TOKEN_2022_PROGRAM_ID, {
            filters: [
                { dataSize: 170 }, 
                { memcmp: { offset: 0, bytes: mintAddress.toBase58() } }
            ]
        });

        const accountsToHarvest = allAccounts.map(a => a.pubkey);
        if (accountsToHarvest.length > 0) {
            console.log(`🌾 Harvesting from ${accountsToHarvest.length} accounts...`);
            await harvestWithheldTokensToMint(connection, authority, mintAddress, accountsToHarvest.slice(0, 30), undefined, TOKEN_2022_PROGRAM_ID);
        }

        // STEP 2: WITHDRAW
        console.log("📥 [STEP 2/4] Withdrawing fees to Authority wallet...");
        const ata = getAssociatedTokenAddressSync(mintAddress, authority.publicKey, false, TOKEN_2022_PROGRAM_ID);
        const withdrawSig = await withdrawWithheldTokensFromMint(connection, authority, mintAddress, ata, authority, [], undefined, TOKEN_2022_PROGRAM_ID);
        console.log(`✅ Withdrawal Successful: ${withdrawSig.slice(0,10)}...`);

        // STEP 3: PREPARE
        console.log("⏳ [STEP 3/4] Waiting for indexer...");
        await new Promise(r => setTimeout(r, 5000)); 
        
        const tokenAccount = await connection.getParsedTokenAccountsByOwner(authority.publicKey, { mint: mintAddress }, 'confirmed');
        const amount = tokenAccount.value[0]?.account.data.parsed.info.tokenAmount.amount;

        if (!amount || parseInt(amount) < 1000) {
            console.log("💤 Balance too low to swap.");
        } else {
            // STEP 4: SWAP (Updated to the latest Jupiter V6 structure)
            console.log(`🔄 [STEP 4/4] Swapping ${parseInt(amount).toLocaleString()} BCC for SOL...`);
            
            // Note: We use the dedicated quote-api via the main gateway to ensure it's not a 404
            const quoteRes = await axios.get(`https://api.jup.ag/swap/v1/quote?inputMint=${mintAddress.toString()}&outputMint=So11111111111111111111111111111111111111112&amount=${amount}&slippageBps=200`);
            
            if (!quoteRes.data) throw new Error("Could not get price quote from Jupiter.");

            const swapRes = await axios.post('https://api.jup.ag/swap/v1/swap', {
                quoteResponse: quoteRes.data,
                userPublicKey: authority.publicKey.toString(),
                wrapAndUnwrapSol: true,
                dynamicComputeUnitLimit: true,
                prioritizationFeeLamports: 3500000 
            });

            const transaction = VersionedTransaction.deserialize(Buffer.from(swapRes.data.swapTransaction, 'base64'));
            transaction.sign([authority]);

            const txid = await connection.sendRawTransaction(transaction.serialize(), { skipPreflight: true });
            console.log(`💎 SUCCESS! TX: https://solscan.io/tx/${txid}`);
        }

    } catch (e) {
        console.error("❌ Reaper Error:", e.response ? `API Error: ${e.response.status}` : e.message);
    }
    console.log(`--- 💤 REAPER SLEEPING ---`);
}

runTaxReaper();
setInterval(runTaxReaper, 6 * 60 * 60 * 1000);