import React from "react";

const QuizCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-[90%] max-w-[1100px] mx-auto mt-10 rounded-[40px] bg-white/90 backdrop-blur-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)] p-14 border border-white">
      {children}
    </div>
  );
};

export default QuizCard;
