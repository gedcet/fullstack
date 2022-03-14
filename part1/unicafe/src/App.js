import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleButtonGoodClick = () => {
    setGood(good+1);
  }

  const handleButtonNetralClick = () => {
    setNeutral(neutral+1);
  }

  const handleButtonBadClick = () => {
    setBad(bad+1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleButtonGoodClick}>good </button>
      <button onClick={handleButtonNetralClick}>neutral</button>
      <button onClick={handleButtonBadClick}> bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>All {good + neutral + bad}</p>
      <p>average {(good - bad)/(good + neutral + bad)}</p>
      <p> positive {good/(good + neutral + bad)*100} %</p>
    </div>
  )
}

export default App
