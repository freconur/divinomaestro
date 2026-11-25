"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, BookOpen, Award, Users, GraduationCap, Clock } from 'lucide-react';
import styles from './NosotrosHero.module.css';

export default function NosotrosHero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

    const stats = [
        { icon: Clock, value: "+25 Años", label: "De trayectoria educativa" },
        { icon: GraduationCap, value: "3 Niveles", label: "Inicial, Primaria y Secundaria" },
        { icon: Users, value: "1:15", label: "Ratio tutoría personalizada" },
        { icon: Award, value: "100%", label: "Docentes especializados" },
    ];

    return (
        <section className={styles.hero} ref={ref}>
            {/* Background Parallax Image with Gradient Vignette */}
            <motion.div className={styles.imageWrapper} style={{ y, opacity }}>
                <Image
                    src="/nosotros_hero_bg.png"
                    alt="Colegio Divino Maestro - Quiénes Somos"
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
                    {/* Badge */}
                    <motion.div
                        className={styles.badgeWrapper}
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className={styles.badge}>
                            <Sparkles size={14} className={styles.badgeIcon} />
                            <span>Tradición, Valores y Excelencia • Fundado en 1996</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Formando Líderes con{' '}
                        <span className={styles.titleHighlight}>
                            Sólidos Valores
                        </span>{' '}
                        y Vocación de Futuro
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        En el Colegio Particular Divino Maestro acompañamos a cada estudiante en su desarrollo
                        intelectual, emocional y espiritual, forjando personas íntegras capaces de transformar
                        positivamente su entorno y triunfar en un mundo globalizado.
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
                    >
                        <a href="#historia" className={`btn-primary ${styles.primaryBtn}`}>
                            <span>Nuestra Historia</span>
                            <ArrowRight size={17} className={styles.btnArrow} />
                        </a>

                        <Link href="/propuesta-educativa" className={`btn-secondary ${styles.secondaryBtn}`}>
                            <BookOpen size={17} />
                            <span>Propuesta Educativa</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Hero Stats Ribbon */}
                <motion.div
                    className={styles.statsRibbon}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.55, ease: "easeOut" }}
                >
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div key={idx} className={styles.statItem}>
                                <div className={styles.statIconWrapper}>
                                    <Icon size={20} className={styles.statIcon} />
                                </div>
                                <div className={styles.statTexts}>
                                    <span className={styles.statValue}>{stat.value}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
