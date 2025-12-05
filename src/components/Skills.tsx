import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { Bolt, Code, Timeline, Storage, Palette } from '@mui/icons-material';
import { glassCardSx, hoverGlowSx } from '../theme/sx/cards'
import { RevealOnScroll } from './shared/RevealOnScroll';

export const Skills = () => {
    return (
        <Box
            id="skills"
            sx={{
                py: { xs: 6, md: 8 }, // consistent with other sections
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
                            Skills &amp; Tech Stack
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                mb: 2,
                                fontSize: { xs: '0.98rem', md: '1rem' },
                                lineHeight: { xs: 1.7, md: 1.8 },
                            }}
                        >
                            I work across the stack with a strong focus on <strong>clean architecture</strong>,
                            <strong> reusable patterns</strong> and <strong>great developer experience</strong>.
                        </Typography>

                        {/* CURRENTLY FOCUSING ON */}
                        <Box sx={{ mb: 3 }}>
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                justifyContent={{ xs: 'center', md: 'flex-start' }}
                                sx={{ mb: 1 }}
                            >
                                <Bolt sx={{ fontSize: 18, color: '#ffcf33' }} />
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 600, color: 'rgba(249,250,251,0.9)' }}
                                >
                                    Currently focusing on:
                                </Typography>
                            </Stack>

                            <Stack
                                direction="row"
                                flexWrap="wrap"
                                sx={{
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                    columnGap: 1.0,
                                    rowGap: { xs: 1.2, md: 0.8 },
                                }}
                            >
                                {['React', 'TypeScript', 'Redux Toolkit', 'Node.js', 'MongoDB'].map((label) => (
                                    <Typography
                                        key={label}
                                        variant="caption"
                                        sx={{
                                            px: 1.2,
                                            py: 0.6,
                                            borderRadius: 9999,
                                            bgcolor: 'rgba(15,23,42,0.95)',
                                            border: '1px solid rgba(251,191,36,0.7)',
                                            boxShadow: '0 0 10px rgba(251,191,36,0.35)',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {label}
                                    </Typography>
                                ))}
                            </Stack>
                        </Box>

                        <Grid container spacing={{ xs: 3, md: 2 }}>
                            {/* Frontend Core */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ mb: 2 }}>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                                        sx={{ mb: 1 }}
                                    >
                                        <Code sx={{ fontSize: 18, color: 'rgba(248,250,252,0.9)' }} />
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            Frontend Core
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        flexWrap="wrap"
                                        sx={{
                                            justifyContent: { xs: 'center', md: 'flex-start' },
                                            columnGap: 1,
                                            rowGap: { xs: 1.2, md: 0.8 },
                                        }}
                                    >
                                        {['React', 'React hooks', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'].map(
                                            (label) => (
                                                <Typography
                                                    key={label}
                                                    variant="caption"
                                                    sx={{
                                                        px: 1,
                                                        py: 0.5,
                                                        borderRadius: 9999,
                                                        bgcolor: 'rgba(15,23,42,0.9)',
                                                        border: '1px solid rgba(148,163,184,0.5)',
                                                        lineHeight: 1.6,
                                                    }}
                                                >
                                                    {label}
                                                </Typography>
                                            ),
                                        )}
                                    </Stack>
                                </Box>
                            </Grid>

                            {/* State & Data Layer */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ mb: 2 }}>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                                        sx={{ mb: 1 }}
                                    >
                                        <Timeline sx={{ fontSize: 18, color: 'rgba(248,250,252,0.9)' }} />
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            State &amp; Data Layer
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        flexWrap="wrap"
                                        sx={{
                                            justifyContent: { xs: 'center', md: 'flex-start' },
                                            columnGap: 1,
                                            rowGap: { xs: 1.2, md: 0.8 },
                                        }}
                                    >
                                        {['Redux Toolkit', 'RTK Query', 'Custom Hooks', 'Async Data Flows', 'Local Storage'].map(
                                            (label) => (
                                                <Typography
                                                    key={label}
                                                    variant="caption"
                                                    sx={{
                                                        px: 1,
                                                        py: 0.5,
                                                        borderRadius: 9999,
                                                        bgcolor: 'rgba(15,23,42,0.9)',
                                                        border: '1px solid rgba(148,163,184,0.5)',
                                                        lineHeight: 1.6,
                                                    }}
                                                >
                                                    {label}
                                                </Typography>
                                            ),
                                        )}
                                    </Stack>
                                </Box>
                            </Grid>

                            {/* Backend & Database */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ mb: 2 }}>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                                        sx={{ mb: 1 }}
                                    >
                                        <Storage sx={{ fontSize: 18, color: 'rgba(248,250,252,0.9)' }} />
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            Backend &amp; Database
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        flexWrap="wrap"
                                        sx={{
                                            justifyContent: { xs: 'center', md: 'flex-start' },
                                            columnGap: 1,
                                            rowGap: { xs: 1.2, md: 0.8 },
                                        }}
                                    >
                                        {['Node.js', 'Go', 'REST APIs', 'OOP', 'SQL', 'MongoDB', 'Middleware Patterns'].map(
                                            (label) => (
                                                <Typography
                                                    key={label}
                                                    variant="caption"
                                                    sx={{
                                                        px: 1,
                                                        py: 0.5,
                                                        borderRadius: 9999,
                                                        bgcolor: 'rgba(15,23,42,0.9)',
                                                        border: '1px solid rgba(148,163,184,0.5)',
                                                        lineHeight: 1.6,
                                                    }}
                                                >
                                                    {label}
                                                </Typography>
                                            ),
                                        )}
                                    </Stack>
                                </Box>
                            </Grid>

                            {/* UI, Styling & Tooling */}
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Box sx={{ mb: 2 }}>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        alignItems="center"
                                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                                        sx={{ mb: 1 }}
                                    >
                                        <Palette sx={{ fontSize: 18, color: 'rgba(248,250,252,0.9)' }} />
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            UI, Styling &amp; Tooling
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        flexWrap="wrap"
                                        sx={{
                                            justifyContent: { xs: 'center', md: 'flex-start' },
                                            columnGap: 1,
                                            rowGap: { xs: 1.2, md: 0.8 },
                                        }}
                                    >
                                        {[
                                            'MUI',
                                            'Styled-Components',
                                            'Tailwind CSS',
                                            'Responsive Layouts',
                                            'Git & GitHub & GitLab & Bitbucket',
                                            'Storybook',
                                            'Figma',
                                            'Chrome Devtools',
                                        ].map((label) => (
                                            <Typography
                                                key={label}
                                                variant="caption"
                                                sx={{
                                                    px: 1,
                                                    py: 0.5,
                                                    borderRadius: 9999,
                                                    bgcolor: 'rgba(15,23,42,0.9)',
                                                    border: '1px solid rgba(148,163,184,0.5)',
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {label}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </RevealOnScroll>
            </Container>
        </Box>
    )
}
