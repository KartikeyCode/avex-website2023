import {useState,useEffect,React} from 'react'
import {motion,AnimatePresence} from "framer-motion"

import './App.css'

import PreLoader from './components/PreLoader'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Slider from './components/Slider'
import Features from './components/Features'
import Collage from './components/Collage'
import Footer from './components/Footer'

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1500);
  },[])

  return (
    <div className='bg-[#F2F2F2]'>
      {loading ? (
        <PreLoader />
      ) 
        :
        (
          <motion.div animate={{opacity:[0,1]}} transition={{ease:"easeInOut", duration:2}} className=''>
          <Navbar />
          <Hero />
          <About/>
          <Slider />
          <Features />
          <Collage />
          <Footer />
        </motion.div>
    
        )
    }
    
    </div>
  )
}

export default App