import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Loader from './Loader'
import { CSSTransition } from 'react-transition-group'
import 'animate.css'

const PageLoader: React.FC = () => {
  const [showLoader, setShowLoader] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowLogo(true), 1500)
    setTimeout(() => setShowLoader(true), 2500)
  }, [])

  return <Box
    sx={{
      backgroundColor: 'dark',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}
  >

    <CSSTransition
      in={showLoader}
      timeout={1500}
      unmountOnExit
      classNames="animate__animated animate__fadeIn animate__slower"
    >
      <Box
        sx={{
          position: 'absolute',
          top: 30,
          right: 30
        }}
      >
        <Loader />
      </Box>
    </CSSTransition>
    <CSSTransition
      in={showLogo}
      timeout={1500}
      unmountOnExit
      classNames="animate__animated animate__fadeIn animate__slower"
    >
      <img
        style={{ width: '50%' }}
        src="/images/battlefield_1_logo.png"
        alt="Battlefield 1 Logo"
      />
    </CSSTransition>
  </Box>
}

export default PageLoader
