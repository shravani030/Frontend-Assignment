import { useEffect, useState } from "react";

const Result = ({ score, restart }: { score: number; restart: () => void }) => {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = score;
    const duration = 900; 
    const step = Math.max(15, duration / end);

    const timer = setInterval(() => {
      start++;
      setDisplayScore(start);
      if (start >= end) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [score]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F2FBFF] text-center">
      
      <h2 className="text-[#6B7A8C] text-sm mb-3 font-inter tracking-wide">
        Nice work!
      </h2>

      <p
        className="text-2xl text-[#0E466E] mb-2 font-[Playfair_Display] font-semibold"
      >
        Your Final score is
      </p>

      <p
        className="text-[110px] leading-none font-[Playfair_Display] font-bold text-[#0E466E] transition-all"
      >
        {displayScore}
        <span className="text-4xl">%</span>
      </p>

      <button
        onClick={restart}
        className="mt-8 bg-[#D2ECF9] text-[#0E466E] px-6 py-2 rounded-lg hover:bg-[#c5e6f7] transition"
      >
        Start Again
      </button>
    </div>
  );
};

export default Result;
