import React from 'react'
import CarouselItem from './CarouselItem'

const slides = [
  {
    heading: "Zk KYC",
    subheading: 'Your ID, Your Rules',
    paragraph: 'Manage and own your online identity with self-sovereign identity. Safely control and shape your personal information giving you freedom and choice. Own your digital story and reflect your true self.'
  },
  {
    heading: "Self Sovereign Identity",
    subheading: 'Your ID, Your Rules',
    paragraph: 'Manage and own your online identity with self-sovereign identity. Safely control and shape your personal information giving you freedom and choice. Own your digital story and reflect your true self. '
  },
  {
    heading: "Permmissioned Accessibility",
    subheading: 'Your ID, Your Rules',
    paragraph: 'Manage and own your online identity with self-sovereign identity. Safely control and shape your personal information giving you freedom and choice. Own your digital story and reflect your true self. '
  },
]

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-4xl p-4 space-x-4 self-end">
      {slides.map((slide, index) => <CarouselItem key={index} index={index} {...slide} />)}
    </div>
  )
}

export default Carousel