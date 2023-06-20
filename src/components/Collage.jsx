import React from 'react'

const Collage = () => {
  return (
    <section className='grid grid-cols-[5fr_7fr] max-w-6xl md:mx-auto mx-4 my-16 gap-8'>
      <img src="/images/Banner 1.png" alt="Banner 1" loading='lazy' className='w-full col-span-full bg-base-300 pr-[24vw]'/>
      <img src="/images/Banner 2.png" alt="Banner 2" loading='lazy'className='w-full h-full bg-black pt-[16vh]'/>
      <img src="/images/Banner 3.png" alt="Banner 3" loading='lazy' className='w-full h-full bg-base-300 pb-[16vh]'/>
    </section>
  )
}

export default Collage