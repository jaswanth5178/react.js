import React, { useRef} from 'react'

const App = () => {
  const nameRef = useRef()

  function handleSubmit(){
    console.log(nameRef.current.value)
  }

  return (
    <div>
      <input ref={nameRef} type='text'/>
     <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App