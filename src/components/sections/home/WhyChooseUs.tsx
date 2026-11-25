"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring, useInView, useTransform } from 'framer-motion';
import {
    ShieldCheck,
    HeartHandshake,
    GraduationCap,
    Users,
    CheckCircle2,
    Sparkles
} from 'lucide-react';
import { useMotionEnvironment, EASE_EDITORIAL, VIEWPORT_ONCE } from '@/hooks/useMotionEnvironment';
import styles from './WhyChooseUs.module.css';

interface TimelineItemData {
    number: string;
    stepNumber: number;
    tag: string;
    tagColor: string;
    tagBg: string;
    title: string;
    description: string;
    bullets: string[];
    image: string;
    imageAlt: string;
    imagePill: string;
    icon: React.ElementType;
    iconColor: string;
    iconBg: string;
}

const TIMELINE_ITEMS: TimelineItemData[] = [
    {
        number: "01",
        stepNumber: 1,
        tag: "Bienestar, Convivencia y Cero Bullying",
        tagColor: "#2563eb",
        tagBg: "rgba(37, 99, 235, 0.08)",
        title: "Entorno Seguro y Cuidado Afectivo",
        description: "Clases con capacidad controlada para que ningún alumno sea un número más. Brindamos un acompañamiento psicopedagógico constante y protocolos activos de sana convivencia: un segundo hogar donde tus hijos crecen protegidos, valorados y felices.",
        bullets: [
            "Tutoría cercana y seguimiento socioemocional continuo",
            "Cultura activa de sana convivencia y tolerancia cero al bullying",
            "Monitoreo constante y ambiente seguro desde inicial hasta secundaria"
        ],
        image: "/level_primaria.png",
        imageAlt: "Estudiantes del Colegio Divino Maestro en un aula segura y colaborativa",
        imagePill: "Convivencia Escolar Positiva",
        icon: ShieldCheck,
        iconColor: "#2563eb",
        iconBg: "rgba(37, 99, 235, 0.12)"
    },
    {
        number: "02",
        stepNumber: 2,
        tag: "Principios Cristianos y Carácter Humano",
        tagColor: "#d97706",
        tagBg: "rgba(245, 158, 11, 0.1)",
        title: "Formación en Valores y Liderazgo Ético",
        description: "Educamos con el ejemplo y bajo sólidos principios morales y cristianos. Desarrollamos la empatía, el respeto, la disciplina con amor y la resiliencia, formando líderes íntegros que impactan positivamente en su familia y comunidad.",
        bullets: [
            "Educación en valores cristianos, respeto y empatía",
            "Proyectos vivenciales de solidaridad y servicio a la comunidad",
            "Desarrollo de liderazgo ético, oratoria y trabajo en equipo"
        ],
        image: "/school_hero_bg.png",
        imageAlt: "Formación en valores y liderazgo ético en Divino Maestro",
        imagePill: "Liderazgo con Valores",
        icon: HeartHandshake,
        iconColor: "#d97706",
        iconBg: "rgba(245, 158, 11, 0.14)"
    },
    {
        number: "03",
        stepNumber: 3,
        tag: "STEAM, Razonamiento e Inglés Progresivo",
        tagColor: "var(--primary)",
        tagBg: "rgba(187, 71, 69, 0.08)",
        title: "Exigencia Académica y Visión Preuniversitaria",
        description: "Metodología activa orientada a la resolución de problemas y al pensamiento crítico. Con un currículo riguroso, tecnología en el aula y preparación preuniversitaria en secundaria, aseguramos las herramientas que tu hijo necesita para triunfar en la educación superior.",
        bullets: [
            "Enfoque preuniversitario y alto nivel en matemáticas y ciencias",
            "Laboratorio tecnológico y computación práctica aplicada",
            "Inglés intensivo para potenciar sus oportunidades globales"
        ],
        image: "/level_secundaria.png",
        imageAlt: "Exigencia académica y preparación preuniversitaria en secundaria",
        imagePill: "Visión Preuniversitaria",
        icon: GraduationCap,
        iconColor: "var(--primary)",
        iconBg: "rgba(187, 71, 69, 0.12)"
    },
    {
        number: "04",
        stepNumber: 4,
        tag: "Tranquilidad y Comunicación Transparente",
        tagColor: "#059669",
        tagBg: "rgba(16, 185, 129, 0.1)",
        title: "Alianza Escuela-Familia y Monitoreo en Vivo",
        description: "Cero sorpresas al final del bimestre. Nuestra plataforma digital de gestión escolar permite a los padres consultar notas, tareas, comunicados y asistencia al instante desde su celular, manteniendo un diálogo directo y permanente con tutores y directivos.",
        bullets: [
            "Acceso móvil en tiempo real a notas, tareas y asistencias",
            "Canales directos de diálogo con docentes y coordinadores",
            "Escuela para padres y acompañamiento familiar continuo"
        ],
        image: "/hero_dm_2.webp",
        imageAlt: "Padres de familia y docentes en alianza educativa constante",
        imagePill: "Gestión Escolar en Tiempo Real",
        icon: Users,
        iconColor: "#059669",
        iconBg: "rgba(16, 185, 129, 0.14)"
    }
];

