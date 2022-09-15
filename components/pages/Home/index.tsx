import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'

import Layout from '../../common/Layout'
import PageLoader from '../../common/PageLoader'
import Jumbotron from './Jumbotron'
import WarStory from './WarStory'
import Soundtrack from './Sountrack'

const HomeComponent: React.FC = () => {
  const [showPageLoader, setShowPageLoader] = useState(true)
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false)
  const [isVideoPopUp, setIsVideoPopUp] = useState(false)

  const toggleBgMusic = (): void => {
    setIsBgMusicPlaying(!isBgMusicPlaying)
  }

  const onVideoPopUp = (isPopUp: boolean): void => {
    setIsVideoPopUp(isPopUp)
  }

  useEffect(() => {
    setTimeout(() => setShowPageLoader(false), 7000)
  }, [])

  if (showPageLoader) {
    return <PageLoader />
  }

  return (
    <Layout
      isBgMusicPlaying={isBgMusicPlaying}
      toggleBgMusic={toggleBgMusic}
    >
      <Box id="trailer">
        <Jumbotron
          onVideoPopUp={onVideoPopUp}
        />
      </Box>
      <Box id="warStory">
        <WarStory />
      </Box>
      <Box id="soundtrack">
        <Soundtrack
          isVideoPopUp={isVideoPopUp}
        />
      </Box>
    </Layout>
  )
}

export default HomeComponent
