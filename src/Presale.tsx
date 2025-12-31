import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Presale() {
  const SOLANA_ADDRESS =
    "H7GbbP9SGb9VtUVJFXoesnQjcJk1XpXAFHTyMzNx4AaD";

  const TOTAL_SUPPLY = 100000000;
  const SOLD = 500000; // update manually or later via backend
  const remaining = TOTAL_SUPPLY - SOLD;

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2026-01-31T23:59:59Z").getTime();

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

      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white flex items-center justify-center px-6">
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

        {/* Price */}
        <p className="text-2xl font-bold text-center mb-4">
          100,000 BCC = $100
        </p>

        <p className="text-center text-emerald-400 font-semibold">
          Presale Ends January 31st, 2026
        </p>

        <p className="text-center text-cyan-400 font-semibold">
          Countdown: {timeLeft}
        </p>

        <p className="text-center text-cyan-400 font-semibold mb-10">
          Launch Date: Feb 4th, 2026
        </p>

        {/* Payment Option 1 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Solana Token</h3>

          <p className="text-gray-300 mb-3">
            Send Solana to the following address
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              value={SOLANA_ADDRESS}
              readOnly
              className="flex-1 p-3 rounded bg-black/40 border border-white/10 text-emerald-400 font-mono"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(SOLANA_ADDRESS);
                alert("Solana address copied");
              }}
              className="px-4 rounded bg-emerald-400 text-black font-semibold hover:opacity-90"
            >
              Copy
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <img
            src="/solana-qr.png"
            alt="Solana QR Code"
            className="w-48 h-48 rounded-lg border border-white/10"
          />
        </div>

        {/* Sold / Remaining */}
        <div className="mt-6 text-center">
          <p className="text-lg text-emerald-400 font-bold">
            {SOLD.toLocaleString()} BCC Sold
          </p>
          <p className="text-gray-300">
            {remaining.toLocaleString()} BCC Remaining
          </p>
        </div>

        {/* Payment Option 2 */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-emerald-400 mb-3">
            2. Interac Email Money Transfer
          </h2>

          <p className="text-slate-300">Send payment to:</p>

          <p className="mt-2 text-lg font-semibold text-white">
            📧 badcreditcoin@gmail.com
          </p>

          <p className="text-gray-300 mt-4">
            Tokens will be distributed between{" "}
            <strong>Feb 1st – Feb 3rd, 2026</strong>.
          </p>

          <p className="text-gray-300 mt-2">
            Please email your receipt to{" "}
            <strong>badcreditcoin@gmail.com</strong> to get your tokens.
          </p>

          <p className="text-emerald-400 mt-4 font-semibold">
            Early investors will be prioritized to apply for zero-interest loans
            upon launch.
          </p>
        </div>

        {/* Footer note */}
        <p className="text-sm text-slate-400 mt-10 text-center">
          Manual verification will be completed before token distribution.
        </p>
      </motion.div>
    </div>
  );
}
