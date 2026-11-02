import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router'

const Home = () => {
    const[data,setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/user")
        .then((res)=>setData(res.data))
    },[])

    function handleDelete(id){
        axios.delete('http://localhost:3000/users/'+id)
        .then((res)=>console.log(res))
    }

    
    
  return (
    <div>
        <Navbar/>
        <section>
            <table border={'1'}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,index)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>
                                    <Link to={`/edit/${item.id}`}><button>Edit</button></Link>
                                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5}>@copywrite Sudesh Gowda</td>
                </tr>
            </tfoot>
        </table>
        </section>
    </div>
  )
}

export default Home