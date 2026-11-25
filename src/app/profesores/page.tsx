"use client";

import { useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from './profesores.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    GraduationCap,
    Award,
    CheckCircle2,
    Users,
    HeartHandshake,
    ShieldCheck,
    Brain,
    Compass,
    BookCheck,
    Briefcase,
    Quote,
    ChevronDown
} from 'lucide-react';
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { TEACHERS_DATA } from '@/data/teachers';

const CATEGORIES = [
    { id: "todos", label: "Toda la Plana Docente" },
    { id: "direccion", label: "Dirección y Coordinación" },
    { id: "inicial", label: "Nivel Inicial" },
    { id: "primaria", label: "Nivel Primaria" },
    { id: "secundaria", label: "Nivel Secundaria" },
    { id: "bienestar", label: "Psicopedagogía y Tutoría" }
];

const PHILOSOPHY_PILLARS = [
    {
        icon: HeartHandshake,
        title: "Vocación y Cercanía",
        desc: "Creemos en educar desde el afecto y el respeto, reconociendo los talentos y tiempos únicos de cada estudiante."
    },
    {
        icon: Brain,
        title: "Metodologías Activas",
        desc: "Nuestros docentes no dictan clases pasivas; desafían, orientan y construyen conocimiento en conjunto con el aula."
    },
    {
        icon: ShieldCheck,
        title: "Valores Cristianos",
        desc: "Cada profesor es un referente ético que transmite honestidad, solidaridad y respeto en cada sesión formativa."
    },
    {
        icon: Users,
        title: "Alianza con las Familias",
        desc: "Mantenemos una comunicación fluida y transparente con los padres para asegurar el éxito integral de sus hijos."
    }
];

