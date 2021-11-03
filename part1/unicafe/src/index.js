import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ operation, text }) => {
  return <button onClick={operation}>{text}</button>
}

const Statistic = ({ title, value }) => {
  return <p>{title} {value}</p>
}

const Statistics = ({ good, neutral, bad }) => {

  const getTotal = () => { return good + neutral + bad }

  return (
    <>
      <div>
        <Statistic title={'Good'} value={good} />
        <Statistic title={'Neutral'} value={neutral} />
        <Statistic title={'Bad'} value={bad} />
      </div>
      <hr></hr>
      <div>
        <Statistic title={'All'} value={getTotal()} />
        <Statistic title={'Average'} value={(good - bad) / getTotal()} />
        <Statistic title={'Positive'} value={good / getTotal() * 100} />
      </div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
        <Button operation={() => setGood(good + 1)} text='Good' />
        <Button operation={() => setNeutral(neutral + 1)} text='Neutral' />
        <Button operation={() => setBad(bad + 1)} text='Bad' />
      </div>
      {good === 0 && neutral === 0 && bad === 0 ?
        <p>No feedback given</p> :
        <Statistics good={good} neutral={neutral} bad={bad} />
      }
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)