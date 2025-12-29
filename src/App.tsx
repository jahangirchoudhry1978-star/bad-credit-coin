import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Twitter, Instagram } from "lucide-react";

// --------------------
// MetaMask typing (TypeScript safe)
// --------------------
declare global {
  interface Window {
    ethereum?: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on?: (event: string, callback: (...args: any[]) => void) => void;
      removeListener?: (event: string, callback: (...args: any[]) => void) => void;
    };
  }
}

// --------------------
// Types
// --------------------
type Page = "home" | "mission" | "tokenomics" | "whitepaper" | "governance" | "apply";

// --------------------
// Main App
// --------------------
export default function App() {
const [walletAddress, setWalletAddress] = useState<string | null>(null);

const [menuOpen, setMenuOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
const [page, setPage] = useState<Page>("home");
 


  // --------------------
  // MetaMask connect
  // --------------------
const connectWallet = async () => {
  try {
    if (!window.ethereum) {
      alert("MetaMask not installed");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setWalletAddress(accounts[0]);
  } catch (error) {
    console.error("Wallet connection failed:", error);
  }
};

    


useEffect(() => {
  const eth = window.ethereum;
  if (!eth || !eth.on) return;

  const handler = (accounts: string[]) => {
  setWalletAddress(accounts[0] ?? null);

  };

  eth.on("accountsChanged", handler);

  return () => {
    eth.removeListener?.("accountsChanged", handler);
  };
}, []);


  const Nav = ({ label, p }: { label: string; p: Page }) => (
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

  // --------------------
  // Tokenomics Chart
  // --------------------
  const allocationData = {
    labels: ["Public", "Lending Pool", "Team", "Marketing", "Reserve"],
    datasets: [
      {
        data: [50, 25, 10, 10, 5],
        backgroundColor: ["#34d399", "#22d3ee", "#60a5fa", "#a78bfa", "#fbbf24"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-black to-black text-white">
      {/* HEADER */}
          
      <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Bad Credit Coin"
              className="h-9 w-9 object-contain"
            />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Bad Credit Coin
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">

  <button
    onClick={() => setPage("home")}
    className="hover:text-emerald-400"
  >
    Home
  </button>

  <button
    onClick={() => setPage("mission")}
    className="hover:text-emerald-400"
  >
    Mission
  </button>

  <button
    onClick={() => setPage("tokenomics")}
    className="hover:text-emerald-400"
  >
    Tokenomics
  </button>

  {/* DROPDOWN */}
  <div className="relative">
    <button
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="hover:text-emerald-400 flex items-center gap-1"
    >
      More ▾
    </button>

    {dropdownOpen && (
      <div className="absolute right-0 mt-2 w-44 rounded-lg bg-black/90 border border-white/10 shadow-lg">
        <button
          onClick={() => {
            setPage("whitepaper");
            setDropdownOpen(false);
          }}
          className="block w-full text-left px-4 py-2 hover:bg-white/10"
        >
          White Paper
        </button>

        <button
          onClick={() => {
            setPage("governance");
            setDropdownOpen(false);
          }}
          className="block w-full text-left px-4 py-2 hover:bg-white/10"
        >
          Governance
        </button>

        <button
          onClick={() => {
            setPage("apply");
            setDropdownOpen(false);
          }}
          className="block w-full text-left px-4 py-2 hover:bg-white/10"
        >
          Apply
        </button>
      </div>
    )}
  </div>
</nav>
          {/* Right */}
          <div className="flex items-center gap-4">
            <button
  onClick={connectWallet}
  className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold"
>
  {walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : "Connect Wallet"}
</button>
<button
  className="md:hidden text-white text-2xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
             <button
               className="md:hidden text-2xl"
               onClick={() => setMenuOpen(!menuOpen)}
               >
              ☰
             </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/90 px-6 py-4 space-y-3">
            <Nav label="Home" p="home" />
            <Nav label="Mission" p="mission" />
            <Nav label="Tokenomics" p="tokenomics" />
            <Nav label="White Paper" p="whitepaper" />
            <Nav label="Governance" p="governance" />
            <Nav label="Apply" p="apply" />
          </div>
        )}

      </header>
      
      {menuOpen && (
  <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 space-y-4">
    {["home", "mission", "tokenomics", "whitepaper", "governance", "apply"].map(
      (p) => (
        <button
          key={p}
          onClick={() => {
            setPage(p as any);
            setMenuOpen(false);
          }}
          className="block w-full text-left text-white hover:text-emerald-400"
        >
          {p.charAt(0).toUpperCase() + p.slice(1)}
        </button>
      )
    )}
  </div>
)}

             {menuOpen && (
  <div className="md:hidden bg-black/95 border-b border-white/10 px-6 py-4 space-y-4">
    <button onClick={() => setPage("home")} className="block w-full text-left">
      Home
    </button>

    <button onClick={() => setPage("mission")} className="block w-full text-left">
      Mission
    </button>

    <button onClick={() => setPage("tokenomics")} className="block w-full text-left">
      Tokenomics
    </button>

    <button onClick={() => setPage("whitepaper")} className="block w-full text-left">
      White Paper
    </button>

    <button onClick={() => setPage("governance")} className="block w-full text-left">
      Governance
    </button>

    <button onClick={() => setPage("apply")} className="block w-full text-left">
      Apply
    </button>
  </div>
)}

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
             Bad Credit Coin is built on the principle that interest-based lending disproportionately harms individuals with limited financial access. 
             Traditional lenders profit from compounding interest, trapping borrowers in cycles of debt that are difficult to escape.
              </p>
            </section>

            {/* Invest and Earn */}
            <section className="space-y-6 max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-emerald-400">Invest and Earn</h2>
              <p className="text-slate-300">
             BCC will intoduce Invest and Earn within 6 months after Launch to Join our growth trajectory with a flexible investment tailored to your capacity, earning up to 50% profit sharing . 
             This partnership bridges the gap between capital and consistent, scalable monthly dividends.
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
                  Our zero-interest lending model removes interest entirely. 
                  Instead of charging borrowers more money simply for the passage of time, we provide credit where repayments are predictable, fair, and transparent. This approach ensures borrowers know exactly what they owe from day one, empowering them to repay without fear of escalating debt.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">Credit Building</h3>
                <p className="text-slate-300 mt-3">
                  Repayment history is stored on‑chain to help rebuild trust.
                  Millions of people are locked out of financial systems due to damaged or nonexistent credit histories.
                  Bad Credit Coin introduces a blockchain-based reputation and repayment record that allows users to rebuild trust over time.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-emerald-400">Global Expansion</h3>
                <p className="text-slate-300 mt-3">
                  Borderless access to ethical financial tools. Bad Credit Coin is designed to scale beyond borders.
                  Traditional financial systems exclude billions of people worldwide due to geography, documentation barriers, or lack of credit history.
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
                "We eliminate interest entirely so borrowers know exactly what they owe from day one. No compounding debt, no traps, no exploitation.This model aligns incentives between the platform and the borrower — success is measured by repayment and financial recovery, not prolonged indebtedness.",
              ],
              [
                "Transparent Monthly Fees",
                "Clear monthly service fees replace hidden interest and penalties, restoring trust and fairness.This transparency restores trust in lending and ensures users are treated as participants in a system — not products of it. Our model is designed so that clarity replaces confusion, and fairness replaces predatory practices",
              ],
              [
                "On-Chain Credit Records",
                "Every repayment builds a tamper-proof blockchain reputation, enabling higher credit access over time.This system allows individuals to prove creditworthiness through action, not legacy scores, offering a second chance to those excluded by traditional systems",
              ],
              [
                "Global Financial Inclusion",
                "Designed to scale globally, bringing ethical finance to underserved populations worldwide.By leveraging blockchain technology, we aim to bring ethical, interest-free financial tools to underserved populations worldwide, enabling economic participation regardless of location or background",
              ],
              [
                "Investment Options",
                "Invest any amount and Earn up to 50% of monthly fee,Partner with us and receive half of all recurring user subscription revenue — no minimum investment required, transparent returns monthly, (Available after 6 Months) ",             ],
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
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold">Proposal #3: Increase/Decrease Monthly Fee</h3>
                <div className="flex gap-4 mt-4">
                  <button className="px-4 py-2 bg-emerald-500 rounded">Vote Increase</button>
                  <button className="px-4 py-2 bg-red-500 rounded">Vote Decrease</button>
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
             This transparency restores trust in lending and ensures users are treated as participants in a system — not products of it. 
             Our model is designed so that clarity replaces confusion, and fairness replaces predatory practices.         
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
              BCC aims to redefine Global lending by proving that credit does not need Interest to be profitable or Sustainable.
              This document outlines the Vision for the Future,protocol design, governance framework, and economic model.
            </p>
            <h3 className="text-xl font-bold text-emerald-400">Roadmap</h3>
            <ul className="space-y-4 text-slate-300">
              <li><strong>Phase 1:</strong> Protocol launch and early adoption</li>
              <li><strong>Phase 2:</strong> Personal Lending</li>
              <li><strong>Phase 3:</strong> Payday Loan Products</li>
               <li><strong>Phase 4:</strong> Credit Card Lending </li>
              <li><strong>Phase 5:</strong> DAO governance activation</li>
              <li><strong>Phase 6:</strong> Global expansion</li>
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
      <footer className="border-t border-white/10 py-8 text-center">
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://t.me/Badcreditcoin" target="_blank">Telegram</a>
          <a href="https://www.instagram.com/badcreditcoin" target="_blank"><Instagram /></a>
          <a href="https://x.com/Badcreditcoin" target="_blank"><Twitter /></a>
        </div>
      </footer>
    </div>
  );
}
