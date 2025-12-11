interface Props {
  question: string;
  options: string[];
  selected: string | null;
  onSelect: (value: string) => void;
}

const Question = ({ question, options, selected, onSelect }: Props) => {
  return (
    <div>
      <div className="bg-blue-100 py-4 px-6 rounded-lg text-center text-gray-700 font-semibold">
        {question}
      </div>

      <div className="mt-4 space-y-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`w-full border rounded-lg py-3 transition 
              ${selected === opt ? "bg-blue-200 border-blue-500" : "bg-white hover:bg-blue-50"}
            `}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
