import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";

type Page =
  | "home"
  | "mission"
  | "tokenomics"
  | "whitepaper"
  | "apply"
  | "governance";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const Nav = ({ label, p }: { label: string; p: Page }) => (
    <button
      onClick={() => setPage(p)}
      className="hover:text-emerald-400 transition font-medium"
    >
      {label}
    </button>
  );

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
            <Nav label="Governance" p="governance" />
            <Nav label="Apply" p="apply" />
          </nav>

          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold">
            Connect Wallet
          </button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {/* HOME (UNCHANGED STRUCTURE) */}
        {page === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-7xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              Fair Credit.{" "}
              <span className="text-emerald-400">Zero Interest.</span>
            </h1>
            <p className="text-slate-300 max-w-3xl">
              Bad Credit Coin is building an ethical, interest-free lending
              protocol that empowers individuals to rebuild financial trust
              without exploitation.
            </p>

            <div className="flex gap-6 mt-10">
              <button
                onClick={() => setPage("whitepaper")}
                className="px-6 py-3 rounded-lg bg-emerald-400 text-black font-semibold"
              >
                Read White Paper
              </button>
              <button
                onClick={() => setPage("apply")}
                className="px-6 py-3 rounded-lg border border-emerald-400 text-emerald-400 font-semibold"
              >
                Apply for Credit
              </button>
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
            className="py-24 px-6 max-w-6xl mx-auto space-y-10"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">
              Our Mission
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Financial Inclusion",
                  text: "We provide access to fair credit for individuals excluded by traditional financial institutions.",
                },
                {
                  title: "Zero Interest Lending",
                  text: "Borrowers repay only what they borrow, without compounding interest or hidden penalties.",
                },
                {
                  title: "On-Chain Trust",
                  text: "Repayment behavior is recorded transparently on-chain, enabling credit rebuilding.",
                },
                {
                  title: "Global Expansion",
                  text: "Borderless access to ethical financial tools worldwide.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-emerald-400">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 mt-3">{item.text}</p>
                </div>
              ))}
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
            className="py-24 px-6 max-w-5xl mx-auto space-y-6"
          >
            <h1 className="text-5xl font-bold text-center text-emerald-400">
              Tokenomics
            </h1>
            <p className="text-slate-300">
              Bad Credit Coin has a fixed supply designed to support sustainable,
              interest-free lending while incentivizing responsible participation.
            </p>
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
            <h1 className="text-5xl font-bold text-emerald-400">
              White Paper
            </h1>

            <p className="text-slate-300">
              This paper outlines the ethical lending model, governance structure,
              and long-term roadmap of Bad Credit Coin.
            </p>

            <a
              href="/Bad-Credit-Coin-Whitepaper.pdf"
              download
              className="inline-block px-6 py-3 rounded-lg bg-emerald-400 text-black font-semibold"
            >
              Download PDF
            </a>
          </motion.section>
        )}

        {/* GOVERNANCE — NEW */}
        {page === "governance" && (
          <motion.section
            key="governance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-24 px-6 max-w-5xl mx-auto space-y-8"
          >
          <h1 className="text-5xl font-bold text-center text-emerald-400">
          DAO Governance
         </h1>

         <div className="bg-white/5 p-6 rounded-xl space-y-4">
        <h3 className="text-xl font-bold text-emerald-400">
    Proposal #1 — Lending Pool Expansion
  </h3>

  <p className="text-slate-300">
    Increase the lending pool allocation to support higher borrower demand
    while maintaining zero-interest principles.
  </p>

  <div className="flex gap-6 items-center">
    <button
      onClick={() => alert("Vote recorded: YES")}
      className="px-4 py-2 bg-emerald-400 text-black rounded font-semibold"
    >
      Vote Yes
    </button>

    <button
      onClick={() => alert("Vote recorded: NO")}
      className="px-4 py-2 border border-red-400 text-red-400 rounded font-semibold"
    >
      Vote No
    </button>
  </div>

  <p className="text-sm text-slate-400">
    * On-chain voting will be enabled in a future release.
  </p>
</div>
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
              ].map((f) => (
                <input
                  key={f}
                  placeholder={f}
                  className="w-full p-3 rounded bg-black/40 border border-white/10"
                />
              ))}

              <button className="w-full py-3 bg-emerald-400 text-black font-bold rounded">
                Submit Application
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-white/10">
        <div className="flex justify-center gap-6 mb-4">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Bad Credit Coin
        </p>
      </footer>
    </div>
  );
}

