import React, { useState } from 'react'

const withCounter = (OriginalComponet) => {

   return function EnhanceComponent(){

     const[count,setCount] = useState(0)
      function handleIncrement(){
        setCount((prev)=>prev+1)
      }

      return(
          <OriginalComponet count={count} handleIncrement={handleIncrement}/>
      )
   }
}

export default withCounter