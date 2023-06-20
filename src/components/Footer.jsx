import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="footer py-12 px-4 flex flex-wrap items-center justify-between bg-black">
    <div className='py-16 px-4'>
        <p className='text-base-100 text-xl'>Meet our Team !</p>
        <a href='/' className="footer-description text-3xl font-bold flex gap-2">Drop a Hello <img src='/images/Left Arrow.png' alt='Left Arrow'/></a> 
    </div>
    <div className='flex flex-col items-center'>
      <img src="/images/Footer Logo.png" alt="Avex Logo" />
      <p className='text-lg text-base-100'><a href="/">Downloads</a> | <a href="/">Blogs</a> | <a href="/">Terms</a> | <a href="/">Privacy</a></p>
          <div className="flex">
          <a href="https://github.com/Torque44" target="_blank" rel="noopener noreferrer" className="mb-0 ml-0 instagram-link"><img src="/images/github.png" alt="GitHub" /></a>
          <a href="https://twitter.com/AyushyaJain" target="_blank" rel="noopener noreferrer" className="mb-0 ml-8 instagram-link"><img src="/images/twitter.png" alt="Twitter" /></a>
          <a href="mailto:ayushya2002@gmail.com" className="mb-0 ml-8 instagram-link"><img src="/images/mail.png.png" alt="Mail" /></a>
          <img src="/images/phone.png" alt="Phone" className="mb-0 ml-8 instagram-link" />
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mb-0 ml-7 instagram-link"><img src="/images/Vector.png" alt="Instagram" /></a>
        </div>
    </div> 
    <form action="#" className=''>
      <label htmlFor="footer-input" className='block text-lg text-base-100'>Subscribe to our newsletter</label>
      <div className='flex gap-2'>
        <input type="email" placeholder="abc@example.com" className="input w-full max-w-xs inline" />
        <button type="submit" className='btn rounded-lg'><img src="/images/Send.png" alt="Send" /></button>
      </div>
    </form>
    </footer>
    <footer className="p-4 text-center bg-[#1E1E1E] text-base-100">
      <p><span className='font-bold'>A product of</span> © Avex Technology Private Limited</p>
    </footer>
    </>
  )
}

export default Footer
