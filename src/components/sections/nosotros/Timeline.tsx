"use client";

import { motion } from 'framer-motion';
import { Calendar, Flag, Sparkles, Trophy, BookOpen, Rocket } from 'lucide-react';
import styles from './Timeline.module.css';

export default function Timeline() {
    const milestones = [
        {
            year: "1996 - 1997",
            icon: Flag,
            title: "Fundación e Inicio de Labores",
            description: "Fundado en 1996 bajo la visión de una educación en valores cristianos y excelencia, en marzo de 1997 abrimos formalmente nuestras puertas escolares con los niveles Inicial y Primaria.",
            highlight: "Fundación en 1996 e inicio de clases en 1997"
        },
        {
            year: "2006",
            icon: BookOpen,
            title: "Consolidación del Nivel Secundaria",
            description: "Ampliamos nuestra sede con un nuevo pabellón para Secundaria, estructurando un exigente programa preuniversitario y talleres de formación artística, oratoria y deportes.",
            highlight: "Formación completa de Inicial a Secundaria"
        },
        {
            year: "2014",
            icon: Trophy,
            title: "Nuevos Laboratorios y Ciencia",
            description: "Modernización de nuestra infraestructura con laboratorios de ciencias experimentales, centro de cómputo y aulas multimedia para propiciar el aprendizaje vivencial.",
            highlight: "Impulso a la indagación científica escolar"
        },
        {
            year: "2020",
            icon: Sparkles,
            title: "Transformación Digital y Resiliencia",
            description: "Ante los desafíos globales, integramos plataformas educativas virtuales de vanguardia y capacitamos al 100% de nuestra plana docente en herramientas de innovación pedagógica.",
            highlight: "Acompañamiento ininterrumpido a las familias"
        },
        {
            year: "2026 - 2027",
            icon: Rocket,
            title: "Innovación, Bilingüismo y Futuro",
            description: "Consolidamos más de 25 años de trayectoria con nuestro programa de inmersión en inglés, robótica educativa y proyectos de liderazgo comunitario para los retos del siglo XXI.",
            highlight: "Liderazgo educativo de cara a las nuevas generaciones"
        }
    ];

    return (
        <section className={styles.section} id="historia">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.subtitle}>Legado y Crecimiento</span>
                    <h2 className={styles.title}>Nuestra Trayectoria en el Tiempo</h2>
                    <p className={styles.lead}>
                        Cada año ha sido un peldaño en la construcción de una comunidad educativa sólida,
                        comprometida con el bienestar y los sueños de miles de estudiantes.
                    </p>
                </motion.div>

                <div className={styles.timelineWrapper}>
                    <div className={styles.timelineTrack}></div>

                    <div className={styles.timelineList}>
                        {milestones.map((item, idx) => {
                            const Icon = item.icon;
                            const isEven = idx % 2 === 0;

                            return (
                                <motion.div
                                    key={idx}
                                    className={`${styles.milestoneItem} ${isEven ? styles.itemLeft : styles.itemRight}`}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.55, delay: idx * 0.1 }}
                                >
                                    {/* Timeline Marker Node */}
                                    <div className={styles.node}>
                                        <div className={styles.nodeIconCircle}>
                                            <Icon size={18} className={styles.nodeIcon} />
                                        </div>
                                    </div>

                                    {/* Timeline Card */}
                                    <article className={styles.card}>
                                        <header className={styles.cardHeader}>
                                            <span className={styles.yearBadge}>
                                                <Calendar size={13} />
                                                <span>{item.year}</span>
                                            </span>
                                            <h3 className={styles.milestoneTitle}>{item.title}</h3>
                                        </header>

                                        <p className={styles.milestoneDesc}>{item.description}</p>

                                        <div className={styles.milestoneHighlight}>
                                            <span className={styles.highlightDot}></span>
                                            <span>{item.highlight}</span>
                                        </div>
                                    </article>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
