import React from 'react'
import { Box } from '@mui/material'
import BgMusic from '../BgMusic'
import {
  SlideshowTwoTone,
  AutoStoriesTwoTone,
  LibraryMusicTwoTone
} from '@mui/icons-material'
import NavigationItem from './NavigationItem'

interface Props {
  isBgMusicPlaying: boolean
  toggleBgMusic: () => void
}

const navigations = [
  {
    title: 'Trailer',
    icon: <SlideshowTwoTone
      sx={{
        color: 'primary.main',
        fontSize: 50
      }}
    />,
    target: '#trailer'
  },
  {
    title: 'War Story',
    icon: <AutoStoriesTwoTone
      sx={{
        color: 'primary.main',
        fontSize: 50
      }}
    />,
    target: '#warStory'
  },
  {
    title: 'Soundtrack',
    icon: <LibraryMusicTwoTone
      sx={{
        color: 'primary.main',
        fontSize: 50
      }}
    />,
    target: '#soundtrack'
  }
]

const Navigation: React.FC<Props> = ({
  isBgMusicPlaying,
  toggleBgMusic
}) => {
  return (
    <Box
      sx={{
        width: '170px',
        position: 'fixed',
        top: '30px',
        right: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}
    >
      <BgMusic
        isBgMusicPlaying={isBgMusicPlaying}
        toggleBgMusic={toggleBgMusic}
      />
      {
        navigations.map((navigation, key) => {
          return (
            <NavigationItem
              key={key}
              title={navigation.title}
              icon={navigation.icon}
              target={navigation.target}
            />
          )
        })
      }
    </Box>
  )
}

export default Navigation
