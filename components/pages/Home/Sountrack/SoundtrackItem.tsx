import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { PlayCircleFilled, PauseCircleFilled } from '@mui/icons-material'

interface Props {
  title: string
  source: string
  time: string
  isPlay: boolean
  buffer: string
  playedTime: string
  isPause: boolean
}

const SoundtrackItem: React.FC<Props> = ({
  title,
  source,
  time,
  isPlay,
  buffer,
  playedTime,
  isPause
}: Props) => {
  const [isMouseOver, setIsOuMouseOver] = useState(false)
  // const soundtrack = useRef(new Audio(source))

  const onMouseOver = (): void => {
    setIsOuMouseOver(true)
  }

  const onMouseLeave = (): void => {
    setIsOuMouseOver(false)
  }

  // var audio = document.querySelector('audio');
  // var percentages = document.querySelectorAll('span');

  // useEffect(() => {
  //   if(isPlay){
  //     soundtrack.current.onprogress
  //   }
  // }, [isPlay])

  return (
    <Box
      sx={{
        paddingY: '5px',
        paddingX: '15px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <Box>
        {
          isPause
            ? <PauseCircleFilled
                sx={{
                  marginTop: '5px',
                  color: isMouseOver || isPlay ? 'primary.main' : 'gray'
                }}
              />
            : <PlayCircleFilled
                sx={{
                  marginTop: '5px',
                  color: isMouseOver || isPlay ? 'primary.main' : 'gray'
                }}
              />
        }
      </Box>
      <Box
        sx={{
          paddingX: '10px',
          width: '100%'
        }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: isMouseOver || isPlay ? 'primary.main' : 'gray'
        }}>
          <Typography
            sx={{
              fontSize: '14px'
            }}>
            {title}
          </Typography>
          {
            !isPlay &&
            <Typography
              sx={{
                fontSize: '14px'
              }}>
              {time}
            </Typography>
          }
        </Box>
        {
          isPlay &&
          <Box sx={{
            position: 'relative',
            width: '100%'
          }}>
            <Box
              sx={{
                width: `${playedTime}%`,
                borderBottom: '1px solid',
                borderColor: 'primary.main',
                marginTop: '10px',
                position: 'absolute',
                top: 0
              }}
            />
            <Box
              sx={{
                width: `${buffer}%`,
                borderBottom: '1px solid',
                borderColor: 'rgba(241, 127, 26, 0.35)',
                marginTop: '10px',
                position: 'absolute',
                top: 0
              }}
            />
          </Box>
        }
      </Box>
    </Box>
  )
}

export default SoundtrackItem
