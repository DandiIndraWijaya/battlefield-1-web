import React, { useState, useRef, useEffect } from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import responsive from '../../../../src/utils'
import SoundtrackItem from './SoundtrackItem'
import soundtracks from '../../../../data/soundtrack'

interface Props {
  onPlay: (isPlay: boolean) => void
  isPlay: boolean
  isPause: boolean
}

const Soundtrack: React.FC<Props> = ({
  onPlay,
  isPlay,
  isPause
}: Props) => {
  const [playingIndex, setPlayingIndex] = useState(-1)
  const [soundtrackBuffer, setSoundtrackBuffer] = useState('0')
  const [soundtrackPlayedTime, setSountrackPlayedTime] = useState('0')
  const [soundtrackCurrentTime, setSoundtrackCurrentTime] = useState(0)
  const [soundtrackPause, setSoundtrackPause] = useState(false)

  const isTablet = useMediaQuery(responsive.isTablet)
  const isDesktop = useMediaQuery(responsive.isDesktop)
  const isMobile = useMediaQuery(responsive.isMobile)
  const soundtrackPlaying = useRef(new Audio(''))

  const onChangePlayingIndex = (index: number): void => {
    if (index === playingIndex) {
      if (soundtrackPause) {
        setSoundtrackPause(false)
        onPlay(true)
        soundtrackPlaying.current.play().then(() => {})
          .catch(() => console.log('error'))
      } else {
        setSoundtrackPause(true)
        onPlay(false)
        soundtrackPlaying.current.pause()
      }
    } else {
      onPlay(true)
      setSoundtrackBuffer('0')
      setSountrackPlayedTime('0')
      setSoundtrackCurrentTime(0)
      setSoundtrackPause(false)
      setPlayingIndex(index)
    }
  }

  const onChangeDuration = (duration: string): void => {
    soundtrackPlaying.current.currentTime = parseInt(duration) / 100 *
     soundtrackPlaying.current.duration
    const buffered = soundtrackPlaying.current.buffered
    const loaded = 100 * buffered.end(0) / soundtrackPlaying.current.duration
    setSoundtrackBuffer(loaded.toFixed(2))
  }

  const loop = (): void => {
    if (playingIndex !== -1) {
      const buffered = soundtrackPlaying.current.buffered
      console.log(buffered)
      let loaded
      let played
      if (buffered.length !== 0) {
        loaded = 100 * buffered.end(0) / soundtrackPlaying.current.duration
        // eslint-disable-next-line max-len
        played = 100 * soundtrackPlaying.current.currentTime / soundtrackPlaying.current.duration
        setSoundtrackCurrentTime(soundtrackPlaying.current.currentTime)
        setSoundtrackBuffer(loaded.toFixed(2))
        setSountrackPlayedTime(played.toFixed(2))

        soundtrackPlaying.current.onended = () => setPlayingIndex(-1)
      }
      setTimeout(loop, 50)
    }
  }

  useEffect(() => {
    setSoundtrackPause(false)
    if (playingIndex !== -1) {
      soundtrackPlaying.current.pause()
      soundtrackPlaying.current = new Audio(soundtracks[playingIndex].source)
      soundtrackPlaying.current.play().then(() => {

      })
        .catch(() => console.log('Error'))
      loop()
    }
  }, [playingIndex])

  return (
    <Box sx={{
      paddingBottom: (isDesktop || isTablet) && !isMobile ? 20 : '80px'
    }}>
      <Box
        sx={{
          width: '100%',
          height: '600px',
          backgroundImage: `url(${'/images/battlefield_1_soundtrack_bg.png'})`,
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            width: isDesktop
              ? '40%'
              : isTablet && !isMobile ? '65%' : '80%',
            backgroundColor: 'rgba(23, 23, 29, 0.83)',
            height: '500px'
          }}
        >
          <Box
            sx={{
              paddingX: '15px',
              paddingTop: '15px'
            }}>
            <Typography
              sx={{
                color: 'gray',
                fontSize: '18px',
                letterSpacing: 2
              }}>
              Music By
            </Typography>
            <Typography
              sx={{
                color: 'gray',
                fontSize: '14px',
                letterSpacing: 2
              }}
            >
            Johan Söderqvist & Patrik Andrén
            </Typography>
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            {
              soundtracks.map((soundtrack, key) => {
                return (
                  <Box
                    key={key}
                    // onClick={() => onChangePlayingIndex(key)}
                  >
                    <SoundtrackItem
                      title={soundtrack.title}
                      source={soundtrack.source}
                      time={soundtrack.time}
                      isPlay={key === playingIndex}
                      buffer={soundtrackBuffer}
                      playedTime={soundtrackPlayedTime}
                      isPause={soundtrackPause}
                      onClick={onChangePlayingIndex}
                      onChangeDuration={onChangeDuration}
                      currentTime={soundtrackCurrentTime}
                      index={key}
                    />
                  </Box>
                )
              })
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Soundtrack
