/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import { Box } from '@mui/material'
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
  return (
    <Box
      sx={{
        backgroundColor: '#0b0a10'
      }}
    >
      {/* Battlefield 1 Logo */}
      <img
        style={{
          width: '200px',
          position: 'fixed',
          top: '20px',
          left: '20px'
        }}
        src="/images/battlefield_1_logo.png"
        alt="Battlefield 1 Logo"
      />
      <Navigation
        isBgMusicPlaying={isBgMusicPlaying}
        toggleBgMusic={toggleBgMusic}
      />
      {children}
    </Box>
  )
}

export default Layout
