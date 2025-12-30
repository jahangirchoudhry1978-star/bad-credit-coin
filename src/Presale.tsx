import { motion } from "framer-motion";

export default function Presale() {
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

<p className="text-center text-cyan-400 font-semibold mb-10">
  Launch Date: Feb 4th, 2026
</p>

        {/* Payment Option 1 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Solana Token</h3>

<p className="text-gray-300 mb-3">
  Send Solana to the following address
</p>

<input
  type="text"
  value="H7GbbP9SGb9VtUVJFXoesnQjcJk1XpXAFHTyMzNx4AaD"
  readOnly
  className="w-full p-3 rounded bg-black/40 border border-white/10 text-emerald-400 font-mono"
/>

        </div>

        {/* Payment Option 2 */}
        <div>
          <h2 className="text-xl font-bold text-emerald-400 mb-3">
            2. Interac Email Money Transfer
          </h2>
          <p className="text-slate-300">
            Send payment to:
          </p>
          <p className="mt-2 text-lg font-semibold text-white">
            📧 badcreditcoin@gmail.com
          </p>
          <p className="text-gray-300 mt-4">
        Tokens will be distributed between <strong>Feb 1st – Feb 3rd, 2026</strong>.
       </p>

       <p className="text-gray-300 mt-2">
        Please email your receipt to <strong>badcreditcoin@gmail.com</strong> to get your tokens.
        </p>

        <p className="text-emerald-400 mt-4 font-semibold">
        Early investors will be prioritized to apply for zero-interest loans upon launch.
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

