import React from 'react'

const CarouselItem = ({index, heading, subheading, paragraph, link}) => {
  console.log(index)
  return (
    <article id={`slide${index}`} className="carousel-item max-w-[268px] flex-col gap-2 border-2 p-4 bg-white rounded-lg overflow-visible hover:scale-105 duration-300">
      <img src='/images/Coins.png' alt='Coins' width={30} height={30}/>
      <h2 className='text-2xl font-bold'>{heading}</h2>
      <strong className='text-lg'>{subheading}</strong>
      <p>{paragraph}</p>
      <a href={`${link}`} className=' text-primary mt-8'>Learn More ❯</a>
    </article> 
  )
}

export default CarouselItem