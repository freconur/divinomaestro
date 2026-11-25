"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
    Star,
    Heart,
    CheckCircle2,
    Sparkles,
    School,
    ChevronLeft,
    ChevronRight,
    Pause,
    Play
} from 'lucide-react';
import { EASE_EDITORIAL, VIEWPORT_ONCE } from '@/hooks/useMotionEnvironment';
import styles from './Testimonials.module.css';

interface Testimonial {
    id: string;
    parents: string;
    levelName: string;
    rating: number;
    highlight: string;
    quote: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 'valen-benavides',
        parents: 'Patricia & Carlos Benavides',
        levelName: 'Nivel Inicial',
        rating: 5,
        highlight: 'El cariño y la paciencia de las misses no tienen comparación',
        quote: 'Como papás primerizos teníamos muchos temores al dejar a nuestra pequeña por primera vez. Desde el primer día, las profesoras la recibieron con un amor y dedicación que nos dio total tranquilidad. Valentina llega todos los días cantando, contenta y deseando volver a su colegio.'
    },
    {
        id: 'mateo-quispe',
        parents: 'Ing. Marco Antonio Quispe',
        levelName: 'Nivel Primaria',
        rating: 5,
        highlight: 'Equilibrio perfecto entre innovación académica y formación en valores',
        quote: 'Buscábamos un colegio que no solo exigiera altas notas, sino que formara buenas personas con empatía y disciplina positiva. En el Divino Maestro hemos visto a Mateo fascinarse con los talleres de robótica y ciencias, manteniendo siempre un profundo respeto y solidaridad con sus compañeros.'
    },
    {
        id: 'sofia-morales',
        parents: 'Dra. Claudia Morales',
        levelName: 'Nivel Secundaria',
        rating: 5,
        highlight: 'Ingreso universitario directo y una formación de carácter excepcional',
        quote: 'Mi hija culminó su etapa escolar este año habiendo alcanzado el ingreso directo a la universidad. Pero más allá de lo académico, agradezco infinitamente la tutoría personalizada y la orientación vocacional. La formaron como una líder íntegra, segura y con una voz propia ante el futuro.'
    },
    {
        id: 'lucas-torres',
        parents: 'Lorena Sánchez & David Torres',
        levelName: 'Nivel Primaria',
        rating: 5,
        highlight: 'Una transición de inicial a primaria alegre, cercana y sin temores',
        quote: 'El cambio a primer grado suele asustar a los niños, pero el equipo psicopedagógico y sus tutores guiaron a Lucas con una calidez humana admirable. La comunicación colegio-familia es diaria y transparente; sentimos que remamos de la mano por el bienestar de nuestro hijo.'
    },
    {
        id: 'hermanos-mendoza',
        parents: 'Víctor & Mariana Mendoza',
        levelName: 'Nivel Inicial',
        rating: 5,
        highlight: 'Una verdadera comunidad donde cada niño es valorado por su nombre',
        quote: 'Tener a dos hijos con edades y necesidades distintas en el mismo colegio requería un lugar que supiera entender la individualidad de cada uno. En Divino Maestro profesores, directivos y auxiliares conocen a cada estudiante, sus talentos y sus tiempos. Es su segundo hogar.'
    },
    {
        id: 'daniela-ramos',
        parents: 'Lic. Gabriel Ramos',
        levelName: 'Nivel Secundaria',
        rating: 5,
        highlight: 'Docentes que inspiran pensamiento crítico, oratoria y autonomía',
        quote: 'En la adolescencia es fundamental que los chicos tengan modelos de referencia positivos. Los profesores de secundaria combinan exigencia con cercanía y respeto. He visto a mi hija ganar gran soltura para debatir, argumentar con fundamentos y tomar decisiones con responsabilidad.'
    }
];

// Tripled array for seamless infinite looping (Set 0, Set 1 [initial], Set 2)
const INFINITE_ITEMS = [
    ...TESTIMONIALS.map((t) => ({ ...t, uniqueKey: `${t.id}-s0` })),
    ...TESTIMONIALS.map((t) => ({ ...t, uniqueKey: `${t.id}-s1` })),
    ...TESTIMONIALS.map((t) => ({ ...t, uniqueKey: `${t.id}-s2` }))
];

