"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { useMotionEnvironment, EASE_EDITORIAL } from '@/hooks/useMotionEnvironment';
import styles from './Hero.module.css';

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { enableParallax } = useMotionEnvironment();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

    return (
        <section className={styles.hero} ref={ref}>
            {/* Background Parallax Image with Gradient Vignette (Parallax desktop-only) */}
            <motion.div
                className={styles.imageWrapper}
                style={enableParallax ? { y, opacity } : undefined}
            >
                <Image
                    src="/hero_dm_2.webp"
                    alt="Campus y estudiantes del Colegio Divino Maestro"
                    fill
                    priority
                    sizes="100vw"
                    className={styles.heroImage}
                />
                <div className={styles.overlay}></div>
            </motion.div>

            {/* Ambient Decorative Glows */}
            <div className={`${styles.glowShape} ${styles.glow1}`}></div>
            <div className={`${styles.glowShape} ${styles.glow2}`}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    {/* Headline with entrance effect */}
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.05, ease: EASE_EDITORIAL }}
                    >
                        Forjando el futuro con{' '}
                        <span className={styles.titleHighlight}>
                            Excelencia Académica
                        </span>{' '}
                        y Sólidos Valores
                    </motion.h1>

                    {/* Description with entrance effect */}
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.14, ease: EASE_EDITORIAL }}
                    >
                        Acompañamos a tus hijos en cada etapa escolar con una formación integral basada en valores,
                        metodología innovadora y docentes comprometidos con potenciar su máximo talento.
                    </motion.p>

                    {/* Action Buttons focused on Enrollment */}
                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.22, ease: EASE_EDITORIAL }}
                    >
                        <Link href="/matricula-2027" className={`btn-primary ${styles.primaryBtn}`}>
                            <span>Postular a Matrícula 2027</span>
                            <ArrowRight size={18} className={styles.btnArrow} />
                        </Link>

                        <Link href="#propuesta" className={`btn-secondary ${styles.secondaryBtn}`}>
                            <BookOpen size={17} />
                            <span>Conocer Propuesta</span>
                        </Link>
                    </motion.div>

                    {/* Clean, lightweight reassurance line without cards */}
                    <motion.div
                        className={styles.reassurance}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.3, ease: EASE_EDITORIAL }}
                    >
                        <div className={styles.reassuranceItem}>
                            <CheckCircle2 size={19} className={styles.checkIcon} strokeWidth={2.3} />
                            <span>Niveles: Inicial, Primaria y Secundaria</span>
                        </div>
                        <span className={styles.reassuranceDot}>•</span>
                        <div className={styles.reassuranceItem}>
                            <CheckCircle2 size={19} className={styles.checkIcon} strokeWidth={2.3} />
                            <span>Atención personalizada a padres de familia</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
