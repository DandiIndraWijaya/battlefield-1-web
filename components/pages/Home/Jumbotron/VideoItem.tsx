import React, { useState } from 'react'
import { Box } from '@mui/material'
import ReactPlayer from 'react-player/file'

interface Props {
  onClick: (index: number) => void
  index: number
}

const VideoItem: React.FC<Props> = ({ onClick, index }: Props) => {
  const [onPlaying, setOnPlaying] = useState(false)
  return (
    <Box
      sx={{
        backgroundColor: 'dark',
        width: '100%',
        height: 160,
        boxShadow: '8px 8px 8px rgba(0, 0, 0, 0.25)',
        borderRadius: 1,
        paddingX: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
      onMouseOver={() => setOnPlaying(true)}
      onMouseLeave={() => setOnPlaying(false)}
      onClick={() => onClick(index)}
    >
      <ReactPlayer
        url="/videos/trailer1.mp4"
        loop={true}
        width="100%"
        height={150}
        playing={onPlaying}
        muted
        light={onPlaying ? false : '/images/trailer1_thumbnail.jpg' }
      />
    </Box>
  )
}

export default VideoItem
