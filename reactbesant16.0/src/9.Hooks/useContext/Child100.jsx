import React, { useContext } from 'react'
import { Data1 } from '../../App'

const Child100 = () => {
    const {name,place,darkMode} = useContext(Data1)
  return (
    <div>
        <h1>My name is {name} and i am from {place} </h1>
        <button onClick={darkMode}>Dark</button>
    </div>
  )
}

export default Child100