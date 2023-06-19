import React from 'react'

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
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse items-start justify-center gap-12">
        <div className='flex flex-col items-center gap-12'>
            <img src='/images/Screen.png' alt='Iphone' className=''/>
            <button className="btn btn-primary"><a href="/">Try now</a></button>
        </div>
        <div>
        <h1 className="text-2xl font-bold mb-12 text-blue-500">Wallet features</h1>
            {FeaturesDetails.map((feature, index) => <Accordian key={index} {...feature} />)}
        </div>
    </div>
    </div>
  )
}

export default Features