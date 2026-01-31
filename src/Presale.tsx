import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AddressBox from './components/AddressBox';

export default function Presale() {
  const TOTAL_SUPPLY = 100000000;
  const SOLD = 3750000; // update manually or later via backend
  const remaining = TOTAL_SUPPLY - SOLD;

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2026-03-31T23:59:59Z").getTime();

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft("Presale Ended");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 shadow-xl"
      >
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Token Presale
        </h1>

        {/* Price Increase Box */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-center mb-6">
          <p className="text-sm text-slate-300">Next Price Increase</p>
          <p className="text-lg font-bold text-emerald-400 mt-1">
            Current: 0.0050 BCC &nbsp;→&nbsp; Next: 0.0055 BCC
          </p>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-center mb-4">
          20,000 BCC = $100
        </p>

        <p className="text-center text-emerald-400 font-semibold">
          Presale Ends March 31st, 2026
        </p>

        <p className="text-center text-cyan-400 font-semibold">
          Countdown: {timeLeft}
        </p>

        <p className="text-center text-cyan-400 font-semibold mb-10">
          Launch Date: April 1st, 2026
        </p>

        {/* Payment Option 1: Solana */}
        <div className="mb-8 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2 self-start">1. Solana</h3>
          <p className="text-gray-300 mb-4 self-start">
            Send Solana to the following address:
          </p>

          {/* Corrected: Using your AddressBox Component here */}
          <AddressBox />

          <div className="flex justify-center mt-6">
            <img
              src="/solana-qr.png"
              alt="Solana QR Code"
              className="w-48 h-48 rounded-lg border border-white/10"
            />
          </div>
        </div>

        {/* Sold / Remaining Progress */}
        <div className="mt-6 text-center border-t border-white/10 pt-6">
          <p className="text-lg text-emerald-400 font-bold">
            {SOLD.toLocaleString()} BCC Sold
          </p>
          <p className="text-gray-300">
            {remaining.toLocaleString()} BCC Remaining
          </p>
        </div>

        {/* Payment Option 2: Interac */}
<div className="mt-8">
  <h2 className="text-xl font-bold text-emerald-400 mb-3">
    2. Interac Email Money Transfer
  </h2>

  <p className="text-slate-300 mb-2">Send payment to:</p>

  {/* FIXED BOX FOR MOBILE */}
  <div className="flex items-center justify-between gap-2 bg-black/40 p-3 rounded-lg border border-white/10 w-full overflow-hidden">
    <p className="text-sm sm:text-lg font-semibold text-white truncate break-all">
      badcreditcoin@gmail.com
    </p>
    <button
      onClick={() => {
        navigator.clipboard.writeText("badcreditcoin@gmail.com");
        alert("Email copied to clipboard");
      }}
      className="p-2 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-400 rounded-md transition-colors"
      title="Copy Email"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    </button>
  </div>

  <div className="space-y-3 mt-4">
    <p className="text-gray-300 text-sm leading-relaxed">
      Tokens will be distributed between{" "}
      <strong className="text-white">March 30– March 31st, 2026</strong>.
    </p>

    <p className="text-gray-300 text-sm leading-relaxed">
      Please email your receipt to{" "}
      <strong className="text-white">badcreditcoin@gmail.com</strong> to confirm your allocation.
    </p>

    <p className="text-emerald-400 font-semibold text-sm italic">
      Early investors will be prioritized to apply for zero-interest loans
      upon launch.
    </p>
  </div>
</div>
        
        {/* Security Section */}
        <div className="mt-10 p-6 rounded-xl bg-black/40 border border-white/10">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">
            Smart Contract Security
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            The $BCC presale smart contract is currently under internal review and
            scheduled for third-party security auditing prior to public token
            distribution.
          </p>
          <p className="mt-3 text-emerald-400 font-semibold text-sm">
            🔐 Smart Contract Audit — Coming Soon
          </p>
        </div>
        
        {/* Footer */}
        <p className="text-xs text-slate-400 mt-10 text-center uppercase tracking-tighter">
          Manual verification will be completed before token distribution.
        </p>
      </motion.div>
    </div>
  );
}
