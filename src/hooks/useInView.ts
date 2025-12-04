import { useEffect, useRef, useState } from "react";

interface UseInViewOPtions extends IntersectionObserverInit {
    once?: boolean;
}

export const useInView = (options: UseInViewOPtions = { once: true, threshold: .15 }) => {
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const { once = true, ...observerOptions } = options;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                if (once) observer.unobserve(entry.target);
            } else if (!once) {
                setInView(false);
            }
        }, observerOptions);

        observer.observe(element);

        return () => {
            observer.disconnect();
        }
    }, [options]);

    return { ref, inView }
}