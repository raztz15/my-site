import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { glassCardSx, hoverGlowSx } from '../theme/sx/cards'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

export const Contact = () => {
    return (
        <Box id="contact" sx={{ py: 8 }}>
            <Container maxWidth="sm">
                <Box sx={{ ...glassCardSx, ...hoverGlowSx, textAlign: 'center' }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(90deg, #ff8a00, #ffcf33)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Let&apos;s connect
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                    >
                        I&apos;m always happy to talk about <strong>frontend architecture</strong>,{' '}
                        <strong>React + TypeScript projects</strong>, or new opportunities in the tech world.
                        Feel free to reach out.
                    </Typography>

                    <Stack
                        direction="column"
                        spacing={1.5}
                        sx={{ alignItems: 'center', mb: 2 }}
                    >
                        {/* TODO: replace href values with your real links */}
                        <Button
                            variant="contained"
                            startIcon={<Email />}
                            component="a"
                            href="mailto:raztz15@gmail.com"
                            sx={{ textTransform: 'none', minWidth: 230 }}
                        >
                            Email me
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<LinkedIn />}
                            component="a"
                            href="https://www.linkedin.com/in/dekelraz8/"
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                textTransform: 'none',
                                minWidth: 230,
                                borderColor: 'rgba(255,255,255,0.22)',
                                color: 'rgba(255,255,255,0.9)',
                                '&:hover': {
                                    borderColor: 'rgba(255,255,255,0.45)',
                                    backgroundColor: 'rgba(255,255,255,0.06)',
                                },
                            }}
                        >
                            LinkedIn
                        </Button>

                        <Button
                            variant="text"
                            startIcon={<GitHub />}
                            component="a"
                            href="https://github.com/raztz15"
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                textTransform: 'none',
                                minWidth: 230,
                                color: 'rgba(255,255,255,0.85)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.06)',
                                    color: '#ffcf33',
                                },
                            }}
                        >
                            GitHub
                        </Button>
                    </Stack>

                    <Typography variant="caption" color="text.secondary">
                        Based in <strong>Israel</strong> · Open to hybrid / remote roles.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
