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
        </div>

        {/* Big Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Lending Pool */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300">
            <div className="text-green-400 text-sm font-bold uppercase mb-2">Lending Pool</div>
            <div className="text-2xl font-bold mb-1">750,000,000</div>
            <div className="text-gray-500 text-sm mb-4">Tokens Locked</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              100% locked for 6 months. This supply is strictly reserved to fund our interest-free private lending platform.
            </p>
          </div>

          {/* Card 2: Marketing */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300">
            <div className="text-green-400 text-sm font-bold uppercase mb-2">Marketing</div>
            <div className="text-2xl font-bold mb-1">450,000,000</div>
            <div className="text-gray-500 text-sm mb-4">Tokens Locked</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subject to a 20-month linear vesting schedule. Only 5% unlocks each month to fund continuous advertising.
            </p>
          </div>

          {/* Card 3: Team */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300">
            <div className="text-green-400 text-sm font-bold uppercase mb-2">Team & Dev</div>
            <div className="text-2xl font-bold mb-1">300,000,000</div>
            <div className="text-gray-500 text-sm mb-4">Tokens Locked</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subject to a strict 20-month linear vesting schedule (5% monthly unlock). Our team is dedicated for the long haul.
            </p>
          </div>
        </div>

        {/* Dynamic Verification Section */}
        <div className="bg-gradient-to-br from-neutral-900 to-black border border-green-500/20 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
            🛡️ Verify On-Chain Transparency
          </h3>
          <p className="text-gray-400 text-sm mb-4 max-w-xl mx-auto">
            Once our locks are officially initiated on Streamflow on April 7th, direct clickable verification links will be updated here.
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