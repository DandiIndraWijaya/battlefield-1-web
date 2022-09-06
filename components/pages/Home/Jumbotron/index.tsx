import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'

import VideoItem from './VideoItem'
import FullVideo from './FullVideo'

const Jumbotron: React.FC = () => {
  const videos = [
    {
      title: 'Reveal Trailer',
      full: 'https://www.youtube.com/watch?v=c7nRTF2SowQ&t=13s',
      short: '/videos/trailer1.mp4'
    },
    // {
    //   title: 'Gameplay Trailer',
    //   full: 'https://www.youtube.com/watch?v=4pY3hlQEOc0',
    //   short: '/videos/trailer2.mp4'
    // },
    {
      title: 'Story Trailer',
      full: 'https://www.youtube.com/watch?v=Bau49VAvJyo',
      short: '/videos/trailer3.mp4'
    }
  ]

  const [playingVideo, setPlayingVideo] = useState<string>('')

  const onClickVideoItem = (index: number): void => {
    const selectedVideoTrailer = videos[index].full
    setPlayingVideo(selectedVideoTrailer)
  }

  const onCloseVideo = (): void => {
    setPlayingVideo('')
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
        paddingBottom: 20
      }}
    >
      {/* Battlefield 1 Logo */}
      <img
        style={{ width: '50%', marginTop: 100 }}
        src="/images/battlefield_1_logo.png"
        alt="Battlefield 1 Logo"
      />

      {/* Full Video */}
      <FullVideo
        video={playingVideo}
        onCloseVideo={onCloseVideo}
      />

      {/* List of Short Videos */}
      <Box
        sx={{
          paddingX: 45,
          marginTop: 60
        }}
      >
        <Grid container spacing={5} alignContent='center' alignItems="center">
          {
            videos.map((video, key) => (
              <Grid item key={key} md={6}>
                <VideoItem
                  onClick={onClickVideoItem}
                  index={key}
                  video={video.short}
                  title={video.title}
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
