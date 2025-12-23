import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Facebook, Twitter, Instagram } from "lucide-react";

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
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
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
            <div className="text-center space-y-6">
              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Fair Credit. Zero Interest.
              </h1>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Bad Credit Coin is building a new financial system where access
                to credit is fair, transparent, and interest-free — designed for
                people excluded by traditional banks.
              </p>
              <div className="flex justify-center gap-6 mt-8">
                <button
                  onClick={() => setPage("whitepaper")}
                  className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20"
                >
                  Read White Paper
                </button>
                <button
                  onClick={() => setPage("apply")}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
                >
                  Apply for Credit
                </button>
              </div>
            </div>

            {/* WHO WE ARE */}
            <div className="max-w-5xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-emerald-400">
                Who We Are
              </h2>
              <p className="text-slate-300">
                Bad Credit Coin is a decentralized lending protocol focused on
                ethical finance. We eliminate interest, remove predatory lending
                practices, and allow users to rebuild trust through transparent
                on-chain repayment history.
              </p>
            </div>

            {/* FEATURES */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                ["Interest-Free Lending", "No compounding debt. Ever."],
                ["Credit Building", "On-chain repayment reputation."],
                ["Global Expansion", "Borderless financial inclusion."],
              ].map(([title, desc]) => (
                <div key={title} className="bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-emerald-400">
                    {title}
                  </h3>
                  <p className="text-slate-300 mt-2">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold">
                Join the Waitlist
              </button>
            </div>
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

        {/* TOKENOMICS */}
        {page === "tokenomics" && (
          <motion.section className="py-24 px-6 max-w-6xl mx-auto space-y-10">
            <h1 className="text-5xl font-bold text-center text-emerald-400">
              Tokenomics
            </h1>
            <p className="text-slate-300 max-w-4xl mx-auto text-center">
              The Bad Credit Coin token supply is fixed and designed to support
              sustainable lending, platform growth, and long-term ecosystem
              stability.
            </p>
            <div className="max-w-md mx-auto">
              <Doughnut data={tokenData} />
            </div>
          </motion.section>
        )}

        {/* WHITE PAPER */}
        {page === "whitepaper" && (
          <motion.section className="py-24 px-6 max-w-5xl mx-auto space-y-8">
            <h1 className="text-5xl font-bold text-center text-emerald-400">
              White Paper
            </h1>
            <p className="text-slate-300">
              This white paper outlines the protocol design, governance model,
              lending mechanics, and long-term roadmap for Bad Credit Coin.
            </p>
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
          <motion.section className="py-24 px-6 max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-center text-emerald-400">
              Apply for Credit
            </h1>
            <form className="space-y-4">
              {[
                "Full Name",
                "Email",
                "Country",
                "Wallet Address",
                "Requested Amount",
              ].map((p) => (
                <input
                  key={p}
                  placeholder={p}
                  className="w-full p-3 rounded bg-black/40 border border-white/10"
                />
              ))}
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold">
                Submit Application
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-center space-y-4">
        <div className="flex justify-center gap-6">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <p className="text-slate-400 text-sm">
          © 2025 Bad Credit Coin. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
