import { React, useRef } from "react";
import { motion, useInView } from "framer-motion";

import smile from "../assets/images/recvec.svg";

const Collage = () => {
  const windowWidth = useRef(window.innerWidth);
  const shouldDisableScrollAnimation = windowWidth.current <= 500;
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  // let style1  = {
  //   transform: isInView2 ? "none" : "translateY(100px)",
  //   opacity: isInView2 ? 1 : 0,
  //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  // }
  // let style2  = {
  //   transform: isInView2 ? "none" : "translateY(100px)",
  //   opacity: isInView2 ? 1 : 0,
  //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  // }
  // if(!shouldDisableScrollAnimation){
  //   style1 = {
  //     transform: isInView2 ? "none" : "translateX(-100px)",
  //     opacity: isInView2 ? 1 : 0,
  //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  //   }
  //   style2 = {
  //     transform: isInView2 ? "none" : "translateX(100px)",
  //     opacity: isInView2 ? 1 : 0,
  //     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  //   }
  // }
  

  return (
    <div className="mb-36 grid grid-cols-1 sm:grid-cols-[1.79fr_1fr] gap-2 p-4 max-w-7xl mx-auto">
      
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
          <div className=""><img src="/images/Banner1.png" alt="Girl"/></div>
          <div className="bg-white px-6 py-2">
            <div className="flex gap-2 py-10">
              <div className="rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]"><img src={smile} alt="smile"/></div>
              <h1 className="text-[#000] font-medium text-lg ">{" "}Security{" "}</h1>
            </div>
            <h1 className="text-[#525151] text-2xl font-bold  mb-4"> Say Goodbye to Hacks </h1>
            <p className="text-[#525151] font-medium text-xl  max-w-md">Never worry about scams and privacy leaks. All your assets and valuables are protected in a self-custodial way using our 3FA protection making it hack proof and easily recoverable.  </p>
            <p className="text-[#525151] font-medium text-xl mt-4 max-w-md">Three Factor Authentication -<br/> • Email <br/>• Face <br/>• MPC </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        // style={style1}
        className="col-start-1 col-end-2 flex flex-col drop-shadow-2xl"
      >
        <div className="flex flex-col px-8 py-8 bg-white p-4">
          <div className="flex gap-2">
            <div className="rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]"><img src={smile} alt="smile"/></div>
            <h1 className="text-[#000] font-medium text-lg">{" "}Banking{" "}</h1>
          </div>
          <h1 className="text-[#525151] mt-4 text-2xl font-bold">{" "}Fait Payments Made Better{" "}</h1>
          <p className="text-[#525151] mt-4 text-lg font-normal max-w-2xl">{" "}Maximize convenience, minimize fees by integrating bank accounts, enabling local and card payments for a seamless banking experience.{" "}</p>
        </div>
        <img
          alt="girlphone2"
          src="/images/Banner2.png"
        />
      </motion.div>

      <motion.div
        // style={style2}
        className="flex flex-col drop-shadow-2xl"
      >
        <img alt="iphone" src="/images/Banner3.png" className="aspect-square"/>
        <div className="flex flex-col p-4 py-8 px-8 bg-white">
          <div className="flex gap-2">
            <div className="rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]"><img src={smile} alt="smile"/></div>
            <h1 className="text-[#000] font-medium text-lg">{" "}Messaging and DAO{" "}</h1>
          </div>
            <h1 className="text-[#525151] mt-4 text-2xl font-bold">{" "}Networking Redefined{" "}</h1>
            <p className="text-[#525151] mt-4 text-lg font-normal mb-1">{" "}Create and manage communities effortlessly with comprehensive DAO tooling and secure private messaging.{" "}</p>
        </div>
      </motion.div>

      </div>
  );
};

export default Collage;
