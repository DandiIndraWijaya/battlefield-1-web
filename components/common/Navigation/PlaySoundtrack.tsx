/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import { Box, IconButton } from '@mui/material'
import {
  PlayCircle,
  PauseCircle
} from '@mui/icons-material'

interface Props {
  isSoundtrackPlaying: boolean
  toggleBgMusic: () => void
}

const PlaySoundtrack: React.FC<Props> = ({
  isSoundtrackPlaying,
  toggleBgMusic
}: Props) => {
  return (
    <Box>
      <IconButton
        onClick={toggleBgMusic}
      >
        {
          isSoundtrackPlaying
            ? <PauseCircle
                sx={{
                  color: 'primary.main',
                  fontSize: 30
                }}
              />
            : <PlayCircle
                sx={{
                  color: 'gray',
                  fontSize: 30
                }}
              />
        }
      </IconButton>
    </Box>
  )
}

export default PlaySoundtrack
