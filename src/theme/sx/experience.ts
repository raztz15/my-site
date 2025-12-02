export const experienceItemSx = {
    position: 'relative',
    pl: 3,
    borderLeft: '1px solid rgba(148,163,184,0.5)',
    pb: 3,
    '&:last-of-type': {
        pb: 0,
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        left: -5,
        top: 9,
        width: 10,
        height: 10,
        borderRadius: '50%',
        background:
            'radial-gradient(circle at center, #ff8a00 0%, #ffc300 45%, rgba(15,23,42,1) 100%)',
        boxShadow: '0 0 10px rgba(255,165,0,0.7)',
    },
};
