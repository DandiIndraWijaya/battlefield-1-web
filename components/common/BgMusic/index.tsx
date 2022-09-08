/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState, useRef } from 'react'
import { Box, IconButton } from '@mui/material'
import { VolumeUpRounded, VolumeOffRounded } from '@mui/icons-material'

interface Props {
  isBgMusicPlaying: boolean
  toggleBgMusic: () => void
}

const BgMusic: React.FC<Props> = ({
  isBgMusicPlaying,
  toggleBgMusic
}: Props) => {
  // const [bgMusicPlaying, setBgMusicPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const bgMusic = useRef(new Audio('/sounds/battlefield_one.mp3'))

  // bgMusic.current.onended = () => {
  //   setBgMusicPlaying(false)
  // }

  bgMusic.current.onplay = () => {
    setHasError(false)
  }

  useEffect(() => {
    if (isBgMusicPlaying) {
      bgMusic.current.play().then(() => {
        // bgMusic is playing.
      }).catch(() => {
        setHasError(true)
      })
    } else if (!hasError) {
      bgMusic.current.pause()
    }
  }, [isBgMusicPlaying, hasError])

  return <Box
    sx={{
      position: 'fixed',
      top: 20,
      right: 20
    }}
  >
    <IconButton
      onClick={toggleBgMusic}
    >
      {
        isBgMusicPlaying
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
