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
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Timeline
      align="left"

      style={{ margin: 0, padding: 0, position: 'relative', left: '-480px' }}
    >
      {slides.map((slide, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot
              color="primary"
              variant="outlined"
              sx={{
                backgroundColor: 'black',
                transition: 'background-color 0.3s',
                position: 'relative',
                width: '40px', // Adjust the width of the circle as needed
                height: '40px', // Adjust the height of the circle as needed
                '&:hover': {
                  backgroundColor: 'white',
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
                },
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={slide.image}
                alt={`Image ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  filter: hovered ? 'invert(100%)' : 'none',
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
  );
};

export default Carousel;

