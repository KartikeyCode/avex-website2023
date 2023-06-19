import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-black text-primary-content">
    <div className='py-16 px-4'>
        <img src="/images/Footer Logo.png" alt="Avex Logo" />
        <a href='/' className="footer-description text-3xl font-bold flex gap-2">Drop a Hello <img src='/images/Left Arrow.png' alt='Left Arrow'/></a> 
    </div> 
    </footer>
  )
}

export default Footer