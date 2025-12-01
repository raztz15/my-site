
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material'

function App() {

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      {/* Top navigation */}
      <AppBar position='sticky' elevation={1} sx={{ bgcolor: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(148, 163, 184, 0.3)' }}>
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
          id="hero"
          sx={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            py: 8,
          }}
        >
          <Container maxWidth="md">
            <Typography variant="overline" sx={{ letterSpacing: 2 }}>
              HELLO THERE 👋
            </Typography>

            <Typography variant="h2" component="h1" gutterBottom>
              I&apos;m <strong>Dekel Raz</strong>.
            </Typography>

            <Typography variant="h5" color="text.secondary" gutterBottom>
              <strong>Frontend / Full-Stack Developer</strong> working with <strong>React</strong>,{' '}
              <strong>TypeScript</strong> &amp; <strong>Go</strong>.
            </Typography>

            <Typography variant="body1" sx={{ maxWidth: 650, mt: 2 }}>
              I enjoy building <strong>clean</strong>, <strong>fast</strong> and{' '}
              <strong>user-friendly</strong> web applications. Give me a messy problem, some{' '}
              <strong>complex data</strong> or a tricky <strong>user flow</strong>, and I&apos;ll turn it
              into something that feels simple and intuitive to use.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: 'wrap' }}>
              <Button variant="contained">View CV</Button>
              <Button variant="outlined" onClick={() => handleScrollTo('projects')}>
                View Projects
              </Button>
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

            <Typography variant="body1" sx={{ mb: 2 }}>
              I&apos;m a <strong>web developer based in Israel</strong>, with experience building
              <strong> production-grade web apps</strong> using <strong>React</strong>,{' '}
              <strong>TypeScript</strong> and <strong>Go</strong>. I care a lot about{' '}
              <strong>clean code</strong>, <strong>clear architecture</strong> and interfaces that feel
              <strong> smooth</strong> and <strong>responsive</strong>.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Most of my work revolves around <strong>real-world operations</strong>: back-office tools,
              <strong> dashboards</strong> and <strong>complex data tables</strong> with sorting, filtering,
              grouping and live updates. I like understanding the <strong>full flow end-to-end</strong> –
              not just the UI, but also how the data moves and why users need it.
            </Typography>

            <Typography variant="body1">
              Outside of coding, I&apos;m into <strong>Pokémon</strong>, <strong>dancing</strong> and
              constantly <strong>learning how things work</strong> – from JavaScript internals and computer
              science basics to new ways of structuring frontend apps. I&apos;m looking for teams that value
              <strong> curiosity</strong>, <strong>ownership</strong> and <strong>good engineering</strong>,
              not just shipping features fast.
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
