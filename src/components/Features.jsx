import React from 'react'

import Accordian from './ui/Accordian'

const FeaturesDetails = [
    {
        heading: 'Transaction Readability',
        paragraph: 'Manage assets over diverse ecosystem of over 14 blockchain networks with support to additional networks soon'
    },
    {
        heading: 'Chain Agnostics',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum!'
    },
    {
        heading: 'Eliminate Public Keys',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum!'
    },
    {
        heading: 'Advanced Send',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum!'
    },
    {
        heading: 'Scam Detection',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum!'
    },
    {
        heading: 'DeFi',
        paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum!'
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
            <h1 className="text-2xl font-bold mb-12">Wallet features</h1>
            {FeaturesDetails.map((feature, index) => <Accordian key={index} {...feature} />)}
        </div>
    </div>
    </div>
  )
}

export default Features
