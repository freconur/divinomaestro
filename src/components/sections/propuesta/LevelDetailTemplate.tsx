"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Sparkles,
    Clock,
    Users,
    GraduationCap,
    CheckCircle2,
    ChevronRight,
    Compass,
    Building2,
    Calendar,
    Award,
    Languages,
    HeartHandshake,
    BookOpen,
    Calculator,
    Palette,
    Microscope,
    School,
    ShieldCheck,
    Smile,
    Laptop
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import styles from './LevelDetail.module.css';

const iconMap: Record<string, LucideIcon> = {
    Languages,
    HeartHandshake,
    Sparkles,
    BookOpen,
    Calculator,
    Palette,
    Microscope,
    School,
    Building2,
    ShieldCheck,
    Clock,
    Smile,
    GraduationCap,
    Compass,
    Laptop,
    Award,
    Users,
    Calendar
};

function getIcon(name: string): LucideIcon {
    return iconMap[name] || Sparkles;
}

export interface PillarItem {
    title: string;
    description: string;
    iconName: string;
    badge: string;
    points: string[];
}

export interface CurriculumItem {
    area: string;
    description: string;
    tag: string;
    iconName: string;
}

export interface FacilityItem {
    title: string;
    description: string;
    iconName: string;
}

export interface RoutineItem {
    time: string;
    activity: string;
    detail: string;
    iconName: string;
}

export interface LevelDetailProps {
    levelKey: 'inicial' | 'primaria' | 'secundaria';
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    heroImage: string;
    badgeText: string;
    ageRange: string;
    schedule: string;
    ratio: string;
    approach: string;
    breadcrumbLabel: string;
    introParagraph: string;
    pillarsSubtitle: string;
    pillarsTitle: string;
    pillarsDesc: string;
    pillars: PillarItem[];
    curriculumSubtitle: string;
    curriculumTitle: string;
    curriculumDesc: string;
    curriculum: CurriculumItem[];
    facilitiesSubtitle: string;
    facilitiesTitle: string;
    facilitiesDesc: string;
    facilities: FacilityItem[];
    routineSubtitle: string;
    routineTitle: string;
    routineDesc: string;
    routine: RoutineItem[];
    profileSubtitle: string;
    profileTitle: string;
    profileDesc: string;
    profileItems: string[];
    profileSummary: string;
    whatsappMessage: string;
}

