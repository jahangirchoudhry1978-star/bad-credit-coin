import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Facebook, Twitter, Instagram } from "lucide-react";

type Page = "home" | "mission" | "tokenomics" | "whitepaper" | "apply";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [wallet, setWallet] = useState<string | null>(null);

  // ✅ MetaMask connect (safe for Vercel)
  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert("MetaMask not installed");
      return;
    }
    const accounts = await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });
    setWallet(accounts[0]);
  };

  const Nav = ({ label, p }: { label: string; p: Page }) => (
    <button
      onClick={() => setPage(p)}
      className="hover:text-emerald-400 transition"
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
            {wallet ? wallet.slice(0, 6) + "..." : "Connect Wallet"}
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
            className="py-24 px-6 max-w-6xl mx-auto space-y-16"
          >
            <div className="text-center space-y-6">
              <h1 className="text-5xl font-extrabold">
                Fair Credit. <span className="text-emerald-400">Zero Interest.</span>
              </h1>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Bad Credit Coin is a decentralized protocol providing ethical,
                zero-interest lending while helping users rebuild financial trust
                on-chain.
              </p>

              <div className="flex justify-center gap-6">
                <button
                  onClick={() => setPage("whitepaper")}
                  className="px-6 py-3 bg-emerald-500 rounded-lg font-semibold"
                >
                  Read White Paper
                </button>
                <button
                  onClick={() => setPage("apply")}
                  className="px-6 py-3 bg-cyan-500 rounded-lg font-semibold"
                >
                  Apply for Credit
                </button>
              </div>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-emerald-400">Who We Are</h2>
              <p className="text-slate-300">
                We are building a global, transparent financial system for people
                excluded by traditional banking. No interest. No exploitation.
                Just fair access to capital.
              </p>
            </section>
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
            <h1 className="text-4xl font-bold text-center text-emerald-400">
              Our Mission
            </h1>

            {[
              ["Financial Inclusion", "Access to fair credit for everyone."],
              ["Zero Interest Lending", "No interest, no compounding debt."],
              ["On-Chain Trust", "Transparent repayment history."],
              ["Global Expansion", "Borderless ethical finance."],
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
          <motion.section
            key="tokenomics"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-5xl mx-auto space-y-10"
          >
            <h1 className="text-4xl font-bold text-center text-emerald-400">
              Tokenomics
            </h1>
            <p className="text-slate-300 text-center">
              Fixed supply designed for sustainable lending.
            </p>

            <div className="max-w-md mx-auto">
              <Doughnut data={tokenData} />
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
            <h1 className="text-4xl font-bold text-emerald-400">White Paper</h1>

            <p className="text-slate-300">
              This protocol introduces ethical, zero-interest lending governed by
              DAO voting and transparent smart contracts.
            </p>

            <h3 className="text-xl font-bold text-emerald-400">Roadmap</h3>
            <ul className="space-y-3 text-slate-300">
              <li><strong>Phase 1:</strong> Launch & early adopters</li>
              <li><strong>Phase 2:</strong> DAO governance</li>
              <li><strong>Phase 3:</strong> Global scaling</li>
            </ul>

            <a
              href="/Bad-Credit-Coin-Whitepaper.pdf"
              download
              className="inline-block px-6 py-3 bg-emerald-500 rounded-lg font-semibold"
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

              <button className="w-full py-3 bg-emerald-500 rounded-lg font-bold">
                Submit Application
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-white/10">
        <div className="flex justify-center gap-6">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </footer>
    </div>
  );
}
