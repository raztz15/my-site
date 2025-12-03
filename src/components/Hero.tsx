import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import dekelHero from '../assets/dekel-hero.jpeg'
import { handleScrollTo } from '../utils';
import { glassCardSx, gradientFrameSx, hoverGlowSx } from '../theme/sx/cards';
import { shimmerLoop } from '../theme/sx/animations';

export const Hero = () => {
    return (
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
                                    <Button
                                        variant="contained"
                                        component='a'
                                        href='/Full Stack Front End Developer.pdf'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >View CV</Button>
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
    )
}
