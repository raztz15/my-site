import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { glassCardSx, hoverGlowSx } from '../theme/sx/cards'
import { Email, GitHub, LinkedIn, WhatsApp } from '@mui/icons-material'

export const Contact = () => {
    const emailHref =
        'https://mail.google.com/mail/?view=cm&fs=1&to=raztz15@gmail.com&su=Let%27s%20talk%20about%20your%20next%20role&body=Hi%20Dekel,%0D%0A%0D%0AI%20saw%20your%20portfolio%20website%20and%20wanted%20to%20reach%20out%20about...';

    const whatsappHref =
        'https://wa.me/972527499234?text=Hi%20Dekel,%20I%20just%20visited%20your%20portfolio%20and%20wanted%20to%20reach%20out.';


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
                            href={emailHref}
                            target="_blank"
                            rel="noreferrer"
                            sx={{ textTransform: 'none', minWidth: 230 }}
                        >
                            Email me
                        </Button>

                        <Button
                            variant="outlined"
                            startIcon={<WhatsApp />}
                            component="a"
                            href={whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                textTransform: 'none',
                                minWidth: 230,
                                borderColor: 'rgba(37,211,102,0.6)',
                                color: 'rgba(240,253,244,0.95)',
                                '&:hover': {
                                    borderColor: 'rgba(37,211,102,0.9)',
                                    backgroundColor: 'rgba(22,163,74,0.15)',
                                },
                            }}
                        >
                            WhatsApp
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
