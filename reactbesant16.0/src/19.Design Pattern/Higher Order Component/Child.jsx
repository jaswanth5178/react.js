import React from 'react'
import withCounter from './withCounter'

const Child = ({count,handleIncrement}) => {
  
  return (
    <div>
      <h1>{count} i am Child Component</h1>
      <button onClick={handleIncrement}>Add</button>
    </div>
  )
}

export default withCounter(Child)