import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  const [converted, setConverted] = useState(null);

  const convertToKillometers = () => setConverted((value * 1.60934).toFixed(2));
  const convertToMiles = () => setConverted((value / 1.60934).toFixed(2));
  

  return (
    <>
      <div>
        <h1>Unit Converted</h1>
        <input type="number" placeholder='Enter value' onChange={(e) => setValue(e.target.value)} />
        <button onClick={convertToKillometers}>Convert To Killometers</button>
        <button onClick={convertToMiles}>Convert To Miles</button>
        {converted !== null && <p>Converted Value : {converted}</p>}
      </div>
    </>
  )
}

export default App
