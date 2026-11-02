import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Create = () => {

   const[value,setValue] = useState({name:"",age:""})

   const navigate = useNavigate()

   function handleChange(e){
    setValue({...value,[e.target.name]:e.target.value})
   }

    function handleAddData(e){
        e.preventDefault()
        axios.post("http://localhost:3000/users",value)
        .then((res)=>console.log(res))
        setValue({name:"",age:""})
        navigate('/')
    }
    
  return (
    <div className='create'>
        <form onSubmit={handleAddData}>
            <h1>Create Data</h1>
            <input onChange={handleChange} name='name' type='text' placeholder='Enter Your Name'/>
            <br/>
            <input onChange={handleChange} name='age' type='number' placeholder='Enter Your age'/>
            <br/>
            <button>Add</button>
        </form>
    </div>
  )
}

export default Create
