import React from 'react'
import { Container } from 'react-bootstrap'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/customer/HomeScreen'
import SignInScreen from './screens/customer/SignInScreen'
import RegisterScreen from './screens/customer/RegisterScreen'
import EventListScreen from './screens/customer/EventListScreen'
import HarrowMovieHallScreen from './screens/customer/HarrowMovieHallScreen'
import MovieProfileScreen from './screens/customer/MovieProfileScreen'

import Footer from './components/Footer'  

const App = () => {
  return (
    <Router>
      <Header/>
       <main className='py-3'>
          <Container className='flex-fill d-flex'>
          <Routes>
              <Route path='/' element={<HomeScreen />} exact/>
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/login' element={<SignInScreen />} />
              <Route path='/events' element={<EventListScreen />} />
              <Route path='/movieScreens' element={<HarrowMovieHallScreen />} />
              <Route path='/movieProfile' element={<MovieProfileScreen />} />

              
              



          </Routes>
          </Container>
       </main>
          
       
    <Footer />
      </Router>

  )
}

export default App