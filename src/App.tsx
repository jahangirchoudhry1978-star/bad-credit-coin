import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Instagram, CheckCircle } from "lucide-react";

type Page =
  | "home"
  | "mission"
  | "whitepaper"
  | "apply"
  | "tokenomics";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [missionTab, setMissionTab] = useState<
    "interest" | "fee" | "trust" | "global"
  >("interest");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-slate-950 to-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-6 text-sm font-medium">
            {[
              ["Home", "home"],
              ["Mission", "mission"],
              ["Tokenomics", "tokenomics"],
              ["White Paper", "whitepaper"],
              ["Apply", "apply"],
            ].map(([label, key]) => (
              <button
                key={key}
                onClick={() => setPage(key as Page)}
                className="hover:text-cyan-300 transition"
              >
                {label}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 border border-white/20 rounded-lg text-sm">
            Connect Wallet
          </button>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <AnimatePresence mode="wait">
        {/* HOME */}
        {page === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-7xl mx-auto space-y-24"
          >
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h1 className="text-6xl font-bold">
                Fair Credit. <span className="text-cyan-400">Zero Interest.</span>
              </h1>
              <p className="text-slate-300 text-lg">
                Bad Credit Coin is a blockchain-powered, interest-free lending
                ecosystem built to restore fairness, transparency, and access.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button
                  onClick={() => setPage("whitepaper")}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-400 text-black font-semibold"
                >
                  Read White Paper
                </button>
                <button
                  onClick={() => setPage("apply")}
                  className="px-8 py-3 rounded-lg border border-white/30"
                >
                  Apply for Credit
                </button>
              </div>
            </div>

            {/* WHAT WE DO */}
            <div className="grid md:grid-cols-3 gap-10">
              {[
                "Interest-Free Lending",
                "Credit Building",
                "Global Expansion",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                >
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* MISSION */}
        {page === "mission" && (
          <motion.section
            key="mission"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-6xl mx-auto space-y-12"
          >
            <h1 className="text-5xl text-center font-bold text-cyan-400">
              Our Mission
            </h1>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                ["interest", "Zero Interest"],
                ["fee", "Monthly Fee"],
                ["trust", "On-Chain Trust"],
                ["global", "Global Inclusion"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() =>
                    setMissionTab(key as "interest" | "fee" | "trust" | "global")
                  }
                  className={`px-4 py-2 rounded-lg ${
                    missionTab === key
                      ? "bg-cyan-500 text-black"
                      : "border border-white/20"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-4 text-slate-300">
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

              {missionTab === "fee" && (
                <>
                  <h3 className="text-2xl font-bold text-white">
                    Monthly Service Fee Transparency
                  </h3>
                  <p>
                    A clearly disclosed service fee replaces hidden interest,
                    penalties, and manipulation.
                  </p>
                </>
              )}

              {missionTab === "trust" && (
                <>
                  <h3 className="text-2xl font-bold text-white">
                    Credit Rebuilding via Blockchain
                  </h3>
                  <p>
                    Every successful repayment is recorded on-chain, creating a
                    tamper-proof reputation.
                  </p>
                </>
              )}

              {missionTab === "global" && (
                <>
                  <h3 className="text-2xl font-bold text-white">
                    Global Financial Inclusion
                  </h3>
                  <p>
                    Ethical lending without borders — serving the unbanked
                    worldwide.
                  </p>
                </>
              )}
            </div>
          </motion.section>
        )}

        {/* TOKENOMICS */}
        {page === "tokenomics" && (
          <motion.section
            key="tokenomics"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-5xl mx-auto space-y-10"
          >
            <h1 className="text-5xl text-center font-bold text-cyan-400">
              Tokenomics
            </h1>

            <ul className="grid md:grid-cols-2 gap-6 text-slate-300 text-lg">
              <li>Total Supply: 10 Billion</li>
              <li>50% Public Allocation</li>
              <li>25% Lending Liquidity</li>
              <li>10% Marketing</li>
              <li>10% Team (Vested)</li>
              <li>5% Incentives</li>
            </ul>
          </motion.section>
        )}

        {/* WHITE PAPER */}
        {page === "whitepaper" && (
          <motion.section
            key="whitepaper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-5xl mx-auto space-y-6"
          >
            <h1 className="text-4xl font-bold text-cyan-400">
              White Paper
            </h1>
            <p className="text-slate-300">
              Read the complete protocol design, economic model, and governance
              framework directly on this site or download the full PDF.
            </p>

            <a
              href="/Bad-Credit-Coin-Whitepaper.pdf"
              download
              className="inline-block px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold"
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
            className="py-24 px-6 max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl font-bold text-center text-cyan-400">
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
                {["Full Name", "Email", "Country", "Requested Amount"].map(
                  (f) => (
                    <input
                      key={f}
                      required
                      placeholder={f}
                      className="w-full p-3 rounded bg-black/40 border border-white/10"
                    />
                  )
                )}

                <button className="w-full py-3 bg-gradient-to-r from-cyan-400 to-violet-400 text-black rounded-lg font-semibold">
                  Submit Application
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <CheckCircle size={48} className="mx-auto text-green-400" />
                <p>Application submitted successfully.</p>
              </div>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-400 space-y-4">
        <div className="flex justify-center gap-6">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <p>© 2025 Bad Credit Coin. Not financial advice.</p>
      </footer>
    </div>
  );
}
