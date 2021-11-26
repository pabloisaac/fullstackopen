import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])

  const getRandomIndex = () => {
    return (Math.floor(props.anecdotes.length * Math.random()));
  }

  const handleVote = () => {
    let newArr = [...points]
    newArr[selected] = newArr[selected] + 1
    setPoints(newArr)
  }

  const getMostVotesAnecdote = () => {
    let sortArr = [...points]
    let index = sortArr.sort((a,b) => {
      return b-a
    })[0]
    return [
      <p>{props.anecdotes[points.indexOf(index)]}</p>,
      <p>Has {index} votes</p>
    ]
  }

  return (
    <>
      <h1>{props.anecdotes[selected]}</h1>
      <h5>Has {points[selected]} votes</h5>
      <div>
        <button onClick={() => handleVote()}>Vote</button>
        <button onClick={() => setSelected(getRandomIndex())}>Next anecdote</button>
      </div>
      <hr></hr>
      <div>
        <h1>Anecdote with most votes</h1>
        {getMostVotesAnecdote()}
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)