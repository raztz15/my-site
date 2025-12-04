import { AppBar, Box, Button, IconButton, List, ListItemButton, ListItemText, Stack, SwipeableDrawer, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { handleScrollTo } from '../utils';
import { useActiveSection } from '../hooks/useActiveSection';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'contact', 'hero'] as const;
export type SectionId = (typeof SECTION_IDS)[number];
const navItems: { id: SectionId; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

export const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const activeSection = useActiveSection();

    // const handleScrollTo = (id: SectionId) => {
    //     const el = document.getElementById(id);
    //     if (!el) return;

    //     const yOffset = -80; // adjust to your AppBar height
    //     const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    //     window.scrollTo({ top: y, behavior: 'smooth' });
    // };

    const handleNavClick = (id: SectionId) => {
        handleScrollTo(id);
        setDrawerOpen(false);
    }

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: 'rgba(15,23,42,0.88)',
                    backdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(148,163,184,0.35)',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Left side: logo / name */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography
                            onClick={() => handleScrollTo('hero')}
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                background: 'linear-gradient(90deg, #ff8a00, #ffcf33)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                cursor: 'pointer'
                            }}
                        >
                            Dekel Raz
                        </Typography>
                    </Box>

                    {/* Right side: nav */}
                    {isMobile ? (
                        // MOBILE: menu icon
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={() => setDrawerOpen(true)}
                            aria-label="open navigation menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        // DESKTOP: buttons row
                        <Stack direction="row" spacing={1.5}>
                            {navItems.map((item) => {
                                // const isActive = activeSection === item.id;

                                return (
                                    <Button
                                        key={item.id}
                                        onClick={() => handleScrollTo(item.id)}
                                        sx={{
                                            textTransform: 'none',
                                            fontSize: 14,
                                            // fontWeight: isActive ? 600 : 500,
                                            // color: isActive ? '#ffcf33' : 'rgba(248,250,252,0.82)',
                                            position: 'relative',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                left: 0,
                                                right: 0,
                                                bottom: -4,
                                                height: 2,
                                                borderRadius: 9999,
                                                // background: isActive
                                                //     ? 'linear-gradient(90deg, #ff8a00, #ffcf33)'
                                                //     : 'transparent',
                                                // transform: isActive ? 'scaleX(1)' : 'scaleX(0.4)',
                                                // transition: 'background 180ms ease-out, transform 180ms ease-out',
                                            },
                                            // '&:hover::after': {
                                            //     background: isActive
                                            //         ? 'linear-gradient(90deg, #ff8a00, #ffcf33)'
                                            //         : 'rgba(148,163,184,0.7)',
                                            // },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                );
                            })}
                        </Stack>
                    )}
                </Toolbar>
            </AppBar>

            {/* MOBILE DRAWER */}
            <SwipeableDrawer
                anchor="bottom"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                onOpen={() => setDrawerOpen(true)}
                disableBackdropTransition={false}
                disableDiscovery={false}
                PaperProps={{
                    sx: {
                        bgcolor: 'radial-gradient(circle at top, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at bottom left, rgba(56,189,248,0.22), transparent 55%), #020617',
                        color: 'rgba(248,250,252,0.95)',
                        width: '100%',
                        borderLeft: '1px solid rgba(148,163,184,0.4)',
                        boxShadow: '0 0 40px rgba(15,23,42,0.9)',
                        borderRadius: '10px 10px 0 0 ',
                        opacity: .95,
                    },
                }}
            >
                <Box
                    sx={{
                        mt: 1,
                        px: 2.5,
                        pb: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                    }}
                >
                    {/* little grab handle */}
                    <Box
                        sx={{
                            alignSelf: 'center',
                            width: 32,
                            height: 4,
                            borderRadius: 9999,
                            bgcolor: 'rgba(148,163,184,0.6)',
                            mb: 1,
                        }}
                    />

                    <Typography
                        variant="subtitle2"
                        sx={{
                            textTransform: 'uppercase',
                            letterSpacing: 0.12,
                            fontSize: 11,
                            color: 'rgba(148,163,184,0.9)',
                            mb: 0.5,
                        }}
                    >
                        Navigation
                    </Typography>

                    <List>
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <ListItemButton
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    sx={{
                                        borderRadius: 1.5,
                                        mb: 0.5,
                                        py: 1,
                                        px: 1.5,
                                        bgcolor: isActive ? 'rgba(30,64,175,0.6)' : 'transparent',
                                        '&:hover': {
                                            bgcolor: isActive
                                                ? 'rgba(30,64,175,0.75)'
                                                : 'rgba(30,64,175,0.35)',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontSize: 14,
                                            fontWeight: isActive ? 600 : 500,
                                            color: isActive ? '#ffcf33' : 'rgba(248,250,252,0.9)',
                                        }}
                                    />
                                </ListItemButton>
                            );
                        })}
                    </List>
                </Box>
            </SwipeableDrawer>

        </>
    )
}
