import React from 'react'

import Carousel from './ui/Carousel'
import CarouselNavigation from './ui/CarouselNavigation'

const Slider = () => {

  const [currentSlide, setCurrentSlide] = React.useState(0)

  return (
    <section className='flex flex-col gap-4'>
      <div className='flex justify-between'>
        <article className='ml-4'>
          <h1 className="text-4xl font-bold">Slider</h1>
          <p className="text-center">This is a slider component.</p>
        </article>
        <CarouselNavigation />
      </div>
      <Carousel />
    </section>
  )
}

export default Slider