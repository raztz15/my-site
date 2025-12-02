import { Box, Container, Typography } from '@mui/material'
import { glassCardSx, hoverGlowSx } from '../theme/sx/cards'

export const Projects = () => {
    return (
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
    )
}
