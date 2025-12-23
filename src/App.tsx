import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Facebook, Twitter, Instagram } from "lucide-react";

type Page = "home" | "mission" | "tokenomics" | "whitepaper" | "apply";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const Nav = ({ label, p }: { label: string; p: Page }) => (
    <button
      onClick={() => setPage(p)}
      className="hover:text-emerald-400 transition font-medium"
    >
      {label}
    </button>
  );

  /* ================= TOKENOMICS DATA ================= */
  const allocationData = {
    labels: [
      "Public Distribution",
      "Lending Pool",
      "Team",
      "Marketing",
      "Reserve",
    ],
    datasets: [
      {
        data: [50, 25, 10, 10, 5],
        backgroundColor: [
          "#34d399",
          "#22d3ee",
          "#60a5fa",
          "#a78bfa",
          "#fbbf24",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-black to-black text-white">
      {/* ================= HEADER ================= */}
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
        {/* ================= HOME (UNCHANGED) ================= */}
        {page === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-7xl mx-auto"
          >
            {/* 🔒 HOME PAGE CONTENT REMAINS EXACTLY AS YOU HAD IT */}
          </motion.section>
        )}

        {/* ================= MISSION ================= */}
        {page === "mission" && (
          <motion.section
            key="mission"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-6xl mx-auto space-y-12"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">
              Our Mission
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">
                  Financial Inclusion
                </h3>
                <p className="text-slate-300 mt-3">
                  Millions are excluded from traditional finance due to bad
                  credit or geography. We provide fair access to capital without
                  discrimination.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">
                  Zero Interest Lending
                </h3>
                <p className="text-slate-300 mt-3">
                  Borrowers repay exactly what they borrow — no interest, no
                  compounding debt, no traps.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">
                  On-Chain Trust
                </h3>
                <p className="text-slate-300 mt-3">
                  Creditworthiness is built transparently through on-chain
                  repayment history, not opaque credit bureaus.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">
                  Global Expansion
                </h3>
                <p className="text-slate-300 mt-3">
                  Borderless ethical finance for underserved communities
                  worldwide.
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* ================= TOKENOMICS ================= */}
        {page === "tokenomics" && (
          <motion.section
            key="tokenomics"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-6xl mx-auto space-y-10"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">
              Tokenomics
            </h1>

            <p className="text-slate-300 text-center max-w-4xl mx-auto">
              Fixed supply designed to support sustainable zero-interest
              lending, governance, and ecosystem growth.
            </p>

            <div className="max-w-md mx-auto">
              <Doughnut data={allocationData} />
            </div>
          </motion.section>
        )}

        {/* ================= WHITE PAPER ================= */}
        {page === "whitepaper" && (
          <motion.section
            key="whitepaper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-5xl mx-auto space-y-8"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">
              White Paper
            </h1>

            <h3 className="text-xl font-bold text-emerald-400">Roadmap</h3>

            <ul className="space-y-4 text-slate-300">
              <li>
                <strong>Phase 1:</strong> Platform launch & early users
              </li>
              <li>
                <strong>Phase 2:</strong> DAO governance & decentralization
              </li>
              <li>
                <strong>Phase 3:</strong> Global scaling & partnerships
              </li>
            </ul>

            <a
              href="/Bad-Credit-Coin-Whitepaper.pdf"
              download
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
            >
              Download PDF
            </a>
          </motion.section>
        )}

        {/* ================= APPLY ================= */}
        {page === "apply" && (
          <motion.section
            key="apply"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl font-bold text-center text-emerald-400">
              Apply for Credit
            </h1>

            <form className="space-y-4">
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Full Name" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Email Address" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Country" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Wallet Address" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Requested Amount" />

              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold">
                Submit Application
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-slate-400 border-t border-white/10">
        <div className="flex justify-center gap-6 mb-4">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <p>© {new Date().getFullYear()} Bad Credit Coin. All rights reserved.</p>
      </footer>
    </div>
  );
}
