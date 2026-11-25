"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from './propuesta.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Sparkles,
    CheckCircle2,
    ArrowRight,
    GraduationCap,
    Languages,
    ShieldCheck,
    Compass
} from 'lucide-react';
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function PropuestaPage() {
    const pillars = [
        {
            tag: "Innovación Pedagógica",
            title: "Metodología Activa y Vivencial",
            description: "Nuestro enfoque pedagógico pone al estudiante como protagonista de su propio aprendizaje. A través de proyectos colaborativos, indagación guiada y herramientas tecnológicas, fomentamos la autonomía intelectual y la curiosidad natural.",
            image: "/level_primaria.png",
            alt: "Estudiantes en metodología activa",
            badgeText: "Aprendizaje Vivencial",
            badgeIcon: Compass,
            reverse: false,
            bullets: [
                "Aprendizaje basado en proyectos reales (ABP)",
                "Pensamiento crítico y resolución de problemas",
                "Integración digital y laboratorios interactivos"
            ]
        },
        {
            tag: "Desarrollo Integral",
            title: "Formación en Valores y Acompañamiento",
            description: "Educar va mucho más allá de transmitir conocimientos. Formamos personas éticas, resilientes y solidarias a través de un programa de tutoría personalizada y un departamento psicopedagógico que vela por el bienestar emocional de cada alumno.",
            image: "/level_secundaria.png",
            alt: "Acompañamiento y formación en valores",
            badgeText: "Acompañamiento 360°",
            badgeIcon: ShieldCheck,
            reverse: true,
            bullets: [
                "Tutoría personalizada y orientación vocacional",
                "Educación socioemocional y valores cristianos",
                "Desarrollo de liderazgo ético y empatía"
            ]
        },
        {
            tag: "Habilidades para el Futuro",
            title: "Inglés Intensivo y Competencias Globales",
            description: "Preparamos a nuestros estudiantes para destacar en un mundo interconectado. Nuestro programa de inglés intensivo desde el nivel inicial desarrolla fluidez comunicativa, comprensión global y confianza para certificaciones internacionales.",
            image: "/school_hero_bg.png",
            alt: "Programa de inglés y tecnología",
            badgeText: "Enfoque Bilingüe",
            badgeIcon: Languages,
            reverse: false,
            bullets: [
                "Inmersión en inglés desde los 3 años de edad",
                "Talleres de robótica educativa y ciencias",
                "Expresión artística, deportes y oratoria"
            ]
        }
    ];

    const levels = [
        {
            title: "Nivel Inicial",
            ages: "3, 4 y 5 años",
            description: "Estimulación temprana del lenguaje, psicomotricidad y curiosidad mediante el juego guiado en un entorno cálido, seguro y estimulante.",
            image: "/level_inicial.png",
            href: "/propuesta-educativa/inicial",
            features: [
                "Desarrollo psicomotriz y juego libre",
                "Inmersión lúdica en inglés",
                "Aulas seguras y adaptadas"
            ]
        },
        {
            title: "Nivel Primaria",
            ages: "1° a 6° Grado",
            description: "Consolidación de competencias en razonamiento matemático, comprensión lectora crítica, ciencias y formación de hábitos de estudio autónomos.",
            image: "/level_primaria.png",
            href: "/propuesta-educativa/primaria",
            features: [
                "Lógica matemática y lectoescritura avanzada",
                "Robótica educativa y ciencias",
                "Inglés intensivo y valores"
            ]
        },
        {
            title: "Nivel Secundaria",
            ages: "1° a 5° Año",
            description: "Exigencia académica preuniversitaria, liderazgo juvenil, orientación vocacional y proyectos que preparan para el ingreso a las mejores universidades.",
            image: "/level_secundaria.png",
            href: "/propuesta-educativa/secundaria",
            features: [
                "Preparación preuniversitaria intensiva",
                "Alta tasa de ingreso a universidades",
                "Liderazgo, debate y proyección"
            ]
        }
    ];

    const whatsappNumber = "5112345678";
    const whatsappMsg = encodeURIComponent("¡Hola! Deseo más información sobre la propuesta educativa y el proceso de admisión 2027.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    return (
        <main>
            <Header />

            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/school_hero_bg.png"
                        alt="Propuesta Educativa Colegio Divino Maestro"
                        fill
                        priority
                        sizes="100vw"
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>

                <div className={`container ${styles.heroContent}`}>
                    <motion.div
                        className={styles.heroBadge}
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Sparkles size={14} />
                        <span>Modelo Pedagógico Integral</span>
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    >
                        Nuestra <span className={styles.titleHighlight}>Propuesta Educativa</span>
                    </motion.h1>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        Formamos líderes con pensamiento crítico, educación bilingüe y principios sólidos.
                        Un modelo educativo diseñado para potenciar el talento único de tus hijos y prepararlos
                        para triunfar en un mundo globalizado.
                    </motion.p>
                </div>
            </section>

            {/* DETAILED PILLARS WITH SCROLL-TRIGGERED ANIMATIONS */}
            <section className={styles.pillarsSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Nuestra Metodología</span>
                        <h2 className={styles.sectionTitle}>Pilares de Nuestra Formación</h2>
                        <p className={styles.sectionSubtitle}>
                            Cada aspecto de nuestra enseñanza está diseñado con rigor académico, calidez humana
                            y un compromiso inquebrantable con el desarrollo integral del estudiante.
                        </p>
                    </motion.div>

                    <div className={styles.pillarDetails}>
                        {pillars.map((pillar, index) => {
                            const BadgeIcon = pillar.badgeIcon;
                            return (
                                <motion.div
                                    key={index}
                                    className={`${styles.pillarRow} ${pillar.reverse ? styles.reverseRow : ''}`}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.65, delay: 0.1 }}
                                >
                                    <div className={styles.imagePart}>
                                        <Image
                                            src={pillar.image}
                                            alt={pillar.alt}
                                            width={650}
                                            height={420}
                                        />
                                        <div className={styles.imageBadge}>
                                            <BadgeIcon size={16} className={styles.imageBadgeIcon} />
                                            <span>{pillar.badgeText}</span>
                                        </div>
                                    </div>

                                    <div className={styles.textPart}>
                                        <span className={styles.pillarTag}>{pillar.tag}</span>
                                        <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                                        <p className={styles.pillarDesc}>{pillar.description}</p>

                                        <div className={styles.bulletList}>
                                            {pillar.bullets.map((bullet, bIdx) => (
                                                <div key={bIdx} className={styles.bulletItem}>
                                                    <CheckCircle2 size={17} className={styles.bulletIcon} />
                                                    <span>{bullet}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* EDUCATIONAL LEVELS SECTION */}
            <section className={styles.levelsSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Trayectoria Escolar</span>
                        <h2 className={styles.sectionTitle}>Niveles Educativos</h2>
                        <p className={styles.sectionSubtitle}>
                            Acompañamos a tus hijos en cada una de sus etapas de crecimiento,
                            brindándoles la preparación exacta que necesitan para su futuro.
                        </p>
                    </motion.div>

                    <div className={styles.levelGrid}>
                        {levels.map((lvl, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.levelCard}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.55, delay: idx * 0.15 }}
                            >
                                <div className={styles.levelImageWrapper}>
                                    <Image
                                        src={lvl.image}
                                        alt={lvl.title}
                                        fill
                                        sizes="(max-width: 860px) 100vw, 33vw"
                                        className={styles.levelImage}
                                    />
                                    <div className={styles.levelAgesBadge}>{lvl.ages}</div>
                                </div>

                                <div className={styles.levelBody}>
                                    <h3 className={styles.levelTitle}>{lvl.title}</h3>
                                    <p className={styles.levelDescription}>{lvl.description}</p>

                                    <div className={styles.levelFeatureList}>
                                        {lvl.features.map((feat, fIdx) => (
                                            <div key={fIdx} className={styles.levelFeatureItem}>
                                                <CheckCircle2 size={15} className={styles.levelFeatureIcon} />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={lvl.href} className={`btn-primary ${styles.levelBtn}`}>
                                        <span>Conocer {lvl.title}</span>
                                        <ArrowRight size={16} className={styles.levelBtnArrow} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ADMISSIONS CTA CONVERSION BANNER */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <motion.div
                        className={styles.ctaInner}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.ctaBadge}>
                            <Sparkles size={13} />
                            <span>Admisiones 2027 Disponibles</span>
                        </div>

                        <h2 className={styles.ctaTitle}>
                            Asegura la Mejor Formación para tus Hijos Hoy Mismo
                        </h2>

                        <p className={styles.ctaDesc}>
                            Las vacantes para el año escolar 2027 son limitadas por aula para garantizar
                            una enseñanza personalizada. Inicia la postulación o agenda una visita guiada con nosotros.
                        </p>

                        <div className={styles.ctaActions}>
                            <Link href="/matricula-2027" className={styles.ctaPrimaryBtn}>
                                <GraduationCap size={19} />
                                <span>Postular a Matrícula 2027</span>
                            </Link>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ctaSecondaryBtn}
                            >
                                <WhatsAppIcon size={19} />
                                <span>Consultar por WhatsApp</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
