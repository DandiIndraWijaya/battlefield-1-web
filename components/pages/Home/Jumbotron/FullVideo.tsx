import React from 'react'
import { Box, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import ReactPlayer from 'react-player/youtube'

interface Props {
  video: string
  onCloseVideo: () => void
}

const FullVideo: React.FC<Props> = ({ video, onCloseVideo }: Props) => {
  if (video === '') {
    return <></>
  }
  return (
    <Box
      sx={{
        background: 'rgba(135, 135, 135, 0.65)',
        textAlign: 'center',
        margin: 'auto',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        paddingY: 3,
        position: 'fixed',
        paddingX: 20,
        top: 0
      }}
    >
      <Box
        sx={{
          textAlign: 'right'
        }}
      >
        <IconButton onClick={onCloseVideo}>
          <Close />
        </IconButton>
      </Box>
      <ReactPlayer
        url={video}
        width='100%'
        height='80vh'
        controls
      />
    </Box>
  )
}

export default FullVideo
