import React , { useState } from 'react'

import Accordian from './ui/Accordian'

const FeaturesDetails = [
    {
        heading: 'Transaction Readability',
        paragraph: 'Truly understand your contact details and signature requests in a user friendly way allowing you to verify the specifics before signing any transactions. '
    },
    {
        heading: 'Chain Agnostics',
        paragraph: 'Manage assets over diverse ecosystem of over 14 blockchain networks with support to additional networks soon. '
    },
    {
        heading: 'Eliminate Public Keys',
        paragraph: 'Experience a unified blockchain experience by sending and receiving assets across multiple networks and apps using the .avex handle '
    },
    {
        heading: 'Advanced Send',
        paragraph: ' Automatically consolidate and transfer scattered tokens across various networks ensuring the recipient receive the requested tokens in their preferred network. '
    },
    {
        heading: 'Scam Detection',
        paragraph: 'Stop loosing your money and getting scammed by receiving alerts before signing any suspicious scam or faulty transactions. '
    },
    {
        heading: 'DeFi',
        paragraph: 'Get full access to defi activities like lending, borrowing, swapping, staking, bridging and more across multiple networks all in one app'
    }
]

const Features = () => {
  return (
    <div className="hero my-16">
    <div className="hero-content p-16 flex-col lg:flex-row-reverse items-center justify-between bg-black rounded-xl">
        <img src='/images/Screen.png' alt='Iphone' className='max-w-xl'/>
        <div>
        <h1 className="text-2xl font-bold mb-12 text-primary">Wallet features</h1>
        {FeaturesDetails.map((feature, index) => <Accordian key={index} {...feature}  isActive={index === activeIndex} toggleAccordion={() => toggleAccordion(index)}/> ))}
        </div>
    </div>
    </div>
  )
}

export default Features
