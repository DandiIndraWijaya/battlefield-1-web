/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import responsive from '../../../src/utils'
import Navigation from '../Navigation'

interface Props {
  children: React.ReactNode
  isBgMusicPlaying: boolean
  toggleBgMusic: () => void
}

const Layout: React.FC<Props> = ({
  children,
  isBgMusicPlaying,
  toggleBgMusic
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
          left: isMobile ? 0 : '20px'
        }}
        src="/images/battlefield_1_logo.png"
        alt="Battlefield 1 Logo"
      />

      {/* Navigation */}
      <Navigation
        isBgMusicPlaying={isBgMusicPlaying}
        toggleBgMusic={toggleBgMusic}
      />
      {children}
    </Box>
  )
}

export default Layout