const TRUST_STATS = [
    {
        value: '4.9 / 5.0',
        label: 'Satisfacción General',
        detail: 'Calificación de nuestras familias',
        icon: <Star size={20} className={styles.statIcon} />
    },
    {
        value: '98.5%',
        label: 'Recomendación Activa',
        detail: 'Padres que nos recomiendan',
        icon: <Heart size={20} className={styles.statIcon} />
    },
    {
        value: '+20 Años',
        label: 'Trayectoria Educativa',
        detail: 'Formando líderes con valores',
        icon: <School size={20} className={styles.statIcon} />
    },
    {
        value: '100%',
        label: 'Acompañamiento Tutorial',
        detail: 'Atención personalizada y cercana',
        icon: <CheckCircle2 size={20} className={styles.statIcon} />
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isUserPaused, setIsUserPaused] = useState(false);
    const [isInViewport, setIsInViewport] = useState(true);
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Calculate dynamic card width + gap between cards
    const getCardWidth = useCallback(() => {
        if (!trackRef.current) return 0;
        const cards = trackRef.current.querySelectorAll(`.${styles.cardWrapper}`);
        if (cards.length > 1) {
            const first = cards[0] as HTMLElement;
            const second = cards[1] as HTMLElement;
            const diff = second.offsetLeft - first.offsetLeft;
            if (diff > 0) return diff;
        }
        const first = cards[0] as HTMLElement;
        if (first) {
            return first.offsetWidth + 24;
        }
        return 0;
    }, []);

    // Silently re-center track into Set 1 when scroll settles in Set 0 or Set 2
    const checkAndResetBoundaries = useCallback(() => {
        if (!trackRef.current) return;
        const track = trackRef.current;
        const cardWidth = getCardWidth();
        if (cardWidth === 0) return;

        const setWidth = cardWidth * TESTIMONIALS.length;

        // Scrolled into Set 2 -> instantly normalize back to Set 1
        if (track.scrollLeft >= setWidth * 2 - 10) {
            track.scrollTo({
                left: track.scrollLeft - setWidth,
                behavior: 'instant'
            });
        }
        // Scrolled back into Set 0 -> instantly normalize forward to Set 1
        else if (track.scrollLeft <= setWidth - cardWidth) {
            track.scrollTo({
                left: track.scrollLeft + setWidth,
                behavior: 'instant'
            });
        }
    }, [getCardWidth]);

    // Handle scroll events and update active indicator
    const handleScroll = useCallback(() => {
        if (!trackRef.current) return;
        const track = trackRef.current;
        const cardWidth = getCardWidth();
        if (cardWidth === 0) return;

        // Current real active index (0 to 5)
        const rawIndex = Math.round(track.scrollLeft / cardWidth);
        const realIndex = ((rawIndex % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length;
        setActiveIndex(realIndex);

        // Debounce boundary normalization after user manual scroll/swipe settles
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
            checkAndResetBoundaries();
        }, 150);
    }, [getCardWidth, checkAndResetBoundaries]);

    // Initialize track to Set 1 on client mount
    useEffect(() => {
        const initScroll = () => {
            if (!trackRef.current) return;
            const cardWidth = getCardWidth();
            if (cardWidth > 0) {
                const setWidth = cardWidth * TESTIMONIALS.length;
                trackRef.current.scrollTo({ left: setWidth, behavior: 'instant' });
            }
        };

        initScroll();
        const raf = requestAnimationFrame(initScroll);
        return () => cancelAnimationFrame(raf);
    }, [getCardWidth]);

    // Attach scroll and scrollend listeners
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const onScrollEnd = () => {
            checkAndResetBoundaries();
        };

        track.addEventListener('scroll', handleScroll, { passive: true });
        track.addEventListener('scrollend', onScrollEnd);

        return () => {
            track.removeEventListener('scroll', handleScroll);
            track.removeEventListener('scrollend', onScrollEnd);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [handleScroll, checkAndResetBoundaries]);

    // Handle window resize cleanly
    useEffect(() => {
        const handleResize = () => {
            if (!trackRef.current) return;
            const cardWidth = getCardWidth();
            if (cardWidth === 0) return;
            const setWidth = cardWidth * TESTIMONIALS.length;
            trackRef.current.scrollTo({
                left: setWidth + activeIndex * cardWidth,
                behavior: 'instant'
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeIndex, getCardWidth]);

    // Seamless scroll forward or backward
    const scroll = useCallback((direction: 'prev' | 'next') => {
        if (!trackRef.current) return;
        const track = trackRef.current;
        const cardWidth = getCardWidth();
        if (cardWidth === 0) return;

        const setWidth = cardWidth * TESTIMONIALS.length;

        // Pre-normalize before smooth move if needed
        if (direction === 'next' && track.scrollLeft >= setWidth * 2 - 10) {
            track.scrollTo({ left: track.scrollLeft - setWidth, behavior: 'instant' });
        } else if (direction === 'prev' && track.scrollLeft <= setWidth - cardWidth) {
            track.scrollTo({ left: track.scrollLeft + setWidth, behavior: 'instant' });
        }

        const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }, [getCardWidth]);

    // Pause autoplay when section is scrolled off-screen to save battery & CPU
    useEffect(() => {
        if (!sectionRef.current || typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(
            ([entry]) => setIsInViewport(entry.isIntersecting),
            { threshold: 0.05 }
        );
        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Autoplay interval (continuous forward loop, pauses offscreen, on hover/touch/focus, or user pause)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches || isPaused || isUserPaused || !isInViewport) return;

        const timer = setInterval(() => {
            scroll('next');
        }, 4500);

        return () => clearInterval(timer);
    }, [isPaused, isUserPaused, isInViewport, scroll]);

    // Navigate to slide using the shortest smooth path
    const scrollToSlide = (targetIndex: number) => {
        if (!trackRef.current) return;
        const track = trackRef.current;
        const cardWidth = getCardWidth();
        if (cardWidth === 0) return;

        const currentRaw = Math.round(track.scrollLeft / cardWidth);
        const currentMod = ((currentRaw % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length;

        let diff = targetIndex - currentMod;
        if (diff > TESTIMONIALS.length / 2) diff -= TESTIMONIALS.length;
        if (diff < -TESTIMONIALS.length / 2) diff += TESTIMONIALS.length;

        track.scrollTo({
            left: (currentRaw + diff) * cardWidth,
            behavior: 'smooth'
        });
        setActiveIndex(targetIndex);
    };

    return (
        <section
            ref={sectionRef}
            className={styles.testimonials}
            id="testimonios"
            aria-labelledby="testimonials-heading"
        >
            <div className="container">
                {/* Section Header */}
                <motion.header
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                >
                    <div className={styles.badgeWrapper}>
                        <span className={styles.badge}>
                            <Sparkles size={15} className={styles.badgeSparkle} aria-hidden="true" />
                            <span>Comunidad y Confianza</span>
                        </span>
                    </div>

                    <h2 id="testimonials-heading" className={styles.title}>
                        Lo que dicen los papás sobre el Colegio
                    </h2>

                    <p className={styles.description}>
                        La mayor alegría de nuestra labor docente es la tranquilidad y el orgullo de las
                        familias que caminan junto a nosotros. Descubre sus vivencias en cada etapa escolar.
                    </p>
                </motion.header>

                {/* Trust Stats Bar */}
                <motion.div
                    className={styles.statsBar}
                    role="region"
                    aria-label="Métricas de satisfacción"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.5, delay: 0.08, ease: EASE_EDITORIAL }}
                >
                    {TRUST_STATS.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                {stat.icon}
                            </div>
                            <div className={styles.statInfo}>
                                <span className={styles.statValue}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                                <span className={styles.statDetail}>{stat.detail}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Single-Row Seamless Infinite Carousel */}
                <div
                    className={styles.carouselContainer}
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Carrusel infinito de testimonios"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                >
                    {/* Carousel Track */}
                    <div
                        id="testimonials-carousel"
                        ref={trackRef}
                        className={styles.carouselTrack}
                        tabIndex={0}
                        aria-label="Testimonios de las familias"
                    >
                        {INFINITE_ITEMS.map((item, index) => (
                            <div
                                key={item.uniqueKey}
                                className={styles.cardWrapper}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`${(index % TESTIMONIALS.length) + 1} de ${TESTIMONIALS.length}`}
                            >
                                <article className={styles.card}>
                                    {/* 5 Stars Rating on top */}
                                    <div
                                        className={styles.ratingRow}
                                        role="img"
                                        aria-label={`Calificación de ${item.rating} de 5 estrellas`}
                                    >
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                className={styles.starFilled}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>

                                    {/* Quote Body */}
                                    <blockquote className={styles.quoteBody}>
                                        <h3 className={styles.highlightText}>
                                            &ldquo;{item.highlight}&rdquo;
                                        </h3>
                                        <p className={styles.quoteText}>
                                            {item.quote}
                                        </p>
                                    </blockquote>

                                    {/* Clean Author Footer: only parent name & level */}
                                    <footer className={styles.cardFooter}>
                                        <span className={styles.authorName}>{item.parents}</span>
                                        <span className={styles.levelPill}>{item.levelName}</span>
                                    </footer>
                                </article>
                            </div>
                        ))}
                    </div>

                    {/* Carousel Navigation Controls & Dots */}
                    <div className={styles.carouselControls} aria-label="Controles de navegación">
                        <button
                            type="button"
                            onClick={() => scroll('prev')}
                            className={styles.controlBtn}
                            aria-label="Ver testimonio anterior"
                        >
                            <ChevronLeft size={20} aria-hidden="true" />
                        </button>

                        <div className={styles.carouselMarkers} role="tablist" aria-label="Indicadores de diapositivas">
                            {TESTIMONIALS.map((item, idx) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeIndex === idx}
                                    aria-label={`Ir al testimonio ${idx + 1}: ${item.parents}`}
                                    className={`${styles.markerDot} ${activeIndex === idx ? styles.markerDotActive : ''}`}
                                    onClick={() => scrollToSlide(idx)}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => scroll('next')}
                            className={styles.controlBtn}
                            aria-label="Ver siguiente testimonio"
                        >
                            <ChevronRight size={20} aria-hidden="true" />
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsUserPaused((prev) => !prev)}
                            className={styles.controlBtn}
                            aria-label={isUserPaused ? 'Reanudar reproducción automática de testimonios' : 'Pausar reproducción automática de testimonios'}
                        >
                            {isUserPaused ? <Play size={17} aria-hidden="true" /> : <Pause size={17} aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
