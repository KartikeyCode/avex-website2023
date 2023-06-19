import React from 'react'
import CarouselItem from './CarouselItem'

const slides = [
  {
    heading: 'Heading 1',
    subheading: 'Subheading 1',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos, rerum modi id optio iure maxime eum impedit quaerat assumenda sapiente in adipisci dolorum voluptates voluptate alias incidunt, at eveniet.'
  },
  {
    heading: 'Heading 2',
    subheading: 'Subheading 2',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos, rerum modi id optio iure maxime eum impedit quaerat assumenda sapiente in adipisci dolorum voluptates voluptate alias incidunt, at eveniet.'
  },
  {
    heading: 'Heading 3',
    subheading: 'Subheading 3',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos, rerum modi id optio iure maxime eum impedit quaerat assumenda sapiente in adipisci dolorum voluptates voluptate alias incidunt, at eveniet.'
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