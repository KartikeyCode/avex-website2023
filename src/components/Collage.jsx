import React from 'react'

const Collage = () => {
  return (
    <section className='grid grid-cols-[5fr_7fr] max-w-6xl md:mx-auto mx-4 gap-8'>
      <div className="bg-black col-span-full object-cover">
        <img src="/images/Banner 1.png" alt="Banner 1" loading='lazy' className='object-cover'/>
      </div>  
      <div className="bg-black">
        <img src="/images/Banner 2.png" alt="Banner 2" loading='lazy'/>
      </div>  
      <div className="bg-black">
        <img src="/images/Banner 3.png" alt="Banner 3" loading='lazy'/>
      </div>  
    </section>
  )
}

export default Collage