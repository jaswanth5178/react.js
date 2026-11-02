import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from './Firebase'
import './Form.scss'
const Signup = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()
    async function handleSignUp(e){
       try {
        e.preventDefault()
        const userCredential = await createUserWithEmailAndPassword(auth,email,password)
        console.log(userCredential);
        setEmail("")
        setPassword("")
        navigate('/login')
       } catch (error) {
        console.log(error);
       } 
    }
  return (
    <div className='signup'>
        <form onSubmit={handleSignUp}>
            <h1>SignIn Here</h1>
            <input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Your Email'></input>
            <br/>
            <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter Your Password'/>
            <br/>
            <button>Sign In </button>
            <br/>
            Already Have an Account<Link to={'/login'}>Login</Link>
        </form>
    </div>
  )
}
export default Signup