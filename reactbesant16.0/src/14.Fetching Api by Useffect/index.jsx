import React, { useEffect, useState } from 'react'

const App = () => {
  const[data,setData] =  useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setData(data));
  },[])

  return (
    <div>
      {
        data.map((value,index)=>{
          return(
            <div>
              <img src={value.image} height={'200px'} width={'200px'}/>
              <div className='name'>{value.title}</div>
              <div className='price'>{value.price}</div>
              <div className='rating'>{value.rating.rate}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default App