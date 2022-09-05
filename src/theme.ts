import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    dark: string
    gray: string
    darkBg: string
  }
  interface PaletteOptions {
    dark: string
    gray: string
    darkBg: string
  }

}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#F17F1A'
    },
    dark: '#252525',
    gray: '#878787',
    darkBg: '#0C0B0B'
  }
})

export default theme
