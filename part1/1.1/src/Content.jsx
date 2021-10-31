import React from 'react';
import Part from './Part';

const Content = ({data}) => {

  return (
    <>
      <Part part={data[0].part} exercises={data[0].exercises} />
      <Part part={data[1].part} exercises={data[1].exercises} />
      <Part part={data[2].part} exercises={data[2].exercises} />
    </>
  )
}

export default Content;