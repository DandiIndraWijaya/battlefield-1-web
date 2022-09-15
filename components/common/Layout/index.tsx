/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import responsive from '../../../src/utils'
import Navigation from '../Navigation'
import Footer from '../Footer'

interface Props {
  children: React.ReactNode
  isSoundtrackPlaying?: boolean
  toggleBgMusic?: () => void
}

const Layout: React.FC<Props> = ({
  children,
  isSoundtrackPlaying = false,
  toggleBgMusic = () => {}
}: Props) => {
  const isMobile = useMediaQuery(responsive.isMobile)

  return (
    <Box
      sx={{
        backgroundColor: isMobile ? '#060503' : '#0b0a10'
      }}
    >
      {/* Battlefield 1 Logo */}
      <img
        style={{
          width: isMobile ? '150px' : '200px',
          position: 'fixed',
          top: isMobile ? 0 : '20px',
          left: isMobile ? 0 : '20px',
          zIndex: 99999
        }}
        src="/images/battlefield_1_logo.png"
        alt="Battlefield 1 Logo"
      />

      {/* Navigation */}
      <Navigation
        isSoundtrackPlaying={isSoundtrackPlaying}
        toggleBgMusic={toggleBgMusic}
      />
      {children}

      {/* Footer */}
      <Footer />
    </Box>
  )
}

export default Layout
