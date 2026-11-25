"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';
import styles from './WhyUs.module.css';

export default function WhyUs() {
    const pillars = [
        {
            icon: ShieldCheck,
            title: "Atención y Tutoría Personalizada",
            description: "Mantenemos un número adecuado de estudiantes por aula para garantizar un seguimiento académico y socioemocional individualizado.",
            bullets: [
                "Departamento psicopedagógico permanente",
                "Comunicación continua con padres de familia",
                "Planes de reforzamiento académico a medida"
            ]
        },
        {
            icon: HeartHandshake,
            title: "Clima Escolar Fraterno y Seguro",
            description: "Construimos una comunidad basada en el afecto, la empatía y la disciplina formativa, libre de acoso y propicia para la felicidad de tus hijos.",
            bullets: [
                "Políticas activas de sana convivencia",
                "Talleres de habilidades socioemocionales",
                "Entorno seguro, protegido y estimulante"
            ]
        },
        {
            icon: GraduationCap,
            title: "Alta Exigencia Preuniversitaria",
            description: "Preparamos a nuestros estudiantes desde los primeros años de secundaria para afrontar con éxito las evaluaciones universitarias más exigentes.",
            bullets: [
                "Convenios y orientación vocacional temprana",
                "Desarrollo de pensamiento analítico y científico",
                "Simulacros continuos tipo admisión"
            ]
        },
        {
            icon: Building2,
            title: "Infraestructura Diseñada para Aprender",
            description: "Espacios seguros y acondicionados para propiciar la indagación, el arte, la actividad física y el descubrimiento constante.",
            bullets: [
                "Laboratorios de ciencias y cómputo moderno",
                "Patios y áreas polideportivas techadas",
                "Aulas multimedia equipadas con tecnología"
            ]
        }
    ];

    return (
        <section className={styles.section} id="por-que-elegirnos">
            <div className="container">
                <div className={styles.topRow}>
                    <motion.div
                        className={styles.headerText}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.subtitle}>El Sello Divino Maestro</span>
                        <h2 className={styles.title}>¿Por Qué las Familias nos Eligen?</h2>
                        <p className={styles.lead}>
                            Elegir el colegio de tus hijos es una de las decisiones más trascendentales.
                            Nuestro compromiso es ser ese segundo hogar donde aprenden con alegría y crecen con valores.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.imageShowcase}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.65 }}
                    >
                        <div className={styles.imageCard}>
                            <Image
                                src="/school_hero_bg.png"
                                alt="Comunidad educativa Colegio Divino Maestro"
                                fill
                                sizes="(max-width: 900px) 100vw, 45vw"
                                className={styles.image}
                            />
                            <div className={styles.imageBadge}>
                                <span className={styles.badgeNumber}>25+</span>
                                <span className={styles.badgeText}>Años Formando Líderes con Propósito</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className={styles.grid}>
                    {pillars.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.article
                                key={idx}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <header className={styles.cardHeader}>
                                    <div className={styles.iconCircle}>
                                        <Icon size={24} className={styles.icon} />
                                    </div>
                                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                                </header>

                                <p className={styles.pillarDesc}>{pillar.description}</p>

                                <ul className={styles.bulletList} aria-label={`Características de ${pillar.title}`}>
                                    {pillar.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className={styles.bulletItem}>
                                            <CheckCircle2 size={16} className={styles.bulletCheck} />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
