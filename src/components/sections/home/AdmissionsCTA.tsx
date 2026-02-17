"use client";

import styles from './AdmissionsCTA.module.css';
import Link from 'next/link';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import Image from 'next/image';

export default function AdmissionsCTA() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <section className={styles.admissions} id="admisiones" ref={ref}>
            <motion.div className={styles.bgImage} style={{ y: bgY }}>
                <Image
                    src="/admissions_bg.png"
                    alt="Colegio Divino Maestro"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </motion.div>
            <div className={styles.overlay}></div>

            <div className={styles.bgDecoration}>
                <motion.div className={styles.shape1} style={{ y: y1 }}></motion.div>
                <motion.div className={styles.shape2} style={{ y: y2 }}></motion.div>
            </div>

            <div className={styles.container}>
                <span className={styles.subtitle}>Admisiones Abiertas</span>
                <h2 className={styles.title}>Comienza el viaje hacia la excelencia</h2>
                <p className={styles.description}>
                    Sé parte de una comunidad educativa que inspira, innova y transforma vidas. Elige la mejor educación para el futuro de tus hijos.
                </p>

                <div className={styles.actions}>
                    <Link href="/admisiones" className={styles.primaryBtn}>
                        Postular Ahora
                    </Link>
                    <Link href="/contacto" className={styles.secondaryBtn}>
                        Solicitar Información
                    </Link>
                </div>
            </div>
        </section>
    );
}
