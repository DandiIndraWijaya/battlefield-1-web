import React, { useState } from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const WarStory: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState(0)
  const isMobile = useMediaQuery('(max-width:600px)')
  const isTablet = useMediaQuery('(max-width:959px)')

  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: isMobile ? '30px' : isTablet ? '100px' : '300px',
    slidesToShow: 1,
    speed: 500,
    dots: false
  }

  const warStory = [
    {
      image: '/images/high_place.png',
      title: 'High Place',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      image: '/images/avanti.png',
      title: 'Avanti',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      image: '/images/the_runner.png',
      title: 'The Runer',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
  ]

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
          fontSize: 40,
          fontWeight: 'semi-bold'
        }}>
        War Story
      </Typography>
      <Box
        sx={{
          paddingX: 30,
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
              fontSize: 28,
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
              fontSize: 18,
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
