import { useState } from 'react';

export default function EcosystemSecurity() {
  const [copied, setCopied] = useState<boolean>(false);
  const mintAddress: string = "HDaPAGVzD9kBEB4iTrNewuk9wrz58J8fXMs9Q3U31u5N";

  const handleCopy = (): void => {
    navigator.clipboard.writeText(mintAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Ecosystem Security
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            To ensure the long-term growth of the BCC ecosystem and protect our community, 50% of the total supply is locked and secured.
          </p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            📢 BAD CREDIT COIN (BCC) TOKENOMICS UPDATE: THE PATH TO 1% FOREVER! 📢

Hey BCC Family! 🚀

You might have noticed a standard message on Jupiter stating that our 3% transfer fee is "mutable" and can be updated by the owner. We want to be 100% transparent with you about what this means and our ultimate master plan for the BCC ecosystem! 💎

To protect our community and ensure a massive launch, we are keeping the authority open for ONE REASON ONLY: To lower your taxes as we grow! 📉

Here is our official, hard-coded promise to you:

🛑 The Tax Will NEVER Increase Above 3%. 💰 At $5 Million Market Cap ➡️ We will drop the tax by 1% (Leaving it at 2%).
🔥 At $10 Million Market Cap ➡️ We will drop the tax by another 1% (Leaving it at 1% FOREVER).

🔒 THE ULTIMATE LOCK: Once we achieve our $10 Million Market Cap goal and drop the tax to 1%, we will officially REVOKE the tax authority and make it completely IMMUTABLE on the Solana blockchain. No human being will ever be able to change it again!
          </p>
        </div>

        {/* Big Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Lending Pool */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="text-green-400 text-sm font-bold uppercase mb-2">Lending Pool</div>
              <div className="text-2xl font-bold mb-1">750,000,000</div>
              <div className="text-gray-500 text-sm mb-4">Tokens Locked</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                100% locked for 6 months. This supply is strictly reserved to fund our interest-free private lending platform.
              </p>
            </div>
            
            {/* Verification Buttons */}
            <div className="mt-auto space-y-3">
              <a 
                href="https://app.streamflow.finance/contract/solana/mainnet/6z8WFroZrjyjZsy3pGN7LhHuNBfgpjY1fc5k5MxQ4pYz?new=" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-green-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-green-400 transition-colors duration-200 text-xs"
              >
                <span>Verify on Streamflow</span>
              </a>
              <a 
                href="https://solscan.io/tx/2gbbQtWBPygpG12hUofCAyCfP4g62juosTVeHBoVWT9AyjGWsskEqgdRn8M5PFe4phuwc6xjX8aVA8EmtYf7FqfQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-block text-center text-xs text-gray-500 hover:text-green-400 transition-colors duration-200"
              >
                View Contract on Solscan
              </a>
            </div>
          </div>

          {/* Card 2: Marketing */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="text-green-400 text-sm font-bold uppercase mb-2">Marketing</div>
              <div className="text-2xl font-bold mb-1">450,000,000</div>
              <div className="text-gray-500 text-sm mb-4">Tokens Locked</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Subject to a 20-month linear vesting schedule. Only 5% unlocks each month to fund continuous advertising.
              </p>
            </div>

            {/* Verification Buttons */}
            <div className="mt-auto space-y-3">
              <a 
                href="https://app.streamflow.finance/contract/solana/mainnet/8TQkyk9UVtw5kq5sPWHHQvToWU5zUyQbBiYjjqexdpT6?new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-green-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-green-400 transition-colors duration-200 text-xs"
              >
                <span>Verify on Streamflow</span>
              </a>
              <a 
                href="https://solscan.io/tx/2SRuC15G3oN3io8k7BxmGrgi4gTWNcX2CPdVfYk898H5xddpwx5WSXt6Mv4bPfWb8dhLM3571cW7cRZcdPv3oGEB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-block text-center text-xs text-gray-500 hover:text-green-400 transition-colors duration-200"
              >
                View Contract on Solscan
              </a>
            </div>
          </div>

          {/* Card 3: Team */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="text-green-400 text-sm font-bold uppercase mb-2">Team & Dev</div>
              <div className="text-2xl font-bold mb-1">300,000,000</div>
              <div className="text-gray-500 text-sm mb-4">Tokens Locked</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Subject to a strict 20-month linear vesting schedule (5% monthly unlock). Our team is dedicated for the long haul.
              </p>
            </div>

            {/* Verification Buttons */}
            <div className="mt-auto space-y-3">
              <a 
                href="https://app.streamflow.finance/contract/solana/mainnet/7daSSeqMbx446xiqtJbq4wgbbyusJXTAbPAxYWSGXpvj?new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-green-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-green-400 transition-colors duration-200 text-xs"
              >
                <span>Verify on Streamflow</span>
              </a>
              <a 
                href="https://solscan.io/tx/5R3EZrohzKz8L7hVPnMERhZrMpHdiFmE8WCUpUMt9kn6c5ZAzZ5HLPxnQEKLYFPEaqLk5anfeLitx7ZXXpNUymaC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-block text-center text-xs text-gray-500 hover:text-green-400 transition-colors duration-200"
              >
                View Contract on Solscan
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Verification Section */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-green-500/20 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
            🛡️ Contract Information
          </h3>
          <p className="text-gray-400 text-sm mb-4 max-w-xl mx-auto">
            You can interact directly with the Bad Credit Coin contract. Use the address below to add BCC to your wallet.
          </p>
          
          {/* Custom Copy Box */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-neutral-800 p-3 rounded-xl max-w-full overflow-hidden">
            <span className="text-gray-500 text-xs font-mono">BCC Mint:</span>
            <span className="text-white text-xs font-mono break-all sm:break-normal">
              {mintAddress}
            </span>
            <button 
              onClick={handleCopy}
              className={`text-xs px-4 py-1.5 rounded-lg font-bold transition-all duration-200 ${
                copied 
                ? 'bg-emerald-600 text-white' 
                : 'bg-green-500 text-black hover:bg-green-400'
              }`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}