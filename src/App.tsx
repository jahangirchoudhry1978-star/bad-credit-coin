import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Facebook, Twitter, Instagram } from "lucide-react";

// --------------------
// Types
// --------------------
type Page = "home" | "mission" | "tokenomics" | "whitepaper" | "governance" | "apply";

// --------------------
// Main App
// --------------------
export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [wallet, setWallet] = useState<string | null>(null);

  // --------------------
  // MetaMask Connect (safe)
  // --------------------
  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert("MetaMask not installed");
      return;
    }
    try {
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      setWallet(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };

  // --------------------
  // Navigation Button
  // --------------------
  const Nav = ({ label, p }: { label: string; p: Page }) => (
    <button
      onClick={() => setPage(p)}
      className="hover:text-emerald-400 transition font-medium"
    >
      {label}
    </button>
  );

  // --------------------
  // Tokenomics Chart
  // --------------------
  const allocationData = {
    labels: ["Public", "Lending Pool", "Team", "Marketing", "Reserve"],
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
            <Nav label="Governance" p="governance" />
            <Nav label="Apply" p="apply" />
          </nav>
          <button
            onClick={connectWallet}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
          >
            {wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "Connect Wallet"}
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
            className="py-24 px-6 max-w-7xl mx-auto space-y-20"
          >
            {/* HERO */}
            <section className="text-center space-y-6">
              <h1 className="text-6xl font-extrabold">
                Fair Credit. <span className="text-emerald-400">Zero Interest.</span>
              </h1>
              <p className="text-slate-300 max-w-3xl mx-auto">
                A decentralized protocol providing ethical, interest‑free lending while helping users rebuild credit on‑chain.
              </p>
              <div className="flex justify-center gap-6 mt-8">
                <button
                  onClick={() => setPage("whitepaper")}
                  className="px-6 py-3 rounded-lg bg-white text-black font-semibold"
                >
                  Read White Paper
                </button>
                <button
                  onClick={() => setPage("apply")}
                  className="px-6 py-3 rounded-lg bg-emerald-500 font-semibold"
                >
                  Apply for Credit
                </button>
              </div>
            </section>

            {/* WHO WE ARE */}
            <section className="space-y-6 max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-emerald-400">Who We Are</h2>
              <p className="text-slate-300">
                Bad Credit Coin is a decentralized financial ecosystem designed to give people a second chance. We eliminate predatory interest models and replace them with transparent, community‑governed lending.
              </p>
            </section>

            {/* TOKENOMICS SUMMARY */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-emerald-400 mb-4">Tokenomics</h2>
                <p className="text-slate-300 mb-4">
                  Fixed supply with allocation focused on sustainable lending and long‑term protocol growth.
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>• Public Distribution – 50%</li>
                  <li>• Lending Pool – 25%</li>
                  <li>• Team – 10%</li>
                  <li>• Marketing – 10%</li>
                  <li>• Reserve – 5%</li>
                </ul>
              </div>
              <div className="max-w-sm mx-auto">
                <Doughnut data={allocationData} />
              </div>
            </section>

            {/* THREE CORE PILLARS */}
            <section className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">Interest‑Free Lending</h3>
                <p className="text-slate-300 mt-3">
                  Borrow without compounding debt or hidden fees.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">Credit Building</h3>
                <p className="text-slate-300 mt-3">
                  Repayment history is stored on‑chain to help rebuild trust.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">Global Expansion</h3>
                <p className="text-slate-300 mt-3">
                  Borderless access to ethical financial tools.
                </p>
              </div>
            </section>
          </motion.section>
        )}
        {/* MISSION */}
        {page === "mission" && (
          <motion.section className="py-24 px-6 max-w-6xl mx-auto space-y-10">
            <h1 className="text-5xl font-bold text-center text-emerald-400">
              Our Mission
            </h1>

            {[
              [
                "Zero-Interest Lending",
                "We eliminate interest entirely so borrowers know exactly what they owe from day one. No compounding debt, no traps, no exploitation.",
              ],
              [
                "Transparent Monthly Fees",
                "Clear monthly service fees replace hidden interest and penalties, restoring trust and fairness.",
              ],
              [
                "On-Chain Credit Records",
                "Every repayment builds a tamper-proof blockchain reputation, enabling higher credit access over time.",
              ],
              [
                "Global Financial Inclusion",
                "Designed to scale globally, bringing ethical finance to underserved populations worldwide.",
              ],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">{title}</h3>
                <p className="text-slate-300 mt-3">{desc}</p>
              </div>
            ))}
          </motion.section>
        )}

        {/* GOVERNANCE */}
        {page === "governance" && (
          <motion.section
            key="governance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-5xl mx-auto space-y-10"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">DAO Governance</h1>
            <p className="text-slate-300 text-center">
              Token holders vote on protocol upgrades, treasury usage, and global expansion decisions.
            </p>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold">Proposal #1: Increase Lending Pool</h3>
                <div className="flex gap-4 mt-4">
                  <button className="px-4 py-2 bg-emerald-500 rounded">Vote Yes</button>
                  <button className="px-4 py-2 bg-red-500 rounded">Vote No</button>
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold">Proposal #2: Expand to New Regions</h3>
                <div className="flex gap-4 mt-4">
                  <button className="px-4 py-2 bg-emerald-500 rounded">Vote Yes</button>
                  <button className="px-4 py-2 bg-red-500 rounded">Vote No</button>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* TOKENOMICS PAGE */}
        {page === "tokenomics" && (
          <motion.section
            key="tokenomics"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-6xl mx-auto space-y-10"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">Tokenomics</h1>
            <p className="text-slate-300 text-center max-w-4xl mx-auto">
              The BCC token powers governance, lending incentives, and long‑term sustainability.
            </p>
            <div className="max-w-md mx-auto">
              <Doughnut data={allocationData} />
            </div>
          </motion.section>
        )}

        {/* WHITE PAPER */}
        {page === "whitepaper" && (
          <motion.section
            key="whitepaper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-5xl mx-auto space-y-8"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">White Paper</h1>
            <p className="text-slate-300">
              This document outlines the protocol design, governance framework, and economic model.
            </p>
            <h3 className="text-xl font-bold text-emerald-400">Roadmap</h3>
            <ul className="space-y-4 text-slate-300">
              <li><strong>Phase 1:</strong> Protocol launch and early adoption</li>
              <li><strong>Phase 2:</strong> DAO governance activation</li>
              <li><strong>Phase 3:</strong> Global expansion</li>
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

        {/* APPLY */}
        {page === "apply" && (
          <motion.section
            key="apply"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl font-bold text-center text-emerald-400">Apply for Credit</h1>
            <form className="space-y-4">
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Full Name" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Email" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Country" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Wallet Address" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Requested Amount" />
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold">Submit</button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/10 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <p className="text-slate-500">© 2025 Bad Credit Coin</p>
      </footer>
    </div>
  );
}
