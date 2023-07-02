import { React, useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="hero bg-[#F2F2F2] min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-3xl" ref={ref}>
          <h1 className="text-2xl md:text-4xl leading-snug mb-4"></h1>
          <motion.p
            style={{
              transform: isInView ? "none" : "translateY(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="text-xs md:text-xl mb-8"
          >
            An ecosystem around decentralized identity to control your <br />
            money, data and communities at one convenient place.
          </motion.p>
          <button
            style={{
              transform: isInView ? "none" : "translateY(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="btn bg-black px-12 rounded-full text-white hover:bg-primary hover:drop-shadow-xl "
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
