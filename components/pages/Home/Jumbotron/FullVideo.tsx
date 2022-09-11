import React from 'react'
import { Box, IconButton, useMediaQuery } from '@mui/material'
import { Close } from '@mui/icons-material'
import responsive from '../../../../src/utils'
import ReactPlayer from 'react-player/youtube'

interface Props {
  video: string
  onCloseVideo: () => void
}

const FullVideo: React.FC<Props> = ({ video, onCloseVideo }: Props) => {
  const isTablet = useMediaQuery(responsive.isTablet)
  const isDesktop = useMediaQuery(responsive.isDesktop)
  const isMobile = useMediaQuery(responsive.isMobile)

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
        height: '100vh',
        zIndex: 9999,
        paddingY: 3,
        position: 'fixed',
        paddingX: isDesktop
          ? '100px'
          : isTablet && !isMobile ? '30px' : '10px',
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
