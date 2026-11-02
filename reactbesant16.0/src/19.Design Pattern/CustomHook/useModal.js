import React,{useState} from 'react'

const useModal = () => {
    const[open,setOpen] = useState(false)
    
      function handleOpen(){
        setOpen(true)
      }
    
      function handleClose(){
        setOpen(false)
      }
  return {open,handleClose,handleOpen}
}

export default useModal