function TimelineRow({ item, index }: { item: TimelineItemData; index: number }) {
    const rowRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(rowRef, {
        margin: "-15% 0px -20% 0px",
        amount: 0.2
    });

    const isEven = index % 2 === 0;
    const Icon = item.icon;

    // Content Card Markup with GPU-composited entrance
    const contentCard = (
        <motion.div
            className={styles.contentCol}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
        >
            <div className={`${styles.contentCard} ${isInView ? styles.contentCardActive : ''}`}>
                <div className={styles.cardHeader}>
                    <div
                        className={styles.iconBox}
                        style={{ background: item.iconBg, color: item.iconColor }}
                    >
                        <Icon size={24} />
                    </div>
                    <span
                        className={styles.categoryTag}
                        style={{ color: item.tagColor }}
                    >
                        {item.tag}
                    </span>
                </div>

                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>

                <div className={styles.bulletList}>
                    {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className={styles.bulletItem}>
                            <CheckCircle2
                                size={17}
                                className={styles.checkIcon}
                                style={{ color: item.tagColor }}
                            />
                            <span>{bullet}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    // Image Card Markup with GPU-composited entrance
    const imageCard = (
        <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE_EDITORIAL }}
        >
            <div className={`${styles.imageWrapper} ${isInView ? styles.imageWrapperActive : ''}`}>
                <div className={styles.parallaxImageContainer}>
                    <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 540px"
                        className={styles.imageElement}
                    />
                </div>
                <div className={styles.imageGradient} />
                <div className={styles.imagePill}>
                    <span className={styles.imagePillDot} style={{ background: item.iconColor }} />
                    <span>{item.imagePill}</span>
                </div>
            </div>
        </motion.div>
    );

    // Center Node Markup
    const centerNode = (
        <div className={styles.nodeAnchor}>
            <motion.div
                className={styles.nodeMotionWrapper}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
            >
                <div className={`${styles.nodeCircle} ${isInView ? styles.nodeCircleActive : ''}`}>
                    {item.stepNumber}
                    {isInView && <span className={styles.nodePulse} aria-hidden="true" />}
                </div>
            </motion.div>
        </div>
    );

    return (
        <div ref={rowRef} className={styles.timelineRow}>
            {/* Desktop Layout Alternation */}
            {isEven ? (
                <>
                    {imageCard}
                    {centerNode}
                    {contentCard}
                </>
            ) : (
                <>
                    {contentCard}
                    {centerNode}
                    {imageCard}
                </>
            )}
        </div>
    );
}

function DesktopBackgroundShapes({ sectionRef }: { sectionRef: React.RefObject<HTMLDivElement | null> }) {
    const { scrollYProgress: sectionScroll } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yShape1 = useTransform(sectionScroll, [0, 1], [-70, 110]);
    const rotateShape1 = useTransform(sectionScroll, [0, 1], [-8, 22]);

    const yShape2 = useTransform(sectionScroll, [0, 1], [90, -130]);
    const rotateShape2 = useTransform(sectionScroll, [0, 1], [5, -25]);

    const yShape3 = useTransform(sectionScroll, [0, 1], [-80, 85]);
    const rotateShape3 = useTransform(sectionScroll, [0, 1], [-5, 25]);

    return (
        <div className={styles.shapesContainer} aria-hidden="true">
            <motion.div
                className={`${styles.shapeWrapper} ${styles.shape1}`}
                style={{ y: yShape1, rotate: rotateShape1 }}
            >
                <Image src="/shape_1.svg" alt="" width={490} height={490} className={styles.shapeSvg} />
            </motion.div>

            <motion.div
                className={`${styles.shapeWrapper} ${styles.shape2}`}
                style={{ y: yShape2, rotate: rotateShape2 }}
            >
                <Image src="/shape_2.svg" alt="" width={550} height={550} className={styles.shapeSvg} />
            </motion.div>

            <motion.div
                className={`${styles.shapeWrapper} ${styles.shape3}`}
                style={{ y: yShape3, rotate: rotateShape3 }}
            >
                <Image src="/shape_3.svg" alt="" width={480} height={480} className={styles.shapeSvg} />
            </motion.div>
        </div>
    );
}

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const { enableParallax } = useMotionEnvironment();

    // Framer Motion scroll tracker for central timeline line
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 70%", "end 70%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 450,
        damping: 40,
        restDelta: 0.001
    });

    return (
        <section ref={sectionRef} className={styles.section} id="porque-elegirnos" aria-label="Por qué elegirnos">
            {/* Backwards-compatible anchor for #propuesta */}
            <div id="propuesta" style={{ position: 'relative', top: '-80px', visibility: 'hidden' }} />

            {/* Decorative Brand SVG Watermarks (Desktop only for low-end mobile smoothness) */}
            {enableParallax && <DesktopBackgroundShapes sectionRef={sectionRef} />}

            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                >
                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <Sparkles size={14} className={styles.sparkleIcon} />
                            <span>Diferenciales que marcan la vida de tus hijos</span>
                        </div>
                    </div>
                    <h2 className={styles.title}>
                        ¿Por qué elegir el Colegio{' '}
                        <span className={styles.nowrapGroup}>
                            <span className={styles.titleHighlight}>Divino Maestro</span>?
                        </span>
                    </h2>
                    <p className={styles.subtitle}>
                        Brindamos a las familias la tranquilidad de una educación con sólidos valores, alta exigencia académica
                        y un acompañamiento afectivo donde tu hijo nunca será un número más.
                    </p>
                </motion.div>

                {/* Animated Vertical Timeline */}
                <div ref={timelineRef} className={styles.timelineWrapper}>
                    {/* Background Track Line */}
                    <div className={styles.timelineTrack}>
                        {/* Dynamic Filling Line */}
                        <motion.div
                            className={styles.timelineProgress}
                            style={{ scaleY }}
                        />
                    </div>

                    {/* Timeline Rows */}
                    {TIMELINE_ITEMS.map((item, index) => (
                        <TimelineRow key={item.number} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
