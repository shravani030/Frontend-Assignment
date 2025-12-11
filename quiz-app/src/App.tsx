import { useState } from "react";
import QuizCard from "./components/QuizCard";
import Question from "./components/Question";
import Result from "./components/Result";
import { questions } from "./data/questions";
import paw from "./assets/paw.png";
import arrowLeft from "./assets/left.png";
import arrowRight from "./assets/right.png";


function App() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[index];

  const next = () => {
    if (selected === current.answer) setScore((s) => s + 25);

    if (index === questions.length - 1) {
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setDone(false);
  };

  if (done) return <Result score={score} restart={restart} />;

  return (
    <div>
      {/* BEST OF LUCK ONLY ON FIRST PAGE */}
      {index === 0 && (
  <div className="relative">
    {/* Speech bubble - bottom-left of card */}
   <div
  className="absolute bg-white border border-gray-300 shadow-md px-4 py-1 rounded-xl text-sm z-20"
  style={{ left: "110px", bottom: "-470px" }}
>
  Best of Luck!
</div>


    {/* Paw touching the bottom-left border of the card */}
    <img
  src={paw}
  alt="paw"
  className="absolute w-24 animate-pawBounce z-10"
  style={{ left: "200px", bottom: "-565px" }}
/>

  </div>
)}





      <QuizCard>
        {/* Title */}
        <h1 className="text-center text-4xl font-serif font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-500">
  Test Your Knowledge
</h1>


        <p className="text-center text-sm text-gray-600 mt-1">
          Answer all questions to see your results
        </p>

        {/* Progress Indicator */}
      <div className="flex justify-between mt-8 mb-8 px-4">
    {questions.map((_, idx) => (
      <div
        key={idx}
        className={`h-2 flex-1 mx-1 rounded-full transition-colors duration-300 ${
          idx <= index ? "bg-blue-700" : "bg-gray-300"
        }`}
      ></div>
    ))}
  </div>


        {/* Question */}
        <div className="mt-8">
          <Question
            question={current.question}
            options={current.options}
            selected={selected}
            onSelect={setSelected}
          />
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end gap-3 mt-8">
  {/* Previous button (show on all except first question) */}
  {index > 0 && (
    <button
      onClick={() => setIndex(index - 1)}
      className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#eef5ff] border border-[#dbe8ff] hover:bg-[#ddeaff]"
    >
      <img src={arrowLeft} className="w-4" alt="previous" />
    </button>
  )}

  {/* Next or Submit button */}
  {index < questions.length - 1 ? (
    <button
      onClick={next}
      className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#eef5ff] border border-[#dbe8ff] hover:bg-[#ddeaff]"
    >
      <img src={arrowRight} className="w-4" alt="next" />
    </button>
  ) : (
    <button
      onClick={next} // still calls next, which will setDone(true)
      className="px-6 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600"
    >
      Submit
    </button>
  )}
</div>


        
      </QuizCard>
    </div>
  );
}

export default App;
