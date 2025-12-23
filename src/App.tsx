import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Facebook, Twitter, Instagram } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

type Page = "home" | "mission" | "tokenomics" | "whitepaper" | "apply";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [wallet, setWallet] = useState<string | null>(null);

  /* =======================
     METAMASK CONNECTION
  ======================== */
  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert("MetaMask is not installed. Please install it first.");
      return;
    }

    try {
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      setWallet(accounts[0]);
    } catch (err) {
      console.error("Wallet connection rejected", err);
    }
  };

  useEffect(() => {
    const checkWallet = async () => {
      if ((window as any).ethereum) {
        const accounts = await (window as any).ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        }
      }
    };
    checkWallet();
  }, []);

  const Nav = ({ label, p }: { label: string; p: Page }) => (
    <button
      onClick={() => setPage(p)}
      className="hover:text-emerald-400 transition font-medium"
    >
      {label}
    </button>
  );

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

      <AnimatePresence mode="wait">
        {/* HOME — unchanged */}
        {page === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-7xl mx-auto"
          >
            {/* Your existing Home page content stays here */}
          </motion.section>
        )}

        {/* MISSION */}
        {page === "mission" && (
          <motion.section
            key="mission"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-6xl mx-auto space-y-10"
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
                  We empower people excluded from traditional banking by giving
                  access to ethical, blockchain-based credit.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">
                  Zero Interest Lending
                </h3>
                <p className="text-slate-300 mt-3">
                  No interest. No compounding debt. Just fair repayment.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">
                  On-Chain Trust
                </h3>
                <p className="text-slate-300 mt-3">
                  Transparent credit history stored securely on-chain.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">
                  Global Expansion
                </h3>
                <p className="text-slate-300 mt-3">
                  Borderless financial access powered by Web3.
                </p>
              </div>
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
            className="py-24 px-6 max-w-6xl mx-auto space-y-10"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">
              Tokenomics
            </h1>

            <p className="text-slate-300 max-w-4xl mx-auto text-center">
              Bad Credit Coin has a fixed supply designed to sustain a zero-
              interest lending ecosystem while funding growth and stability.
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
            <h1 className="text-5xl font-bold text-center text-emerald-400">
              White Paper
            </h1>

            <h3 className="text-xl font-bold text-emerald-400">Roadmap</h3>

            <ul className="space-y-4 text-slate-300">
              <li>
                <strong>Phase 1:</strong> Platform launch and early adopters
              </li>
              <li>
                <strong>Phase 2:</strong> DAO governance and credit scoring
              </li>
              <li>
                <strong>Phase 3:</strong> Global expansion and partnerships
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

        {/* APPLY */}
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
              <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Email" />
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
    </div>
  );
}
