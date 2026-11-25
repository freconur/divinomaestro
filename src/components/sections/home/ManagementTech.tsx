"use client";

import { motion } from 'framer-motion';
import {
    Cpu,
    Smartphone,
    CheckCircle2
} from 'lucide-react';
import IzicoleMockup from './IzicoleMockup';
import { EASE_EDITORIAL, VIEWPORT_ONCE } from '@/hooks/useMotionEnvironment';
import styles from './ManagementTech.module.css';

export default function ManagementTech() {
    const PARENT_HIGHLIGHTS = [
        "Boletas y libretas de notas digitales al instante",
        "Registro diario de asistencia con alertas al celular",
        "Comunicados oficiales, circulares y avisos sin papeleo",
        "Todos tus hijos (Inicial, Primaria, Secundaria) en 1 sola cuenta",
        "Agenda virtual con rol de exámenes y entregas",
        "Justificaciones médicas y autorizaciones en 1 clic",
        "Trámites de secretaría y citas con tutoría en línea"
    ];

    const PARENT_PILLS = [
        "App iOS & Android",
        "Acceso Web 24/7",
        "Notificaciones Push al Celular"
    ];

    return (
        <section className={styles.techSection} id="gestion-digital">
            <div className="container">
                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                >
                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <Cpu size={14} />
                            <span>Ecosistema Tecnológico & Gestión Escolar</span>
                            <span className={styles.pulseDot} aria-hidden="true"></span>
                        </div>
                    </div>

                    <h2 className={styles.title}>
                        Tecnología Moderna para una{' '}
                        <span className={styles.titleHighlight}>Gestión Escolar Eficiente</span>
                    </h2>

                    <p className={styles.subtitle}>
                        Conectamos a estudiantes, docentes y padres de familia a través de plataformas digitales líderes
                        para garantizar comunicación transparente en tiempo real y entornos de aprendizaje seguros.
                    </p>
                </motion.div>

                {/* Interactive izicole Mobile Mockup Showcase */}
                <IzicoleMockup />

                {/* 1 Solo Card: Todo lo que importa a los padres de familia (máximo 7 palomitas) */}
                <div className={styles.singleCardWrapper}>
                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VIEWPORT_ONCE}
                        transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                    >
                        <div className={styles.cardTop}>
                            <div className={styles.iconWrapper}>
                                <Smartphone size={26} />
                            </div>
                            <span className={styles.systemTag}>Gestión en Tiempo Real</span>
                        </div>

                        <h3 className={styles.cardTitle}>
                            Portal Familiar & App Móvil: Todo en un Solo Lugar
                        </h3>

                        <p className={styles.cardSubtitle}>
                            Diseñado para la tranquilidad familiar: consulta notas oficiales, monitorea asistencias y mantente al tanto de comunicados escolares sin papeles ni trámites complicados.
                        </p>

                        <ul className={styles.bulletList}>
                            {PARENT_HIGHLIGHTS.map((bullet, idx) => (
                                <li key={idx} className={styles.bulletItem}>
                                    <CheckCircle2 size={18} className={styles.bulletIcon} />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.cardPills}>
                            {PARENT_PILLS.map((pill, idx) => (
                                <span key={idx} className={styles.cardPill}>
                                    {pill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
