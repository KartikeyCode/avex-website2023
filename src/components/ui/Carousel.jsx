import React, { useState } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineContent, TimelineDot, TimelineConnector } from '@mui/lab';

const slides = [
  { image: '/images/DOC.png' },
  { image: '/images/Customer.png' },
  { image: '/images/DOC.png' },
  { image: '/images/Customer.png' },
  { image: '/images/DOC.png' },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
    setClicked(true);
  };

  return (
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
  );
};

export default Carousel;