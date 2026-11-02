import React, { useCallback, useState } from 'react'
import Child from './9.Hooks/useCallabck/Child'

const App = () => {
  const[count,setCount] = useState(0)

  function handleCount(){
    setCount((prev)=>prev+1)
  }

 const dark = useCallback(()=>{

 },[])


  return (
    <div>
      <Child dark={dark}/>
      <h1>{count}</h1>
      <button onClick={handleCount}>Count</button>
    </div>
  )
}

export default App