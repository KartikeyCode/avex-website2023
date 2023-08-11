import { React, useRef } from "react";
import { motion, useInView } from "framer-motion";

import girlphone1 from "../assets/images/girlphone.png";
import girlphone2 from "../assets/images/girlphone2.png";
import iphone from "../assets/images/iPhone.png";
import smile from "../assets/images/recvec.svg";

const Collage = () => {
  const windowWidth = useRef(window.innerWidth);
  const shouldDisableScrollAnimation = windowWidth.current <= 500;
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  let style1  = {
    transform: isInView2 ? "none" : "translateY(100px)",
    opacity: isInView2 ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  }
  let style2  = {
    transform: isInView2 ? "none" : "translateY(100px)",
    opacity: isInView2 ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  }
  if(!shouldDisableScrollAnimation){
    style1 = {
      transform: isInView2 ? "none" : "translateX(-100px)",
      opacity: isInView2 ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    }
    style2 = {
      transform: isInView2 ? "none" : "translateX(100px)",
      opacity: isInView2 ? 1 : 0,
      transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    }
  }
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4 max-w-7xl mx-auto">
      <motion.h1 ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}  className=" col-span-full font-bold text-[#000] text-6xl self-start ml-5 md:ml-36 mb-7"> Security </motion.h1>
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="col-span-full border-2"
      >
        <div className="col-span-full flex flex-col sm:flex-row drop-shadow-2xl">
          <div className=""><img className="object-cover hover:scale-110 transition ease-in-out delay-150 duration-500" src={girlphone1} alt="Girl"/></div>
          <div className="bg-white px-4 py-2">
            <div className="flex gap-2">
              <div className="rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]"><img src={smile} alt="smile"/></div>
              <h1 className="text-[#000] font-medium text-lg">{" "}Security{" "}</h1>
            </div>
            <p className="text-[#525151] text-2xl font-bold">Lorem ipsum dolor sit amet consectetur. Eleifend vitae neque urna sapien nisl.</p>
          </div>
        </div>
      </motion.div>

      {/* <motion.div
        style={style1}
        className="col-start-1 col-end-2 flex flex-col drop-shadow-2xl"
      >
        <div className="flex flex-col bg-white p-4">
          <div className="flex gap-2">
            <div className="rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]"><img src={smile} alt="smile"/></div>
            <h1 className="text-[#000] font-medium text-lg">{" "}Banking{" "}</h1>
          </div>
          <p className="text-[#525151] mt-4 text-2xl font-bold">{" "}Lorem ipsum dolor sit amet consectetur. Eleifend vitae .{" "}</p>
        </div>
        <img
          alt="girlphone2"
          className="hover:scale-105 transition ease-in-out delay-150 duration-500"
          src={girlphone2}
        />
      </motion.div>

      <motion.div
        style={style2}
        className="flex flex-col drop-shadow-2xl"
      >
        <img
          alt="iphone"
          className="hover:scale-110 transition ease-in-out delay-150 duration-500"
          src={iphone}
        />
        <div className="flex flex-col p-4 bg-white">
          <div className="flex gap-2">
            <div className="rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]"><img src={smile} alt="smile"/></div>
            <h1 className="text-[#000] font-medium text-lg">{" "}Messaging{" "}</h1>
          </div>
            <p className="text-[#525151] mt-4 text-2xl font-bold">{" "}Lorem ipsum dolor sit amet consectetur.{" "}</p>
        </div>
      </motion.div> */}

      </div>
  );
};

export default Collage;
