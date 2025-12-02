import { Box, Container, Typography } from '@mui/material'
import { glassCardSx, hoverGlowSx } from '../theme/sx/cards'

export const Experience = () => {
    return (
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
    )
}
