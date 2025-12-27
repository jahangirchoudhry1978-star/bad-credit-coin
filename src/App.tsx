/* =======================
   MetaMask Type Support
======================= */
declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      request?: (args: { method: string; params?: any[] }) => Promise<any>;
      on?: (event: string, callback: (...args: any[]) => void) => void;
      removeListener?: (event: string, callback: (...args: any[]) => void) => void;
    };
  }
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Menu, X } from "lucide-react";
import { Send, Instagram, Twitter } from "lucide-react";


/* =======================
   APP
======================= */
export default function App() {
  const [page, setPage] = useState<
    "home" | "mission" | "tokenomics" | "whitepaper" | "apply" | "governance"
  >("home");

  const [wallet, setWallet] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* =======================
     METAMASK
  ======================= */
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed");
      return;
    }
    if (!window.ethereum || !window.ethereum.request) {
  alert("MetaMask is not installed");
  return;
}

const accounts = await window.ethereum.request({
  method: "eth_requestAccounts",
});

    setWallet(accounts[0]);
  };

  useEffect(() => {
    if (!window.ethereum) return;
    const handler = (accounts: string[]) =>
      setWallet(accounts[0] ?? null);
    window.ethereum.on?.("accountsChanged", handler);
    return () => {
      window.ethereum?.removeListener?.("accountsChanged", handler);
    };
  }, []);

  const Nav = ({ label, p }: { label: string; p: typeof page }) => (
    <button
      onClick={() => {
        setPage(p);
        setMenuOpen(false);
      }}
      className="hover:text-emerald-400 transition"
    >
      {label}
    </button>
  );

  /* =======================
     TOKENOMICS DATA
  ======================= */
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
      {/* =======================
          HEADER
      ======================= */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO + NAME */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Bad Credit Coin Logo"
              className="h-9 w-9 object-contain"
            />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Bad Credit Coin
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm">
            <Nav label="Home" p="home" />
            <Nav label="Mission" p="mission" />
            <Nav label="Tokenomics" p="tokenomics" />
            <Nav label="White Paper" p="whitepaper" />
            <Nav label="Governance" p="governance" />
            <Nav label="Apply" p="apply" />
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <button
              onClick={connectWallet}
              className="px-4 py-2 rounded bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
            >
              {wallet ? `${wallet.slice(0, 6)}...` : "Connect Wallet"}
            </button>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
            <Nav label="Home" p="home" />
            <Nav label="Mission" p="mission" />
            <Nav label="Tokenomics" p="tokenomics" />
            <Nav label="White Paper" p="whitepaper" />
            <Nav label="Governance" p="governance" />
            <Nav label="Apply" p="apply" />
          </div>
        )}
      </header>

      {/* =======================
          PAGES
      ======================= */}
      <AnimatePresence mode="wait">
        {page === "home" && (
          <motion.section className="py-24 px-6 max-w-6xl mx-auto space-y-10">
            <h1 className="text-5xl font-bold">
              Fair Credit. Zero Interest.
            </h1>
            <p className="text-gray-300 max-w-3xl">
              Bad Credit Coin is building a decentralized, ethical financial
              system that enables access to credit without interest,
              exploitation, or discrimination.
            </p>
          </motion.section>
        )}

        {page === "mission" && (
          <motion.section className="py-24 px-6 max-w-6xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-emerald-400">Our Mission</h2>
            <p>Financial inclusion, zero-interest lending, trust, and global reach.</p>
          </motion.section>
        )}

        {page === "tokenomics" && (
          <motion.section className="py-24 px-6 max-w-6xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-emerald-400">Tokenomics</h2>
            <p className="max-w-4xl">
              Fixed supply designed to support sustainable zero-interest lending.
            </p>
            <div className="max-w-md mx-auto">
              <Doughnut data={tokenData} />
            </div>
          </motion.section>
        )}

        {page === "whitepaper" && (
          <motion.section className="py-24 px-6 max-w-5xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-emerald-400">White Paper</h2>
            <p>Protocol design, roadmap, governance, and economics.</p>
            <a
              href="/Bad-Credit-Coin-Whitepaper.pdf"
              download
              className="px-6 py-3 bg-emerald-400 text-black rounded font-semibold"
            >
              Download PDF
            </a>
          </motion.section>
        )}

        {page === "governance" && (
          <motion.section className="py-24 px-6 max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-emerald-400">
              DAO Governance
            </h2>
            <div className="flex gap-4">
              <button className="px-5 py-2 bg-emerald-400 text-black rounded">
                Vote YES
              </button>
              <button className="px-5 py-2 bg-red-500 text-white rounded">
                Vote NO
              </button>
            </div>
          </motion.section>
        )}

        {page === "apply" && (
          <motion.section className="py-24 px-6 max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl font-bold text-emerald-400">
              Apply for Credit
            </h2>
            <input className="w-full p-3 bg-black/40 border" placeholder="Full Name" />
            <input className="w-full p-3 bg-black/40 border" placeholder="Email" />
            <input className="w-full p-3 bg-black/40 border" placeholder="Country" />
            <input className="w-full p-3 bg-black/40 border" placeholder="Wallet Address" />
            <input className="w-full p-3 bg-black/40 border" placeholder="Requested Amount" />
          </motion.section>
        )}
      </AnimatePresence>

      {/* =======================
          FOOTER
      ======================= */}
      <footer className="border-t border-white/10 py-8 text-center">
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://t.me/Badcreditcoin" target="_blank">
            <Send />
          </a>
          <a href="https://www.instagram.com/badcreditcoin" target="_blank">
            <Instagram />
          </a>
          <a href="https://x.com/Badcreditcoin" target="_blank">
            <Twitter />
          </a>
        </div>
      </footer>
    </div>
  );
}

