import React from 'react'

import Carousel from './ui/Carousel'
import CarouselNavigation from './ui/CarouselNavigation'

const Slider = () => {

  const [currentSlide, setCurrentSlide] = React.useState(0)

  return (
    <section className='flex flex-col gap-4'>
      <div className='flex justify-between'>
        <article className='ml-4'>
        <h1 className="text-4xl font-normal leading-58 tracking-normal text-left mb-8">
       <span className="text-blue-500">Decentralized Identity</span><br/>
      <span className="text-white">Ecosystem</span>
      </h1>

      <p className="font-inter text-base font-normal leading-5 tracking-normal text-left mt-8">
  Manage and own your online identity with self-sovereign identity. Safely<br /> control and shape your personal information giving you freedom and  <br /> choice. Own your digital story and reflect your true self.</p>

        </article>
        <CarouselNavigation />
      </div>
      <Carousel />
    </section>
  )
}

export default Slider