import React, { useState, useEffect } from 'react'
import BgMusic from '../../common/BgMusic'
import Layout from '../../common/Layout'

import PageLoader from '../../common/PageLoader'
import Jumbotron from './Jumbotron'
import WarStory from './WarStory'
import Soundtrack from './Sountrack'

const HomeComponent: React.FC = () => {
  const [showPageLoader, setShowPageLoader] = useState(true)
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false)

  const toggleBgMusic = (): void => {
    setIsBgMusicPlaying(!isBgMusicPlaying)
  }

  useEffect(() => {
    setTimeout(() => setShowPageLoader(false), 7000)
  }, [])

  if (showPageLoader) {
    return <PageLoader />
  }

  return (
    <Layout>
      <BgMusic
        isBgMusicPlaying={isBgMusicPlaying}
        toggleBgMusic={toggleBgMusic}
      />
      <Jumbotron />
      <WarStory />
      <Soundtrack />
    </Layout>
  )
}

export default HomeComponent
