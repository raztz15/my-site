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
          borderRadius: 9999,
          paddingInline: 20,
          paddingBlock: 10,
          transition: 'all 160ms ease-out',
          boxShadow: '0 0 0 rgba(0,0,0,0)',
          '&.MuiButton-containedPrimary': {
            backgroundColor: 'rgba(99, 102, 241, 0.9)', // starting blue tone
            backgroundImage: 'linear-gradient(90deg, #6366f1, #4f46e5)',
            transition:
              'background-color 180ms ease-out, background-image 180ms ease-out, box-shadow 180ms ease-out',
          },

          '&.MuiButton-containedPrimary:hover': {
            backgroundColor: 'rgba(255, 138, 0, 0.9)', // starting warm tone
            backgroundImage: 'linear-gradient(90deg, #ff8a00, #ffc300)',
            boxShadow: '0 10px 24px rgba(255,165,0,0.35)',
          },
          '&.MuiButton-outlined': {
            borderColor: 'rgba(255,255,255,0.25)',
            color: 'rgba(255,255,255,0.85)',
            '&:hover': {
              borderColor: 'rgba(255,255,255,0.45)',
              backgroundColor: 'rgba(255,255,255,0.04)',
            },
          },

          '&.MuiButton-text': {
            color: 'rgba(255,255,255,0.75)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.06)',
            },
          },
          '&.MuiButton-text.nav-button': {
            color: 'rgba(255,255,255,0.75)',
            fontWeight: 500,
            '&:hover': {
              color: 'rgba(255,255,255,0.95)',
              backgroundColor: 'rgba(255,255,255,0.06)',
            },
          }
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
