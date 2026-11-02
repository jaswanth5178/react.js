import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from './Firebase'
import './Form.scss'
const Login = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()
    async function handleSignUp(e){
       try {
        e.preventDefault()
        const userCredential = await signInWithEmailAndPassword(auth,email,password)
        const token = await userCredential.user.getIdToken()
        localStorage.setItem('token', token)
        alert('User logged in successfully')
        setEmail("")
        setPassword("")
        navigate('/home')
        alert("Sucessfylly Done 😊")
       } catch (error) {
        console.log(error);
        alert("Please Check Email and Password")
       }}
  return (
    <div className='signup'>
        <form onSubmit={handleSignUp}>
            <h1>LoginIn Here</h1>
            <input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Your Email'></input>
            <br/>
            <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter Your Password'/>
            <br/>
            <button>Login In </button>
            <br/>
            Doesn't Have an Account<Link to={'/'}>SignuP</Link>
        </form>
    </div>
  )
}
export default Login