import React,{useState} from 'react'

const App = () => {
  const[state,setState] = useState(5)

  function increment(){
    setState((prev)=>prev+1)
    setState((prev)=>prev+1)
  }



  return (
    <div>
      <h1>{state}</h1>
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default App