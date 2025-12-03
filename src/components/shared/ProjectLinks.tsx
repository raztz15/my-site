import { GitHub, Launch } from '@mui/icons-material'
import { Button, Stack } from '@mui/material'

interface ProjectLinksProps {
    gitHref: string;
    demoHref?: string;
}
export const ProjectLinks = ({ gitHref }: ProjectLinksProps) => {
    return (
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <Button
                variant="outlined"
                size="small"
                startIcon={<GitHub sx={{ fontSize: 18 }} />}
                component="a"
                href={gitHref}
                target="_blank"
                rel="noreferrer"
                sx={{
                    textTransform: 'none',
                    borderColor: 'rgba(255,255,255,0.22)',
                    color: 'rgba(255,255,255,0.85)',
                    transition: 'all 160ms ease',
                    '&:hover': {
                        borderColor: 'rgba(255,255,255,0.45)',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                    },
                }}
            >
                View Code
            </Button>

            <Button
                variant="text"
                size="small"
                startIcon={<Launch sx={{ fontSize: 18 }} />}
                component="a"
                href="#"
                target="_blank"
                rel="noreferrer"
                sx={{
                    textTransform: 'none',
                    color: 'rgba(255,255,255,0.85)',
                    transition: 'all 160ms ease',
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        color: '#ffcf33',
                    },
                }}
            >
                Live Demo
            </Button>
        </Stack>
    )
}
