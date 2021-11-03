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
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td><Statistic title={'Good'} value={good} /></td>
          </tr>
          <tr>
            <td><Statistic title={'Neutral'} value={neutral} /></td>
          </tr>
          <tr>
            <td><Statistic title={'Bad'} value={bad} /></td>
          </tr>
          <tr>
            <td><Statistic title={'All'} value={getTotal()} /></td>
          </tr>
          <tr>
            <td><Statistic title={'Average'} value={(good - bad) / getTotal()} /></td>
          </tr>
          <tr>
            <td><Statistic title={'Positive'} value={good / getTotal() * 100} /></td>
          </tr>
        </tbody>
      </table>
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
        <h1>Give Feedback</h1>
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