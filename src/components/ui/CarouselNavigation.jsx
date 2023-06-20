import React from 'react'

const CarouselNavigation = () => {
  return (
    <div className="flex self-end rounded-full bg-base-200">
      <a href={`#slide3`} className="btn rounded-full">❮</a> 
      <a href={`#slide2`} className="btn rounded-full">❯</a>
    </div>
  )
}

export default CarouselNavigation