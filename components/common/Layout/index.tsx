/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react'
import { Box } from '@mui/material'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return <Box
    sx={{
      backgroundColor: '#0C0B0B'
    }}
  >

    {children}
  </Box>
}

export default Layout
