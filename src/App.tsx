import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Instagram, CheckCircle } from "lucide-react";

export default function App() {
  const [page, setPage] = useState("home");
  const [missionTab, setMissionTab] = useState("interest");
  const [submitted, setSubmitted] = useState(false);

  const NavLink = ({ label, p }: { label: string; p: string }) => (
    <button
      onClick={() => setPage(p)}
      className="text-sm font-medium hover:text-cyan-400 transition"
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-slate-950 to-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex gap-6">
            <NavLink label="Home" p="home" />
            <NavLink label="Mission" p="mission" />
            <NavLink label="Apply" p="apply" />
            <NavLink label="White Paper" p="whitepaper" />
          </div>
          <button className="border border-white/20 px-4 py-2 rounded">
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
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h1 className="text-6xl font-bold">
                Fair Credit.{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Zero Interest.
                </span>
              </h1>
              <p className="text-slate-300 text-lg">
                A blockchain-powered, ethical credit system designed to replace
                predatory lending with transparency and trust.
              </p>

              <div className="flex justify-center gap-4 pt-6">
                <button
                  onClick={() => setPage("whitepaper")}
                  className="bg-gradient-to-r from-cyan-400 to-violet-400 text-black px-8 py-3 rounded font-semibold"
                >
                  Read White Paper
                </button>
                <button
                  onClick={() => setPage("apply")}
                  className="border border-white/20 px-8 py-3 rounded"
                >
                  Apply for Credit
                </button>
              </div>
            </div>

            {/* MISSION CARD */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-10 text-center max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Mission Statement
              </h2>
              <p className="text-slate-300 text-lg mt-4">
                We eliminate interest-based debt by replacing it with ethical,
                transparent, blockchain-powered credit systems accessible to
                everyone.
              </p>
            </div>

            {/* WHAT WE DO */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Interest-Free Lending",
                "Credit Building",
                "Global Expansion",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl text-center"
                >
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    {item}
                  </h3>
                </div>
              ))}
            </div>

            {/* ROADMAP */}
            <div className="space-y-6">
              <h2 className="text-4xl text-center font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Roadmap
              </h2>
              <ul className="grid md:grid-cols-4 gap-6 text-slate-300 text-center">
                <li>Year 1: Personal Loans</li>
                <li>Year 2: Credit Cards</li>
                <li>Year 3: Mortgages</li>
                <li>Global Expansion</li>
              </ul>
            </div>

            {/* TOKENOMICS */}
            <div className="space-y-6">
              <h2 className="text-4xl text-center font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Tokenomics
              </h2>
              <ul className="grid md:grid-cols-2 gap-4 text-slate-300 text-center">
                <li>Total Supply: 10B</li>
                <li>50% Public</li>
                <li>25% Lending Pool</li>
                <li>10% Marketing</li>
                <li>10% Team</li>
                <li>5% Rewards</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-cyan-400 to-violet-400 text-black px-10 py-4 rounded text-lg font-semibold">
                Join the Waitlist
              </button>
            </div>
          </motion.section>
        )}

        {/* MISSION PAGE */}
        {page === "mission" && (
          <motion.section
            key="mission"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-5xl mx-auto space-y-10"
          >
            <h1 className="text-5xl text-center font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Our Mission
            </h1>

            <div className="flex justify-center gap-4 flex-wrap">
              {[
                ["interest", "Zero Interest"],
                ["credit", "Transparent Fees"],
                ["trust", "On-Chain Credit"],
                ["global", "Global Inclusion"],
              ].map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setMissionTab(k)}
                  className={`px-4 py-2 rounded ${
                    missionTab === k
                      ? "bg-gradient-to-r from-cyan-400 to-violet-400 text-black"
                      : "border border-white/20"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-slate-300 space-y-4">
              {missionTab === "interest" && (
                <>
                  <h3 className="text-2xl font-bold text-white">
                    Zero-Interest Lending Model
                  </h3>
                  <p>
                    We remove interest entirely. Borrowers know exactly what they
                    owe from day one — no compounding debt, no traps.
                  </p>
                </>
              )}

              {missionTab === "credit" && (
                <>
                  <h3 className="text-2xl font-bold text-white">
                    Monthly Fee Transparency
                  </h3>
                  <p>
                    A flat, disclosed service fee replaces hidden penalties and
                    interest escalation.
                  </p>
                </>
              )}

              {missionTab === "trust" && (
                <>
                  <h3 className="text-2xl font-bold text-white">
                    On-Chain Credit Records
                  </h3>
                  <p>
                    Repayment history is stored on-chain, allowing users to build
                    trust through action.
                  </p>
                </>
              )}

              {missionTab === "global" && (
                <>
                  <h3 className="text-2xl font-bold text-white">
                    Global Financial Inclusion
                  </h3>
                  <p>
                    We aim to provide ethical credit access worldwide, regardless
                    of geography or legacy credit scores.
                  </p>
                </>
              )}
            </div>
          </motion.section>
        )}

        {/* APPLY PAGE */}
        {page === "apply" && (
          <motion.section
            key="apply"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl text-center font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Apply for Credit
            </h1>

            {!submitted ? (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Full Name" required />
                <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Email" required />
                <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Country" required />
                <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Requested Amount" required />
                <button className="w-full bg-gradient-to-r from-cyan-400 to-violet-400 text-black py-3 rounded font-semibold">
                  Submit Application
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <CheckCircle className="mx-auto text-green-400" size={48} />
                <p>Application submitted successfully.</p>
              </div>
            )}
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
            <h1 className="text-4xl text-center font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              White Paper
            </h1>

            <p className="text-slate-300 text-lg">
              This document explains the philosophy, structure, and long-term
              vision of Bad Credit Coin.
            </p>

            <a
              href="/Bad-Credit-Coin-Whitepaper.pdf"
              download
              className="inline-block bg-gradient-to-r from-cyan-400 to-violet-400 text-black px-8 py-3 rounded font-semibold"
            >
              Download PDF
            </a>
          </motion.section>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-400">
        <div className="flex justify-center gap-6 mb-4">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <p>© 2025 Bad Credit Coin. Not financial advice.</p>
      </footer>
    </div>
  );
}
