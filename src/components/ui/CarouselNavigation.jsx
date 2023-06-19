import React from 'react'

const CarouselNavigation = () => {
  return (
    <div className="flex self-end md:mr-[8vw] mr-0 bg-white rounded-full">
      <a href={`#slide3`} className="btn btn-ghost rounded-full">❮</a> 
      <a href={`#slide2`} className="btn btn-ghost rounded-full">❯</a>
    </div>
  )
}

export default CarouselNavigation