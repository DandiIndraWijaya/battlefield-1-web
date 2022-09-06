import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import ReactPlayer from 'react-player/file'
import { PlayArrow } from '@mui/icons-material'

interface Props {
  onClick: (index: number) => void
  index: number
  video: string
  title: string
}

const VideoItem: React.FC<Props> = ({
  onClick,
  index,
  video,
  title
}: Props) => {
  const [onMouseOver, setOnMouseOver] = useState(false)
  return (
    <Box
      sx={{
        padding: 1,
        border: '1px solid',
        borderColor: onMouseOver ? 'primary.main' : 'gray',
        borderRadius: 2
      }}
    >
      <Box
        sx={{ textAlign: 'left', paddingX: 1 }}
      >
        <Typography
          sx={{
            color: onMouseOver ? 'primary.main' : 'gray',
            fontWeight: 'semi-bold',
            letterSpacing: 2
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 160,
          borderRadius: 1,
          paddingX: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative'
        }}
        onMouseOver={() => setOnMouseOver(true)}
        onMouseLeave={() => setOnMouseOver(false)}
        onClick={() => onClick(index)}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute'
          }}
        >
          <PlayArrow
            sx={{
              color: onMouseOver ? 'primary.main' : 'gray',
              fontSize: onMouseOver ? 110 : 70
            }}
          />
        </Box>
        <ReactPlayer
          url={video}
          loop={true}
          width="100%"
          height={150}
          playing={true}
          muted
        />
      </Box>
    </Box>
  )
}

export default VideoItem
