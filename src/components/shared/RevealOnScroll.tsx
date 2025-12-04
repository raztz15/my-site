import { type ReactNode } from 'react'
import { useInView } from '../../hooks/useInView';
import { Box } from '@mui/material';


interface RevealOnScrollProps {
    children: ReactNode;
    delayMs?: number;
}

export const RevealOnScroll = ({ children, delayMs }: RevealOnScrollProps) => {
    const { inView, ref } = useInView({ threshold: .15, rootMargin: '0px 0px -40px 0px', once: true })

    return (
        <Box
            ref={ref}
            sx={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0px)' : 'translateY(14px)',
                transition: 'opacity 600ms ease-out, transform 600ms ease-out',
                transitionDelay: inView ? `${delayMs}ms` : '0ms',
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </Box>
    )
}
