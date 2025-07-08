import { useState } from "react";

function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const [result, setResult] = useState<number | null>(null);

  const generateRandom = () => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult(randomNum);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-amber-400 shadow-md rounded-lg p-6 w-full max-w-sm text-center">
        <div className="text-4xl font-bold mb-6">{result ?? "-"}</div>

        <div className="flex justify-between gap-4 mb-6">
          <div className="flex flex-col items-start w-1/2">
            <label className="text-sm text-gray-500 mb-1">Min</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(parseInt(e.target.value))}
              className="border-b border-gray-300 focus:outline-none w-full text-center"
            />
          </div>
          <div className="flex flex-col items-start w-1/2">
            <label className="text-sm text-gray-500 mb-1">Max</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(parseInt(e.target.value))}
              className="border-b border-gray-300 focus:outline-none w-full text-center "
            />
          </div>
        </div>

        <button
          onClick={generateRandom}
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded w-full hover:bg-blue-600"
        >
          GENERATE
        </button>
      </div>
    </div>
  );
}

export default App;
