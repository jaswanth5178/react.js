import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'
import Create from './23.Axios CCRUD/Create'
import Home from './23.Axios CCRUD/Home'
import Edit from './23.Axios CCRUD/Edit'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App