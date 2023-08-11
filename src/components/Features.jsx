import React, { useState } from 'react';
import Accordian from './ui/Accordian';

const FeaturesDetails = [
  {
    heading: 'Transaction Readability',
    paragraph: 'Truly understand your contact details and signature requests in a user friendly way allowing you to verify the specifics before signing any transactions.',
  },
  {
    heading: 'Chain Agnostics',
    paragraph: 'Manage assets over diverse ecosystem of over 14 blockchain networks with support to additional networks soon.',
  },
  {
    heading: 'Eliminate Public Keys',
    paragraph: 'Experience a unified blockchain experience by sending and receiving assets across multiple networks and apps using the .avex handle',
  },
  {
    heading: 'Advanced Send',
    paragraph: 'Automatically consolidate and transfer scattered tokens across various networks ensuring the recipient receive the requested tokens in their preferred network.',
  },
  {
    heading: 'Scam Detection',
    paragraph: 'Stop losing your money and getting scammed by receiving alerts before signing any suspicious scam or faulty transactions.',
  },
  {
    heading: 'DeFi',
    paragraph: 'Get full access to DeFi activities like lending, borrowing, swapping, staking, bridging, and more across multiple networks all in one app',
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="hero my-28">
      <div className="flex z-0 flex-col lg:flex-row-reverse items-center md:justify-between bg-black rounded-xl p-4">
        <img src="/images/Screen.png" alt="Iphone" className=" max-w-lg" />
        <div className=" ml-[10px] xl:ml-[128px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-14 text-transparent bg-clip-text bg-gradient-to-b from-[#DF5AE1] to-[#465DD8] ">Wallet Features</h1>
          {FeaturesDetails.map((feature, index) => (
            <Accordian
              key={index}
              {...feature}
              index={index}
              activeIndex={activeIndex}
              toggleAccordion={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
