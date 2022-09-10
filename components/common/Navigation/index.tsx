import React, { useState } from 'react'
import { Box, useMediaQuery, IconButton } from '@mui/material'
import responsive from '../../../src/utils'
import BgMusic from '../BgMusic'
import {
  SlideshowTwoTone,
  AutoStoriesTwoTone,
  LibraryMusicTwoTone,
  Menu,
  MenuOpen
} from '@mui/icons-material'
import NavigationItem from './NavigationItem'
import Drawer from './Drawer'

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
        fontSize: '35px'
      }}
    />,
    target: '#trailer'
  },
  {
    title: 'War Story',
    icon: <AutoStoriesTwoTone
      sx={{
        color: 'primary.main',
        fontSize: '35px'
      }}
    />,
    target: '#warStory'
  },
  {
    title: 'Soundtrack',
    icon: <LibraryMusicTwoTone
      sx={{
        color: 'primary.main',
        fontSize: '35px'
      }}
    />,
    target: '#soundtrack'
  }
]

const Navigation: React.FC<Props> = ({
  isBgMusicPlaying,
  toggleBgMusic
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  // const isTablet = useMediaQuery(responsive.isTablet)
  // const isDesktop = useMediaQuery(responsive.isDesktop)
  const isMobile = useMediaQuery(responsive.isMobile)

  const toggleMobNav = (): void => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  if (isMobile) {
    return (
      <>
        <Box
          sx={{
            position: 'fixed',
            right: '0px',
            top: '0px',
            textAlign: 'right'
          }}
        >
          {
            isMobileNavOpen
              ? <IconButton onClick={toggleMobNav}>
                  <MenuOpen
                    sx={{
                      color: 'primary.main'
                    }}
                    fontSize='large'
                  />
                </IconButton>
              : <IconButton onClick={toggleMobNav}>
                  <Menu
                    sx={{
                      color: 'white'
                    }}
                    fontSize='large'
                  />
                </IconButton>
          }
          <Drawer
            navigations={navigations}
            isOpen={isMobileNavOpen}
            isBgMusicPlaying={isBgMusicPlaying}
            toggleBgMusic={toggleBgMusic}
          />
        </Box>
      </>
    )
  }
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
