import React from 'react'
import { Link } from 'react-router'
import './index.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Axios Crud</h1>
       <Link to={'/create'}><button>Add+</button></Link>
    </div>
  )
}

export default Navbar