/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import { Box } from '@mui/material'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return <Box
    sx={{
      backgroundColor: '#0b0a10'
    }}
  >

    {children}
  </Box>
}

export default Layout
