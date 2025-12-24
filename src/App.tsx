import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Line, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function App() {
  const [page, setPage] = useState<
    "home" | "mission" | "tokenomics" | "whitepaper" | "apply"
  >("home");

  const [wallet, setWallet] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ((window as any).ethereum?.selectedAddress) {
      setWallet((window as any).ethereum.selectedAddress);
    }
  }, []);

  const connectWallet = async () => {
    try {
      if (!(window as any).ethereum) {
        setError("MetaMask is not installed");
        return;
      }
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      setWallet(accounts[0]);
      setError(null);
    } catch {
      setError("Wallet connection rejected");
    }
  };

  const Nav = ({ label, p }: { label: string; p: typeof page }) => (
    <button
      onClick={() => setPage(p)}
      className="hover:text-emerald-400 transition font-medium"
    >
      {label}
    </button>
  );

  const tokenomicsData = {
    labels: ["Public Sale", "Lending Pool", "Team", "Marketing", "Reserve"],
    datasets: [
      {
        data: [40, 30, 10, 10, 10],
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
            <Nav label="Apply" p="apply" />
          </nav>
          <button
            onClick={connectWallet}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
          >
            {wallet
              ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
              : "Connect Wallet"}
          </button>
        </div>
      </header>

      {error && (
        <div className="text-center text-red-400 mt-4 text-sm">{error}</div>
      )}

      <AnimatePresence mode="wait">
        {/* HOME PAGE (UNCHANGED, FULL CONTENT) */}
        {page === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-7xl mx-auto space-y-20"
          >
            <div className="text-center space-y-6">
              <h1 className="text-6xl font-extrabold">
                Fair Credit. <span className="text-emerald-400">Zero Interest.</span>
              </h1>
              <p className="max-w-3xl mx-auto text-slate-300 text-lg">
                Bad Credit Coin is building a decentralized, ethical financial system
                focused on interest-free lending, transparent credit building, and
                global financial inclusion.
              </p>
              <div className="flex justify-center gap-6 mt-8">
                <button
                  onClick={() => setPage("whitepaper")}
                  className="px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20"
                >
                  Read White Paper
                </button>
                <button
                  onClick={() => setPage("apply")}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
                >
                  Apply for Credit
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">Interest-Free Lending</h3>
                <p className="text-slate-300 mt-3">
                  Zero-interest loans backed by community governance and transparent
                  smart contracts.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">Credit Building</h3>
                <p className="text-slate-300 mt-3">
                  Build a verifiable on-chain credit history without predatory systems.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">Global Expansion</h3>
                <p className="text-slate-300 mt-3">
                  Designed for underserved communities worldwide.
                </p>
              </div>
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
            className="py-24 px-6 max-w-6xl mx-auto space-y-10"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">Our Mission</h1>
            <p className="text-slate-300 text-center max-w-4xl mx-auto">
              We aim to eliminate exploitative lending by replacing interest-based
              systems with ethical, transparent, and community-governed finance.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">Financial Inclusion</h3>
                <p className="text-slate-300 mt-3">
                  Millions are excluded from banking due to outdated credit models.
                  We provide access without discrimination.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">Zero Interest</h3>
                <p className="text-slate-300 mt-3">
                  Borrowers repay only what they borrow—no compounding debt.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">On-Chain Trust</h3>
                <p className="text-slate-300 mt-3">
                  Every repayment and credit event is transparently recorded on-chain.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">Global Reach</h3>
                <p className="text-slate-300 mt-3">
                  Borderless finance for communities traditionally left behind.
                </p>
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
            className="py-24 px-6 max-w-6xl mx-auto space-y-12"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">Tokenomics</h1>
            <p className="text-slate-300 max-w-4xl mx-auto text-center">
              The Bad Credit Coin token is designed to sustain zero-interest lending,
              incentivize repayment, and empower decentralized governance.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 text-slate-300">
                <p>
                  A fixed supply ensures long-term sustainability. Allocation prioritizes
                  lending liquidity while maintaining ecosystem growth.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Public Sale ensures decentralization</li>
                  <li>Lending Pool fuels interest-free loans</li>
                  <li>Team allocation is time-locked</li>
                  <li>Marketing supports adoption</li>
                  <li>Reserve ensures protocol stability</li>
                </ul>
              </div>
              <div className="max-w-md mx-auto">
                <Doughnut data={tokenomicsData} />
              </div>
            </div>
          </motion.section>
        )}

        {/* WHITE PAPER PAGE */}
        {page === "whitepaper" && (
          <motion.section
            key="whitepaper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-5xl mx-auto space-y-10"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">White Paper</h1>
            <p className="text-slate-300">
              This white paper outlines the philosophy, technical design, and roadmap
              for building a fair, interest-free financial ecosystem.
            </p>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-emerald-400">Phase 1: Foundation</h3>
              <p className="text-slate-300">
                Token launch, lending pool deployment, and early adopter onboarding.
              </p>
              <h3 className="text-xl font-bold text-emerald-400">Phase 2: Governance</h3>
              <p className="text-slate-300">
                DAO launch, community voting, and credit scoring refinement.
              </p>
              <h3 className="text-xl font-bold text-emerald-400">Phase 3: Expansion</h3>
              <p className="text-slate-300">
                Multi-chain support, global partnerships, and scaling.
              </p>
            </div>
            <a
              href="/Bad-Credit-Coin-Whitepaper.pdf"
              download
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
            >
              Download Full PDF
            </a>
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
            <h1 className="text-4xl font-bold text-center text-emerald-400">Apply for Credit</h1>
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

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 mt-20">
        <div className="flex justify-center gap-6 text-slate-400">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </footer>
    </div>
  );
}

