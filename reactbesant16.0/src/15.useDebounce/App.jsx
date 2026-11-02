import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const[data,setData] =  useState([])
  const[value,setValue] = useState("")
  const[debouncevalue,setDebounceValue] = useState("")


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setData(data));
  },[])

  useEffect(()=>{
    const timer = setTimeout(()=>{
       setDebounceValue(value)
    },3000)

     return () => {
    clearTimeout(timer)
     }
  },[value])

  
  

  return (
    <div className='App'>
      <input id='input' onChange={(e)=>setValue(e.target.value)} placeholder='Search Here...'/>
      <div className='Card-container'>
        {
        data.filter((item,index)=>item.title.toLowerCase().includes(debouncevalue.toLowerCase())).map((value,index)=>{
          return(
            <div className='Card' key={value.id}>
              <img src={value.image} height={'200px'} width={'200px'}/>
              <div className='name'>{value.title}</div>
              <div className='Category'>Catgory:{value.category}</div>
              <div className='price'>Price: {value.price}</div>
              <div className='rating'>Rating: {value.rating.rate}</div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default App