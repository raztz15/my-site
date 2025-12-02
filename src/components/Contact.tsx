import { Box, Container, Typography } from '@mui/material'
import { glassCardSx, hoverGlowSx } from '../theme/sx/cards'

export const Contact = () => {
    return (
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
    )
}
