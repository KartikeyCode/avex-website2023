import { React, useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex place-items-center justify-center min-h-screen">
      <motion.div 
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="text-center z-10 p-4"
      >
        <p className="z-10 text-lg sm:text-2xl font-bold mb-2"> Control your finance, Own your data, <br /> embrace your community{" "} </p>
        <p className="text-md mb-4 max-w-md"> An ecosystem around decentralized identity to control your money, data and communities at one convenient place.</p>
        <button className="btn bg-black px-12 rounded-full text-white hover:bg-primary hover:drop-shadow-xl"> Join Waitlist </button>
      </motion.div>
    </div>
  );
};

export default About;
