import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Movies from './pages/Movies'
import SeatLayout from './pages/SeatLayout'
import MovieDetails from './pages/MovieDetails'
import Home from './pages/home'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
      </Routes>

      
    </>
  )
}

export default App
