import React from 'react'
import { Box } from '@mui/material'
// import BgMusic from '../BgMusic'
import NavigationItem from './NavigationItem'

interface Props {
  navigations: Array<{
    title: string
    icon: any
    target: string
  }>
  isOpen: boolean
  isBgMusicPlaying: boolean
  toggleBgMusic: () => void
}

const Drawer: React.FC<Props> = ({
  navigations,
  isOpen,
  isBgMusicPlaying,
  toggleBgMusic
}) => {
  return (
    <Box
      sx={{
        width: '170px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        position: 'absolute',
        right: isOpen ? '15px' : '-190px',
        transition: '500ms'
      }}
    >
      {/* <BgMusic
        isBgMusicPlaying={isBgMusicPlaying}
        toggleBgMusic={toggleBgMusic}
      /> */}
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

export default Drawer
