export const gradientFrameSx = {
    borderRadius: 4,
    padding: "2px", // thin frame
    boxShadow: '0 0 14px rgba(255,150,0,0.25)',
};

export const glassCardSx = {
    borderRadius: 4,
    p: { xs: 3, md: 4 },
    bgcolor: 'rgba(15, 23, 42, 0.82)', // slate-900-ish with transparency
    border: '1px solid rgba(148, 163, 184, 0.4)', // soft border
    boxShadow: '0 22px 60px rgba(15, 23, 42, 0.95)', // deep shadow
    backdropFilter: 'blur(16px)', // frosted glass effect
}

export const hoverGlowSx = {
    transition: 'all 180ms ease-out',
    '&:hover': {
        boxShadow:
            '0 6px 18px rgba(255,150,0,0.15), 0 4px 12px rgba(0,0,0,0.4)',
        transform: 'translateY(-2px)',
    }
}