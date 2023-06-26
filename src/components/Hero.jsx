import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
  {
    path: Image15,
    top: 730,
    left: -2
  },
  {
    path: Image16,
    top: 848,
    left: 174
  },
  {
    path: Image17,
    top: 1133,
    left: 16
  },
  {
    path: Image18,
    top: 1197,
    left: 253
  },
  {
    path: Image19,
    top: 1089,
    left: 410
  },
  {
    path: Image20,
    top: 1362,
    left: 624
  },
  {
    path: Image21,
    top: 838,
    left: 1398
  },
  {
    path: Image22,
    top: 900,
    left: 1131
  },
  {
    path: Image23,
    top: 950.25,
    left: 1242
  },
  {
    path: Image24,
    top: 1153,
    left: 1107
  },
  {
    path: Image25,
    top: 1136.75,
    left: 1356
  },
  {
    path: Image26,
    top: 1352,
    left: 870
  },
  {
    path: Image27,
    top: 1430,
    left: 1227
  },
];

const Hero = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutBottom = aboutRef.current.getBoundingClientRect().bottom;

      const element = document.querySelector('.move-down-text');
      if (element && scrollPosition < aboutBottom) {
        const distanceToBottom = aboutBottom - element.getBoundingClientRect().bottom;
        const translateY = Math.max(0, scrollPosition - distanceToBottom);

        const stopPosition = aboutBottom - 0;

        if (translateY <= stopPosition) {
          const fontSize = 20 + (translateY / 10); // Increase the font size based on the translateY value

          gsap.to(element, { y: translateY, fontSize: `${fontSize}px` }); // Animate the translateY and fontSize properties using GSAP
        } else {
          gsap.to(element, { y: stopPosition }); // Animate to the stop position
        }
      }
    };
 window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero min-h-screen bg-base-100 relative overflow-x-clip">
      {Images.map((image, index) => (
        <img
          key={index}
          src={image.path}
          alt={index}
          style={{ position: 'absolute', top: `${image.top}px`, left: `${image.left}px` }}
          className="bg-icons"
        />
      ))}
      <div className="hero-content text-center px-4">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">Your pass to decentralized future</h1>
          <p ref={aboutRef} className="text-lg md:text-xl move-down-text">
            Control your finance, Own your data, embrace your community
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
