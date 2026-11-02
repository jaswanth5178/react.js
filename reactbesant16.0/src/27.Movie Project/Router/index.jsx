import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import Home from '../Pages/Home'
import Tvseries from '../Pages/Tvseries'
import MovieDetails from '../Pages/MovieDetails'

const index = ({data,tv,search,setSearch}) => {
  return (
    <div>
        <BrowserRouter>
        <Navbar search={search} setSearch={setSearch}/>
        <Routes>
            <Route path="/"element={<Home data={data} search={search} />}/>
            <Route path="/tvseries"element={<Tvseries search={search} />}/>
            <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default index