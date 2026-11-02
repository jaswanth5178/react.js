import React, { useLayoutEffect,useState,useRef } from 'react'

const App = () => {
  const[initialText,setInitialText] = useState("Besant Technologies")
  const boxRef = useRef(null)

  useLayoutEffect(()=>{
    console.log(boxRef.current.offsetWidth);
    
    if(boxRef.current.offsetWidth > 250){
      setInitialText("Maharaja institute of Technologies")
    };
    
  },[])


  return (
    <div ref={boxRef} width={'300px'}>
      <h1>{initialText}</h1>
    </div>
  )
}

export default App