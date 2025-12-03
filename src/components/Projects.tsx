import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { glassCardSx, hoverGlowSx } from '../theme/sx/cards'

export const Projects = () => {
    return (
        < Box id="projects" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                {/* Section title */}
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        background: 'linear-gradient(90deg, #ff8a00, #ffcf33)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 3,
                    }}
                >
                    Projects
                </Typography>

                <Grid container spacing={4} sx={{ width: '100%' }}>
                    {/* POKÉMON APP CARD */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ ...glassCardSx, ...hoverGlowSx, height: '100%' }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                Pokémon Regions Companion App
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                                React · TypeScript · RTK Query · MUI · Local Storage
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                An app that pulls data from the <strong>PokéAPI</strong> and turns it into an
                                easy-to-use tool for exploring <strong>regions</strong> and <strong>Pokémon</strong>.
                                I built it because I actively play Pokémon and wanted this data to be
                                <strong> more approachable</strong> in real life.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                                The app displays <strong>regions</strong> and their Pokémon, with
                                <strong> filtering</strong>, <strong>grouping by region</strong>,
                                <strong> favorites</strong>, and both a full <strong>Pokémon profile view</strong> and
                                a compact <strong>drawer</strong> for quick info.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                                I focused on <strong>clean architecture</strong>, <strong>custom hooks</strong> and
                                <strong> reusable components</strong>, so the app stays
                                <strong> scalable</strong> and <strong>maintainable</strong> as features grow.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1.5 }}>
                                Data is persisted with <strong>local storage</strong>, and <strong>RTK Query </strong>
                                handles API access, caching and performance so the UI feels fast and smooth.
                            </Typography>

                            {/* Tech tags */}
                            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                                <Typography variant="caption" sx={{ px: 1, py: 0.5, borderRadius: 9999, bgcolor: 'rgba(15,23,42,0.9)', border: '1px solid rgba(148,163,184,0.5)' }}>
                                    React
                                </Typography>
                                <Typography variant="caption" sx={{ px: 1, py: 0.5, borderRadius: 9999, bgcolor: 'rgba(15,23,42,0.9)', border: '1px solid rgba(148,163,184,0.5)' }}>
                                    TypeScript
                                </Typography>
                                <Typography variant="caption" sx={{ px: 1, py: 0.5, borderRadius: 9999, bgcolor: 'rgba(15,23,42,0.9)', border: '1px solid rgba(148,163,184,0.5)' }}>
                                    RTK Query
                                </Typography>
                                <Typography variant="caption" sx={{ px: 1, py: 0.5, borderRadius: 9999, bgcolor: 'rgba(15,23,42,0.9)', border: '1px solid rgba(148,163,184,0.5)' }}>
                                    MUI
                                </Typography>
                                <Typography variant="caption" sx={{ px: 1, py: 0.5, borderRadius: 9999, bgcolor: 'rgba(15,23,42,0.9)', border: '1px solid rgba(148,163,184,0.5)' }}>
                                    Local Storage
                                </Typography>
                            </Stack>

                            {/* Actions – you can plug real links later */}
                            <Stack direction="row" spacing={1}>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    component="a"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Code
                                </Button>
                                <Button
                                    variant="text"
                                    size="small"
                                    component="a"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* TABLE INFRASTRUCTURE CARD */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ ...glassCardSx, ...hoverGlowSx, height: '100%' }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                Reusable Data Table Infrastructure
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                                React · TypeScript · MUI · Local Storage
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                A <strong>generic table infrastructure</strong> built with React and TypeScript, designed
                                to be reused across multiple screens. It powers complex data views with a consistent API
                                and behavior.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                                Supports <strong>sorting</strong>, <strong>filtering</strong>, <strong>searching</strong>,{' '}
                                <strong>pagination</strong> and <strong>column visibility</strong>, all driven by
                                configuration. The same infrastructure can be plugged into different datasets without
                                rewriting logic.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                                I focused on <strong>clean abstractions</strong> and <strong>reusable hooks</strong>, so
                                table state and behavior (sorting, filters, page index, page size) are encapsulated and
                                easy to reuse.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1.5 }}>
                                User preferences are persisted with <strong>local storage</strong>, so columns, filters
                                and layout choices are remembered between sessions, improving real-world usability.
                            </Typography>

                            {/* Tech tags */}
                            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 9999,
                                        bgcolor: 'rgba(15,23,42,0.9)',
                                        border: '1px solid rgba(148,163,184,0.5)',
                                    }}
                                >
                                    React
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 9999,
                                        bgcolor: 'rgba(15,23,42,0.9)',
                                        border: '1px solid rgba(148,163,184,0.5)',
                                    }}
                                >
                                    TypeScript
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 9999,
                                        bgcolor: 'rgba(15,23,42,0.9)',
                                        border: '1px solid rgba(148,163,184,0.5)',
                                    }}
                                >
                                    Memoization
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 9999,
                                        bgcolor: 'rgba(15,23,42,0.9)',
                                        border: '1px solid rgba(148,163,184,0.5)',
                                    }}
                                >
                                    Custom Hooks
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 9999,
                                        bgcolor: 'rgba(15,23,42,0.9)',
                                        border: '1px solid rgba(148,163,184,0.5)',
                                    }}
                                >
                                    Local Storage
                                </Typography>
                            </Stack>

                            {/* Actions – fill in real links later */}
                            <Stack direction="row" spacing={1}>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    component="a"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Code
                                </Button>
                                <Button
                                    variant="text"
                                    size="small"
                                    component="a"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ ...glassCardSx, ...hoverGlowSx, height: '100%' }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                Form Infrastructure / Lightweight Form Engine
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                                React · TypeScript · Custom Hooks · Local Storage · Validation
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                A reusable <strong>form engine</strong> inspired by libraries like React Hook Form, designed
                                to handle complex forms with <strong>data persistence</strong>, <strong>validation</strong>{' '}
                                and flexible layouts using a clean, scalable architecture.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                                The core logic manages <strong>form state</strong> (values, errors, touched state) and exposes
                                a simple API via <strong>custom hooks</strong>, so individual inputs can plug into the form
                                without duplicating logic.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 0.5 }}>
                                Supports <strong>input validation</strong> and <strong>data persistence</strong> using{' '}
                                <strong>local storage</strong>, allowing users to come back to a form without losing their
                                progress.
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1.5 }}>
                                The same engine can power different <strong>layouts</strong> and UI structures, keeping form
                                behavior centralized while giving full freedom on how each form looks and feels.
                            </Typography>

                            {/* Tech tags */}
                            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 9999,
                                        bgcolor: 'rgba(15,23,42,0.9)',
                                        border: '1px solid rgba(148,163,184,0.5)',
                                    }}
                                >
                                    React
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 9999,
                                        bgcolor: 'rgba(15,23,42,0.9)',
                                        border: '1px solid rgba(148,163,184,0.5)',
                                    }}
                                >
                                    TypeScript
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 9999,
                                        bgcolor: 'rgba(15,23,42,0.9)',
                                        border: '1px solid rgba(148,163,184,0.5)',
                                    }}
                                >
                                    Custom Hooks
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 9999,
                                        bgcolor: 'rgba(15,23,42,0.9)',
                                        border: '1px solid rgba(148,163,184,0.5)',
                                    }}
                                >
                                    Validation
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 9999,
                                        bgcolor: 'rgba(15,23,42,0.9)',
                                        border: '1px solid rgba(148,163,184,0.5)',
                                    }}
                                >
                                    Local Storage
                                </Typography>
                            </Stack>

                            {/* Actions – we'll style these globally later */}
                            <Stack direction="row" spacing={1}>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    component="a"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Code
                                </Button>
                                <Button
                                    variant="text"
                                    size="small"
                                    component="a"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box >

    )
}
