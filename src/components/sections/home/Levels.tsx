"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    Sparkles,
    Baby,
    BookOpen,
    GraduationCap,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { useMotionEnvironment, EASE_EDITORIAL, VIEWPORT_ONCE } from '@/hooks/useMotionEnvironment';
import styles from './Levels.module.css';

interface LevelItem {
    id: 'inicial' | 'primaria' | 'secundaria';
    number: string;
    label: string;
    stage: string;
    ageRange: string;
    headline: string;
    subheadline: string;
    description: string;
    image: string;
    link: string;
    icon: typeof Baby;
    highlight: string;
    bullets: string[];
}

const LEVELS: LevelItem[] = [
    {
        id: "inicial",
        number: "01",
        label: "NIVEL INICIAL",
        stage: "3 A 5 AÑOS",
        ageRange: "Maternal y Jardín",
        headline: "Curiosidad, afecto y estimulación temprana",
        subheadline: "Despertamos la curiosidad natural y el amor por aprender en un entorno cálido, seguro y afectivo.",
        description: "En el Nivel Inicial del Colegio Particular Divino Maestro, cada niño descubre el mundo a través del juego guiado, el desarrollo psicomotriz y la socialización activa. Fomentamos valores sólidos y las primeras habilidades bilingües con docentes altamente especializadas en primera infancia.",
        image: "/level_inicial.png",
        link: "/propuesta-educativa/inicial",
        icon: Baby,
        highlight: "Estimulación y Afecto Temprano",
        bullets: [
            "Desarrollo psicomotriz, sensorial y juego interactivo guiado",
            "Iniciación temprana y lúdica al idioma inglés",
            "Aulas temáticas seguras, afectuosas y con grupos reducidos",
            "Acompañamiento psicopedagógico cercano para las familias"
        ]
    },
    {
        id: "primaria",
        number: "02",
        label: "NIVEL PRIMARIA",
        stage: "6 A 11 AÑOS",
        ageRange: "1° a 6° de Primaria",
        headline: "Autonomía, ciencias y pensamiento crítico",
        subheadline: "Consolidamos el razonamiento lógico, la comprensión lectora y el pensamiento científico con base ética.",
        description: "Nuestra propuesta en Primaria potencia las capacidades cognitivas, artísticas y tecnológicas de los alumnos. Mediante proyectos colaborativos STEAM y metodologías activas de indagación, formamos estudiantes autónomos, creativos y profundamente comprometidos con su comunidad.",
        image: "/level_primaria.png",
        link: "/propuesta-educativa/primaria",
        icon: BookOpen,
        highlight: "Rigor y Creatividad STEAM",
        bullets: [
            "Laboratorios de ciencias equipados y proyectos STEAM",
            "Programa intensivo de inglés formativo y talleres de oratoria",
            "Acompañamiento tutorial personalizado y disciplina positiva",
            "Plataforma digital integrada para tareas y seguimiento escolar"
        ]
    },
    {
        id: "secundaria",
        number: "03",
        label: "NIVEL SECUNDARIA",
        stage: "12 A 16 AÑOS",
        ageRange: "1° a 5° de Secundaria",
        headline: "Liderazgo y preparación preuniversitaria",
        subheadline: "Formamos jóvenes con criterio ético, pensamiento analítico y herramientas académicas de alto rendimiento.",
        description: "El Nivel Secundaria prepara de manera integral a los estudiantes para afrontar con éxito la vida universitaria y los desafíos del mundo profesional. Con simulacros periódicos tipo admisión, orientación vocacional y formación en valores cristianos, graduamos líderes que transforman su entorno.",
        image: "/level_secundaria.png",
        link: "/propuesta-educativa/secundaria",
        icon: GraduationCap,
        highlight: "Proyección Universitaria y Valores",
        bullets: [
            "Preparación académica preuniversitaria sólida y de alta exigencia",
            "Orientación vocacional temprana y talleres de debate y liderazgo",
            "Formación integral de líderes con firmes valores morales y cristianos",
            "Convenios académicos, simulacros continuos y tutoría personalizada"
        ]
    }
];

function DesktopLevelRow({ level, index }: { level: LevelItem; index: number }) {
    const rowRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: rowRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 240,
        damping: 32,
        restDelta: 0.001
    });

    const imageY = useTransform(smoothProgress, [0, 1], ["-6%", "6%"]);
    const watermarkY = useTransform(smoothProgress, [0, 1], [-28, 28]);
    const badgeY = useTransform(smoothProgress, [0, 1], [8, -8]);

    return (
        <LevelRowContent
            level={level}
            index={index}
            rowRef={rowRef}
            imageY={imageY}
            watermarkY={watermarkY}
            badgeY={badgeY}
        />
    );
}

