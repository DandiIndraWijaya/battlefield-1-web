import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { PlayCircleFilled, PauseCircleFilled } from '@mui/icons-material'
import convertTime from '../../../../src/time'
// import ReactSlider from 'react-slider'

interface Props {
  title: string
  source: string
  time: string
  isPlay: boolean
  buffer: string
  playedTime: string
  isPause: boolean
  currentTime: number
  onClick: (index: number) => void
  onChangeDuration: (duration: string) => void
  index: number
}

const SoundtrackItem: React.FC<Props> = ({
  title,
  source,
  time,
  isPlay,
  buffer,
  playedTime,
  isPause,
  currentTime,
  onClick,
  onChangeDuration,
  index
}: Props) => {
  const [isMouseOver, setIsOuMouseOver] = useState(false)

  const onMouseOver = (): void => {
    setIsOuMouseOver(true)
  }

  const onMouseLeave = (): void => {
    setIsOuMouseOver(false)
  }

  return (
    <Box
      sx={{
        paddingX: '15px',
        display: 'flex',
        alignItems: 'center',
        height: '45px'
      }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <Box
        sx={{
          width: '30px',
          cursor: 'pointer'
        }}
        onClick={() => onClick(index)}
      >
        {
          isPlay && isPause && <PlayCircleFilled
            sx={{
              marginTop: '5px',
              color: isMouseOver || isPlay ? 'primary.main' : 'gray'
            }}
          />
        }
        {
          isPlay && !isPause && <PauseCircleFilled
            sx={{
              marginTop: '5px',
              color: isMouseOver || isPlay ? 'primary.main' : 'gray'
            }}
          />
        }
        {
          !isPlay && <PlayCircleFilled
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: isMouseOver || isPlay ? 'primary.main' : 'gray',
            cursor: 'pointer'
          }}
          onClick={() => onClick(index)}
        >
          <Typography
            sx={{
              fontSize: '14px'
            }}>
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: '14px'
            }}>
            {time}
          </Typography>
        </Box>
        {
          isPlay &&
          <>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '10px'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  position: 'absolute',
                  top: 0
                }}
              >
                <input
                  style={{
                    width: '100%',
                    position: 'absolute',
                    top: '2px'
                  }}
                  type="range"
                  min="1"
                  max="100"
                  value={parseInt(playedTime)}
                  onChange={(e) => {
                    onChangeDuration(e.target.value)
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: `${buffer}%`,
                  borderBottom: '1px solid',
                  borderColor: 'rgba(241, 127, 26, 0.35)',
                  position: 'absolute',
                  top: '5px',
                  transition: 'width 1s'
                }}
              />
            </Box>
            <Box>
              <Typography sx={{
                fontSize: '14px',
                color: 'white',
                marginTop: '5px'
              }}>
                {convertTime(Math.floor(currentTime))}
              </Typography>
            </Box>
          </>
        }
      </Box>
    </Box>
  )
}

export default SoundtrackItem
