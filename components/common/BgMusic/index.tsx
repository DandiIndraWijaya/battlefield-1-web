/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState, useRef } from 'react'
import { Box, IconButton } from '@mui/material'
import { VolumeUpRounded, VolumeOffRounded } from '@mui/icons-material'

const BgMusic: React.FC = () => {
  const [bgMusicPlaying, setBgMusicPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const bgMusic = useRef(new Audio('/sounds/battlefield_one.mp3'))

  bgMusic.current.onended = () => {
    setBgMusicPlaying(false)
  }

  bgMusic.current.onplay = () => {
    setHasError(false)
  }

  const toggleBackgroundMusic = (): void => {
    setBgMusicPlaying(!bgMusicPlaying)
  }

  useEffect(() => {
    if (bgMusicPlaying) {
      bgMusic.current.play().then(() => {
        // bgMusic is playing.
      }).catch(() => {
        setHasError(true)
      })
    } else if (!hasError) {
      bgMusic.current.pause()
    }
  }, [bgMusicPlaying, hasError])

  return <Box
    sx={{
      position: 'fixed',
      top: 20,
      right: 20
    }}
  >
    <IconButton
      onClick={toggleBackgroundMusic}
    >
      {
        bgMusicPlaying
          ? <VolumeUpRounded
              sx={{
                color: 'primary.main',
                fontSize: 60
              }}
            />
          : <VolumeOffRounded
              sx={{
                color: 'primary.main',
                fontSize: 60
              }}
            />
      }
    </IconButton>
  </Box>
}

export default BgMusic
