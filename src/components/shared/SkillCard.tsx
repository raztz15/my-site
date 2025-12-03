import { Box, Grid, Stack, Typography } from '@mui/material'
import { type ReactNode } from 'react'
import { glassCardSx, hoverGlowSx } from '../../theme/sx/cards'
import { ProjectLinks } from './ProjectLinks'
import { fadeIn } from '../../theme/sx/animations';



interface SkillCardProps {
    gitHref: string;
    usedTechnologies: string[];
    subtitleTech: string[];
    title: string;
    body: ReactNode[];
}

export const SkillCard = ({ title, subtitleTech, gitHref, usedTechnologies, body }: SkillCardProps) => {
    return (
        <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{
                ...glassCardSx, ...hoverGlowSx, height: '100%', opacity: 0,
                animation: `${fadeIn} 0.8s ease forwards`,
            }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                    {subtitleTech.map((tech, idx) => (
                        <span key={tech}>
                            {tech}{idx < subtitleTech.length - 1 ? ' · ' : ''}
                        </span>
                    ))}
                </Typography>

                {body?.map((item, idx) => (
                    <Typography key={idx} variant='body2' sx={{ mb: idx < body.length - 1 ? 1 : undefined }}>
                        {item}
                    </Typography>
                ))}

                {/* Tech tags */}
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2, mt: 1.5 }}>
                    {usedTechnologies.map(tech => (
                        <Typography key={tech} variant="caption" sx={{ px: 1, py: 0.5, borderRadius: 9999, bgcolor: 'rgba(15,23,42,0.9)', border: '1px solid rgba(148,163,184,0.5)' }}>
                            {tech}
                        </Typography>
                    ))}
                </Stack>
                {/* Actions – you can plug real links later */}
                <ProjectLinks gitHref={gitHref} />
            </Box>
        </Grid>
    )
}
