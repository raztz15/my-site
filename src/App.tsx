
import { AppBar, Box, Toolbar, Typography, Button, Stack } from '@mui/material';
import { Hero } from './components/Hero';
import { handleScrollTo } from './utils';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        background:
          'radial-gradient(circle at top, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at bottom left, rgba(56,189,248,0.22), transparent 55%), #020617',
      }}
    >
      {/* Top navigation */}
      <AppBar position="sticky"
        elevation={2}
        sx={{
          bgcolor: 'rgba(2, 6, 23, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.35)',
        }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700, cursor: 'pointer', background: 'linear-gradient(90deg, #ff8a00 , #ffc300)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            onClick={() => handleScrollTo('hero')}
          >
            Dekel Raz
          </Typography>

          <Stack direction='row' spacing={2}>
            <Button onClick={() => handleScrollTo('about')}>About</Button>
            <Button onClick={() => handleScrollTo('experience')}>Experience</Button>
            <Button onClick={() => handleScrollTo('projects')}>Projects</Button>
            <Button onClick={() => handleScrollTo('skills')}>Skills</Button>
            <Button onClick={() => handleScrollTo('contact')}>Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box component='main'>
        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <About />

        {/* EXPERIENCE */}
        <Experience />

        {/* PROJECTS */}
        <Projects />

        {/* SKILLS */}
        <Skills />


        {/* CONTACT */}
        <Contact />

      </Box>
    </Box>
  )
}

export default App
