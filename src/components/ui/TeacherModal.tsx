"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
    X,
    GraduationCap,
    Briefcase,
    Quote,
    Clock,
    CheckCircle2
} from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { Teacher } from '@/types/teacher';
import styles from './TeacherModal.module.css';

interface TeacherModalProps {
    teacher: Teacher | null;
    onClose: () => void;
}

export default function TeacherModal({ teacher, onClose }: TeacherModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (teacher) {
            if (!dialog.open) {
                dialog.showModal();
            }
        } else {
            if (dialog.open) {
                dialog.close();
            }
        }
    }, [teacher]);

    // Close when clicking outside dialog content on backdrop
    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
            onClose();
        }
    };

    if (!teacher) return null;

    const whatsappNumber = "5112345678";
    const whatsappMsg = encodeURIComponent(`¡Hola! Deseo coordinar una entrevista pedagógica con ${teacher.name} (${teacher.role}).`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    return (
        <dialog
            ref={dialogRef}
            className={styles.dialog}
            aria-labelledby="teacher-modal-title"
            onClick={handleBackdropClick}
            onCancel={onClose}
        >
            <div className={styles.modalContainer}>
                {/* Modal Header */}
                <div className={styles.modalHeader}>
                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Cerrar detalles del docente"
                        autoFocus
                    >
                        <X size={20} />
                    </button>

                    <div className={styles.avatarWrapper}>
                        <Image
                            src={teacher.image}
                            alt={teacher.name}
                            fill
                            sizes="96px"
                            className={styles.avatarImage}
                        />
                    </div>

                    <div className={styles.headerInfo}>
                        <span className={styles.levelPill}>{teacher.level}</span>
                        <h2 id="teacher-modal-title" className={styles.teacherName}>
                            {teacher.name}
                        </h2>
                        <span className={styles.teacherRole}>{teacher.role}</span>
                    </div>
                </div>

                {/* Modal Body */}
                <div className={styles.modalBody}>
                    {/* Cita Pedagógica */}
                    {teacher.quote && (
                        <div className={styles.quoteBox}>
                            <Quote size={20} style={{ opacity: 0.3, marginBottom: '0.25rem' }} />
                            <p>&ldquo;{teacher.quote}&rdquo;</p>
                        </div>
                    )}

                    {/* Formación Académica */}
                    <div className={styles.sectionBlock}>
                        <div className={styles.sectionHeader}>
                            <GraduationCap size={18} className={styles.sectionIcon} />
                            <span>Formación Académica y Títulos</span>
                        </div>
                        <div className={styles.itemsList}>
                            {teacher.academicTraining.map((item, idx) => (
                                <div key={idx} className={styles.itemRow}>
                                    <div className={styles.itemDot}></div>
                                    <div>
                                        <div className={styles.itemTitle}>{item.degree}</div>
                                        <div className={styles.itemSubtitle}>
                                            {item.institution} {item.year && `• ${item.year}`}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experiencia y Trayectoria */}
                    <div className={styles.sectionBlock}>
                        <div className={styles.sectionHeader}>
                            <Briefcase size={18} className={styles.sectionIcon} />
                            <span>Experiencia y Trayectoria</span>
                        </div>
                        <div className={styles.itemsList}>
                            {teacher.experience.map((exp, idx) => (
                                <div key={idx} className={styles.itemRow}>
                                    <div className={styles.itemDot}></div>
                                    <div>
                                        <div className={styles.itemPeriod}>{exp.period}</div>
                                        <div className={styles.itemTitle}>{exp.role}</div>
                                        <div className={styles.itemSubtitle}>{exp.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Áreas de Especialidad */}
                    <div className={styles.sectionBlock}>
                        <div className={styles.tagsRow}>
                            {teacher.tags.map((tag, tIdx) => (
                                <span key={tIdx} className={styles.tagPill}>
                                    <CheckCircle2 size={13} className={styles.tagIcon} />
                                    <span>{tag}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Horario de Atención */}
                    {teacher.officeHours && (
                        <div className={styles.officeHoursBox}>
                            <Clock size={16} className={styles.officeHoursIcon} />
                            <span><strong>Horario de atención a padres:</strong> {teacher.officeHours}</span>
                        </div>
                    )}
                </div>

                {/* Modal Footer */}
                <div className={styles.modalFooter}>
                    <button
                        type="button"
                        className={styles.closeTextBtn}
                        onClick={onClose}
                    >
                        Cerrar
                    </button>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.appointmentBtn}
                    >
                        <WhatsAppIcon size={18} />
                        <span>Solicitar Cita con el Docente</span>
                    </a>
                </div>
            </div>
        </dialog>
    );
}
