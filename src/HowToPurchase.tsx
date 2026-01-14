export default function HowToPurchase() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-emerald-400">
        How to Purchase $BCC
      </h1>

      <h2 className="text-2xl font-semibold mb-3">
        Option 1 — Solana (Recommended)
      </h2>

      <ol className="list-decimal ml-6 space-y-3 text-slate-300 mb-6">
        <li>Install the Phantom Wallet browser extension</li>
        <li>Purchase SOL from an exchange (Coinbase, Binance, etc.)</li>
        <li>Transfer SOL to your Phantom wallet</li>
        <li>
          Send SOL to our official wallet address:
          <p className="mt-2 font-mono text-emerald-400">
            H7GbbP9SGb9VtUVJFXoesnQjcJk1XpXAFHTyMzNx4AaD
          </p>
        </li>
        <li>
          Minimum: <strong>0.2 SOL</strong> <br />
          Maximum: <strong>50 SOL</strong> (anti-whale protection)
        </li>
        <li>Email your transaction receipt to:
          <strong> badcreditcoin@gmail.com</strong>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-3">
        Option 2 — Interac Email Money Transfer
      </h2>

      <p className="text-slate-300 mb-4">
        Send payment via Interac to the following email address:
      </p>

      <p className="font-bold text-lg text-emerald-400 mb-6">
        badcreditcoin@gmail.com
      </p>

      <p className="text-slate-300">
        After payment, email your receipt so tokens can be allocated
        before launch.
      </p>
    </div>
  );
}
