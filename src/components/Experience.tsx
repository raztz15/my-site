import { Box, Container, Typography } from '@mui/material'
import { glassCardSx, hoverGlowSx } from '../theme/sx/cards'
import { experienceItemSx } from '../theme/sx/experience'
import { RevealOnScroll } from './shared/RevealOnScroll'

export const Experience = () => {
    return (
        <Box
            id="experience"
            sx={{
                py: { xs: 6, md: 8 }, // tighter on mobile, same as About
            }}
        >
            <Container maxWidth="md">
                <RevealOnScroll delayMs={200}>
                    <Box
                        sx={{
                            ...glassCardSx,
                            ...hoverGlowSx,
                            textAlign: { xs: 'center', md: 'left' }, // center text on mobile
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
                            Experience
                        </Typography>

                        {/* Dragontail Experience */}
                        <Box
                            sx={{
                                ...experienceItemSx,
                                textAlign: { xs: 'left', md: 'left' }, // content still left-aligned inside
                                mb: { xs: 4, md: 5 },
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1rem', md: '1.05rem' },
                                }}
                            >
                                Full-Stack Developer · Dragontail Systems
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    mb: 1,
                                    fontSize: { xs: '0.9rem', md: '0.95rem' },
                                }}
                            >
                                2024 – 2025 · Bnei Brak, Israel
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                Part of the core engineering team building and maintaining the company’s main operational platform
                                (Dispatch, KDS, and internal workflow screens). I work across both <strong>React + TypeScript</strong>
                                and <strong>Go</strong>, rewriting legacy flows into modern, scalable architecture.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                I design and implement complex features end-to-end, breaking large operational flows into clean,
                                modular components with strong UX and predictable state orchestration.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                Built <strong>generic sorting</strong>, <strong>generic grouping</strong>, and shared data utilities
                                used across multiple order categories, ensuring consistency and eliminating duplicate logic.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                Refactored major screens into a modern <strong>monorepo architecture</strong> with reusable UI
                                components (Styled-Components + Storybook), significantly improving maintainability.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                Developed advanced UI including complex table systems, interactive map interactions, and real-time
                                operational views with <strong>RTK Query</strong> and optimized data pipelines.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                Improved middleware logic, backend responses, and flaky test stability while contributing reusable
                                hooks, utilities, and code patterns across teams.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                I’m known for strong social and communication skills – easy to work with, supportive, clear in
                                reviews, and highly collaborative, helping maintain a positive and productive team environment.
                            </Typography>
                        </Box>

                        {/* IVORY EXPERIENCE */}
                        <Box
                            sx={{
                                ...experienceItemSx,
                                textAlign: { xs: 'left', md: 'left' },
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1rem', md: '1.05rem' },
                                }}
                            >
                                Frontend Developer · Ivory
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    mb: 1,
                                    fontSize: { xs: '0.9rem', md: '0.95rem' },
                                }}
                            >
                                2023 – 2024 · Israel
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                Recruited to build a <strong>new domain</strong> for the company, a
                                <strong> financial back-office system</strong> for managing trades and account activity.
                                I developed the foundations of the app from scratch, including
                                <strong> architecture</strong>, <strong>layouts</strong>,
                                <strong> reusable components</strong> and <strong>shared utilities</strong>.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                Built a <strong>reusable front-end infrastructure</strong> used by the entire team:
                                shared components, custom hooks, utility functions, layout systems and patterns that
                                improved consistency and development speed.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                Delivered all UI layouts using <strong>pure CSS</strong>, creating a clean and
                                professional design without relying on external UI libraries.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                Took a mentoring role with <strong>junior developers</strong>: explaining the system,
                                reviewing code, enforcing best practices and managing merges to main with high standards of quality.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 0.5,
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                Worked closely with <strong>backend developers</strong> to refine API responses and with
                                <strong> QA</strong> to ensure features were stable and fixes were permanent.
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: { xs: '0.95rem', md: '1rem' },
                                    lineHeight: { xs: 1.7, md: 1.8 },
                                }}
                            >
                                Known for <strong>strong communication</strong>, <strong>collaboration</strong> and
                                <strong> ownership</strong>, helping the team deliver reliably and maintain a positive
                                engineering culture.
                            </Typography>
                        </Box>
                    </Box>
                </RevealOnScroll>
            </Container>
        </Box>
    )
}
