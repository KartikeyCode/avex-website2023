import React, { useState } from 'react';
import {motion,AnimatePresence} from "framer-motion"
import { Timeline, TimelineItem, TimelineSeparator, TimelineContent, TimelineDot, TimelineConnector } from '@mui/lab';

const slides = [
  { image: '/images/DOC.png' },
  { image: '/images/Customer.png' },
  { image: '/images/DOC.png' },
  { image: '/images/Customer.png' },
  { image: '/images/DOC.png' },
];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [direction, setDirection] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = (index) => {
    setCurrentSlide(index);
    setActiveIndex(index);
    setClicked(true);
  };
  return (
    <div className=''>

    <section className='bg-[#F2F2F2] flex flex-col  gap-8 py-16'>
      <div className='md:mx-[8vw] mx-4'>
        <article className='ml-4 max-w-xl z-10 mt-96'>
          <h1 className="text-5xl font-bold leading-snug mb-4"><span className="text-primary">Decentralized Identity</span> Ecosystem</h1>
          <p className="text-xl">Manage and own your online identity with self-sovereign identity. Safely control and shape your personal information giving you freedom and choice. Own your digital story and reflect your true self.</p>
        </article>
      </div>
      <div style={{ marginLeft: '-40px' }}> {/* Adjust the left margin as needed */}
      <div>

<Timeline align="left" style={{ margin: 0, padding: 0, position: 'relative', left: '-480px' }}>
  {slides.map((slide, index) => (
    <TimelineItem key={index}>
      <TimelineSeparator>
        <TimelineDot
          color="primary"
          variant="outlined"
          sx={{
            backgroundColor: clicked && activeIndex === index ? 'white' : 'black',
            transition: 'background-color 0.3s',
            position: 'relative',
            width: '40px',
            height: '40px',
            '&:hover': {
              backgroundColor: clicked && activeIndex === index ? 'white' : 'black',
            },
            ...(activeIndex === index && {
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-25%',
                left: '-25%',
                width: '150%',
                height: '150%',
                borderRadius: '50%',
                backgroundImage: 'linear-gradient(to bottom, #0595FD, #0054D2)',
                opacity: 1,
                zIndex: -1,
                transition: 'opacity 0.3s',
              },
            }),
          }}
          onClick={() => handleClick(index)}
          >
          <img
            src={slide.image}
            alt={`Image ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
              filter: clicked && activeIndex === index ? 'invert(100%)' : 'none',
              transition: 'filter 0.3s',
            }}
            />
        </TimelineDot>
        {index < slides.length - 1 && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent style={{ display: 'flex', alignItems: 'center' }}>
        {/* Remove text */}
      </TimelineContent>
    </TimelineItem>
  ))}
</Timeline>
  </div>
      </div>
    </section>
    <AnimatePresence>

    <motion.div className='w-[337px] flex flex-col items-center z-[6] h-[253px] relative top-[-350px] left-[500px] bg-[#FFFDFD] drop-shadow-xl rounded-[10px]'>
      <div className='bg-[#000] justify-center items-center flex mt-[23px] rounded-[18px] w-[194px] h-[47px]' >
      <h1 className='text-white font-semibold text-xl'> ZK SYNC </h1>
      </div>
      <div className='mt-[26.5px]  font-normal '>
      <h2 className='text-[#0568FD] font-bold text-lg'> Future of Identity Verification </h2>
      <h3 className='text-[#525151] mt-3 text-sm w-[289px]'>Prove your details without revealing sensitive data and comply with KYC regulations while maintaining privacy. </h3>
      <a href='/' className='text-[#0568FD] text-xs mt-4 '>Learn More</a>
      </div>
    </motion.div>


    <motion.div className='w-[337px] flex flex-col items-center z-[5] h-[253px] relative top-[-700px] left-[750px] bg-[#FFFDFD] drop-shadow-xl rounded-[10px]'>
      <div className='bg-[#000] justify-center items-center flex mt-[23px] rounded-[18px] w-[194px] h-[47px]' >
      <h1 className='text-white font-semibold text-xl'> Access Control </h1>
      </div>
      <div className='mt-[26.5px]  font-normal '>
      <h2 className='text-[#E905FD] font-bold text-lg'> Flexible Accessibility Rules </h2>
      <h3 className='text-[#525151] mt-3  text-sm w-[289px]'>Grant access to your content only to eligible participants who meet your accessibility criteria rules. </h3>
      <a href='/' className='text-[#0568FD] text-xs mt-4 '>Learn More</a>
      </div>
    </motion.div>

    <motion.div className='w-[337px] flex flex-col items-center z-[4] h-[253px] relative top-[-1050px] left-[1000px] bg-[#FFFDFD] drop-shadow-xl rounded-[10px]'>
      <div className='bg-[#000] justify-center items-center flex mt-[23px] rounded-[18px] w-[194px] h-[47px]' >
      <h1 className='text-white font-semibold text-xl'> Avex Handles </h1>
      </div>
      <div className='mt-[26.5px]  font-normal '>
      <h2 className='text-[#D9D223] font-bold text-lg'> One ID to live the internet. </h2>
      <h3 className='text-[#525151] mt-3 text-sm w-[289px]'>Claim your .avex handle for an unified experience across all apps and blockchain networks. </h3>
      <a href='/' className='text-[#0568FD] text-xs mt-4 '>Learn More</a>
      </div>
    </motion.div>
    </AnimatePresence>

    </div>
     
  )
}

export default Slider
