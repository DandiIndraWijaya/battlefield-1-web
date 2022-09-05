import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ReactPlayer from 'react-player/file'

const Opening: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsMuted(false), 1000)
  }, [])
  return <Box
    sx={{
      backgroundColor: 'dark',
      width: '100%',
      height: '100vh'
    }}
  >
    <ReactPlayer
      url="/videos/battlefield1_intro.mp4"
      playing={true}
      muted={isMuted}
      width= '100%'
      height= '100%'
    />
  </Box>
}

export default Opening
