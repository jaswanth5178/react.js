import React  from 'react'
import useModal from './useModal'

const Child = () => {
  
const {open,handleClose,handleOpen} = useModal()

  return (
    <div>
      <button onClick={handleOpen}>Open</button>
      {open && (
        <div>
          <h1>Can u see me now Child Component</h1>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Child