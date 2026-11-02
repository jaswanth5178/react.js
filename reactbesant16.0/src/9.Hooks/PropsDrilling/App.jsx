import React from 'react'
import ChildA from './9.Hooks/PropsDrilling/ChildA'

const App = () => {
  const name = "Akash"
  return (
    <div>
      <ChildA name={name}/>
    </div>
  )
}

export default App