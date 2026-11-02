import React,{Suspense,lazy} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'

import Navbar from './26.Suspense and LazyLoading/Navbar'

const App = () => {

  const Home = lazy(()=>import('./26.Suspense and LazyLoading/Home'))
  const About = lazy(()=>import('./26.Suspense and LazyLoading/About'))

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<h1>Loading....</h1>}>
            <Home/>
          </Suspense>
        }/>
        <Route path='/about' element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <About/>
          </Suspense>
        }/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App