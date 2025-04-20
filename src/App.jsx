import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState('');
  const [high, setHigh] = useState('');
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    const weight = parseFloat(prompt);
    const height = parseFloat(high) / 100;

    if (!weight || !height) {
      setResult("Введите корректные значения.");
      return;
    }

    const bmi = weight / (height ** 2);
    setResult(bmi.toFixed(1));
  };

  return (
    <>
      <div>
        <h1>Enter your characteristics</h1>
        <input
          type="number"
          placeholder="Enter your weight (kg)"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your height (cm)"
          value={high}
          onChange={(e) => setHigh(e.target.value)}
        />
        <button onClick={handleGenerate}>Generate</button>
      </div>
      <div>
        <h1>Result</h1>
        <p>{result && `Your BMI is: ${result}`}</p>
      </div>
    </>
  );
}

export default App;