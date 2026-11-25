"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, School, Users, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import styles from './Features.module.css';

const PILLARS = [
    {
        number: "01",
        tag: "Innovación y Autonomía",
        title: "Metodología Centrada en el Estudiante",
        bullets: [
            "Aprendizaje activo y colaborativo",
            "Resolución de problemas reales",
            "Fomento del pensamiento crítico"
        ],
        icon: Target
    },
    {
        number: "02",
        tag: "Espacios Seguros y Tecnológicos",
        title: "Infraestructura para el Aprendizaje",
        bullets: [
            "Laboratorios de cómputo y ciencias",
            "Espacios deportivos y recreativos",
            "Entorno seguro y monitoreado"
        ],
        icon: School
    },
    {
        number: "03",
        tag: "Vocación y Tutoría Continua",
        title: "Docentes Comprometidos",
        bullets: [
            "Capacitación pedagógica continua",
            "Tutoría personalizada por aula",
            "Acompañamiento psicopedagógico"
        ],
        icon: Users
    },
    {
        number: "04",
        tag: "Principios y Carácter",
        title: "Líderes con Valores",
        bullets: [
            "Educación en valores cristianos",
            "Desarrollo de liderazgo ético",
            "Proyectos de servicio y empatía"
        ],
        icon: ShieldCheck
    }
];

export default function Features() {
    return (
        <section className={styles.features} id="propuesta">
            <div className="container">
                {/* Header with scroll animation */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <Sparkles size={13} className={styles.sparkleIcon} />
                            <span>Modelo Educativo de Excelencia</span>
                        </div>
                    </div>
                    <h2 className={styles.title}>
                        Nuestros <span className={styles.titleHighlight}>4 Pilares</span> Educativos
                    </h2>
                    <p className={styles.subtitle}>
                        Desarrollamos una formación integral 360° que combina rigor académico, calidez humana
                        y tecnología para potenciar el talento de tus hijos.
                    </p>
                </motion.div>

                {/* Staggered Grid of Pillars */}
                <div className={styles.grid}>
                    {PILLARS.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={index}
                                className={styles.card}
                                data-number={pillar.number}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.55, delay: index * 0.12 }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        <Icon size={22} className={styles.icon} />
                                    </div>
                                    <div className={styles.headerMeta}>
                                        <div className={styles.metaRow}>
                                            <span className={styles.stepBadge}>Pilar {pillar.number}</span>
                                            <span className={styles.metaDot}>•</span>
                                            <span className={styles.pillarTag}>{pillar.tag}</span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className={styles.featureTitle}>{pillar.title}</h3>

                                <div className={styles.bulletList}>
                                    {pillar.bullets.map((bullet, bIdx) => (
                                        <div key={bIdx} className={styles.bulletItem}>
                                            <CheckCircle2 size={16} className={styles.checkIcon} />
                                            <span>{bullet}</span>
                                        </div>
                                    ))}
                                </div>

                                <span className={styles.watermarkNumber} aria-hidden="true">
                                    {pillar.number}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom link to full proposal */}
                <motion.div
                    className={styles.bottomBar}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <span className={styles.bottomBarText}>
                        ¿Quieres conocer a detalle nuestro plan curricular y metodología?
                    </span>
                    <Link href="/propuesta-educativa" className={styles.exploreLink}>
                        <span>Ver Propuesta Educativa Completa</span>
                        <ArrowRight size={16} className={styles.arrowIcon} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
