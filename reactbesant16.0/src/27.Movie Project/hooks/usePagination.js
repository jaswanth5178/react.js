import React,{useCallback, useState} from 'react'


const usePagination = () => {
      const[currentPage,setCurrentPage] = useState(1)
    
      const handleNext= useCallback(()=>{
        setCurrentPage((pre)=>pre+1)
      },[currentPage])

       const handlePrev= useCallback(()=>{
        setCurrentPage((pre)=>pre-1)
      },[currentPage])
      
      
  return {currentPage,handleNext,handlePrev}
}

export default usePagination                              