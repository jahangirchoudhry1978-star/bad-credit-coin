import { useEffect } from 'react';
import { motion } from 'framer-motion';

const BCC_MINT = "HDaPAGVzD9kBEB4iTrNewuk9wrz58J8fXMs9Q3U31u5N";

const Presale = () => {
  
  useEffect(() => {
    const initJupiter = () => {
      // Check if the script exists and window.Jupiter is available
      if (window.Jupiter) {
        window.Jupiter.init({
          displayMode: "integrated",
          integratedTargetId: "jupiter-terminal",
          endpoint: "https://api.mainnet-beta.solana.com",
          strictTokenList: false,
          formProps: {
            fixedOutputMint: true,
            initialOutputMint: BCC_MINT,
          },
        });
      }
    };

    // Retry logic in case the script tag in index.html hasn't finished loading
    const interval = setInterval(() => {
      if (window.Jupiter) {
        initJupiter();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen text-white bg-black">
      {/* Header Info */}
      <div className="text-center mb-10 space-y-4">
        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent uppercase tracking-tighter">
          Trade $BCC Live
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Swap SOL or USDC for $BCC instantly via the Jupiter aggregator. 
          Liquidity is locked and verified.
        </p>
      </div>

      {/* Main Trading Floor */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT: DexScreener Live Chart */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 w-full h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-[#131722] shadow-2xl"
        >
          <iframe 
            width="100%" 
            height="100%" 
            src="https://dexscreener.com/solana/3S1QsscpJmmGf9wpvG9hNVnBRmHuKzTRTvMdLbM54Cvt?embed=1&theme=dark&trades=0&info=0" 
            style={{ border: 0 }}
            title="BCC Chart"
          ></iframe>
        </motion.div>

        {/* RIGHT: Jupiter Terminal */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5 w-full flex flex-col gap-4"
        >
          <div className="p-6 rounded-3xl bg-[#0f0f0f] border border-white/10 shadow-xl min-h-[600px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Live Swap</span>
              <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] text-gray-400 uppercase font-bold">Mainnet Beta</span>
              </div>
            </div>

            {/* Terminal Container */}
            <div id="jupiter-terminal" className="flex-grow w-full rounded-xl overflow-hidden"></div>
            
            <p className="text-[10px] text-gray-500 mt-4 text-center italic">
              Official Mint: {BCC_MINT}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats Badges */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Liquidity", val: "500 SOL LOCKED" },
          { label: "Tax", val: "0% BUY / 0% SELL" },
          { label: "Network", val: "SOLANA" },
          { label: "Slippage", val: "AUTO" }
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
            <p className="text-[10px] text-gray-500 uppercase font-bold">{item.label}</p>
            <p className="text-sm font-bold text-white">{item.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presale;