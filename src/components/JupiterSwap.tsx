import { useEffect } from 'react';

export default function JupiterSwap() {
  const bccMintAddress: string = "HDaPAGVzD9kBEB4iTrNewuk9wrz58J8fXMs9Q3U31u5N";

  useEffect(() => {
    const initJupiter = (): void => {
      if (window.Jupiter) {
        window.Jupiter.init({
          displayMode: "integrated",
          integratedTargetId: "integrated-terminal",
          endpoint: "https://api.mainnet-beta.solana.com", 
          strictTokenList: false, 
          formProps: {
            fixedOutputMint: true, 
            initialOutputMint: bccMintAddress, 
            initialInputMint: "So11111111111111111111111111111111111111112", 
          },
        });
      }
    };

    const timer = setTimeout(initJupiter, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white py-12 px-4 flex flex-col items-center">
      
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-green-500 font-bold uppercase text-xs tracking-widest">Direct Swap</span>
        <h2 className="text-3xl font-bold mt-1 mb-2">Buy BCC Instantly</h2>
        <p className="text-gray-400 text-sm max-w-md">
          Swap your SOL directly for Bad Credit Coin without leaving our platform. Powered securely by Jupiter.
        </p>
      </div>

      {/* The Jupiter Terminal Box */}
      <div 
        id="integrated-terminal" 
        className="w-full max-w-[420px] h-[580px] bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-xl shadow-green-500/5 hover:border-green-500/30 transition-all duration-300"
      >
        {/* Jupiter terminal renders here */}
      </div>

      {/* Slippage Reminder */}
      <p className="text-xs text-gray-600 mt-4 max-w-sm text-center">
        * Please ensure your wallet slippage is set to at least 3.5% to account for the native BCC transaction tax.
      </p>
      
    </div>
  );
}