import React, { useEffect, useState } from 'react'
import { Link, useNavigate,useParams } from 'react-router'
import axios from 'axios'

const Edit = () => {

   const[value,setValue] = useState({name:"",age:""})
   const {id} = useParams()

  useEffect(()=>{
    axios.get('http://localhost:3000/users/'+id)
    .then((res)=>setValue(res.data))
  },[])
   

   const navigate = useNavigate()

   function handleChange(e){
    setValue({...value,[e.target.name]:e.target.value})
   }

    function handleAddData(e){
        e.preventDefault()
        axios.put("http://localhost:3000/users/"+id,value)
        .then((res)=>console.log(res))
        setValue({name:"",age:""})
        navigate('/')
    }
    
  return (
    <div className='create'>
        <form onSubmit={handleAddData}>
            <h1>Edit Data</h1>
            <input value={value.name} onChange={handleChange} name='name' type='text' placeholder='Enter Your Name'/>
            <br/>
            <input value={value.age} onChange={handleChange} name='age' type='number' placeholder='Enter Your age'/>
            <br/>
            <button>Edit</button>
            <Link to={'/'}><button>Back</button></Link>
            <button>Back</button>
        </form>
    </div>
  )
}

export default Edit
