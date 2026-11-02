import React from 'react'
import Child from './19.Design Pattern/CustomHook/Child'
import useModal from './19.Design Pattern/CustomHook/useModal'

const App = () => {
  
 const {open,handleClose,handleOpen} = useModal()

  return (
    <div>
      <button onClick={handleOpen}>Open</button>
      {open && (
        <div>
          <h1>Can u see me now</h1>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
      <Child/>
    </div>
  )
}

export default App