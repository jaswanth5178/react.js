import React, { useState } from 'react'

const App = () => {
  const BirthdayData = [{
    id:"101",
    name:"Rajesh",
    age:29
  },{
    id:"102",
    name:"Rakesh",
    age:30
  },{
    id:"103",
    name:"yogesh",
    age:33
  }]

  const[data,setData] = useState(BirthdayData)

  function handleClear(){
    setData([])
  }

  return (
    <div>
      <h1>Today's Birthday {data.length}</h1>
      {
        data.map((value,index)=>{
          return(
            <div>
            <div>{value.name} {value.age}</div>
            </div>
          )
        })
      }
      <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default App