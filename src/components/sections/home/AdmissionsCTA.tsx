"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, Check, Lock, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { useMotionEnvironment, EASE_EDITORIAL, VIEWPORT_ONCE } from '@/hooks/useMotionEnvironment';
import styles from './AdmissionsCTA.module.css';

export default function AdmissionsCTA() {
    const ref = useRef<HTMLElement>(null);
    const { enableParallax } = useMotionEnvironment();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -140]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    // Form State
    const [formData, setFormData] = useState({
        parentName: '',
        email: '',
        phone: '',
        studentName: '',
        grade: 'Inicial - 3 años',
        message: '',
        acceptPolicy: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 800);
    };

    const handleReset = () => {
        setFormData({
            parentName: '',
            email: '',
            phone: '',
            studentName: '',
            grade: 'Inicial - 3 años',
            message: '',
            acceptPolicy: false,
        });
        setIsSubmitted(false);
    };

    const whatsappNumber = "51987654321";
    const defaultWhatsappText = encodeURIComponent(
        `¡Hola! Deseo recibir información sobre las vacantes del Proceso de Admisión 2027 en el Colegio Divino Maestro.`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultWhatsappText}`;

    const formSubmittedWhatsappText = encodeURIComponent(
        `¡Hola! Acabo de enviar mi ficha de postulación para ${formData.studentName || 'mi hijo/a'} al grado ${formData.grade}. Quisiera coordinar los siguientes pasos de la matrícula.`
    );
    const formSubmittedWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${formSubmittedWhatsappText}`;

    return (
        <section className={styles.admissions} id="admisiones" ref={ref}>
            <motion.div
                className={styles.bgImage}
                style={enableParallax ? { y: bgY } : undefined}
            >
                <Image
                    src="/admissions_bg.png"
                    alt="Colegio Divino Maestro"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </motion.div>
            <div className={styles.overlay}></div>

            {enableParallax && (
                <div className={styles.bgDecoration} aria-hidden="true">
                    <motion.div className={styles.shape1} style={{ y: y1 }}></motion.div>
                    <motion.div className={styles.shape2} style={{ y: y2 }}></motion.div>
                </div>
            )}

            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left Column: Information & Proposition */}
                    <motion.div
                        className={styles.infoCol}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VIEWPORT_ONCE}
                        transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
                    >
                        <div className={styles.badge}>
                            <Sparkles size={16} />
                            <span>Admisiones Abiertas 2027</span>
                        </div>
                        <h2 className={styles.title}>Comienza el viaje hacia la excelencia</h2>
                        <p className={styles.description}>
                            Sé parte de una comunidad educativa que inspira, innova y transforma vidas. Elige la mejor educación para el futuro de tus hijos.
                        </p>

                        <div className={styles.features}>
                            <div className={styles.featureItem}>
                                <div className={styles.featureIcon}>
                                    <ShieldCheck size={20} />
                                </div>
                                <div className={styles.featureContent}>
                                    <h4>Acompañamiento Integral</h4>
                                    <p>Tutoría y soporte psicopedagógico permanente para potenciar las habilidades socioemocionales de cada alumno.</p>
                                </div>
                            </div>

                            <div className={styles.featureItem}>
                                <div className={styles.featureIcon}>
                                    <Clock size={20} />
                                </div>
                                <div className={styles.featureContent}>
                                    <h4>Respuesta Rápida Garantizada</h4>
                                    <p>Un asesor educativo se pondrá en contacto contigo en menos de 24 horas hábiles.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.alternativeActions}>
                            <span className={styles.altLabel}>¿Tienes preguntas previas?</span>
                            <div className={styles.altButtons}>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.whatsappBtn}
                                >
                                    <WhatsAppIcon size={18} />
                                    <span>Consultar por WhatsApp</span>
                                </a>
                                <Link href="/contacto" className={styles.secondaryBtn}>
                                    <span>Canales de Contacto</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Admission Form */}
                    <motion.div
                        className={styles.formCol}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VIEWPORT_ONCE}
                        transition={{ duration: 0.55, delay: 0.08, ease: EASE_EDITORIAL }}
                    >
                        <div className={styles.formCard}>
                            {!isSubmitted ? (
                                <>
                                    <div className={styles.formCardHeader}>
                                        <div className={styles.formCardBadge}>Postulación Rápida</div>
                                        <h3 id="form-admissions-title" className={styles.formCardTitle}>
                                            Postula a Matrícula 2027
                                        </h3>
                                        <p className={styles.formCardSubtitle}>
                                            Completa la ficha para iniciar el proceso de admisión. Los campos marcados con (*) son obligatorios.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} noValidate={false} aria-labelledby="form-admissions-title">
                                        <div className={styles.formGrid}>
                                            {/* Parent Name */}
                                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                                <label htmlFor="parentName" className={styles.label}>
                                                    Nombre del Padre / Apoderado <span className={styles.requiredMark}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="parentName"
                                                    name="parentName"
                                                    required
                                                    autoComplete="name"
                                                    placeholder="Ej. Carlos Mendoza Ramos"
                                                    className={styles.input}
                                                    value={formData.parentName}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            {/* WhatsApp / Phone */}
                                            <div className={styles.inputGroup}>
                                                <label htmlFor="phone" className={styles.label}>
                                                    WhatsApp / Celular <span className={styles.requiredMark}>*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    autoComplete="tel"
                                                    inputMode="tel"
                                                    placeholder="Ej. 987 654 321"
                                                    className={styles.input}
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className={styles.inputGroup}>
                                                <label htmlFor="email" className={styles.label}>
                                                    Correo Electrónico <span className={styles.requiredMark}>*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    autoComplete="email"
                                                    autoCorrect="off"
                                                    autoCapitalize="none"
                                                    spellCheck="false"
                                                    placeholder="carlos@ejemplo.com"
                                                    className={styles.input}
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            {/* Student Name */}
                                            <div className={styles.inputGroup}>
                                                <label htmlFor="studentName" className={styles.label}>
                                                    Nombre del Postulante <span className={styles.requiredMark}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="studentName"
                                                    name="studentName"
                                                    required
                                                    placeholder="Ej. Mateo Mendoza"
                                                    className={styles.input}
                                                    value={formData.studentName}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            {/* Grade */}
                                            <div className={styles.inputGroup}>
                                                <label htmlFor="grade" className={styles.label}>
                                                    Grado de Interés <span className={styles.requiredMark}>*</span>
                                                </label>
                                                <select
                                                    id="grade"
                                                    name="grade"
                                                    required
                                                    className={styles.select}
                                                    value={formData.grade}
                                                    onChange={handleInputChange}
                                                >
                                                    <optgroup label="Nivel Inicial">
                                                        <option value="Inicial - 3 años">Inicial - 3 años</option>
                                                        <option value="Inicial - 4 años">Inicial - 4 años</option>
                                                        <option value="Inicial - 5 años">Inicial - 5 años</option>
                                                    </optgroup>
                                                    <optgroup label="Nivel Primaria">
                                                        <option value="Primaria - 1° Grado">Primaria - 1° Grado</option>
                                                        <option value="Primaria - 2° Grado">Primaria - 2° Grado</option>
                                                        <option value="Primaria - 3° Grado">Primaria - 3° Grado</option>
                                                        <option value="Primaria - 4° Grado">Primaria - 4° Grado</option>
                                                        <option value="Primaria - 5° Grado">Primaria - 5° Grado</option>
                                                        <option value="Primaria - 6° Grado">Primaria - 6° Grado</option>
                                                    </optgroup>
                                                    <optgroup label="Nivel Secundaria">
                                                        <option value="Secundaria - 1° Año">Secundaria - 1° Año</option>
                                                        <option value="Secundaria - 2° Año">Secundaria - 2° Año</option>
                                                        <option value="Secundaria - 3° Año">Secundaria - 3° Año</option>
                                                        <option value="Secundaria - 4° Año">Secundaria - 4° Año</option>
                                                        <option value="Secundaria - 5° Año">Secundaria - 5° Año</option>
                                                    </optgroup>
                                                </select>
                                            </div>

                                            {/* Additional Message */}
                                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                                <label htmlFor="message" className={styles.label}>
                                                    Consulta o Comentario (Opcional)
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={2}
                                                    placeholder="Colegio de procedencia o consultas específicas sobre la vacante..."
                                                    className={styles.textarea}
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                ></textarea>
                                            </div>

                                            {/* Policy Checkbox */}
                                            <div className={`${styles.checkboxContainer} ${styles.fullWidth}`}>
                                                <input
                                                    type="checkbox"
                                                    id="acceptPolicy"
                                                    name="acceptPolicy"
                                                    required
                                                    className={styles.checkboxInput}
                                                    checked={formData.acceptPolicy}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="acceptPolicy" className={styles.checkboxLabel}>
                                                    Acepto las políticas de privacidad y autorizo el contacto para el Proceso de Admisión 2027.
                                                </label>
                                            </div>

                                            {/* Submit Button */}
                                            <div className={styles.fullWidth}>
                                                <button
                                                    type="submit"
                                                    className={styles.submitBtn}
                                                    disabled={isSubmitting || !formData.acceptPolicy}
                                                >
                                                    {isSubmitting ? (
                                                        <span>Procesando Postulación...</span>
                                                    ) : (
                                                        <>
                                                            <Send size={18} />
                                                            <span>Postular Ahora</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>

                                            <div className={`${styles.guarantee} ${styles.fullWidth}`}>
                                                <Lock size={13} />
                                                <span>Tus datos son 100% confidenciales y protegidos.</span>
                                            </div>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    className={styles.successCard}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <div className={styles.successIconWrapper}>
                                        <Check size={36} />
                                    </div>
                                    <h3 className={styles.successTitle}>¡Postulación Registrada!</h3>
                                    <p className={styles.successText}>
                                        Muchas gracias, <strong>{formData.parentName}</strong>. Hemos recibido los datos para{' '}
                                        <strong>{formData.studentName || 'el postulante'}</strong> en el grado{' '}
                                        <strong>{formData.grade}</strong>. Nuestro equipo se comunicará contigo a la brevedad.
                                    </p>

                                    <div className={styles.successActions}>
                                        <a
                                            href={formSubmittedWhatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.successWhatsAppBtn}
                                        >
                                            <WhatsAppIcon size={18} />
                                            <span>Notificar de Inmediato por WhatsApp</span>
                                        </a>

                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className={styles.resetBtn}
                                        >
                                            Enviar otra postulación
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
