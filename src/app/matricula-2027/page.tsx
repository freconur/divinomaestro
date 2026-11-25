"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Sparkles,
    GraduationCap,
    CheckCircle2,
    ArrowRight,
    Clock,
    Users,
    Award,
    ShieldCheck,
    Phone,
    ChevronDown,
    BookOpen,
    HeartHandshake,
    Check,
    Send,
    Star,
    Lock
} from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import styles from './matricula.module.css';

export default function Matricula2027Page() {
    const [formData, setFormData] = useState({
        parentName: '',
        phone: '',
        email: '',
        studentName: '',
        grade: 'Inicial - 3 años',
        acceptPolicy: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        }, 750);
    };

    const handleSelectGradeAndScroll = (selectedGrade: string) => {
        setFormData(prev => ({ ...prev, grade: selectedGrade }));
        const formEl = document.getElementById('formulario-lead');
        if (formEl) {
            formEl.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const whatsappNumber = "51987654321";
    const defaultWhatsappText = encodeURIComponent(
        "¡Hola! Deseo recibir información sobre las vacantes y costos del Proceso de Matrícula 2027 en el Colegio Divino Maestro."
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultWhatsappText}`;

    const formSubmittedWhatsappText = encodeURIComponent(
        `¡Hola! Acabo de solicitar información para la matrícula 2027 de mi hijo/a ${formData.studentName || 'postulante'} para el grado ${formData.grade}. Me gustaría coordinar una visita guiada.`
    );
    const formSubmittedWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${formSubmittedWhatsappText}`;

    const PILLARS = [
        {
            icon: Users,
            title: "Atención Personalizada Real (1:15)",
            text: "Grupos reducidos por aula para que ningún estudiante pase desapercibido. Tutoría constante y seguimiento psicopedagógico permanente."
        },
        {
            icon: HeartHandshake,
            title: "Valores y Convivencia Positiva",
            text: "Formamos personas de bien con principios cristianos, empatía y liderazgo ético. Ambiente cálido con tolerancia cero al acoso escolar."
        },
        {
            icon: BookOpen,
            title: "Inglés Intensivo y Robótica STEAM",
            text: "Inmersión en inglés desde los 3 años de edad y proyectos de ciencias y programación que desarrollan pensamiento analítico para el mundo de hoy."
        },
        {
            icon: ShieldCheck,
            title: "Campus Seguro y Gestión Digital",
            text: "Cámaras CCTV 24/7, control de acceso mediante credenciales QR y aplicación móvil para que sigas asistencia y calificaciones en tiempo real."
        }
    ];

    const LEVELS = [
        {
            title: "Nivel Inicial",
            ages: "3, 4 y 5 años",
            image: "/level_inicial.png",
            defaultGrade: "Inicial - 3 años",
            desc: "Estimulación temprana del lenguaje, psicomotricidad y curiosidad mediante juego guiado en un entorno seguro y con inmersión en inglés.",
            bullets: [
                "Estimulación socioemocional y motriz",
                "Inglés intensivo desde los 3 años",
                "Aulas lúdicas y adaptadas"
            ]
        },
        {
            title: "Nivel Primaria",
            ages: "1° a 6° Grado",
            image: "/level_primaria.png",
            defaultGrade: "Primaria - 1° Grado",
            desc: "Desarrollo de competencias sólidas en matemáticas, comprensión lectora crítica, ciencias y formación de hábitos de estudio autónomos.",
            bullets: [
                "Razonamiento matemático y lectoescritura",
                "Robótica educativa y ciencias",
                "Inglés intensivo y valores"
            ]
        },
        {
            title: "Nivel Secundaria",
            ages: "1° a 5° Año",
            image: "/level_secundaria.png",
            defaultGrade: "Secundaria - 1° Año",
            desc: "Exigencia académica preuniversitaria, liderazgo juvenil, orientación vocacional y preparación integral para el ingreso a las mejores universidades.",
            bullets: [
                "Preparación preuniversitaria rigurosa",
                "Alta tasa de ingreso a universidades",
                "Oratoria, debate y proyección"
            ]
        }
    ];

    const TESTIMONIALS = [
        {
            quote: "El cambio en mi hijo fue extraordinario desde que ingresó a Primaria. Los profesores realmente lo conocen por su nombre y su nivel de inglés mejoró notablemente.",
            name: "María Elena Rossi",
            role: "Madre de familia de 4° de Primaria"
        },
        {
            quote: "La tranquilidad que tenemos como padres con la seguridad del campus y la comunicación diaria en la app del colegio no tiene precio. Una comunidad educativa ejemplar.",
            name: "Ing. Roberto Alarcón",
            role: "Padre de familia de 2° de Secundaria"
        },
        {
            quote: "En Inicial le brindan un amor y una dedicación única. Mi hija va feliz todos los días al colegio y ha aprendido muchísimo jugando en un ambiente sano.",
            name: "Valeria Gómez de la Torre",
            role: "Madre de familia de Inicial 5 años"
        }
    ];

    const STEPS = [
        {
            num: "01",
            title: "Solicita tu Consulta",
            text: "Completa el formulario en 1 minuto o escríbenos por WhatsApp para enviarte costos, plan curricular y disponibilidad."
        },
        {
            num: "02",
            title: "Open Day y Visita Guiada",
            text: "Coordina una visita personalizada para conocer nuestras aulas, laboratorios y dialogar directamente con la dirección escolar."
        },
        {
            num: "03",
            title: "Evaluación y Matrícula",
            text: "Sesión diagnóstica cálida para el estudiante, notificación de admisión y reserva oficial de vacante 2027."
        }
    ];

    const FAQS = [
        {
            q: "¿Cuáles son las edades cumplidas requeridas para el Nivel Inicial?",
            a: "Siguiendo la normativa oficial del MINEDU, los niños deben cumplir la edad respectiva (3, 4 o 5 años) al 31 de marzo del año escolar 2027."
        },
        {
            q: "¿Ofrecen beneficios o descuentos para familias con varios hermanos?",
            a: "Sí, disponemos de una política de descuento progresivo en las mensualidades para familias con dos o más hijos matriculados en el colegio, además de beneficios por pronto pago."
        },
        {
            q: "¿En qué consiste la evaluación diagnóstica de admisión?",
            a: "Es una sesión amena y no punitiva con nuestro Departamento Psicopedagógico para conocer las fortalezas del postulante y planificar su acompañamiento formativo oportuno."
        },
        {
            q: "¿Cuál es el horario de clases por nivel educativo?",
            a: "Inicial: 8:00 AM a 1:00 PM | Primaria: 7:45 AM a 2:45 PM | Secundaria: 7:30 AM a 3:15 PM."
        },
        {
            q: "¿Qué documentación se requiere para el traslado desde otra institución?",
            a: "Ficha Única de Matrícula SIAGIE, copia del DNI del estudiante y padres, libreta de notas del año anterior y constancia de no adeudo emitida por el colegio de procedencia."
        }
    ];

    return (
        <main>
            {/* MINIMAL HIGH-CONVERSION HEADER */}
            <header className={styles.landingHeader}>
                <div className={styles.headerContainer}>
                    <div className={styles.logoBrand}>
                        <div className={styles.logoImgWrapper}>
                            <Image
                                src="/logo.svg"
                                alt="Escudo Colegio Particular Divino Maestro"
                                width={38}
                                height={49}
                                priority
                                className={styles.logoImg}
                            />
                        </div>
                        <div className={styles.logoText}>
                            <span className={styles.logoSub}>COLEGIO PARTICULAR</span>
                            <span className={styles.logoMain}>DIVINO MAESTRO</span>
                        </div>
                    </div>

                    <div className={styles.headerRight}>
                        <div className={styles.urgencyBadge}>
                            <span className={styles.pulseDot} aria-hidden="true"></span>
                            <span>Vacantes 2027 Abiertas</span>
                        </div>

                        <a href="tel:+5112345678" className={styles.phoneLink}>
                            <Phone size={15} />
                            <span>(01) 234-5678</span>
                        </a>

                        <a href="#formulario-lead" className={styles.headerCtaBtn}>
                            <span>Separar Vacante</span>
                            <ArrowRight size={15} />
                        </a>
                    </div>
                </div>
            </header>

            {/* HERO SECTION (ABOVE THE FOLD - 2 COLUMNS) */}
            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/school_hero_bg.png"
                        alt="Colegio Divino Maestro Matrícula 2027"
                        fill
                        priority
                        sizes="100vw"
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>

                <div className={`${styles.glowShape} ${styles.glow1}`}></div>
                <div className={`${styles.glowShape} ${styles.glow2}`}></div>

                <div className={styles.heroGrid}>
                    {/* Left Column: Copy & Value Proposition */}
                    <motion.div
                        className={styles.heroCopy}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className={styles.heroBadge}>
                            <Sparkles size={14} />
                            <span>Matrícula Escolar 2027 • Inicial, Primaria y Secundaria</span>
                        </div>

                        <h1 className={styles.heroTitle}>
                            La Educación que Asegura el Futuro de tus Hijos y la{' '}
                            <span className={styles.titleHighlight}>Tranquilidad de tu Familia</span>
                        </h1>

                        <p className={styles.heroSubtitle}>
                            Formamos líderes con sólidos valores cristianos, inglés intensivo, robótica y preparación preuniversitaria
                            en un entorno seguro con atención personalizada real (ratio 1:15).
                        </p>

                        <ul className={styles.bulletList}>
                            <li className={styles.bulletItem}>
                                <CheckCircle2 size={19} className={styles.bulletCheckIcon} />
                                <span><strong>Tutoría cercana (ratio 1:15)</strong> y acompañamiento psicopedagógico permanente.</span>
                            </li>
                            <li className={styles.bulletItem}>
                                <CheckCircle2 size={19} className={styles.bulletCheckIcon} />
                                <span><strong>Inglés intensivo y robótica STEAM</strong> integrados desde el nivel inicial.</span>
                            </li>
                            <li className={styles.bulletItem}>
                                <CheckCircle2 size={19} className={styles.bulletCheckIcon} />
                                <span><strong>Campus seguro</strong> con control digital de accesos, CCTV y app móvil para padres.</span>
                            </li>
                            <li className={styles.bulletItem}>
                                <CheckCircle2 size={19} className={styles.bulletCheckIcon} />
                                <span><strong>Alta tasa de ingreso universitario</strong> y formación del carácter ético.</span>
                            </li>
                        </ul>

                        <div className={styles.heroTrustQuote}>
                            <div className={styles.quoteAvatarGroup}>
                                <div className={styles.quoteAvatar} style={{ background: '#7a2826' }}></div>
                                <div className={styles.quoteAvatar} style={{ background: '#bb4745' }}></div>
                                <div className={styles.quoteAvatar} style={{ background: '#f59e0b' }}></div>
                            </div>
                            <p className={styles.quoteText}>
                                <strong>+25 años de excelencia pedagógica</strong> formando a cientos de familias satisfechas en Lima.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Lead Form Card (Above The Fold) */}
                    <motion.div
                        id="formulario-lead"
                        className={styles.leadFormCard}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        {!isSubmitted ? (
                            <>
                                <div className={styles.formHeader}>
                                    <span className={styles.formBadge}>Vacantes Limitadas 2027</span>
                                    <h2 className={styles.formTitle}>Solicita Información y Costos</h2>
                                    <p className={styles.formSubtitle}>
                                        Completa tus datos y recibe el dossier educativo y pensiones en menos de 24 horas.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} noValidate={false}>
                                    <div className={styles.formGrid}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="parentName" className={styles.label}>
                                                Nombre del Padre / Apoderado <span className={styles.requiredMark}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="parentName"
                                                name="parentName"
                                                required
                                                autoComplete="name"
                                                placeholder="Ej. Juan Pérez Ramos"
                                                className={styles.input}
                                                value={formData.parentName}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="phone" className={styles.label}>
                                                WhatsApp / Teléfono Móvil <span className={styles.requiredMark}>*</span>
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
                                                placeholder="juan.perez@ejemplo.com"
                                                className={styles.input}
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="studentName" className={styles.label}>
                                                Nombre del Postulante <span className={styles.requiredMark}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="studentName"
                                                name="studentName"
                                                required
                                                placeholder="Nombre de tu hijo/a"
                                                className={styles.input}
                                                value={formData.studentName}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="grade" className={styles.label}>
                                                Grado de Interés 2027 <span className={styles.requiredMark}>*</span>
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

                                        <div className={styles.checkboxContainer}>
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
                                                Acepto la política de privacidad y autorizo el contacto para el Proceso de Admisión 2027.
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            className={styles.submitBtn}
                                            disabled={isSubmitting || !formData.acceptPolicy}
                                        >
                                            {isSubmitting ? (
                                                <span>Enviando solicitud...</span>
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    <span>Quiero Conocer Vacantes y Costos →</span>
                                                </>
                                            )}
                                        </button>

                                        <div className={styles.formGuarantee}>
                                            <Lock size={13} className={styles.lockIcon} />
                                            <span>Información 100% confidencial. Respuesta rápida garantizada.</span>
                                        </div>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className={styles.successBox}>
                                <div className={styles.successIconWrapper}>
                                    <Check size={36} />
                                </div>
                                <h3 className={styles.successTitle}>¡Solicitud Recibida con Éxito!</h3>
                                <p className={styles.successText}>
                                    Muchas gracias, <strong>{formData.parentName}</strong>. Hemos registrado el interés para{' '}
                                    <strong>{formData.studentName || 'tu hijo/a'}</strong> en el grado{' '}
                                    <strong>{formData.grade}</strong>. Nuestro equipo de admisiones te contactará en menos de 24 horas.
                                </p>

                                <a
                                    href={formSubmittedWhatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.whatsappConfirmBtn}
                                >
                                    <WhatsAppIcon size={18} />
                                    <span>Notificar de Inmediato por WhatsApp</span>
                                </a>

                                <button
                                    type="button"
                                    onClick={() => setIsSubmitted(false)}
                                    className={styles.resetBtn}
                                >
                                    Enviar otra consulta
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* AUTHORITY & STATS STRIP */}
            <section className={styles.authoritySection}>
                <div className={styles.authorityGrid}>
                    <div className={styles.authItem}>
                        <div className={styles.authIconWrapper}>
                            <Clock size={24} />
                        </div>
                        <div>
                            <div className={styles.authValue}>+25 Años</div>
                            <div className={styles.authLabel}>De tradición y prestigio educativo</div>
                        </div>
                    </div>

                    <div className={styles.authItem}>
                        <div className={styles.authIconWrapper}>
                            <Users size={24} />
                        </div>
                        <div>
                            <div className={styles.authValue}>1:15</div>
                            <div className={styles.authLabel}>Ratio tutoría personalizada por aula</div>
                        </div>
                    </div>

                    <div className={styles.authItem}>
                        <div className={styles.authIconWrapper}>
                            <Award size={24} />
                        </div>
                        <div>
                            <div className={styles.authValue}>100%</div>
                            <div className={styles.authLabel}>Ingresantes a universidades destacadas</div>
                        </div>
                    </div>

                    <div className={styles.authItem}>
                        <div className={styles.authIconWrapper}>
                            <GraduationCap size={24} />
                        </div>
                        <div>
                            <div className={styles.authValue}>Bilingüe</div>
                            <div className={styles.authLabel}>Inglés intensivo desde los 3 años</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: 4 DIFFERENTIATORS (WHY CHOOSE US) */}
            <section className={styles.pillarsSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Nuestros Diferenciales</span>
                        <h2 className={styles.sectionTitle}>¿Por qué las Familias Eligen el Divino Maestro?</h2>
                        <p className={styles.sectionSubtitle}>
                            Una propuesta educativa que une el rigor académico con el amor al aprendizaje y principios éticos que perduran toda la vida.
                        </p>
                    </motion.div>

                    <div className={styles.pillarsGrid}>
                        {PILLARS.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className={styles.pillarCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className={styles.pillarIconWrapper}>
                                        <Icon size={28} />
                                    </div>
                                    <h3 className={styles.pillarTitle}>{item.title}</h3>
                                    <p className={styles.pillarText}>{item.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION: EDUCATIONAL LEVELS WITH IMAGES */}
            <section className={styles.levelsSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Trayectoria Integral</span>
                        <h2 className={styles.sectionTitle}>Acompañamos Cada Etapa de su Desarrollo</h2>
                        <p className={styles.sectionSubtitle}>
                            Desde los primeros pasos hasta el ingreso a la universidad, brindamos la preparación idónea para cada edad.
                        </p>
                    </motion.div>

                    <div className={styles.levelsGrid}>
                        {LEVELS.map((lvl, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.levelCard}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.55, delay: idx * 0.12 }}
                            >
                                <div className={styles.levelImageWrapper}>
                                    <Image
                                        src={lvl.image}
                                        alt={lvl.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className={styles.levelImage}
                                    />
                                    <div className={styles.levelAgesBadge}>{lvl.ages}</div>
                                </div>

                                <div className={styles.levelBody}>
                                    <h3 className={styles.levelTitle}>{lvl.title}</h3>
                                    <p className={styles.levelDesc}>{lvl.desc}</p>

                                    <ul className={styles.levelFeatures}>
                                        {lvl.bullets.map((b, bIdx) => (
                                            <li key={bIdx} className={styles.levelFeatItem}>
                                                <CheckCircle2 size={15} className={styles.levelFeatIcon} />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        type="button"
                                        onClick={() => handleSelectGradeAndScroll(lvl.defaultGrade)}
                                        className={styles.levelSelectBtn}
                                    >
                                        <span>Consultar Vacantes para {lvl.title}</span>
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: PARENT TESTIMONIALS (SOCIAL PROOF) */}
            <section className={styles.testimonialsSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Confianza Familiar</span>
                        <h2 className={styles.sectionTitle}>Lo que Dicen Quienes Confiaron en Nosotros</h2>
                        <p className={styles.sectionSubtitle}>
                            La satisfacción de nuestros padres de familia es nuestro mayor respaldo y orgullo institucional.
                        </p>
                    </motion.div>

                    <div className={styles.testGrid}>
                        {TESTIMONIALS.map((t, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.testCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.12 }}
                            >
                                <div>
                                    <div className={styles.starsRow}>
                                        {[...Array(5)].map((_, sIdx) => (
                                            <Star key={sIdx} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className={styles.testQuote}>“{t.quote}”</p>
                                </div>

                                <div className={styles.authorRow}>
                                    <div className={styles.authorAvatar}>
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className={styles.authorName}>{t.name}</div>
                                        <div className={styles.authorRole}>{t.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: 3-STEP ADMISSION PROCESS */}
            <section className={styles.stepsSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Ruta de Ingreso</span>
                        <h2 className={styles.sectionTitle}>Ingresar al Divino Maestro es Simple</h2>
                        <p className={styles.sectionSubtitle}>
                            Tres pasos ágiles y transparentes para asegurar la vacante de tus hijos para el periodo 2027.
                        </p>
                    </motion.div>

                    <div className={styles.stepsGrid}>
                        {STEPS.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.stepCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.12 }}
                            >
                                <div className={styles.stepNumberBadge}>{step.num}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepText}>{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: FAQS */}
            <section className={styles.faqSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Preguntas Frecuentes</span>
                        <h2 className={styles.sectionTitle}>Resolvemos tus Dudas sobre la Matrícula 2027</h2>
                        <p className={styles.sectionSubtitle}>
                            Información clara sobre admisiones, pensiones, horarios y requisitos.
                        </p>
                    </motion.div>

                    <div className={styles.faqContainer}>
                        {FAQS.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <motion.div
                                    key={idx}
                                    className={`${styles.faqItem} ${isOpen ? styles.faqItemActive : ''}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                                >
                                    <button
                                        type="button"
                                        className={styles.faqQuestionBtn}
                                        onClick={() => toggleFaq(idx)}
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.q}</span>
                                        <ChevronDown
                                            size={20}
                                            className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ''}`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <motion.div
                                            className={styles.faqAnswer}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p>{faq.a}</p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CLOSING BANNER WITH ETHICAL URGENCY */}
            <section className={styles.closingSection}>
                <div className={styles.closingInner}>
                    <div className={styles.closingBadge}>
                        <Sparkles size={14} />
                        <span>Admisiones 2027 • Cupos Limitados por Aula</span>
                    </div>

                    <h2 className={styles.closingTitle}>
                        Asegura la Mejor Educación para tus Hijos Hoy Mismo
                    </h2>

                    <p className={styles.closingDesc}>
                        Para garantizar nuestra atención personalizada y ratio de tutoría 1:15, cerramos las inscripciones
                        en cuanto se completa el aforo por grado escolar. Da el primer paso ahora.
                    </p>

                    <div className={styles.closingActions}>
                        <a href="#formulario-lead" className={styles.closingPrimaryBtn}>
                            <GraduationCap size={19} />
                            <span>Solicitar Vacante y Costos 2027</span>
                        </a>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.closingSecondaryBtn}
                        >
                            <WhatsAppIcon size={19} />
                            <span>Consultar por WhatsApp en Vivo</span>
                        </a>
                    </div>
                </div>
            </section>


            {/* MINIMAL LANDING FOOTER */}
            <footer className={styles.landingFooter}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerInfo}>
                        <div className={styles.footerBrandRow}>
                            <Image
                                src="/logo.svg"
                                alt="Escudo Colegio Divino Maestro"
                                width={26}
                                height={34}
                                className={styles.footerLogoImg}
                            />
                            <strong>Colegio Particular Divino Maestro</strong>
                        </div>
                        <span>Av. Principal 123, Urb. San Isidro, Lima • Central: (01) 234-5678</span>
                    </div>

                    <div className={styles.footerLinks}>
                        <Link href="/privacidad">Políticas de Privacidad</Link>
                        <Link href="/admisiones">Admisión Regular</Link>
                        <Link href="/">Sitio Principal</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
