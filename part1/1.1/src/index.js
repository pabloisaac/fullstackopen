import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const App = () => {
  const title = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  let data = [{
    "part": part1,
    "exercises": exercises1
  },
  {
    "part": part2,
    "exercises": exercises2
  },
  {
    "part": part3,
    "exercises": exercises3
  }]

  return (
    <div>
      <Header course={title} />
      <Content data={data} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))