import React, { createContext } from 'react'
import Child100 from './9.Hooks/useContext/Child100'

const Data1 = createContext()

const App = () => {

  const name = "Arun Gowda"
  const place = "Mandya"

  function darkMode(){
    document.body.style.background = "black"
    document.body.style.color = "white"
  }

  return (
    <div>
      <Data1.Provider value={{name,place,darkMode}}>
        <Child100/>
      </Data1.Provider>
    </div>
  )
}

export {Data1}
export default App