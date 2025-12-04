import { useEffect, useState } from 'react';

const SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'contact', 'hero'] as const;
export type SectionId = (typeof SECTION_IDS)[number];
type Best = { id: SectionId; ratio: number } | null

export const useActiveSection = (): SectionId | null => {
    const [active, setActive] = useState<SectionId | null>(null);

    useEffect(() => {
        const sections = SECTION_IDS
            .map((id) => {
                const el = document.getElementById(id);
                return el ? { id, el } : null;
            })
            .filter(Boolean) as { id: SectionId; el: HTMLElement }[];

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                let best: { id: SectionId; ratio: number } | null = null;

                entries.forEach((entry) => {
                    const id = entry.target.id as SectionId;
                    if (!entry.isIntersecting) return;

                    if (!best || entry.intersectionRatio > best.ratio) {
                        best = { id, ratio: entry.intersectionRatio };
                    }
                });

                if (best && (best as Best)?.id !== active) {
                    setActive((best as Best)?.id ?? null);
                }
            },
            {
                threshold: [0.2, 0.4, 0.6],
                rootMargin: '-64px 0px 0px 0px', // adjust for AppBar height
            },
        );

        sections.forEach(({ el }) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, [active]);

    return active;
};
