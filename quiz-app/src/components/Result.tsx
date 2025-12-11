const Result = ({ score, restart }: { score: number; restart: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-gray-500 mb-3">Nice work!</h2>
      <p className="text-xl text-gray-700">Your Final score is</p>
      <p className="text-6xl font-bold text-blue-700">{score}%</p>

      <button
        onClick={restart}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
      >
        Start Again
      </button>
    </div>
  );
};
export default Result;
