import {React,useRef} from 'react'
import { motion, useInView } from "framer-motion";


import girlphone1 from "../assets/images/girlphone.png"
import girlphone2 from "../assets/images/girlphone2.png"
import iphone from "../assets/images/iPhone.png"
import smile from "../assets/images/recvec.svg"

const Collage = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  return (
    <div className='flex flex-col justify-center items-center mb-60'>
      <motion.div ref={ref} style={{
              transform: isInView ? "none" : "translateY(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}>
        <div className='flex drop-shadow-2xl'>
          <div className='w-[883px] h-[678px] overflow-hidden'>
          <img className='hover:scale-110 w-[883px] h-[678px] transition ease-in-out delay-150 duration-500' src={girlphone1} />
          </div>
          <div className='flex flex-col px-9 py-14  w-[363px] h-[678px] bg-white'>
          <div className='flex'>
          <div className='rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]'>
            <img src={smile} />
          </div>
          <h1 className='text-[#000] ml-[13px] font-medium text-lg'> Security </h1>
          </div>
          <div className='w-[244px]'>
          <h2 className='text-[#525151] mt-[30px] text-2xl font-bold'> Lorem ipsum dolor sit amet consectetur. Eleifend vitae neque urna sapien nisl.  </h2>
          </div>
          </div>
        </div>
      </motion.div>

      <div ref={ref2} className='flex gap-16 justify-center items-center mt-[69px]'>
      <motion.div style={{
              transform: isInView2 ? "none" : "translateX(-100px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}  
            className='flex flex-col justify-center  items-center drop-shadow-2xl'>
          <div className='flex flex-col px-9 py-14  w-[708px] h-[280px]  bg-white'>
          <div className='flex'>
          <div className='rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]'>
            <img src={smile} />
          </div>
          <h1 className='text-[#000] ml-[13px] font-medium text-lg'> Banking </h1>
          </div>
          <div className='w-[449px]'>
          <h2 className='text-[#525151] mt-[30px] text-2xl font-bold'> Lorem ipsum dolor sit 
amet consectetur. Eleifend vitae .  </h2>
          </div>
          </div>
          <div className='w-[708px] h-[470px] overflow-hidden'>
          <img className='  w-[708px] h-[470px] hover:scale-110 transition ease-in-out delay-150 duration-500' src={girlphone2} />
          </div>
        </motion.div>

        <motion.div style={{
              transform: isInView2 ? "none" : "translateX(100px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }} className='flex justify-center items-center flex-col mb-[2px] drop-shadow-2xl'>
          <div className='overflow-hidden w-[470px] h-[480px]'>
          <img className=' hover:scale-110 transition ease-in-out delay-150 duration-500  -mt-[7px] w-[480px] h-[490px]' src={iphone} />
          </div>
          <div className='flex flex-col px-9 py-14  w-[470px] h-[270px]  bg-white'>
          <div className='flex'>
          <div className='rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]'>
            <img src={smile} />
          </div>
          <h1 className='text-[#000] ml-[13px] font-medium text-lg'> Messaging </h1>
          </div>
          <div className='w-[449px]'>
          <h2 className='text-[#525151] mt-[30px] text-2xl font-bold'> Lorem ipsum dolor sit 
amet consectetur.   </h2>
          </div>
          </div>
        </motion.div>

      </div>

    

    </div>
  )
}

export default Collage