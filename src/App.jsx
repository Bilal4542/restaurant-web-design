import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeadlineCards from './Components/HeadlineCards'
import Foods from './Components/Foods'
import Category from './Components/Category'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Foods/>
      <Category/>
      <Footer/>
    </>
  )
}

export default App
