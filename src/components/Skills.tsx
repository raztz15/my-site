import { Box, Container, Typography } from '@mui/material'
import { glassCardSx, hoverGlowSx } from '../theme/sx/cards'

export const Skills = () => {
    return (
        <Box id="skills" sx={{ py: 8 }}>
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
                        Skills
                    </Typography>
                    <Typography variant="body1">
                        Here we&apos;ll add a clean grid of your tech stack: React, TypeScript, Go, Redux Toolkit,
                        RTK Query, MUI, SQL, and more.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
