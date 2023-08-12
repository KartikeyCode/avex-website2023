import React from 'react'
import Card from './ui/Card'

const Data = [
    {
        id: 1,
        badge: "ZK KYC",
        heading: "Future of Identity Verification",
        details: "Prove your details without revealing sensitive data and comply with KYC regulations while maintaining privacy.",
        colour: "blue",
    },
    {
        id: 2,
        badge: "FAQ",
        heading: "What is an NFT?",
        details: "An NFT is a non-fungible token. It is a unique digital asset that is stored on the blockchain. It can be anything from a piece of art to a video clip.",
        colour: "purple",
    },
    {
        id: 3,
        badge: "FAQ",
        heading: "What is a blockchain?",
        details: "A blockchain is a digital ledger that stores data in blocks. Each block is linked to the previous block, creating a chain of blocks. It is a decentralized system, meaning that there is no central authority that controls it.",
        colour: "pink",
    },
    {
        id: 4,
        badge: "FAQ",
        heading: "What is a smart contract?",
        details: "A smart contract is a computer program that runs on the blockchain. It is a self-executing contract that is stored on the blockchain. It is a decentralized system, meaning that there is no central authority that controls it.",
        colour: "yellow",
    },
    {
        id: 5,
        badge: "FAQ",
        heading: "What is a wallet?",
        details: "A wallet is a software program that stores your private keys. It is a decentralized system, meaning that there is no central authority that controls it.",
        colour: "blue",
    },
]

const Information = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8" id='Features'>
        {Data.map((card) => (
            <Card key={card.id} badge={card.badge} heading={card.heading} details={card.details} colour={card.colour} />
        ))}
    </section>
  )
}

export default Information