function LevelRow({ level, index, enableParallax }: { level: LevelItem; index: number; enableParallax: boolean }) {
    if (enableParallax) {
        return <DesktopLevelRow level={level} index={index} />;
    }
    return <LevelRowContent level={level} index={index} />;
}

function LevelRowContent({
    level,
    index,
    rowRef,
    imageY,
    watermarkY,
    badgeY,
}: {
    level: LevelItem;
    index: number;
    rowRef?: React.RefObject<HTMLElement | null>;
    imageY?: ReturnType<typeof useTransform<number, string>>;
    watermarkY?: ReturnType<typeof useTransform<number, number>>;
    badgeY?: ReturnType<typeof useTransform<number, number>>;
}) {
    const isReversed = index % 2 !== 0;

    return (
        <article
            ref={rowRef}
            className={`${styles.levelRow} ${isReversed ? styles.rowReversed : ''} ${styles[`row_${level.id}`]}`}
        >
            {/* Content Column */}
            <div className={styles.contentCol}>
                {/* Giant Parallax Watermark Number */}
                <motion.span
                    style={watermarkY ? { y: watermarkY } : undefined}
                    className={styles.bgWatermarkNumber}
                    aria-hidden="true"
                >
                    {level.number}
                </motion.span>

                <motion.div
                    className={styles.textInner}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                >
                    <div className={styles.levelEyebrow}>
                        <span className={styles.levelNumber}>{level.number}</span>
                        <span className={styles.divider}>/</span>
                        <span className={styles.levelLabel}>{level.label}</span>
                        <span className={styles.dot}>•</span>
                        <span className={styles.levelStage}>{level.stage}</span>
                    </div>

                    <h3 className={styles.headline}>
                        {level.headline}
                    </h3>

                    <p className={styles.subheadline}>
                        {level.subheadline}
                    </p>

                    <p className={styles.description}>
                        {level.description}
                    </p>

                    <ul className={styles.bulletList} aria-label={`Pilares de ${level.label}`}>
                        {level.bullets.map((bullet, bIdx) => (
                            <motion.li
                                key={bIdx}
                                className={styles.bulletItem}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={VIEWPORT_ONCE}
                                transition={{ duration: 0.4, delay: 0.08 + bIdx * 0.05, ease: EASE_EDITORIAL }}
                            >
                                <CheckCircle2 size={16} className={styles.checkIcon} aria-hidden="true" />
                                <span>{bullet}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className={styles.actionWrap}>
                        <Link href={level.link} className={styles.ctaButton}>
                            <span>Conocer Propuesta {level.label}</span>
                            <ArrowRight size={17} className={styles.ctaArrow} aria-hidden="true" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Image Column (Parallax desktop-only) */}
            <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                    <motion.div
                        style={imageY ? { y: imageY } : undefined}
                        className={styles.parallaxMotionWrap}
                    >
                        <Image
                            src={level.image}
                            alt={`Estudiantes de ${level.label} - Colegio Particular Divino Maestro`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className={styles.rowImg}
                        />
                    </motion.div>
                </div>

                {/* Subtle contrast overlay over the image */}
                <div className={styles.imgOverlay} aria-hidden="true" />
                
                {/* Floating Highlight Badge positioned directly in imageCol to guarantee full visibility */}
                <motion.div
                    style={badgeY ? { y: badgeY } : undefined}
                    className={styles.floatingHighlight}
                >
                    <Sparkles size={16} className={styles.highlightIcon} aria-hidden="true" />
                    <span>{level.highlight}</span>
                </motion.div>
            </div>
        </article>
    );
}

export default function Levels() {
    const { enableParallax } = useMotionEnvironment();

    return (
        <section className={styles.levels} id="niveles">
            {/* Header Section */}
            <div className={styles.sectionHeader}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VIEWPORT_ONCE}
                        transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                    >
                        <span className={styles.kicker}>FORMACIÓN INTEGRAL POR ETAPAS</span>
                        <h2 className={styles.sectionTitle}>
                            Nuestra <span className={styles.titleHighlight}>Oferta Educativa</span>
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Acompañamos a tus hijos en cada etapa de su desarrollo con una metodología activa,
                            docentes de vocación y un entorno que inspira a superarse día a día.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Full-Width Showcase Rows */}
            <div className={styles.rowsContainer}>
                {LEVELS.map((level, idx) => (
                    <LevelRow key={level.id} level={level} index={idx} enableParallax={enableParallax} />
                ))}
            </div>
        </section>
    );
}
