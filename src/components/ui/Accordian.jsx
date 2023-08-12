import React, { useState } from 'react';
import {motion} from "framer-motion"
const Accordian = ({ heading, paragraph, index, activeIndex, toggleAccordion }) => {
  const isOpen = index === activeIndex;
  const paragraphVariants = {
    hidden: { opacity: 0,y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="mb-6">
      <div
        className="flex items-center justify-between cursor-pointer text-white"
        onClick={()=> toggleAccordion(index)}
      >
        <div className="flex items-center">
          <div className={`w-3 h-3 mr-2 rounded-full ${isOpen ? 'bg-white' : 'bg-black border-[3px]'}`}></div>
          <h2 className="text-xl md:text-2xl font-medium">{heading}</h2>
        </div>
      </div>
      {isOpen && <motion.p
       variants={paragraphVariants}
       initial="hidden"
       animate="visible"
       className="mt-2 md:ml-5 max-w-xl min-w-[268px] md:text-lg text-base text-white">{paragraph}</motion.p>}
    </div>
  );
};

export default Accordian

