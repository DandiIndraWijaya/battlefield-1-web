import React, { useState, useEffect } from 'react'
import BgMusic from '../../common/BgMusic'
import Layout from '../../common/Layout'

import PageLoader from '../../common/PageLoader'
import Jumbotron from './Jumbotron'
import WarStory from './WarStory'

const HomeComponent: React.FC = () => {
  const [showPageLoader, setShowPageLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowPageLoader(false), 5000)
  }, [])

  if (showPageLoader) {
    return <PageLoader />
  }

  return (
    <Layout>
      <BgMusic />
      <Jumbotron />
      <WarStory />
    </Layout>
  )
}

export default HomeComponent
