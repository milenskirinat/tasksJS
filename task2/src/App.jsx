import { useState } from 'react'
import './App.css'

function App() {
  const [number, setCount] = useState(0)
  const [result, setResult] = useState()

const handleConvert = () => {
  setResult(number * 9/5 + 32)
  return result
}
  return (
    <>
      <h1>Temputature converter</h1>
       <input type="number" 
       placeholder='Enter your temputure in Celsius' 
       value={number} 
       onChange={(e) => setCount(e.target.value)} 
      />
      <button onClick={() => handleConvert()}>Convert</button>
      <p>{result}</p>
    </>
  )
}

export default App
