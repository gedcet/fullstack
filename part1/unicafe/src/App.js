import { useState } from 'react'
import Statistics from './Statistics'

const App = (props) =>
{
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
    const handleButtonGoodClick = () =>
    {
      setGood(good + 1);
    }
    const handleButtonNetralClick = () =>
    {
      setNeutral(neutral + 1);
    }

    const handleButtonBadClick = () =>
    {
      setBad(bad + 1);
    }



    return (
      <div>
        <h1>give feedback</h1>
        <button onClick={handleButtonGoodClick}>good </button>
        <button onClick={handleButtonNetralClick}>neutral</button>
        <button onClick={handleButtonBadClick}> bad</button>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    )
  }

  export default App
