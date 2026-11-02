import React, { useEffect, useState } from 'react'
import {Card,CardImage,CardPrice,CardTitle,CardDescription,CardRating} from './19.Design Pattern/Composite Compound Pattern/Card/Card'
import './App.css'

const App = () => {
  const[data,setData] = useState([])

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((d)=>setData(d))
  },[])

  console.log(data);
  

  return (
    <div className='App'>
      {
        data.map((item,index)=>{
          return(
            <Card>  
              <CardTitle title={item.title}></CardTitle>
              <CardImage src={item.image}/>
              <CardDescription description={item.description}></CardDescription>
              <CardPrice price={item.price}></CardPrice>
              <CardRating rating={item.rating.rate}></CardRating>
            </Card>
          )
        })
      }
    </div>
  )
}

export default App