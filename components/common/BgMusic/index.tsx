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
  const [hasError, setHasError] = useState(false)
  const bgMusic = useRef(new Audio('/sounds/battlefield_one.mp3'))

  bgMusic.current.onplay = () => {
    setHasError(false)
  }

  useEffect(() => {
    if (isBgMusicPlaying) {
      bgMusic.current.play().then(() => {
      }).catch(() => {
        setHasError(true)
      })
    } else if (!hasError) {
      bgMusic.current.pause()
    }
  }, [isBgMusicPlaying, hasError])

  return (
    <Box>
      <IconButton
        onClick={toggleBgMusic}
      >
        {
          isBgMusicPlaying
            ? <VolumeUpRounded
                sx={{
                  color: 'primary.main',
                  fontSize: 50
                }}
              />
            : <VolumeOffRounded
                sx={{
                  color: 'primary.main',
                  fontSize: 50
                }}
              />
        }
      </IconButton>
    </Box>
  )
}

export default BgMusic
