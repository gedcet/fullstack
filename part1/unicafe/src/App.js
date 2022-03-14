import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

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
    const handleButtonNeutralClick = () =>
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
        <Button props1={handleButtonGoodClick} props2={"good"} />
        <Button props1={handleButtonNeutralClick} props2={"neutral"} />
        <Button props1={handleButtonBadClick} props2={"bad"} />
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    )
  }

  export default App
