import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Facebook, Twitter, Instagram } from "lucide-react";

type Page = "home" | "mission" | "tokenomics" | "whitepaper" | "apply";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [wallet, setWallet] = useState<string>("");

  /* ---------------- METAMASK ---------------- */
  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert("MetaMask is not installed");
      return;
    }
    try {
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      setWallet(accounts[0]);
    } catch {
      alert("Wallet connection failed");
    }
  };

  /* ---------------- TOKENOMICS DATA ---------------- */
  const tokenData = {
    labels: ["Public", "Lending Pool", "Team", "Marketing", "Reserve"],
    datasets: [
      {
        data: [50, 25, 10, 10, 5],
        backgroundColor: [
          "#22c55e",
          "#06b6d4",
          "#3b82f6",
          "#a855f7",
          "#facc15",
        ],
        borderWidth: 0,
      },
    ],
  };

  const Nav = ({ label, to }: { label: string; to: Page }) => (
    <button
      onClick={() => setPage(to)}
      className="hover:text-emerald-400 transition"
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-black to-black text-white">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Bad Credit Coin
          </div>

          <nav className="flex gap-8 text-sm">
            <Nav label="Home" to="home" />
            <Nav label="Mission" to="mission" />
            <Nav label="Tokenomics" to="tokenomics" />
            <Nav label="White Paper" to="whitepaper" />
            <Nav label="Apply" to="apply" />
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
        {/* ================= HOME ================= */}
        {page === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-7xl mx-auto space-y-20"
          >
            <div className="text-center space-y-6">
              <h1 className="text-6xl font-extrabold">
                Fair Credit. <span className="text-emerald-400">Zero Interest.</span>
              </h1>
              <p className="text-gray-300 max-w-3xl mx-auto">
                A decentralized protocol designed to give people with poor or no credit access to ethical,
                zero-interest financial tools.
              </p>

              <div className="flex justify-center gap-6 mt-8">
                <button
                  onClick={() => setPage("whitepaper")}
                  className="px-6 py-3 rounded-lg bg-emerald-500 text-black font-semibold"
                >
                  Read White Paper
                </button>
                <button
                  onClick={() => setPage("apply")}
                  className="px-6 py-3 rounded-lg border border-emerald-400 font-semibold"
                >
                  Apply for Credit
                </button>
              </div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center">Who We Are</h2>
              <p className="text-gray-300 text-center">
                Bad Credit Coin is a blockchain-powered financial ecosystem focused on rebuilding trust,
                eliminating predatory interest, and enabling global financial inclusion.
              </p>
            </div>
          </motion.section>
        )}

        {/* ================= MISSION ================= */}
        {page === "mission" && (
          <motion.section key="mission" className="py-24 px-6 max-w-6xl mx-auto space-y-10">
            <h1 className="text-5xl font-bold text-center text-emerald-400">Our Mission</h1>

            {[
              ["Financial Inclusion", "Access to fair credit regardless of past mistakes."],
              ["Zero Interest Lending", "Loans without interest, penalties, or compounding debt."],
              ["On-Chain Trust", "Transparent repayment history stored on blockchain."],
              ["Global Expansion", "Borderless ethical finance for everyone."],
            ].map(([title, text]) => (
              <div key={title} className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">{title}</h3>
                <p className="text-gray-300 mt-3">{text}</p>
              </div>
            ))}
          </motion.section>
        )}

        {/* ================= TOKENOMICS ================= */}
        {page === "tokenomics" && (
          <motion.section key="tokenomics" className="py-24 px-6 max-w-6xl mx-auto space-y-12">
            <h1 className="text-5xl font-bold text-center text-emerald-400">Tokenomics</h1>

            <p className="text-gray-300 text-center max-w-4xl mx-auto">
              Bad Credit Coin has a fixed supply designed to sustain zero-interest lending,
              community governance, and long-term protocol stability.
            </p>

            <div className="max-w-md mx-auto">
              <Doughnut data={tokenData} />
            </div>
          </motion.section>
        )}

        {/* ================= WHITE PAPER ================= */}
        {page === "whitepaper" && (
          <motion.section key="whitepaper" className="py-24 px-6 max-w-5xl mx-auto space-y-8">
            <h1 className="text-5xl font-bold text-center text-emerald-400">White Paper</h1>

            <p className="text-gray-300">
              The Bad Credit Coin protocol introduces a decentralized credit system built on transparency,
              trust, and fairness.
            </p>

            <h3 className="text-xl font-bold text-emerald-400">Roadmap</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Phase 1:</strong> Protocol launch & early adoption</li>
              <li><strong>Phase 2:</strong> DAO governance & staking</li>
              <li><strong>Phase 3:</strong> Global expansion & integrations</li>
            </ul>

            <a
              href="/Bad-Credit-Coin-Whitepaper.pdf"
              download
              className="inline-block px-6 py-3 rounded-lg bg-emerald-500 text-black font-semibold"
            >
              Download PDF
            </a>
          </motion.section>
        )}

        {/* ================= APPLY ================= */}
        {page === "apply" && (
          <motion.section key="apply" className="py-24 px-6 max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold text-center text-emerald-400">Apply for Credit</h1>

            <form className="space-y-4">
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Full Name" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Email" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Country" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Wallet Address" />
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Requested Amount" />
              <button className="w-full py-3 rounded-lg bg-emerald-500 text-black font-bold">
                Submit Application
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center border-t border-white/10">
        <div className="flex justify-center gap-6">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <p className="text-gray-500 mt-4">© 2025 Bad Credit Coin</p>
      </footer>
    </div>
  );
}