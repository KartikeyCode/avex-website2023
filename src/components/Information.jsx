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
        badge: "Access Control",
        heading: "Flexible Accessibility Rules",
        details: "Grant access to your content only to eligible participants who meet your accessibility criteria rules.",
        colour: "pink",
    },
    {
        id: 3,
        badge: "Self Sovereign ID",
        heading: "Your ID, Your Rules",
        details: "Take full control over your identity and own your digital story. Reflect your true self to the world.",
        colour: "green",
    },
    {
        id: 4,
        badge: "Data Portability & Monetization",
        heading: "Take Your Data Wherever You Go",
        details: "Unlock the true potential of your data by seamlessly moving your digital valuables across platforms with the opportunity to monetize it.",
        colour: "gray",
    },
    {
        id: 5,
        badge: "Avex Handles",
        heading: "One ID to live the internet.",
        details: "Claim your .avex handle for an unified experience across all apps and blockchain networks.",
        colour: "yellow",
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