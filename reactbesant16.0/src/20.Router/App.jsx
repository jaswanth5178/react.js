import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'
import Home from './20.Router/Home'
import About from './20.Router/About'
import Contact from './20.Router/Contact'
import Navbar from './20.Router/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App