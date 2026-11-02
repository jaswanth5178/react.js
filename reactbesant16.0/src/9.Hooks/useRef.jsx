import React, { useRef } from 'react'

const App = () => {
  const inputRef = useRef()
  function handleClick(){
    console.log(inputRef.current.focus())
    console.log(inputRef.current.value);
    
  }

  return (
    <div>
      <input ref={inputRef}/>
      <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default App