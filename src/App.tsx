import { useState } from "react";

export default function App() {
  const [page, setPage] = useState<"home" | "mission" | "whitepaper" | "apply">("home");

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* HEADER */}
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
              <div className="flex justify-center gap-6 mt-8">
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

 {page === "whitepaper" && (
  <section className="space-y-10 max-w-5xl mx-auto">
    <div className="text-center space-y-2">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
        Bad Credit Coin White Paper
      </h2>
      <p className="text-gray-400">Version 1.0 • Last Updated: January 2025</p>
    </div>

    {/* Table of Contents */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-3">Table of Contents</h3>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Problem Statement</li>
        <li>Zero-Interest Lending Model</li>
        <li>Monthly Fee Transparency</li>
        <li>On-Chain Credit Building</li>
        <li>Global Financial Inclusion</li>
      </ul>
    </div>

    {/* Sections */}
    <div className="space-y-6 text-gray-300">
      <section>
        <h3 className="text-2xl font-bold text-white">Problem Statement</h3>
        <p>
          Traditional finance relies on compounding interest and opaque credit systems that
          trap underserved individuals in cycles of debt and exclusion.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white">Zero-Interest Lending Model</h3>
        <p>
          Bad Credit Coin removes interest entirely. Borrowers repay a fixed amount with no
          compounding penalties, creating fairness and predictability.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white">Monthly Fee Transparency</h3>
        <p>
          A clearly disclosed monthly service fee replaces hidden interest, penalties, and
          confusing repayment terms.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white">On-Chain Credit Building</h3>
        <p>
          Repayment history is recorded on-chain, enabling users to rebuild trust and
          financial reputation without legacy credit scores.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white">Global Financial Inclusion</h3>
        <p>
          The protocol is designed to scale globally, providing ethical, interest-free
          financial tools across borders.
        </p>
      </section>
    </div>

    {/* Download */}
    <div className="text-center pt-6">
      <a
        href="/Bad-Credit-Coin-Whitepaper.pdf"
        download
        className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-violet-400 text-black font-semibold rounded-xl"
      >
        Download Full White Paper (PDF)
      </a>
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

