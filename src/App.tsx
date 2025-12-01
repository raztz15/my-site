
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material'

function App() {

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Box>
      {/* Top navigation */}
      <AppBar position='sticky' elevation={0} color='transparent'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, cursor: 'pointer' }}
            onClick={() => handleScrollTo('hero')}
          >
            Dekel Raz
          </Typography>

          <Stack direction='row' spacing={2}>
            <Button onClick={() => handleScrollTo('about')}>About</Button>
            <Button onClick={() => handleScrollTo('experience')}>Experience</Button>
            <Button onClick={() => handleScrollTo('project')}>Projects</Button>
            <Button onClick={() => handleScrollTo('skills')}>Skills</Button>
            <Button onClick={() => handleScrollTo('contact')}>Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box component='main'>
        {/* HERO */}
        <Box
          id='hero'
          sx={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            py: 8,
          }}
        >
          <Container maxWidth='md'>
            <Typography variant="h2" component="h1" gutterBottom>
              Hi, I&apos;m Dekel.
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Frontend / Full-Stack Developer (React, TypeScript, Go)
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600, mt: 2 }}>
              I build clean, reliable web applications with a strong focus on UX, performance, and
              maintainable code. I love turning complex problems into simple, intuitive interfaces.
            </Typography>

            <Stack direction='row' spacing={2} sx={{ mt: 4 }}>
              <Button variant='contained'>View CV</Button>
              <Button variant='outlined' onClick={() => handleScrollTo('projects')}>View Projects</Button>
              <Button variant="text" onClick={() => handleScrollTo('contact')}>
                Contact Me
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* ABOUT */}
        <Box id="about" sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              About
            </Typography>
            <Typography variant="body1">
              This is a placeholder for your About section. We&apos;ll write a proper story here:
              who you are, what you enjoy building, and a bit of personality (Pokémon, dancing,
              curiosity about how things work, etc.).
            </Typography>
          </Container>
        </Box>

        {/* EXPERIENCE */}
        <Box id="experience" sx={{ py: 8, bgcolor: 'background.paper' }}>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Experience
            </Typography>
            <Typography variant="body1">
              Here we&apos;ll showcase your roles (Dragontail and others) with impact-focused bullet
              points, not just responsibilities.
            </Typography>
          </Container>
        </Box>

        {/* PROJECTS */}
        <Box id="projects" sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Projects
            </Typography>
            <Typography variant="body1">
              Later we&apos;ll replace this with cards for your best projects: Pokémon app, complex
              tables infrastructure, pizza shelves, and more.
            </Typography>
          </Container>
        </Box>

        {/* SKILLS */}
        <Box id="skills" sx={{ py: 8, bgcolor: 'background.paper' }}>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Skills
            </Typography>
            <Typography variant="body1">
              Here we&apos;ll add a clean grid of your tech stack: React, TypeScript, Go, Redux
              Toolkit, RTK Query, MUI, SQL, and more.
            </Typography>
          </Container>
        </Box>

        {/* CONTACT */}
        <Box id="contact" sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Let&apos;s keep it simple for now: we&apos;ll put your email, LinkedIn and GitHub
              here. Later we can add a contact form if you want.
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default App
