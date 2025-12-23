import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Facebook, Twitter, Instagram } from "lucide-react";


/* ✅ REQUIRED: Register Chart.js scales */

export default function App() {
  const [page, setPage] = useState<
    "home" | "mission" | "tokenomics" | "whitepaper" | "apply"
  >("home");

  const Nav = ({ label, p }: { label: string; p: typeof page }) => (
    <button
      onClick={() => setPage(p)}
      className="hover:text-emerald-400 transition font-medium"
    >
      {label}
    </button>
  );

  const tokenData = {
    labels: ["Public", "Lending Pool", "Team", "Marketing", "Reserve"],
    datasets: [
      {
        label: "Token Allocation %",
        data: [50, 25, 10, 10, 5],
        borderColor: "#34d399",
        backgroundColor: "rgba(52,211,153,0.25)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-black to-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Bad Credit Coin
          </div>

          <nav className="flex gap-8 text-sm">
            <Nav label="Home" p="home" />
            <Nav label="Mission" p="mission" />
            <Nav label="Tokenomics" p="tokenomics" />
            <Nav label="White Paper" p="whitepaper" />
            <Nav label="Apply" p="apply" />
          </nav>

          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold">
            Connect Wallet
          </button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {/* HOME */}
        {page === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-7xl mx-auto space-y-24"
          >
            {/* HERO */}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-6xl font-bold">
                Fair Credit.{" "}
                <span className="text-emerald-400">Zero Interest.</span>
              </h1>
              <p className="text-slate-300 text-lg">
                Ethical blockchain lending designed to rebuild trust without
                interest-based exploitation.
              </p>

              <div className="flex justify-center gap-6 mt-8">
                <button
                  onClick={() => setPage("whitepaper")}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
                >
                  Read White Paper
                </button>
                <button
                  onClick={() => setPage("apply")}
                  className="px-6 py-3 rounded-lg border border-white/20 hover:border-emerald-400 transition"
                >
                  Apply for Credit
                </button>
              </div>
            </div>

            {/* WHO WE ARE */}
            <section className="space-y-6 max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-emerald-400">
                Who We Are
              </h2>
              <p className="text-slate-300">
                Bad Credit Coin is a decentralized zero-interest lending
                protocol built to replace predatory finance with fairness,
                transparency, and on-chain accountability.
              </p>
            </section>

            {/* TOKENOMICS */}
            <section className="space-y-6 max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-emerald-400">
                Tokenomics
              </h2>
              <p className="text-slate-300">
                Total Supply: 10,000,000,000 BCC
              </p>
              <Line data={tokenData} />
            </section>

            {/* THREE PILLARS */}
            <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-400">
                  Interest-Free Lending
                </h3>
                <p className="text-slate-300 mt-4">
                  Borrow exactly what you repay. No interest, no compounding
                  debt, no traps.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-400">
                  Credit Building
                </h3>
                <p className="text-slate-300 mt-4">
                  Repayment history is recorded on-chain to rebuild financial
                  trust globally.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-emerald-400">
                  Global Expansion
                </h3>
                <p className="text-slate-300 mt-4">
                  Borderless ethical finance for underserved communities.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={() => setPage("apply")}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold"
              >
                Join the Waitlist
              </button>
            </div>

            {/* FOOTER */}
            <footer className="pt-16 border-t border-white/10 flex justify-center gap-8">
              <Facebook />
              <Twitter />
              <Instagram />
            </footer>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
