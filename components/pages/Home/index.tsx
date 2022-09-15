import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'

import Layout from '../../common/Layout'
import PageLoader from '../../common/PageLoader'
import Jumbotron from './Jumbotron'
import WarStory from './WarStory'
import Soundtrack from './Sountrack'

const HomeComponent: React.FC = () => {
  const [showPageLoader, setShowPageLoader] = useState(true)
  const [playingIndex, setPlayingIndex] = useState(-1)
  const [isSoundtrackPlaying, setIsSoundtrackPlaying] = useState(false)
  const [isSoundtrackPause, setIsSoundtrackPause] = useState(false)

  const toggleBgMusic = (): void => {
    setIsSoundtrackPlaying(!isSoundtrackPlaying)
  }

  const onPlayMusic = (isPlay: boolean): void => {
    setIsSoundtrackPlaying(isPlay)
  }

  useEffect(() => {
    setTimeout(() => setShowPageLoader(false), 7000)
  }, [])

  if (showPageLoader) {
    return <PageLoader />
  }

  return (
    <Layout
      isSoundtrackPlaying={isSoundtrackPlaying}
      toggleBgMusic={toggleBgMusic}
    >
      <Box id="trailer">
        <Jumbotron />
      </Box>
      <Box id="warStory">
        <WarStory />
      </Box>
      <Box id="soundtrack">
        <Soundtrack
          onPlay={onPlayMusic}
          isPlay={isSoundtrackPlaying}
          isPause={isSoundtrackPause}
        />
      </Box>
    </Layout>
  )
}

export default HomeComponent
