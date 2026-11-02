import React, { useEffect, useState } from 'react'

const App = () => {
  const[count,setCount] = useState(0)
  const[name,setName] = useState("")

  useEffect(()=>{
    document.title = `${count}`
    console.log("Hey");
    
  },[count])


  

  function handleClick(){
    setCount((pre)=>pre+1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <input onChange={(e)=>setName(e.target.value)}/>
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default App