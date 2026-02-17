"use client";

import styles from './Levels.module.css';
import Image from 'next/image';
import Link from 'next/link';

const LEVELS = [
    {
        title: "Inicial",
        age: "3 a 5 años",
        description: "Despertamos la curiosidad y el amor por el aprendizaje a través del juego y el descubrimiento guiado.",
        image: "/level_inicial.png",
        link: "/propuesta-educativa/inicial"
    },
    {
        title: "Primaria",
        age: "6 a 11 años",
        description: "Consolidamos las bases del pensamiento crítico, la autonomía y las habilidades socioemocionales.",
        image: "/level_primaria.png",
        link: "/propuesta-educativa/primaria"
    },
    {
        title: "Secundaria",
        age: "12 a 16 años",
        description: "Preparamos lideres innovadores con pensamiento analítico y herramientas para destacar en un mundo global.",
        image: "/level_secundaria.png",
        link: "/propuesta-educativa/secundaria"
    }
];

export default function Levels() {
    return (
        <section className={styles.levels} id="niveles">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Nuestra Oferta Educativa</h2>
                    <p className={styles.description} style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--slate-500)' }}>
                        Acompañamos a nuestros estudiantes en cada etapa de su crecimiento, brindándoles las herramientas necesarias para su desarrollo integral.
                    </p>
                </div>

                <div className={styles.grid}>
                    {LEVELS.map((level, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={level.image}
                                    alt={level.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className={styles.overlay}>
                                <span className={styles.ageRange}>{level.age}</span>
                                <h3 className={styles.levelTitle}>{level.title}</h3>
                                <p className={styles.description}>{level.description}</p>
                                <Link href={level.link} className={styles.cta}>
                                    Ver más información →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
