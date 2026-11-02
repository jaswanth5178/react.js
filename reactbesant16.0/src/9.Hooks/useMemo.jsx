import React, { useState,useMemo} from 'react'

const App = () => {
  const[add,setAdd] = useState(0)
  const[sub,setSub] = useState(10)

  function handleAdd(){
    setAdd((prev)=>prev+1)
  }

  function handleSub(){
    setSub((prev)=>prev - 1)
  }

 const mul =  useMemo(()=>{
    console.log("Now can u see me");
    return add*2
 },[add])



  return (
    <div>
      <h1>{add} {sub} {mul}</h1>
      <button onClick={handleAdd}>Add</button>
       <button onClick={handleSub}>Sub</button>
    </div>
  )
}

export default App