import React,{useReducer} from 'react'

const App = () => {
 const initialState = 0

 function reducer(state,action){
  switch (action) {
    case "increment":
       return state+1;
    case "decrement":
      return state-1   
    case "reset":
      return state = 0
    default:
      return state;
  }
 }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch("increment")}>increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default App