import { motion } from "framer-motion";

export default function Presale() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 shadow-xl"
      >
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Token Presale
        </h1>

        {/* Price Increase Box */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-center mb-6">
          <p className="text-sm text-slate-300">Price will increase in</p>
          <p className="text-lg font-bold text-emerald-400 mt-1">
            Current: 0.0050 BCC &nbsp;→&nbsp; Next: 0.0055 BCC
          </p>
        </div>

        {/* Countdown (UI only) */}
        <div className="grid grid-cols-4 gap-3 text-center mb-8">
          {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
            <div
              key={label}
              className="bg-black/40 border border-white/10 rounded-lg py-3"
            >
              <p className="text-xl font-bold text-emerald-400">00</p>
              <p className="text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </div>

        {/* Solana Badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img
            src="/solana-logo.png"
            alt="Solana"
            className="w-8 h-8"
          />
          <p className="text-sm text-slate-300">
            Powered by <span className="text-emerald-400 font-semibold">Solana Chain</span>
          </p>
        </div>

        {/* Caps */}
        <div className="grid grid-cols-3 gap-4 mb-8 text-center">
          <div className="bg-black/40 border border-white/10 rounded-lg p-3">
            <p className="text-xs text-slate-400">Soft Cap</p>
            <p className="font-bold">$500,000</p>
          </div>
          <div className="bg-black/40 border border-white/10 rounded-lg p-3">
            <p className="text-xs text-slate-400">Hard Cap</p>
            <p className="font-bold">$1,000,000</p>
          </div>
          <div className="bg-black/40 border border-white/10 rounded-lg p-3">
            <p className="text-xs text-slate-400">Total Raised</p>
            <p className="font-bold">$0 (manual)</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 mb-8 text-center">
          <p>Sale Price: <strong>1 BCC = 0.0050</strong></p>
          <p className="mt-1 text-slate-400">
            Listing Price: <strong>1 BCC = 0.010</strong>
          </p>
        </div>

        {/* Solana Payment */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <img src="/solana-logo.png" className="w-6 h-6" />
            Solana (SOL)
          </h3>

          <p className="text-gray-300 mb-2">
            Send Solana to the following address
          </p>

          <div className="relative">
            <input
              type="text"
              value="H7GbbP9SGb9VtUVJFXo•••••••••••4AaD"
              readOnly
              className="w-full p-3 rounded bg-black/40 border border-white/10 text-emerald-400 font-mono"
            />
          </div>

          <div className="flex justify-center mt-4">
            <img
              src="/solana-qr.png"
              alt="Solana QR"
              className="w-44 h-44 rounded-lg border border-white/10"
            />
          </div>
        </div>

        {/* ETH / BNB / USDT */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 mb-6">
          <p className="font-semibold mb-2">ETH / BNB / USDT</p>
          <p className="text-slate-400 text-sm">
            Supported via wallet connection (manual verification).
          </p>
        </div>

        {/* BTC Coming Soon */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 mb-6 opacity-60">
          <p className="font-semibold">Bitcoin (BTC)</p>
          <p className="text-slate-400 text-sm">Coming Soon</p>
        </div>

        {/* Interac */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">
            Interac Email Money Transfer
          </h3>
          <p className="text-slate-300">
            Send payment to:
          </p>
          <p className="mt-2 font-bold">
            badcreditcoin@gmail.com
          </p>

          <p className="text-slate-400 mt-4">
            Tokens distributed between <strong>Feb 1 – Feb 3, 2026</strong>
          </p>
          <p className="text-slate-400 mt-2">
            Email receipt to <strong>badcreditcoin@gmail.com</strong>
          </p>

          <p className="text-emerald-400 mt-4 font-semibold">
            Early investors prioritized for zero-interest loans
          </p>
        </div>

                 {/* 🔐 Smart Contract Security Section (NEW) */}
        <div className="mt-10 p-6 rounded-xl bg-black/40 border border-white/10">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">
            Smart Contract Security
          </h3>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed">
            The $BCC presale smart contract is currently under internal review and
            scheduled for third-party security auditing prior to public token
            distribution.
          </p>


        {/* Trust Badge */}
        <div className="text-center text-xs text-slate-400 mt-10">
          🔒 Smart contract audit: <span className="italic">Coming Soon</span>
        </div>
      </motion.div>
    </div>
  );
}
