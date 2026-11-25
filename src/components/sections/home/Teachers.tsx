"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';
import { TEACHERS_DATA } from '@/data/teachers';
import { Teacher } from '@/types/teacher';
import TeacherModal from '@/components/ui/TeacherModal';
import { EASE_EDITORIAL, VIEWPORT_ONCE } from '@/hooks/useMotionEnvironment';
import styles from './Teachers.module.css';

const FEATURED_TEACHERS = TEACHERS_DATA.slice(0, 3);

export default function Teachers() {
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

    return (
        <section className={styles.teachers} id="profesores">
            <div className="container">
                {/* Header with scroll animation */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                >
                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <Sparkles size={13} className={styles.sparkleIcon} />
                            <span>Vocación y Excelencia</span>
                        </div>
                    </div>
                    <h2 className={styles.title}>
                        Docentes con <span className={styles.titleHighlight}>Propósito</span> y Experiencia
                    </h2>
                    <p className={styles.subtitle}>
                        Contamos con un equipo de profesionales apasionados, comprometidos con el desarrollo
                        integral, el rigor académico y el bienestar emocional de cada estudiante.
                    </p>
                </motion.div>

                {/* Staggered Grid of Teachers */}
                <div className={styles.grid}>
                    {FEATURED_TEACHERS.map((teacher, index) => (
                        <motion.div
                            key={teacher.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VIEWPORT_ONCE}
                            transition={{ duration: 0.48, delay: index * 0.09, ease: EASE_EDITORIAL }}
                            whileTap={{ scale: 0.985 }}
                            onClick={() => setSelectedTeacher(teacher)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedTeacher(teacher);
                                }
                            }}
                            aria-label={`Ver perfil y formación académica de ${teacher.name}`}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={teacher.image}
                                    alt={teacher.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className={styles.image}
                                />
                                <div className={styles.imageOverlay}></div>
                                <div className={styles.viewProfileCue}>
                                    <span>Ver Perfil</span>
                                    <ArrowUpRight size={14} />
                                </div>
                                <div className={styles.credentialBadge}>
                                    <GraduationCap size={14} className={styles.badgeIcon} />
                                    <span>{teacher.badge}</span>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <span className={styles.role}>{teacher.role}</span>
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
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Clean Link to View All Teachers */}
                <div className={styles.viewMoreWrapper}>
                    <Link href="/profesores" className={styles.viewMoreBtn}>
                        <span>Conoce a toda nuestra plana docente</span>
                        <ArrowRight size={17} />
                    </Link>
                </div>

                {/* Teacher Modal with Academic Training & Experience */}
                <TeacherModal
                    teacher={selectedTeacher}
                    onClose={() => setSelectedTeacher(null)}
                />
            </div>
        </section>
    );
}
