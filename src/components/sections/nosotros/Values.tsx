"use client";

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Lightbulb, Users, Sparkles } from 'lucide-react';
import styles from './Values.module.css';

export default function Values() {
    const values = [
        {
            icon: Award,
            title: "Excelencia Académica",
            description: "Promovemos el rigor intelectual, la disciplina de estudio y la superación continua para que cada alumno descubra y expanda sus mejores talentos.",
            colorTheme: "red"
        },
        {
            icon: ShieldCheck,
            title: "Integridad y Ética",
            description: "Fomentamos la honestidad, la veracidad y la coherencia moral en cada una de nuestras acciones cotidianas, formando ciudadanos íntegros.",
            colorTheme: "blue"
        },
        {
            icon: Heart,
            title: "Amor y Fe Cristiana",
            description: "Inspirados en el amor fraterno y los principios cristianos, guiamos a nuestros alumnos en la práctica de la bondad, gratitud y esperanza.",
            colorTheme: "rose"
        },
        {
            icon: Lightbulb,
            title: "Innovación y Curiosidad",
            description: "Estimulamos la creatividad, el razonamiento científico y la iniciativa para plantear soluciones constructivas frente a retos reales.",
            colorTheme: "gold"
        },
        {
            icon: Users,
            title: "Solidaridad y Empatía",
            description: "Desarrollamos una sensibilidad activa por las necesidades del prójimo, promoviendo el servicio desinteresado y la responsabilidad social.",
            colorTheme: "purple"
        },
        {
            icon: Sparkles,
            title: "Respeto y Convivencia",
            description: "Cultivamos un ambiente de paz, escucha empática y aprecio mutuo donde cada voz es valorada y la disciplina nace de la convicción.",
            colorTheme: "emerald"
        }
    ];

    return (
        <section className={styles.section} id="valores">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.subtitle}>Cimientos de Nuestra Formación</span>
                    <h2 className={styles.title}>Nuestros Valores Institucionales</h2>
                    <p className={styles.lead}>
                        Los principios no solo se enseñan en las aulas: se viven en la convivencia diaria,
                        el compañerismo y las decisiones que moldean el carácter de nuestros alumnos.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {values.map((val, idx) => {
                        const Icon = val.icon;
                        return (
                            <motion.article
                                key={idx}
                                className={`${styles.card} ${styles[val.colorTheme]}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconCircle}>
                                        <Icon size={24} className={styles.icon} />
                                    </div>
                                    <h3 className={styles.valueTitle}>{val.title}</h3>
                                </div>
                                <p className={styles.valueDesc}>{val.description}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
