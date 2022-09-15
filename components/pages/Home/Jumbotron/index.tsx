import React, { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import responsive from '../../../../src/utils'
import trailers from '../../../../data/trailer'

import VideoItem from './VideoItem'
import FullVideo from './FullVideo'

interface Props {
  onVideoPopUp: (isPopUp: boolean) => void
}

const Jumbotron: React.FC<Props> = ({ onVideoPopUp }: Props) => {
  const [playingVideo, setPlayingVideo] = useState<string>('')
  const isTablet = useMediaQuery(responsive.isTablet)
  const isDesktop = useMediaQuery(responsive.isDesktop)
  const isMobile = useMediaQuery(responsive.isMobile)

  const onClickVideoItem = (index: number): void => {
    const selectedVideoTrailer = trailers[index].full
    onVideoPopUp(true)
    setPlayingVideo(selectedVideoTrailer)
  }

  const onCloseVideo = (): void => {
    onVideoPopUp(false)
    setPlayingVideo('')
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 750,
        backgroundImage: isDesktop
          ? `url(${'/images/home_jumbotron_bg_1.png'})`
          : isTablet && !isMobile
            ? `url(${'/images/home_jumbotron_bg_tablet1.png'})`
            : `url(${'/images/home_jumbotron_bg_mobile.jpg'})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        paddingBottom: (isDesktop || isTablet) && !isMobile ? 20 : '80px'
      }}
    >

      {/* Full Video */}
      <FullVideo
        video={playingVideo}
        onCloseVideo={onCloseVideo}
      />

      {/* List of Short Videos */}
      <Box
        sx={{
          paddingTop: '400px'
        }}
      >
        <Box
          sx={{
            width: isDesktop
              ? '600px'
              : isTablet && !isMobile ? '550px' : '290px',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: (isDesktop || isTablet) && !isMobile
              ? 'row'
              : 'column'
          }}
        >
          {
            trailers.map((trailer, key) => (
              <Box
                key={key}
                sx={{
                  marginBottom: (isDesktop || isTablet) && !isMobile
                    ? 0
                    : '20px',
                  width: isDesktop
                    ? '280px'
                    : isTablet && !isMobile ? '255px' : '100%'
                }}
              >
                <VideoItem
                  onClick={onClickVideoItem}
                  index={key}
                  video={trailer.short}
                  title={trailer.title}
                />
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Jumbotron
