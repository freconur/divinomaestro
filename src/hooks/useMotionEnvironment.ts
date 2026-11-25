"use client";

import { useState, useEffect } from 'react';

export const EASE_EDITORIAL = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT_ONCE = {
    once: true,
    amount: 0.15,
} as const;

interface MotionEnvironment {
    isCompact: boolean;
    prefersReducedMotion: boolean;
    enableParallax: boolean;
}

/**
 * Detects compact/touch screens and reduced-motion preferences so continuous
 * scroll-linked parallax can be disabled on low-end mobile devices while keeping
 * lightweight GPU-composited reveal animations active.
 */
export function useMotionEnvironment(): MotionEnvironment {
    const [env, setEnv] = useState<MotionEnvironment>({
        isCompact: true,
        prefersReducedMotion: false,
        enableParallax: false,
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const compactQuery = window.matchMedia('(max-width: 767px), (pointer: coarse)');
        const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const update = () => {
            const isCompact = compactQuery.matches;
            const prefersReducedMotion = reducedQuery.matches;
            setEnv({
                isCompact,
                prefersReducedMotion,
                enableParallax: !isCompact && !prefersReducedMotion,
            });
        };

        update();
        compactQuery.addEventListener('change', update);
        reducedQuery.addEventListener('change', update);

        return () => {
            compactQuery.removeEventListener('change', update);
            reducedQuery.removeEventListener('change', update);
        };
    }, []);

    return env;
}
