import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BCC_MINT = "HDaPAGVzD9kBEB4iTrNewuk9wrz58J8fXMs9Q3U31u5N";

// --- AIRDROP FORM COMPONENT ---
const AirdropForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    walletAddress: '',
    txid: '',
    amount: ''
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    
    // YOUR SPECIFIC SHEETDB API URL
    const API_URL = "https://sheetdb.io/api/v1/17euyl8ofhm9q";

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              walletAddress: formData.walletAddress,
              txid: formData.txid,
              amount: formData.amount,
              date: new Date().toLocaleString()
            }
          ]
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      alert("Submission error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full bg-[#121212] border-2 border-green-500 p-6 rounded-2xl text-center mb-8 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
        <h2 className="text-green-500 text-2xl font-bold mb-2">Verification Sent!</h2>
        <p className="text-gray-300 text-sm">
          Your 5% bonus will be airdropped within 24 hours of the event closing on May 23rd.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0f0f0f] p-6 rounded-3xl border border-white/10 mb-8 shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h2 className="text-white text-xl md:text-2xl font-black uppercase italic">Phase 1 Airdrop Bonus</h2>
          <p className="text-green-500 text-xs font-bold uppercase tracking-widest">April 17 — April 23, 2026</p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-400 text-[10px] uppercase font-bold">Buy 10,000+ $BCC</p>
          <p className="text-white font-black text-lg text-green-400">+5% FREE TOKENS</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input 
          required
          type="text" 
          placeholder="Wallet Address"
          className="bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:border-green-500 outline-none transition"
          onChange={(e) => setFormData({...formData, walletAddress: e.target.value})}
        />
        <input 
          required
          type="text" 
          placeholder="Transaction ID (TXID)"
          className="bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:border-green-500 outline-none transition"
          onChange={(e) => setFormData({...formData, txid: e.target.value})}
        />
        <input 
          required
          type="number" 
          placeholder="Amount Purchased"
          className="bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:border-green-500 outline-none transition"
          onChange={(e) => setFormData({...formData, amount: e.target.value})}
        />
        <button 
          type="submit"
          disabled={loading}
          className="bg-green-500 text-black font-black py-3 rounded-xl hover:bg-green-400 transition-all uppercase text-xs tracking-tighter"
        >
          {loading ? 'Processing...' : 'Claim 5% Bonus'}
        </button>
      </form>
    </div>
  );
};

const Presale = () => {
  
  useEffect(() => {
    const initJupiter = () => {
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
          containerClassName: "max-h-[600px] md:max-h-[700px]", 
          containerStyles: {
            width: '100%',
          }
        });
      }
    };

    const interval = setInterval(() => {
      if (window.Jupiter) {
        initJupiter();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen text-white bg-black px-4 md:px-0">
      {/* Header Info */}
      <div className="text-center mb-6 md:mb-10 space-y-4 pt-6">
        <h1 className="text-3xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent uppercase tracking-tighter">
          Trade $BCC Live
        </h1>
        <p className="text-xs md:text-base text-gray-400 max-w-2xl mx-auto px-2">
          Swap SOL or USDC for $BCC instantly. Liquidity is locked and verified.
        </p>
      </div>

      {/* NEW: Airdrop Form placed ABOVE DexScreener/Jupiter */}
      <div className="max-w-7xl mx-auto px-2">
         <AirdropForm />
      </div>

      {/* Main Trading Floor */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-start">
        
        {/* TOP/LEFT: DexScreener Live Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full lg:col-span-7 h-[350px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#131722] shadow-2xl order-1"
        >
          <iframe 
            width="100%" 
            height="100%" 
            src="https://dexscreener.com/solana/3S1QsscpJmmGf9wpvG9hNVnBRmHuKzTRTvMdLbM54Cvt?embed=1&theme=dark&trades=0&info=0" 
            style={{ border: 0 }}
            title="BCC Chart"
          ></iframe>
        </motion.div>

        {/* BOTTOM/RIGHT: Jupiter Terminal */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full lg:col-span-5 flex flex-col gap-4 order-2"
        >
          <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-[#0f0f0f] border border-white/10 shadow-xl flex flex-col min-h-[500px]">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <span className="text-[10px] md:text-xs font-bold text-green-500 uppercase tracking-widest">Live Swap</span>
              <div className="flex gap-2 items-center">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[9px] md:text-[10px] text-gray-400 uppercase font-bold">Mainnet Beta</span>
              </div>
            </div>

            {/* Terminal Container */}
            <div id="jupiter-terminal" className="flex-grow w-full rounded-xl overflow-hidden"></div>
            
            <p className="text-[9px] md:text-[10px] text-gray-500 mt-4 text-center italic break-all">
              Mint: {BCC_MINT}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats Badges */}
      <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pb-10">
        {[
          { label: "Liquidity", val: "500 SOL LOCKED" },
          { label: "Tax", val: "0% BUY / SELL" },
          { label: "Network", val: "SOLANA" },
          { label: "Slippage", val: "AUTO" }
        ].map((item, i) => (
          <div key={i} className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 text-center">
            <p className="text-[9px] text-gray-500 uppercase font-bold">{item.label}</p>
            <p className="text-xs md:text-sm font-bold text-white">{item.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presale;