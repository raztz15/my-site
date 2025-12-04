import { Box, Container, Typography } from '@mui/material'
import { glassCardSx, hoverGlowSx } from '../theme/sx/cards'
import { RevealOnScroll } from './shared/RevealOnScroll'

export const About = () => {
    return (
        <Box
            id="about"
            sx={{
                py: { xs: 6, md: 8 }, // a bit tighter on mobile
            }}
        >
            <Container maxWidth="md">
                <RevealOnScroll delayMs={200}>
                    <Box
                        sx={{
                            ...glassCardSx,
                            ...hoverGlowSx,
                            textAlign: { xs: 'center', md: 'left' }, // center on mobile, left on desktop
                        }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                background: 'linear-gradient(90deg, #ff8a00, #ffcf33)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: { xs: '1.8rem', md: '2.1rem' },
                                mb: { xs: 2.5, md: 2 },
                            }}
                        >
                            About
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                fontSize: { xs: '0.98rem', md: '1rem' },
                                lineHeight: { xs: 1.7, md: 1.8 },
                            }}
                        >
                            I&apos;m a <strong>web developer based in Israel</strong>, with experience building
                            <strong> production-grade web apps</strong> using <strong>React</strong>,{' '}
                            <strong>TypeScript</strong> and <strong>Go</strong>. I care a lot about{' '}
                            <strong>clean code</strong>, <strong>clear architecture</strong> and interfaces that feel
                            <strong> smooth</strong> and <strong>responsive</strong>.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                fontSize: { xs: '0.98rem', md: '1rem' },
                                lineHeight: { xs: 1.7, md: 1.8 },
                            }}
                        >
                            Most of my work revolves around <strong>real-world operations</strong>: back-office tools,
                            <strong> dashboards</strong> and <strong>complex data tables</strong> with sorting,
                            filtering, grouping and live updates. I like understanding the{' '}
                            <strong>full flow end-to-end</strong> – not just the UI, but also how the data moves and
                            why users need it.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '0.98rem', md: '1rem' },
                                lineHeight: { xs: 1.7, md: 1.8 },
                            }}
                        >
                            Outside of coding, I&apos;m into <strong>Pokémon</strong>, <strong>dancing</strong> and
                            constantly <strong>learning how things work</strong> – from JavaScript internals and
                            computer science basics to new ways of structuring frontend apps. I&apos;m looking for teams
                            that value <strong> curiosity</strong>, <strong>ownership</strong> and{' '}
                            <strong>good engineering</strong>, not just shipping features fast.
                        </Typography>
                    </Box>
                </RevealOnScroll>
            </Container>
        </Box>
    )
}
