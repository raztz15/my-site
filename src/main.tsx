import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // soft indigo
    },
    secondary: {
      main: '#f97316', // warm orange accent
    },
    background: {
      default: '#020617', // very dark blue/black
      paper: '#020617',
    },
  },
  typography: {
    fontFamily:
      '"Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: -0.5,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: -0.5,
    },
    h4: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
      fontSize: 16,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999, // pill shape
          paddingInline: 20,
          paddingBlock: 10,
        },
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
