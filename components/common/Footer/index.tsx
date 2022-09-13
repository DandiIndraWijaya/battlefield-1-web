import React from 'react'
import { Box, Typography } from '@mui/material'
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material'

const links = [
  {
    url: 'https://github.com/DandiIndraWijaya',
    icon: <GitHub sx={{ color: 'gray' }} fontSize="medium" />
  },
  {
    url: 'https://www.linkedin.com/in/dandi-indra-wijaya-2640501b4/',
    icon: <LinkedIn sx={{ color: 'gray' }} fontSize="medium" />
  },
  {
    url: 'https://www.instagram.com/dandi.i.wijaya/',
    icon: <Instagram sx={{ color: 'gray' }} fontSize="medium" />
  }
]

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        paddingY: '20px',
        textAlign: 'center',
        width: 'max-content',
        margin: 'auto'
      }}
    >
      <Typography
        sx={{
          color: 'gray',
          letterSpacing: 2,
          fontSize: '18px'
        }}
      >
        Made with Passion by Dandi
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: '10px'
        }}
      >
        {
          links.map((link, key) => {
            return (
              <a
                key={key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default Footer
