import React, { useState } from 'react'
import Child from './19.Design Pattern/Higher Order Component/Child'
import withCounter from './19.Design Pattern/Higher Order Component/withCounter'
const App = ({count,handleIncrement}) => {
  
  return (
    <div>
      <h1>{count} i am Parent Component</h1>
      <button onClick={handleIncrement}>Add</button>
      <Child/>
    </div>
  )
}

export default  withCounter(App)