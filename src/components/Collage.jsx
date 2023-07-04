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
    <div className="flex flex-col justify-center items-center mb-60">
      <motion.h1 ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}  className="font-bold text-[#000] text-6xl self-start ml-5 md:ml-36 mb-7"> Security </motion.h1>
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="flex flex-col md:flex-row  drop-shadow-2xl">
          <div className="md:w-[883px] w-[380px] md:h-[678px] overflow-hidden">
            <img
              className="hover:scale-110 md:w-[883px] md:h-[678px] transition ease-in-out delay-150 duration-500"
              src={girlphone1}
            />
          </div>
          <div className="flex flex-col px-9 py-14 w-[380px]  md:w-[363px] md:h-[678px] bg-white">
            <div className="flex">
              <div className="rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]">
                <img src={smile} />
              </div>
              <h1 className="text-[#000] ml-[13px] font-medium text-lg">
                {" "}
                Security{" "}
              </h1>
            </div>
            <div className=" md:w-[244px]">
              <h2 className="text-[#525151] mt-[30px] text-2xl font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Eleifend vitae neque
                urna sapien nisl.{" "}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>

      <div
        ref={ref2}
        className="flex md:flex-row flex-col gap-16 justify-center items-center mt-[69px]"
      >
        <motion.div
          style={style1}
          className="flex flex-col justify-center  items-center drop-shadow-2xl"
        >
          <div className="flex flex-col px-9 py-14 w-[380px]  md:w-[708px] md:h-[280px]  bg-white">
            <div className="flex">
              <div className="rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]">
                <img src={smile} />
              </div>
              <h1 className="text-[#000] ml-[13px] font-medium text-lg">
                {" "}
                Banking{" "}
              </h1>
            </div>
            <div className=" md:w-[449px]">
              <h2 className="text-[#525151] mt-[30px] text-2xl font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Eleifend vitae .{" "}
              </h2>
            </div>
          </div>
          <div className=" md:w-[708px] md:h-[470px] overflow-hidden">
            <img
              className="  md:w-[708px] md:h-[470px] hover:scale-110 transition ease-in-out delay-150 duration-500"
              src={girlphone2}
            />
          </div>
        </motion.div>

        <motion.div
          style={style2}
          className="flex justify-center items-center flex-col mb-[2px] drop-shadow-2xl"
        >
          <div className="overflow-hidden w-[380px] md:w-[470px] md:h-[480px]">
          <img
              className=" hover:scale-110 transition ease-in-out delay-150 duration-500  md:-mt-[7px] md:w-[480px] md:h-[490px]"
              src={iphone}
            />
          </div>
          <div className="flex flex-col px-9 py-14  md:w-[470px] md:h-[270px]  bg-white">
            <div className="flex">
            <div className="rounded-[4px] flex justify-center items-center bg-[#0568FD] w-[30px] h-[30px]">
                <img src={smile} />
              </div>
              <h1 className="text-[#000] ml-[13px] font-medium text-lg">
                {" "}
                Messaging{" "}
              </h1>
            </div>
            <div className="md:w-[449px]">
              <h2 className="text-[#525151] mt-[30px] text-2xl font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur.{" "}
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Collage;
