"use client";

import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

    return (
        <section className={styles.hero} ref={ref}>
            <motion.div className={styles.imageWrapper} style={{ y, opacity }}>
                <Image
                    src="/hero_fullwidth.png"
                    alt="Estudiantes y profesores en clase"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </motion.div>

            <div className={`${styles.shape} ${styles.shape1}`}></div>
            <div className={`${styles.shape} ${styles.shape2}`}></div>

            <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                <div className={styles.content}>
                    <span className={styles.badge}>Matrículas Abiertas 2026</span>
                    <h1 className={styles.title}>
                        Forjando el futuro con <span>Excelencia</span> y Valores
                    </h1>
                    <p className={styles.description}>
                        En el Colegio Divino Maestro, combinamos una metodología innovadora con una infraestructura moderna para potenciar el talento de tus hijos.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/admisiones" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Iniciar Admisión
                        </Link>
                        <Link href="/propuesta-educativa" className={styles.secondaryBtn} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'white', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Nuestra Propuesta
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
