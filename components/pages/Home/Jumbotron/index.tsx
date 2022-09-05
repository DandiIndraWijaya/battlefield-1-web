import React, { useState } from 'react'
import { Box, Grid, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

import VideoItem from './VideoItem'
import ReactPlayer from 'react-player/youtube'

const Jumbotron: React.FC = () => {
  const videos = [
    'https://www.youtube.com/watch?v=c7nRTF2SowQ&t=13s',
    'https://www.youtube.com/watch?v=4pY3hlQEOc0',
    'https://www.youtube.com/watch?v=Bau49VAvJyo'
  ]
  const [onPlayingVideo, setOnPlayingVideo] = useState<string>('')

  const onClickVideoItem = (index: number): void => {
    const selectedVideoTrailer = videos[index]
    setOnPlayingVideo(selectedVideoTrailer)
  }

  const onCloseVideo = (): void => {
    setOnPlayingVideo('')
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 750,
        backgroundImage: `url(${'/images/home_jumbotron_bg.png'})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        marginTop: -12,
        paddingBottom: 40
      }}
    >
      <img
        style={{ width: '50%', marginTop: 100 }}
        src="/images/battlefield_1_logo.png"
        alt="Battlefield 1 Logo"
      />
      <Box
        sx={{
          textAlign: 'center',
          margin: 'auto',
          width: 600,
          height: 400,
          paddingY: 3,
          marginTop: 0
        }}
      >
        {
          onPlayingVideo !== '' &&
          <>
            <Box
              sx={{
                textAlign: 'right'
              }}
            >
              <IconButton onClick={onCloseVideo}>
                <Close />
              </IconButton>
            </Box>
            <ReactPlayer
              url={onPlayingVideo}
              width='100%'
            />
          </>
        }
      </Box>
      <Box
        sx={{
          paddingX: 25,
          marginTop: 7
        }}
      >
        <Grid container spacing={5} alignContent='center' alignItems="center">
          {
            videos.map((video, key) => (
              <Grid item key={key} md={4}>
                <VideoItem
                  onClick={onClickVideoItem}
                  index={key}
                />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  )
}

export default Jumbotron
