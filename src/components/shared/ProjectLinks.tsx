import { Button, Stack } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

interface ProjectLinksProps {
    gitHref: string;
    demoHref?: string;
}

export const ProjectLinks = ({ gitHref, demoHref }: ProjectLinksProps) => {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{
                mt: 1.5,
                alignItems: { xs: 'stretch', sm: 'flex-start' },
                justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
        >
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
                    width: { xs: '100%', sm: 'auto' },
                    justifyContent: { xs: 'center', sm: 'flex-start' },
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
                href={demoHref ?? '#'}
                target="_blank"
                rel="noreferrer"
                sx={{
                    textTransform: 'none',
                    color: 'rgba(255,255,255,0.85)',
                    transition: 'all 160ms ease',
                    width: { xs: '100%', sm: 'auto' },
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        color: '#ffcf33',
                    },
                }}
            >
                Live Demo
            </Button>
        </Stack>
    );
};
