import React from "react";
import {motion} from 'framer-motion'
import Image1 from "../assets/images/1.png";
import Image2 from "../assets/images/2.png";
import Image3 from "../assets/images/3.png";
import Image4 from "../assets/images/4.png";
import Image5 from "../assets/images/5.png";
import Image6 from "../assets/images/6.png";
import Image7 from "../assets/images/7.png";
import Image8 from "../assets/images/8.png";
import Image9 from "../assets/images/9.png";
import Image10 from "../assets/images/10.png";
import Image11 from "../assets/images/11.png";
import Image12 from "../assets/images/12.png";
import Image13 from "../assets/images/13.png";
import Image14 from "../assets/images/14.png";
import Image15 from "../assets/images/15.png";
import Image16 from "../assets/images/16.png";
import Image17 from "../assets/images/17.png";
import Image18 from "../assets/images/18.png";
import Image19 from "../assets/images/19.png";
import Image20 from "../assets/images/20.png";
import Image21 from "../assets/images/21.png";
import Image22 from "../assets/images/22.png";
import Image23 from "../assets/images/23.png";
import Image24 from "../assets/images/24.png";
import Image25 from "../assets/images/25.png";
import Image26 from "../assets/images/26.png";
import Image27 from "../assets/images/27.png";

const Images = [
    {
      path: Image1,
      top: -25,
      left: 68
    },
    {
      path: Image2, 
      top: 83,
      left: 370
    },
    {
      path: Image3,
      top: 218,
      left: 95
    },
    {
      path: Image4,
      top: 92,
      left: 447
    },
    {
      path: Image5,
      top: 222,
      left: 274
    },
    {
      path: Image6,
      top: 346,
      left: 38
    },
    {
      path: Image7,
      top: 601,
      left: 274
    },
    {
      path: Image8,
      top: 576,
      left: -24
    },
    {
      path: Image9,
      top: 82,
      left: 937
    },
    {
      path: Image10,
      top: -6,
      left: 1055
    },
    {
      path: Image11,
      top: -11,
      left: 1320
    },
    {
      path: Image12,
      top: 174,
      left: 1000
    },
    {
      path: Image13,
      top: 267,
      left: 1308
    },
    {
      path: Image14,
      top: 523,
      left: 1172
    },
    
  ];
  

const PreLoader = ()=>{

    const shakeAnimation = {
        shaky: {
          
          opacity:[1,1,1,1,0,0,0],
          scale:5
        },
      };
    
      const explosionAnimation = {
        explode: {
          scale: [1, 1.5, 2, 2.5, 3], // Define a series of scaling values
          opacity: [1, 0.8, 0.6, 0.4, 0], // Define a series of opacity values
        },
      };

    return(
        <motion.div animate={{opacity:[1,1,1,1,1,1,0]}} transition={{ease:"easeInOut", duration:4}} className="overflow-clip relative min-h-screen flex justify-center items-center preloader bg-black">
            <motion.div initial={{opacity:0, scale: 0}} animate="shaky" variants={shakeAnimation} transition={{ duration:4,}} className="">
           <div className="bg-white rounded-full w-24 h-24 flex justify-center items-center">
            <img src="/images/Logo.png" />
           </div>
            </motion.div>
        </motion.div> 
    )
}

export default PreLoader;