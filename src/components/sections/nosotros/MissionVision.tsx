"use client";

import { motion } from 'framer-motion';
import { Target, Compass, HeartHandshake, CheckCircle2 } from 'lucide-react';
import styles from './MissionVision.module.css';

export default function MissionVision() {
    const cards = [
        {
            icon: Target,
            badge: "Nuestra Razón de Ser",
            title: "Misión Institucional",
            description: "Brindar una educación integral y de excelencia académica basada en valores cristianos, promoviendo el pensamiento crítico, la investigación y la creatividad en nuestros estudiantes para formar líderes éticos comprometidos con el desarrollo del país.",
            highlights: [
                "Formación integral académica, ética y humana",
                "Metodologías activas y aprendizaje vivencial",
                "Acompañamiento psicopedagógico continuo"
            ]
        },
        {
            icon: Compass,
            badge: "Hacia Dónde Vamos",
            title: "Visión de Futuro",
            description: "Ser reconocidos como una institución educativa líder y referente en calidad, innovación pedagógica y formación en valores, donde cada estudiante descubra su potencial y esté plenamente preparado para responder con éxito a los desafíos globales.",
            highlights: [
                "Excelencia preuniversitaria con alta tasa de éxito",
                "Inmersión en idioma inglés y tecnologías STEAM",
                "Cultura de mejora continua e innovación docente"
            ]
        },
        {
            icon: HeartHandshake,
            badge: "Alianza con el Hogar",
            title: "Propósito Formativo",
            description: "Trabajar de la mano con las familias en una comunidad fraterna donde la disciplina positiva, el afecto y la confianza mutua sean los cimientos para que cada niño y joven crezca feliz, seguro de sí mismo y con un alto sentido de solidaridad.",
            highlights: [
                "Tutoría personalizada permanente",
                "Escuela y orientación para padres de familia",
                "Clima institucional de respeto, empatía y fraternidad"
            ]
        }
    ];

    return (
        <section className={styles.section} id="mision-vision">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.subtitle}>Rumbo Institucional</span>
                    <h2 className={styles.title}>Nuestra Misión, Visión y Propósito</h2>
                    <p className={styles.lead}>
                        Nuestra brújula formativa guía cada decisión pedagógica, cada clase y cada vivencia
                        escolar, asegurando el crecimiento armonioso de nuestros alumnos.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.article
                                key={idx}
                                className={styles.card}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.55, delay: idx * 0.12 }}
                            >
                                <header className={styles.cardHeader}>
                                    <div className={styles.iconWrapper}>
                                        <Icon size={26} className={styles.cardIcon} />
                                    </div>
                                    <span className={styles.badge}>{card.badge}</span>
                                    <h3 className={styles.cardTitle}>{card.title}</h3>
                                </header>

                                <div className={styles.cardContent}>
                                    <p className={styles.text}>{card.description}</p>

                                    <ul className={styles.highlightList} aria-label={`Puntos clave de ${card.title}`}>
                                        {card.highlights.map((item, hIdx) => (
                                            <li key={hIdx} className={styles.highlightItem}>
                                                <CheckCircle2 size={16} className={styles.checkIcon} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
