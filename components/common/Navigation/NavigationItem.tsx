import React from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  index: number
  title: string
  icon: any
  target: string
}

const NavigationItem: React.FC<Props> = ({
  index,
  title,
  icon,
  target
}: Props) => {
  const onClick = (): void => {
    window.scrollTo(0, 257)
  }

  return (
    <a
      href={target}
      style={{
        textDecoration: 'none',
        marginBottom: index === 2 ? 0 : '5px'
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(23, 23, 29, 0.5)',
          paddingX: '15px',
          paddingY: '5px'
        }}
      >
        <Typography
          sx={{
            color: 'white',
            marginRight: '10px'
          }}
        >
          {title}
        </Typography>
        {icon}
      </Box>
    </a>
  )
}

export default NavigationItem
