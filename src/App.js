import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Slider from './components/Slider'
import Features from './components/Features'
import Collage from './components/Collage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Slider />
      <Features />
      <Collage />
      <Footer />
    </div>
  )
}

export default App