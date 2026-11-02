import React, { useState } from 'react'

const App = () => {
  const[text,setText] = useState("")

  console.log(text);
  

  return (
    <div>
      <input onChange={(e)=>setText(e.target.value)}/>
      <h1>My name is {text}</h1>
    </div>
  )
}

export default App
