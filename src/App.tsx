import { useState } from "react";

const [showWhitepaper, setShowWhitepaper] = useState(false)

export default function App() {
  const [page, setPage] = useState<"home" | "mission" | "whitepaper" | "apply">("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white">

      {/* HEADER */}
      <button className="ml-4 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500">
  Connect Wallet
</button>
      <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Bad Credit Coin</h1>
          <nav className="flex gap-6 text-sm">
            <button onClick={() => setPage("home")} className="hover:text-indigo-400">Home</button>
            <button onClick={() => setPage("mission")} className="hover:text-indigo-400">Mission</button>
            <button onClick={() => setPage("whitepaper")} className="hover:text-indigo-400">White Paper</button>
            <button onClick={() => setPage("apply")} className="hover:text-indigo-400">Apply</button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* HOME */}
        {page === "home" && (
          <section className="space-y-20">
            {/* HERO */}
            <div className="text-center space-y-6">
              <h2 className="text-5xl font-extrabold leading-tight">
                Interest-Free Credit for a Fairer Future
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Bad Credit Coin is rebuilding credit access using transparent,
                zero-interest blockchain-based lending.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 px-4">
                <button
                  onClick={() => setPage("whitepaper")}
                  className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-500"
                >
                  Read White Paper
                </button>
                <button
                  onClick={() => setPage("apply")}
                  className="px-6 py-3 border border-indigo-500 rounded-lg font-semibold hover:bg-indigo-500/10"
                >
                  Apply for Credit
                </button>
              </div>
            </div>

            {/* MISSION CARD */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 text-center">
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 max-w-3xl mx-auto">
                We eliminate predatory interest, rebuild financial trust,
                and provide global access to ethical credit systems.
              </p>
            </div>

            {/* WHAT WE DO */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                ["Interest-Free Lending", "No compounding interest. Ever."],
                ["Credit Building", "On-chain repayment reputation."],
                ["Global Expansion", "Accessible financial tools worldwide."],
              ].map(([title, desc]) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h4 className="text-xl font-semibold mb-2">{title}</h4>
                  <p className="text-gray-400">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center bg-indigo-600/10 border border-indigo-600 rounded-xl p-12">
              <h3 className="text-3xl font-bold mb-4">Join the Waitlist</h3>
              <p className="text-gray-300 mb-6">
                Be first to access ethical, zero-interest credit.
              </p>
              <button
                onClick={() => setPage("apply")}
                className="px-8 py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-500"
              >
                Get Started
              </button>
            </div>
          </section>
        )}

        {/* MISSION PAGE */}
        {page === "mission" && (
          <section className="space-y-12">
            <h2 className="text-4xl font-bold text-center">Our Mission</h2>

            {[
              ["Zero-Interest Lending", "We remove interest entirely to prevent debt traps and ensure predictable repayment."],
              ["Transparent Fees", "Clear monthly service fees with no hidden penalties or compounding."],
              ["On-Chain Credit Records", "Blockchain-based reputation enables fair credit rebuilding."],
              ["Global Inclusion", "Ethical financial access beyond borders and legacy systems."],
            ].map(([title, text]) => (
              <div key={title} className="bg-gray-900 border border-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </div>
            ))}
          </section>
        )}

 {/* WHITE PAPER */}
{page === "whitepaper" && (
  <section className="space-y-6 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold">White Paper</h2>

    <button
      onClick={() => setShowWhitepaper(!showWhitepaper)}
      className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-500"
    >
      {showWhitepaper ? "Hide Preview" : "Read Preview"}
    </button>

    {showWhitepaper && (
      <div className="mt-4 p-6 bg-black/40 rounded-lg text-gray-300 space-y-4">
        <p>
          Bad Credit Coin (BCC) is a decentralized financial protocol designed
          to restore access to capital for users excluded from traditional
          credit systems.
        </p>
        <p>
          The protocol uses transparent governance, fixed supply mechanics,
          and incentive-aligned tokenomics.
        </p>
      </div>
    )}

    <a
      href="/Bad-Credit-Coin-Whitepaper.pdf"
      download
      className="inline-block mt-6 px-6 py-3 bg-gray-800 rounded-lg font-semibold hover:bg-gray-700"
    >
      Download Full PDF
    </a>
  </section>
)}

{/* TOKENOMICS */}
{page === "tokenomics" && (
  <section className="max-w-4xl mx-auto space-y-6">
    <h2 className="text-4xl font-bold">Tokenomics</h2>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-black/40 rounded-xl">
        <h3 className="text-xl font-semibold">Total Supply</h3>
        <p className="text-gray-400 mt-2">1,000,000,000 BCC</p>
      </div>

      <div className="p-6 bg-black/40 rounded-xl">
        <h3 className="text-xl font-semibold">Liquidity</h3>
        <p className="text-gray-400 mt-2">40%</p>
      </div>

      <div className="p-6 bg-black/40 rounded-xl">
        <h3 className="text-xl font-semibold">Community</h3>
        <p className="text-gray-400 mt-2">60%</p>
      </div>
    </div>
  </section>
)}

        {/* APPLY */}
        {page === "apply" && (
          <section className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Apply for Credit</h2>
            <p className="text-gray-400">
              Applications open soon. Join the waitlist to get notified.
            </p>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <button className="w-full px-6 py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-500">
              Join Waitlist
            </button>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Bad Credit Coin. All rights reserved.
      </footer>
    </div>
  );
}