export default function ProfesoresPage() {
    const [selectedCategory, setSelectedCategory] = useState("todos");
    const [expandedTeacherId, setExpandedTeacherId] = useState<string | null>(null);

    const toggleTeacher = (id: string) => {
        setExpandedTeacherId(prev => prev === id ? null : id);
    };

    const filteredTeachers = selectedCategory === "todos"
        ? TEACHERS_DATA
        : TEACHERS_DATA.filter(t => t.category === selectedCategory);

    const whatsappNumber = "5112345678";
    const whatsappMsg = encodeURIComponent("¡Hola! Me gustaría coordinar una visita y conocer más sobre la plana docente del Colegio Divino Maestro.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    return (
        <main>
            <Header />

            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/school_hero_bg.png"
                        alt="Plana Docente del Colegio Divino Maestro"
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
                        <span>Educadores de Excelencia</span>
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    >
                        Docentes con Propósito que{' '}
                        <span className={styles.titleHighlight}>Inspiran y Guían</span>
                    </motion.h1>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        Un equipo de profesionales titulados, altamente capacitados en metodologías activas y
                        comprometidos con la formación ética, intelectual y socioemocional de cada estudiante.
                    </motion.p>

                    {/* Stats Ribbon */}
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <GraduationCap size={22} />
                            </div>
                            <div>
                                <div className={styles.statValue}>100% Titulados</div>
                                <div className={styles.statLabel}>Con Postgrados y Especializaciones</div>
                            </div>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <Award size={22} />
                            </div>
                            <div>
                                <div className={styles.statValue}>+12 Años Promedio</div>
                                <div className={styles.statLabel}>De Trayectoria y Vocación Docente</div>
                            </div>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <BookCheck size={22} />
                            </div>
                            <div>
                                <div className={styles.statValue}>Capacitación Continua</div>
                                <div className={styles.statLabel}>En Metodologías STEAM y TIC</div>
                            </div>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <Compass size={22} />
                            </div>
                            <div>
                                <div className={styles.statValue}>Acompañamiento 360°</div>
                                <div className={styles.statLabel}>Tutoría y Psicopedagogía Activa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIRECTORY SECTION WITH FILTER */}
            <section className={styles.directorySection}>
                <div className="container">
                    {/* Category Filter Tabs */}
                    <div className={styles.filterWrapper}>
                        {CATEGORIES.map(cat => {
                            const count = cat.id === "todos"
                                ? TEACHERS_DATA.length
                                : TEACHERS_DATA.filter(t => t.category === cat.id).length;

                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`${styles.filterBtn} ${selectedCategory === cat.id ? styles.filterBtnActive : ''}`}
                                >
                                    <span>{cat.label}</span>
                                    <span className={styles.filterCount}>{count}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Teachers Zigzag Accordion List */}
                    <div className={styles.teachersList}>
                        <AnimatePresence mode="popLayout">
                            {filteredTeachers.map((teacher, index) => {
                                const isExpanded = expandedTeacherId === teacher.id;
                                const isOdd = index % 2 === 1;

                                return (
                                    <motion.article
                                        key={teacher.id}
                                        layout
                                        initial={{ opacity: 0, y: 25 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.4, delay: index * 0.04 }}
                                        className={`${styles.teacherCard} ${isExpanded ? styles.cardExpanded : ''}`}
                                    >
                                        {/* Card Header (Preview Row with Zigzag) */}
                                        <div
                                            className={`${styles.cardHeader} ${isOdd ? styles.cardHeaderReverse : ''}`}
                                            onClick={() => toggleTeacher(teacher.id)}
                                            role="button"
                                            tabIndex={0}
                                            aria-expanded={isExpanded}
                                            aria-controls={`teacher-details-${teacher.id}`}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    toggleTeacher(teacher.id);
                                                }
                                            }}
                                            aria-label={`${isExpanded ? 'Ocultar' : 'Ver'} formación y experiencia de ${teacher.name}`}
                                        >
                                            {/* Photo Box */}
                                            <div className={styles.cardImageWrapper}>
                                                <Image
                                                    src={teacher.image}
                                                    alt={teacher.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 220px"
                                                    className={styles.cardImage}
                                                />
                                                <div className={styles.cardImageOverlay}></div>
                                                <span className={styles.levelPill}>{teacher.level}</span>
                                            </div>

                                            {/* Summary Info */}
                                            <div className={styles.cardInfo}>
                                                <div className={styles.topMeta}>
                                                    <span className={styles.role}>{teacher.role}</span>
                                                    <span className={styles.credentialBadge}>
                                                        <GraduationCap size={13} className={styles.badgeIcon} />
                                                        <span>{teacher.badge}</span>
                                                    </span>
                                                </div>

                                                <h3 className={styles.name}>{teacher.name}</h3>
                                                <p className={styles.bio}>{teacher.bio}</p>

                                                <div className={styles.tagsWrapper}>
                                                    {teacher.tags.map((tag, tIdx) => (
                                                        <span key={tIdx} className={styles.tag}>
                                                            <CheckCircle2 size={12} className={styles.tagIcon} />
                                                            <span>{tag}</span>
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className={styles.accordionToggleCue}>
                                                    <span>
                                                        {isExpanded
                                                            ? 'Ocultar trayectoria y formación académica'
                                                            : 'Click para ver trayectoria y formación académica'}
                                                    </span>
                                                    <ChevronDown
                                                        size={16}
                                                        className={`${styles.toggleChevron} ${isExpanded ? styles.toggleChevronOpen : ''}`}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Accordion Expandable Details */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    id={`teacher-details-${teacher.id}`}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                                    className={styles.accordionContent}
                                                >
                                                    <div className={styles.accordionInner}>
                                                        <div className={styles.detailsGrid}>
                                                            {/* Academic Training */}
                                                            <div className={styles.detailSection}>
                                                                <div className={styles.detailTitle}>
                                                                    <GraduationCap size={18} className={styles.detailIcon} />
                                                                    <h4>Formación Académica y Grados</h4>
                                                                </div>
                                                                <div className={styles.academicList}>
                                                                    {teacher.academicTraining.map((item, aIdx) => (
                                                                        <div key={aIdx} className={styles.academicItem}>
                                                                            <div className={styles.academicDot}></div>
                                                                            <div>
                                                                                <div className={styles.academicDegree}>{item.degree}</div>
                                                                                <div className={styles.academicInstitution}>
                                                                                    {item.institution} {item.year ? `(${item.year})` : ''}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Experience */}
                                                            <div className={styles.detailSection}>
                                                                <div className={styles.detailTitle}>
                                                                    <Briefcase size={18} className={styles.detailIcon} />
                                                                    <h4>Experiencia Profesional</h4>
                                                                </div>
                                                                <div className={styles.experienceList}>
                                                                    {teacher.experience.map((item, eIdx) => (
                                                                        <div key={eIdx} className={styles.experienceItem}>
                                                                            <span className={styles.experiencePeriod}>{item.period}</span>
                                                                            <div className={styles.experienceRole}>{item.role}</div>
                                                                            <div className={styles.experienceDesc}>{item.description}</div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Quote */}
                                                        {teacher.quote && (
                                                            <div className={styles.quoteBox}>
                                                                <Quote size={20} className={styles.quoteIcon} />
                                                                <p className={styles.quoteText}>{teacher.quote}</p>
                                                            </div>
                                                        )}

                                                        {/* Footer Action */}
                                                        <div className={styles.accordionFooter}>
                                                            {teacher.officeHours && (
                                                                <span className={styles.officeHoursText}>
                                                                    Horario de atención: {teacher.officeHours}
                                                                </span>
                                                            )}
                                                            <a
                                                                href={`https://wa.me/5112345678?text=${encodeURIComponent(`¡Hola! Deseo coordinar una entrevista con ${teacher.name} (${teacher.role}).`)}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={styles.teacherContactBtn}
                                                            >
                                                                <WhatsAppIcon size={16} />
                                                                <span>Contactar con Coordinación Pedagógica</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.article>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* TEACHING PHILOSOPHY & PROFILE SECTION */}
            <section className={styles.philosophySection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Nuestra Filosofía</span>
                        <h2 className={styles.sectionTitle}>El Perfil del Docente Divino Maestro</h2>
                        <p className={styles.sectionSubtitle}>
                            Más que impartir materias, nuestros educadores son guías que inspiran la curiosidad,
                            fomentan el pensamiento crítico y modelan valores para toda la vida.
                        </p>
                    </motion.div>

                    <div className={styles.philosophyGrid}>
                        {PHILOSOPHY_PILLARS.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className={styles.philosophyCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className={styles.philosophyIconWrapper}>
                                        <IconComponent size={24} />
                                    </div>
                                    <h3 className={styles.philosophyTitle}>{item.title}</h3>
                                    <p className={styles.philosophyText}>{item.desc}</p>
                                </motion.div>
                            );
                        })}
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
                            <span>Matrículas 2027 Abiertas</span>
                        </div>

                        <h2 className={styles.ctaTitle}>
                            ¿Quieres que tus Hijos Aprendan con los Mejores Docentes?
                        </h2>

                        <p className={styles.ctaDesc}>
                            Asegura su vacante para el año escolar 2027 y permíteles formar parte de una comunidad
                            educativa que potencia su talento, sus habilidades y sus valores.
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
                                <span>Conversar con Admisiones</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
