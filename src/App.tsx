
import { AppBar, Box, Container, Toolbar, Typography, Button, Stack, Grid } from '@mui/material';
import { keyframes } from '@mui/material'

import dekelHero from './assets/dekel-hero.jpeg'

function App() {

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const glassCardSx = {
    borderRadius: 4,
    p: { xs: 3, md: 4 },
    bgcolor: 'rgba(15, 23, 42, 0.82)', // slate-900-ish with transparency
    border: '1px solid rgba(148, 163, 184, 0.4)', // soft border
    boxShadow: '0 22px 60px rgba(15, 23, 42, 0.95)', // deep shadow
    backdropFilter: 'blur(16px)', // frosted glass effect
  }

  const gradientFrameSx = {
    borderRadius: 4,
    padding: "2px", // thin frame
    boxShadow: '0 0 14px rgba(255,150,0,0.25)',
  };

  const hoverGlowSx = {
    transition: 'all 180ms ease-out',
    '&:hover': {
      boxShadow:
        '0 6px 18px rgba(255,150,0,0.15), 0 4px 12px rgba(0,0,0,0.4)',
      transform: 'translateY(-2px)',
    }
  }

  const shimmerLoop = keyframes`
    0% {
      transform: translateX(-120%) skewX(-15deg);
      opacity: 0;
    }
    40% {
      opacity: .45;
    }
    100% {
      transform: translateX(120%) skewX(-15deg);
      opacity: 0;
    }
  `

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
        <Box
          id="hero"
          sx={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            py: 10,
            background:
              'radial-gradient(circle at top, rgba(99, 102, 241, 0.45), transparent 55%)',
          }}
        >
          <Container maxWidth="xl">
            <Box sx={gradientFrameSx}>
              <Box sx={{ ...glassCardSx, ...hoverGlowSx }}>
                <Grid container spacing={4} alignItems="center" justifyContent='space-between'>
                  {/* TEXT SIDE */}
                  <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="overline"
                      sx={{
                        letterSpacing: 2,
                        opacity: 0.85,
                        background: 'linear-gradient(90deg, #ff8a00, #ffcf33)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      HELLO THERE 👋
                    </Typography>

                    <Typography variant="h2" component="h1" gutterBottom>
                      I&apos;m{' '}
                      <Box
                        component="span"
                        sx={{
                          fontWeight: '700',
                          background: 'linear-gradient(90deg, #ff8a00 , #ffc300)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        Dekel Raz.
                      </Box>
                    </Typography>

                    <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 1.5 }}>
                      <strong>Frontend / Full-Stack Developer</strong> working with <strong>React</strong>,{' '}
                      <strong>TypeScript</strong> &amp; <strong>Go</strong>.
                    </Typography>

                    <Typography variant="body1" sx={{ maxWidth: 650, mt: 2 }}>
                      I enjoy building <strong>clean</strong>, <strong>fast</strong> and{' '}
                      <strong>user-friendly</strong> web applications. Give me a messy problem, some{' '}
                      <strong>complex data</strong> or a tricky <strong>user flow</strong>, and I&apos;ll
                      turn it into something that feels simple and intuitive to use.
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
                  </Grid>

                  {/* IMAGE SIDE */}
                  <Grid sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                    <Box
                      sx={{
                        position: 'relative',
                        maxWidth: 360,
                        height: 450,
                      }}
                    >
                      {/* BIG GLOW BEHIND */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: '-20%',
                          borderRadius: '50%',
                          background:
                            'radial-gradient(circle at center, rgba(99, 102, 241, 0.55), rgba(56, 189, 248, 0.35), transparent 70%)',
                          filter: 'blur(40px)',
                          opacity: 1,
                        }}
                      />

                      {/* TILTED GLASS BACK PANEL */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: 6,
                          backdropFilter: 'blur(12px)',
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))',
                          border: '1px solid rgba(255,255,255,0.15)',
                          boxShadow:
                            '0 40px 90px rgba(0,0,0,0.8), inset 0 0 25px rgba(255,255,255,0.08)',
                          transform: 'translate(18px, 22px) rotate(-5deg)',
                        }}
                      />

                      {/* MAIN PHOTO PANEL */}
                      <Box
                        sx={{
                          position: 'relative',
                          borderRadius: 6,
                          overflow: 'hidden',
                          border: '1px solid rgba(255,255,255,0.25)',
                          background:
                            'linear-gradient(135deg, rgba(129,140,248,0.4), rgba(56,189,248,0.35))',
                          boxShadow:
                            '0 30px 80px rgba(0,0,0,1), 0 10px 30px rgba(56,189,248,0.25)',
                          height: '100%',
                          transition: 'all 220ms ease-out',
                          '&:hover': {
                            transform: 'translateY(-4px) scale(1.01)',
                            boxShadow:
                              '0 38px 95px rgba(0,0,0,1), 0 12px 36px rgba(56,189,248,0.4)',
                          },
                        }}
                      >
                        {/* IMAGE */}
                        <Box
                          component="img"
                          src={dekelHero}
                          alt="Dekel Raz in New York"
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                          }}
                        />

                        {/* CONTINUOUS SHIMMER */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '-40%',
                            width: '40%',
                            background:
                              'linear-gradient(120deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.0) 100%)',
                            mixBlendMode: 'screen',
                            animation: `${shimmerLoop} 3.2s ease-in-out infinite`,
                            pointerEvents: 'none',
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>

                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ABOUT */}
        <Box id="about" sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Box sx={{ ...glassCardSx, ...hoverGlowSx, }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: '700',
                  background: 'linear-gradient(90deg, #ff8a00, #ffcf33)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
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
                <strong> dashboards</strong> and <strong>complex data tables</strong> with sorting,
                filtering, grouping and live updates. I like understanding the{' '}
                <strong>full flow end-to-end</strong> – not just the UI, but also how the data moves and
                why users need it.
              </Typography>

              <Typography variant="body1">
                Outside of coding, I&apos;m into <strong>Pokémon</strong>, <strong>dancing</strong> and
                constantly <strong>learning how things work</strong> – from JavaScript internals and
                computer science basics to new ways of structuring frontend apps. I&apos;m looking for teams
                that value <strong> curiosity</strong>, <strong>ownership</strong> and{' '}
                <strong>good engineering</strong>, not just shipping features fast.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* EXPERIENCE */}
        <Box id="experience" sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Box sx={{ ...glassCardSx, ...hoverGlowSx }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: '700',
                  background: 'linear-gradient(90deg, #ff8a00, #ffcf33)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                Experience
              </Typography>
              <Typography variant="body1">
                Here we&apos;ll showcase your roles (Dragontail and others) with impact-focused bullet
                points, not just responsibilities. Next step we&apos;ll turn this into proper cards / a
                mini timeline.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* PROJECTS */}
        <Box id="projects" sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Box sx={{ ...glassCardSx, ...hoverGlowSx }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: '700',
                  background: 'linear-gradient(90deg, #ff8a00, #ffcf33)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                Projects
              </Typography>
              <Typography variant="body1">
                Later we&apos;ll replace this with cards for your best projects: Pokémon app, complex
                tables infrastructure, pizza shelves, and more.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* SKILLS */}
        <Box id="skills" sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Box sx={{ ...glassCardSx, ...hoverGlowSx }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: '700',
                  background: 'linear-gradient(90deg, #ff8a00, #ffcf33)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                Skills
              </Typography>
              <Typography variant="body1">
                Here we&apos;ll add a clean grid of your tech stack: React, TypeScript, Go, Redux Toolkit,
                RTK Query, MUI, SQL, and more.
              </Typography>
            </Box>
          </Container>
        </Box>


        {/* CONTACT */}
        <Box id="contact" sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Box sx={{ ...glassCardSx, ...hoverGlowSx }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: '700',
                  background: 'linear-gradient(90deg, #ff8a00, #ffcf33)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                Contact
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Let&apos;s keep it simple for now: we&apos;ll put your email, LinkedIn and GitHub here.
                Later we can add a contact form if you want.
              </Typography>
            </Box>
          </Container>
        </Box>

      </Box>
    </Box>
  )
}

export default App
