"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Award,
    Users,
    Play
} from 'lucide-react';
import { EASE_EDITORIAL, VIEWPORT_ONCE } from '@/hooks/useMotionEnvironment';
import styles from './Trajectory.module.css';

export default function Trajectory() {
    const stats = [
        {
            number: "+28 Años",
            label: "De Trayectoria",
            icon: Award
        },
        {
            number: "+360",
            label: "Alumnos Graduados",
            icon: Users
        }
    ];

    return (
        <section className={styles.trajectory} id="trayectoria" aria-label="Trayectoria institucional">
            {/* Objeto decorativo SVG (shape_3) en el margen derecho con color de branding (#bb4745) y fade hacia el centro */}
            <div className={styles.decorativeShapeWrapper} aria-hidden="true">
                <svg
                    viewBox="0 0 429 428"
                    className={styles.decorativeShapeSvg}
                    aria-hidden="true"
                >
                    <defs>
                        <linearGradient id="shapeBrandFade" x1="100%" y1="50%" x2="0%" y2="50%">
                            <stop offset="0%" stopColor="#bb4745" stopOpacity="0.22" />
                            <stop offset="35%" stopColor="#bb4745" stopOpacity="0.12" />
                            <stop offset="70%" stopColor="#bb4745" stopOpacity="0.03" />
                            <stop offset="100%" stopColor="#bb4745" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M 215.759 116.392 L 215.500 218 317.750 218 C 377.372 218, 420 217.626, 420 217.104 C 420 216.611, 418.313 214.741, 416.250 212.948 C 414.188 211.156, 368.292 165.835, 314.259 112.236 L 216.019 14.784 215.759 116.392 M 10 319.340 L 10 421 112.250 420.997 L 214.500 420.994 165.500 372.236 C 138.550 345.419, 92.538 299.673, 63.250 270.579 L 10 217.680 10 319.340"
                        fill="url(#shapeBrandFade)"
                    />
                    <path
                        d="M 10 116.277 L 10 218 112.729 218 L 215.459 218 137.479 140.809 C 94.591 98.354, 48.363 52.579, 34.750 39.086 L 10 14.553 10 116.277 M 216 319.776 L 216 421 318.187 421 L 420.374 421 343.437 344.809 C 301.122 302.904, 255.137 257.353, 241.250 243.585 L 216 218.552 216 319.776"
                        fill="url(#shapeBrandFade)"
                    />
                </svg>
            </div>

            <div className="container">
                <div className={styles.wrapper}>
                    {/* Left Column: Headline and Stats Cards */}
                    <motion.div
                        className={styles.leftCol}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VIEWPORT_ONCE}
                        transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                    >
                        {/* Clean headline with requested gradient and exact wording */}
                        <h2 className={styles.headline}>
                            La Institución Divino Maestro de Pamplona{' '}
                            <span className={styles.gradientHighlight}>
                                con más de 28 años de trayectoria y un modelo educativo integral.
                            </span>
                        </h2>

                        {/* Numerical Data Cards with border beam animation */}
                        <div className={styles.statsGrid}>
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        className={styles.statCard}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={VIEWPORT_ONCE}
                                        transition={{ duration: 0.45, delay: 0.1 + idx * 0.08, ease: EASE_EDITORIAL }}
                                    >
                                        <div className={styles.statContent}>
                                            <div className={styles.statHeader}>
                                                <span className={styles.statNumber}>{stat.number}</span>
                                                <div className={styles.iconCircle}>
                                                    <Icon size={20} className={styles.statIcon} aria-hidden="true" />
                                                </div>
                                            </div>
                                            <span className={styles.statLabel}>{stat.label}</span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Column: Visual School Card with Video/Play Badge */}
                    <motion.div
                        className={styles.rightCol}
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VIEWPORT_ONCE}
                        transition={{ duration: 0.55, delay: 0.12, ease: EASE_EDITORIAL }}
                    >
                        <div className={styles.mediaCard}>
                            <Image
                                src="/level_primaria.png"
                                alt="Estudiantes del Colegio Divino Maestro en aula de clase"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                                className={styles.mediaImage}
                            />
                            <div className={styles.mediaOverlay}></div>

                            {/* Center Play Button indicator as requested */}
                            <div className={styles.playButtonWrapper} aria-label="Reproducir video institucional">
                                <div className={styles.playButtonPulse}></div>
                                <div className={styles.playButton}>
                                    <Play size={24} className={styles.playIcon} fill="currentColor" />
                                </div>
                            </div>

                            {/* Floating bottom badge */}
                            <div className={styles.mediaFooter}>
                                <span className={styles.mediaTag}>Comunidad Divino Maestro</span>
                                <span className={styles.mediaSub}>Pamplona Alta • San Juan de Miraflores</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