export default function LevelDetailTemplate(props: LevelDetailProps) {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

    const whatsappNumber = "5112345678";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(props.whatsappMessage)}`;

    const levelsNav = [
        { key: 'inicial', label: 'Nivel Inicial', ages: '3, 4 y 5 años', href: '/propuesta-educativa/inicial' },
        { key: 'primaria', label: 'Nivel Primaria', ages: '1° a 6° Grado', href: '/propuesta-educativa/primaria' },
        { key: 'secundaria', label: 'Nivel Secundaria', ages: '1° a 5° Año', href: '/propuesta-educativa/secundaria' },
    ];

    return (
        <div className={styles.pageWrapper}>
            {/* HERO SECTION */}
            <section className={styles.hero} ref={heroRef}>
                <motion.div className={styles.imageWrapper} style={{ y, opacity }}>
                    <Image
                        src={props.heroImage}
                        alt={`Nivel ${props.breadcrumbLabel} - Colegio Divino Maestro`}
                        fill
                        priority
                        sizes="100vw"
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </motion.div>

                {/* Ambient glow decoration */}
                <div className={`${styles.glowShape} ${styles.glow1}`}></div>
                <div className={`${styles.glowShape} ${styles.glow2}`}></div>

                <div className={`container ${styles.heroContainer}`}>
                    {/* Accessible Breadcrumbs */}
                    <nav aria-label="Miga de pan" className={styles.breadcrumbNav}>
                        <ol className={styles.breadcrumbList}>
                            <li>
                                <Link href="/" className={styles.breadcrumbLink}>
                                    Inicio
                                </Link>
                                <ChevronRight size={13} className={styles.breadcrumbDivider} aria-hidden="true" />
                            </li>
                            <li>
                                <Link href="/propuesta-educativa" className={styles.breadcrumbLink}>
                                    Propuesta Educativa
                                </Link>
                                <ChevronRight size={13} className={styles.breadcrumbDivider} aria-hidden="true" />
                            </li>
                            <li>
                                <span className={styles.breadcrumbCurrent} aria-current="page">
                                    {props.breadcrumbLabel}
                                </span>
                            </li>
                        </ol>
                    </nav>

                    <div className={styles.heroContent}>
                        <motion.div
                            className={styles.heroBadge}
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Sparkles size={14} className={styles.badgeSparkle} />
                            <span>{props.badgeText}</span>
                        </motion.div>

                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {props.titlePrefix}{' '}
                            <span className={styles.titleHighlight}>
                                {props.titleHighlight}
                            </span>
                        </motion.h1>

                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            {props.introParagraph}
                        </motion.p>

                        <motion.div
                            className={styles.heroActions}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
                        >
                            <Link href="/matricula-2027" className={`btn-primary ${styles.primaryBtn}`}>
                                <GraduationCap size={18} />
                                <span>Postular a Matrícula 2027</span>
                            </Link>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn-secondary ${styles.secondaryBtn}`}
                            >
                                <WhatsAppIcon size={18} />
                                <span>Consultar por WhatsApp</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* Quick Info Ribbon */}
                    <motion.div
                        className={styles.infoRibbon}
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.55, ease: "easeOut" }}
                    >
                        <div className={styles.infoItem}>
                            <div className={styles.infoIconWrapper}>
                                <GraduationCap size={20} className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoTexts}>
                                <span className={styles.infoLabel}>Edades / Grados</span>
                                <span className={styles.infoValue}>{props.ageRange}</span>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIconWrapper}>
                                <Clock size={20} className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoTexts}>
                                <span className={styles.infoLabel}>Horario Escolar</span>
                                <span className={styles.infoValue}>{props.schedule}</span>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIconWrapper}>
                                <Users size={20} className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoTexts}>
                                <span className={styles.infoLabel}>Acompañamiento</span>
                                <span className={styles.infoValue}>{props.ratio}</span>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIconWrapper}>
                                <Compass size={20} className={styles.infoIcon} />
                            </div>
                            <div className={styles.infoTexts}>
                                <span className={styles.infoLabel}>Enfoque Central</span>
                                <span className={styles.infoValue}>{props.approach}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* LEVEL SWITCHER BAR */}
            <nav className={styles.levelSwitcherNav} aria-label="Navegar entre niveles educativos">
                <div className="container">
                    <div className={styles.levelSwitcherInner}>
                        <span className={styles.switcherLabel}>Niveles Educativos:</span>
                        <div className={styles.switcherLinks}>
                            {levelsNav.map((lvl) => {
                                const isActive = lvl.key === props.levelKey;
                                return (
                                    <Link
                                        key={lvl.key}
                                        href={lvl.href}
                                        className={`${styles.switcherLink} ${isActive ? styles.switcherLinkActive : ''}`}
                                        aria-current={isActive ? 'page' : undefined}
                                    >
                                        <span className={styles.switcherDot}></span>
                                        <span className={styles.switcherTitle}>{lvl.label}</span>
                                        <span className={styles.switcherAges}>({lvl.ages})</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </nav>

            {/* SECTION 1: PILARES PEDAGÓGICOS DEL NIVEL */}
            <section className={styles.section} id="metodologia">
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionSubtitle}>{props.pillarsSubtitle}</span>
                        <h2 className={styles.sectionTitle}>{props.pillarsTitle}</h2>
                        <p className={styles.sectionDesc}>{props.pillarsDesc}</p>
                    </motion.div>

                    <div className={styles.pillarsGrid}>
                        {props.pillars.map((pillar, idx) => {
                            const Icon = getIcon(pillar.iconName);
                            return (
                                <motion.article
                                    key={idx}
                                    className={styles.pillarCard}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.55, delay: idx * 0.1 }}
                                >
                                    <header className={styles.pillarCardHeader}>
                                        <div className={styles.pillarIconCircle}>
                                            <Icon size={24} className={styles.pillarIcon} />
                                        </div>
                                        <span className={styles.pillarBadge}>{pillar.badge}</span>
                                        <h3 className={styles.pillarCardTitle}>{pillar.title}</h3>
                                    </header>

                                    <p className={styles.pillarCardDesc}>{pillar.description}</p>

                                    <ul className={styles.pillarPointsList} aria-label={`Puntos clave de ${pillar.title}`}>
                                        {pillar.points.map((pt, pIdx) => (
                                            <li key={pIdx} className={styles.pillarPointItem}>
                                                <CheckCircle2 size={16} className={styles.pointCheck} />
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 2: MALLA CURRICULAR Y TALLERES */}
            <section className={`${styles.section} ${styles.sectionAlt}`} id="curricula">
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionSubtitle}>{props.curriculumSubtitle}</span>
                        <h2 className={styles.sectionTitle}>{props.curriculumTitle}</h2>
                        <p className={styles.sectionDesc}>{props.curriculumDesc}</p>
                    </motion.div>

                    <div className={styles.curriculumGrid}>
                        {props.curriculum.map((curr, idx) => {
                            const Icon = getIcon(curr.iconName);
                            return (
                                <motion.article
                                    key={idx}
                                    className={styles.curriculumCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                                >
                                    <div className={styles.curriculumTop}>
                                        <div className={styles.curriculumIconWrapper}>
                                            <Icon size={22} className={styles.curriculumIcon} />
                                        </div>
                                        <span className={styles.curriculumTag}>{curr.tag}</span>
                                    </div>

                                    <h3 className={styles.curriculumAreaTitle}>{curr.area}</h3>
                                    <p className={styles.curriculumAreaDesc}>{curr.description}</p>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 3: ESPACIOS E INFRAESTRUCTURA ESPECIALIZADA */}
            <section className={styles.section} id="espacios">
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionSubtitle}>{props.facilitiesSubtitle}</span>
                        <h2 className={styles.sectionTitle}>{props.facilitiesTitle}</h2>
                        <p className={styles.sectionDesc}>{props.facilitiesDesc}</p>
                    </motion.div>

                    <div className={styles.facilitiesGrid}>
                        {props.facilities.map((fac, idx) => {
                            const Icon = getIcon(fac.iconName);
                            return (
                                <motion.article
                                    key={idx}
                                    className={styles.facilityCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className={styles.facilityIconCircle}>
                                        <Icon size={26} className={styles.facilityIcon} />
                                    </div>
                                    <div className={styles.facilityInfo}>
                                        <h3 className={styles.facilityTitle}>{fac.title}</h3>
                                        <p className={styles.facilityDesc}>{fac.description}</p>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 4: UN DÍA EN EL NIVEL (HORARIOS Y RUTINA) */}
            <section className={`${styles.section} ${styles.sectionAlt}`} id="rutina">
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionSubtitle}>{props.routineSubtitle}</span>
                        <h2 className={styles.sectionTitle}>{props.routineTitle}</h2>
                        <p className={styles.sectionDesc}>{props.routineDesc}</p>
                    </motion.div>

                    <div className={styles.routineTimeline}>
                        {props.routine.map((step, idx) => {
                            const Icon = getIcon(step.iconName);
                            return (
                                <motion.div
                                    key={idx}
                                    className={styles.routineStep}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className={styles.routineTimeCol}>
                                        <span className={styles.routineTimeBadge}>
                                            <Calendar size={13} />
                                            <span>{step.time}</span>
                                        </span>
                                    </div>

                                    <div className={styles.routineMarkerCol}>
                                        <div className={styles.routineMarkerCircle}>
                                            <Icon size={16} className={styles.routineMarkerIcon} />
                                        </div>
                                        {idx < props.routine.length - 1 && <div className={styles.routineMarkerLine} />}
                                    </div>

                                    <div className={styles.routineContentCol}>
                                        <h3 className={styles.routineActivityTitle}>{step.activity}</h3>
                                        <p className={styles.routineActivityDesc}>{step.detail}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 5: PERFIL DEL ESTUDIANTE / EGRESADO */}
            <section className={styles.section} id="perfil">
                <div className="container">
                    <motion.div
                        className={styles.profileBanner}
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.65 }}
                    >
                        <div className={styles.profileHeader}>
                            <div className={styles.profileBadge}>
                                <Award size={15} />
                                <span>Metas de Logro Formativo</span>
                            </div>
                            <h2 className={styles.profileTitle}>{props.profileTitle}</h2>
                            <p className={styles.profileLead}>{props.profileDesc}</p>
                        </div>

                        <div className={styles.profileGrid}>
                            {props.profileItems.map((item, idx) => (
                                <div key={idx} className={styles.profileItem}>
                                    <div className={styles.profileCheckWrapper}>
                                        <CheckCircle2 size={18} className={styles.profileCheck} />
                                    </div>
                                    <p className={styles.profileText}>{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.profileFooter}>
                            <p className={styles.profileSummaryText}>{props.profileSummary}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 6: ADMISSIONS CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <motion.div
                        className={styles.ctaBanner}
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.ctaGlow}></div>

                        <div className={styles.ctaContent}>
                            <div className={styles.ctaBadge}>
                                <Sparkles size={14} className={styles.ctaBadgeIcon} />
                                <span>Admisiones 2027 Disponibles</span>
                            </div>

                            <h2 className={styles.ctaTitle}>
                                Inicia el Proceso de Admisión para {props.breadcrumbLabel}
                            </h2>

                            <p className={styles.ctaDesc}>
                                Asegura una educación personalizada y con valores para tus hijos.
                                Nuestras vacantes son limitadas por aula para garantizar una atención individualizada.
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

                            <div className={styles.ctaReassurance}>
                                <div className={styles.ctaReassuranceItem}>
                                    <CheckCircle2 size={15} className={styles.reassuranceCheck} />
                                    <span>Aulas con vacantes reducidas</span>
                                </div>
                                <span className={styles.ctaDot}>•</span>
                                <div className={styles.ctaReassuranceItem}>
                                    <CheckCircle2 size={15} className={styles.reassuranceCheck} />
                                    <span>Visitas guiadas de lunes a viernes</span>
                                </div>
                                <span className={styles.ctaDot}>•</span>
                                <div className={styles.ctaReassuranceItem}>
                                    <CheckCircle2 size={15} className={styles.reassuranceCheck} />
                                    <span>Orientación y asesoría personalizada</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
