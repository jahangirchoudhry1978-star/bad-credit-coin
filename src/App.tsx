import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import Presale from "./Presale";


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


// Main App
// --------------------
export default function App() {
const [walletAddress, setWalletAddress] = useState<string | null>(null);

const [menuOpen, setMenuOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
const [page, setPage] = useState<
  | "home"
  | "mission"
  | "tokenomics"
  | "whitepaper"
  | "governance"
  | "apply"
  | "presale"
>("home");

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
  } catch (err) {
    console.error("Wallet connection error:", err);
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
         <button
          onClick={() => setPage("presale")}
          className="block w-full text-left px-4 py-2 hover:bg-white/10"
          >
          Presale
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

          </div>
        </div>

  {/* ================= MOBILE DROPDOWN MENU ================= */}
  {menuOpen && (
    <nav className="md:hidden bg-black/90 px-6 py-4 space-y-3 border-t border-white/10">

      <button
        onClick={() => {
          setPage("home");
          setMenuOpen(false);
        }}
        className="block w-full text-left hover:text-emerald-400"
      >
        Home
      </button>

      <button
        onClick={() => {
          setPage("mission");
          setMenuOpen(false);
        }}
        className="block w-full text-left hover:text-emerald-400"
      >
        Mission
      </button>

      <button
        onClick={() => {
          setPage("tokenomics");
          setMenuOpen(false);
        }}
        className="block w-full text-left hover:text-emerald-400"
      >
        Tokenomics
      </button>

      <button
        onClick={() => {
          setPage("whitepaper");
          setMenuOpen(false);
        }}
        className="block w-full text-left hover:text-emerald-400"
      >
        White Paper
      </button>

      <button
        onClick={() => {
          setPage("governance");
          setMenuOpen(false);
        }}
        className="block w-full text-left hover:text-emerald-400"
      >
        Governance
      </button>

      <button
        onClick={() => {
          setPage("apply");
          setMenuOpen(false);
        }}
        className="block w-full text-left hover:text-emerald-400"
      >
        Apply
      </button>
      <button
       onClick={() => {
       setPage("presale");
       setMenuOpen(false);
       }}
       className="block w-full text-left hover:text-emerald-400"
        >
       Presale
       </button>

    </nav>
  )}

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
{/* Buy $BCC Button */}
<div className="flex justify-center mt-8">
  <button
    onClick={() => setPage("presale")}
    className="
      px-8 py-4
      rounded-xl
      text-lg
      font-bold
      bg-gradient-to-r from-emerald-400 to-cyan-400
      text-black
      hover:scale-105
      transition-transform
      shadow-lg
    "
  >
    Buy $BCC
  </button>
</div>
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
            
             {/* Presale Smart Contract */}
            <section className="space-y-6 max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-emerald-400">Presale Smart Contract</h2>
              <p className="text-slate-300">
             The $BCC presale smart contract is being prepared for third-party security auditing ahead of launch.
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
                "Invest any amount and Earn up to 50% of monthly fee,Partner with us and receive half of all recurring user subscription revenue — no minimum investment required, transparent returns monthly, (Available after 6 Months) ",
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
            <div>
          <h1>1.0 Revenue & Profit Sharing Model</h1>
           <p>The $BCC ecosystem operates on a <b>Net Profit Share</b> model. This ensures the platform always has the capital to grow while rewarding our stakeholders with a significant 50% share of the remaining surplus.</p>

          <h2>1.1 Monthly Fee Allocation</h2>
          <p>Every dollar generated from user fees is split to ensure sustainability: 5% for Marketing, 5% for Platform Maintenance, and 5-10% for Team and ongoing incentives. This leaves a <b>Net Profit Pool of 80-85%</b>.</p>

          <h2>1.2 The 50/50 Profit Split</h2>
          <p>Once operational expenses are cleared, the Net Profit Pool is split exactly in half. 50% is reinvested into <b>Company Growth</b> to increase token value, and 50% is distributed directly to <b>Stakeholders</b> as a reward for their equity in the project.</p>

           <h2>1.3 Compounded Profit Multiplier</h2>
           <p>We strictly avoid interest-based mechanics. Instead, stakeholders can choose to reinvest their monthly profit share back into $BCC tokens. This triggers a <b>Compounded Profit</b> effect, increasing your ownership percentage and your share of future distributions based on real platform growth.</p>
           </div>
            <div className="mt-8 text-center text-sm text-slate-400">
  Presale funds are managed transparently with manual verification.
  <br />
  <span className="text-emerald-400 font-semibold">
    🔐 Smart Contract Audit — Coming Soon
  </span>
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
             Prior to token distribution, the Bad Credit Coin smart contract will undergo a comprehensive third-party security audit to ensure transparency, safety, and investor protection.
            </p>
            
           <p className="text-slate-300">
              BCC aims to redefine Global lending by proving that credit does not need Interest to be profitable or Sustainable.
              This document outlines the Vision for the Future,protocol design, governance framework, and economic model.
            </p>
          
            <div>
            <p className="text-slate-300"></p> 
            <b>2.0 Security & Technical Infrastructure</b>
            <p>The $BCC ecosystem is built on the Solana Blockchain, prioritizing high-speed transactions, low costs, and institutional-grade security. Our commitment to investor safety is built into the core code of our smart contracts.</p>
 
            <b>2.1 Smart Contract Architecture</b>
            <p>Our presale and profit-sharing protocols are developed using the <b>Anchor Framework (Rust)</b>. This framework is the industry standard for Solana, providing a secure environment that prevents common vulnerabilities like re-entrancy attacks and unauthorized account access.</p>

            <b>2.2 Investor Protection: The 5-Year Lock</b>
            <p>To ensure long-term sustainability and prevent market manipulation, we have implemented a strict liquidity lock. 50% of the initial Liquidity Pool (LP) is locked via <b>Streamflow Finance</b> for a duration of 5–10 years. This lock is fully verifiable on-chain via Solscan and DEXScreener.</p>

            <b>2.3 Automated Token Vesting</b>
            <p>To protect the $BCC market value, all presale tokens are subject to a <b>Linear Vesting Schedule</b>. This ensures a gradual release of supply rather than a massive market influx at launch. 20% of purchased tokens are released every 30 days.</p>

            <b>2.4 Anti-Whale Protocol</b>
            <p>We have implemented strict purchase limits per wallet. The minimum purchase is set at <b>0.1 SOL</b> and the maximum at <b>50 SOL</b>. This ensures a decentralized distribution and prevents single entities from holding a dominant share of the circulating supply.</p>
            </div>

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
        {/* PRESALE */}
{page === "presale" && (
  <motion.section
    key="presale"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-24 px-6 max-w-4xl mx-auto"
  >
    <Presale />
  </motion.section>
)}
      </AnimatePresence>
<div className="mt-10 text-center text-sm text-slate-400">
  ✔ Transparent Presale &nbsp;•&nbsp; ✔ Manual Verification &nbsp;•&nbsp;
  <span className="text-emerald-400 font-semibold">
    🔐 Smart Contract Audit Scheduled
  </span>
</div>

{/* FOOTER */}
<footer className="mt-32 border-t border-white/10 bg-black/90 dark:bg-black">
  <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

    {/* Social Icons */}
    <div className="flex items-center gap-10">

      {/* Telegram */}
      <a
        href="https://t.me/Badcreditcoin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="transition transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
      >
        <svg
          className="w-7 h-7 text-gray-200 hover:text-emerald-400 transition"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9.993 15.674 9.84 19.57c.287 0 .412-.124.564-.272l1.355-1.298 2.81 2.055c.516.284.88.136 1.017-.477l1.843-8.67c.2-.926-.336-1.287-.842-1.1L6.24 13.2c-.903.352-.89.858-.154 1.086l2.52.788 5.845-3.682c.276-.17.53-.076.323.095z" />
        </svg>
      </a>

      {/* X / Twitter */}
      <a
        href="https://x.com/Badcreditcoin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="transition transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
      >
        <svg
          className="w-7 h-7 text-gray-200 hover:text-emerald-400 transition"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2H21.56l-7.23 8.26L22.5 22h-6.56l-5.13-6.72L4.5 22H1.18l7.74-8.85L1.5 2h6.68l4.63 6.11z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/badcreditcoin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="transition transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
      >
        <svg
          className="w-7 h-7 text-gray-200 hover:text-emerald-400 transition"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
        </svg>
      </a>

    </div>

    {/* Copyright */}
    <div className="text-sm text-gray-400 text-center tracking-wide">
      © {new Date().getFullYear()} All rights reserved ·{" "}
      <span className="text-gray-300">badcreditcoin.com</span>
    </div>

  </div>
</footer>

    </div>
  );
}
