import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({good, neutral, bad}) => {

  const getTotal = () => { return good + neutral + bad }

  return (
    <>
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
      </div>
      <hr></hr>
      <div>
        <p>All {getTotal()}</p>
        <p>Average {(good - bad) / getTotal()}</p>
        <p>Positive {good / getTotal() * 100}</p>
      </div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseByOne = name => {
    if (name === 'good')
      setGood(good + 1)
    if (name === 'neutral')
      setNeutral(neutral + 1)
    if (name === 'bad')
      setBad(bad + 1)
  }

  return (
    <>
    <div>
      <button onClick={() => { increaseByOne('good') }}>Good</button>
      <button onClick={() => { increaseByOne('neutral') }}>Neutral</button>
      <button onClick={() => { increaseByOne('bad') }}>Bad</button>
    </div>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)