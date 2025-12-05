import { Box, Grid, Stack, Typography } from '@mui/material'
import { type ReactNode } from 'react'
import { glassCardSx, hoverGlowSx } from '../../theme/sx/cards'
import { ProjectLinks } from './ProjectLinks'
import { RevealOnScroll } from './RevealOnScroll';

interface SkillCardProps {
    gitHref: string;
    usedTechnologies: string[];
    subtitleTech: string[];
    title: string;
    body: ReactNode[];
    delayMs: number;
}

export const SkillCard = ({
    title,
    subtitleTech,
    gitHref,
    usedTechnologies,
    body,
    delayMs,
}: SkillCardProps) => {
    return (
        <Grid size={{ xs: 12, md: 6 }}>
            <RevealOnScroll delayMs={delayMs}>
                <Box
                    sx={{
                        ...glassCardSx,
                        ...hoverGlowSx,
                        height: '100%',
                        textAlign: { xs: 'center', md: 'left' }, // ⬅ center on mobile
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            mb: 0.5,
                            fontSize: { xs: '1.05rem', md: '1.1rem' },
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            mb: 1.5,
                            fontSize: { xs: '0.9rem', md: '0.95rem' },
                        }}
                    >
                        {subtitleTech.map((tech, idx) => (
                            <span key={tech}>
                                {tech}
                                {idx < subtitleTech.length - 1 ? ' · ' : ''}
                            </span>
                        ))}
                    </Typography>

                    {body?.map((item, idx) => (
                        <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                                mb: idx < body.length - 1 ? 1 : 0,
                                fontSize: { xs: '0.95rem', md: '1rem' },
                                lineHeight: { xs: 1.7, md: 1.8 },
                            }}
                        >
                            {item}
                        </Typography>
                    ))}

                    {/* Tech tags */}
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        sx={{
                            mb: 2,
                            mt: 1.5,
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            columnGap: 1.0,                       // horizontal gap between pills
                            rowGap: { xs: 1.2, md: 0.8 },         // more vertical gap on mobile
                        }}
                    >
                        {usedTechnologies.map((tech) => (
                            <Typography
                                key={tech}
                                variant="caption"
                                sx={{
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 9999,
                                    bgcolor: 'rgba(15,23,42,0.9)',
                                    border: '1px solid rgba(148,163,184,0.5)',
                                    lineHeight: 1.6,              // extra breathing room inside each pill
                                }}
                            >
                                {tech}
                            </Typography>
                        ))}
                    </Stack>

                    {/* Actions */}
                    <ProjectLinks gitHref={gitHref} />
                </Box>
            </RevealOnScroll>
        </Grid>
    )
}
