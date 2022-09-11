/* eslint-disable max-len */
import React, { useState } from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import warStory from '../../../../data/warStory'
import responsive from '../../../../src/utils'

const WarStory: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState(0)
  const isTablet = useMediaQuery(responsive.isTablet)
  const isDesktop = useMediaQuery(responsive.isDesktop)
  const isMobile = useMediaQuery(responsive.isMobile)

  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: (isDesktop || isTablet) && !isMobile ? '30%' : '20%',
    slidesToShow: 1,
    speed: 500,
    dots: false
  }

  return (
    <Box
      sx={{
        paddingBottom: 20
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          color: 'gray',
          letterSpacing: 2,
          fontSize: (isDesktop || isTablet) && !isMobile ? '40px' : '28px',
          fontWeight: 'semi-bold'
        }}>
        War Story
      </Typography>
      <Box
        sx={{
          paddingX: isDesktop
            ? '200px'
            : isTablet && !isMobile ? '100px' : '35px',
          marginTop: -2
        }}
      >
        <Slider
          afterChange={(index) => setSelectedStory(index)}
          arrows={true}
          {...settings}
        >
          {
            warStory.map((story, key) => (
              <img
                key={key}
                src={story.image}
                alt="heheh"
                className='image_carousel'
              />
            ))
          }
        </Slider>
        <Box>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#ffff',
              fontSize: (isDesktop || isTablet) && !isMobile ? '28px' : '18px',
              textDecoration: 'underline',
              fontWeight: 'semi-bold',
              letterSpacing: 2
            }}
          >
            {warStory[selectedStory].title}
          </Typography>
          <Typography
            sx={{
              color: '#ffff',
              fontSize: (isDesktop || isTablet) && !isMobile ? '18px' : '14px',
              marginTop: 3,
              letterSpacing: 2
            }}
          >
            {warStory[selectedStory].description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default WarStory
