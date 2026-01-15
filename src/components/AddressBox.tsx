import React, { useState } from 'react';

const AddressBox = () => {
  const [copied, setCopied] = useState(false);
  const solAddress = "H7GbbP9SGb9VtUVJFXoesnQjcJk1XpXAFHTyMzNx4AaD";

  const handleCopy = () => {
    navigator.clipboard.writeText(solAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  return (
    <div className="flex items-center gap-3 bg-gray-900 border border-green-500/30 p-3 rounded-xl w-fit shadow-lg shadow-green-500/10">
      <div className="flex flex-col">
        <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Official Presale Address</span>
        <span className="text-white font-mono text-sm">H7Gb...4AaD</span>
      </div>

      <button 
        onClick={handleCopy}
        className="ml-2 p-2 bg-gray-800 hover:bg-green-600 rounded-lg transition-all duration-200"
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        )}
      </button>
    </div>
  );
};

export default AddressBox;