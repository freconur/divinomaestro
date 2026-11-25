"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Sparkles,
    GraduationCap,
    CheckCircle2,
    Clock,
    Users,
    Award,
    ShieldCheck,
    Calendar,
    MapPin,
    Phone,
    Mail,
    FileText,
    ChevronDown,
    BookOpen,
    HeartHandshake,
    Check,
    Send
} from 'lucide-react';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import styles from './admisiones.module.css';

export default function AdmisionesPage() {
    // Requirements Tabs State
    const [activeTab, setActiveTab] = useState<'inicial' | 'primaria' | 'secundaria' | 'traslados'>('inicial');

    // FAQ Accordion State
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    // Form State
    const [formData, setFormData] = useState({
        parentName: '',
        email: '',
        phone: '',
        studentName: '',
        grade: 'Inicial - 3 años',
        previousSchool: '',
        message: '',
        acceptPolicy: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

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

        // Simulate form submission
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
            previousSchool: '',
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
        `¡Hola! Acabo de enviar la solicitud de admisión para mi hijo/a ${formData.studentName || 'postulante'} al grado ${formData.grade}. Me gustaría coordinar los siguientes pasos.`
    );
    const formSubmittedWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${formSubmittedWhatsappText}`;

    // Why Choose Us Pillars
    const valuePillars = [
        {
            icon: GraduationCap,
            title: "Excelencia Pedagógica",
            text: "Metodología activa y vivencial que estimula el razonamiento analítico, la creatividad y el liderazgo desde los primeros años."
        },
        {
            icon: HeartHandshake,
            title: "Valores y Acompañamiento",
            text: "Formación en virtudes cristianas y tutoría psicopedagógica personalizada para el desarrollo socioemocional de cada estudiante."
        },
        {
            icon: BookOpen,
            title: "Inglés Intensivo y Robótica",
            text: "Inmersión en el idioma inglés desde nivel inicial y talleres de tecnología y robótica para un aprendizaje competitivo y global."
        },
        {
            icon: ShieldCheck,
            title: "Comunidad Segura y Familiar",
            text: "Aulas equipadas con grupos reducidos (ratio 1:15) en un entorno seguro donde cada alumno es valorado por su nombre."
        }
    ];

    // Admission Process Steps
    const steps = [
        {
            number: "01",
            tag: "Paso Inicial",
            title: "Solicitud y Dossier Informativo",
            text: "Completa el formulario web o contáctanos por WhatsApp para recibir el brochure curricular, costos educativos y calendario de admisión 2027.",
            tip: "Trámite 100% digital o presencial en Secretaría.",
            icon: FileText
        },
        {
            number: "02",
            tag: "Conoce el Campus",
            title: "Open Day y Visita Guiada",
            text: "Coordina una cita presencial para recorrer nuestras aulas, laboratorios y áreas recreativas, y conversar con los directivos pedagógicos.",
            tip: "Atención personalizada de lunes a viernes.",
            icon: Calendar
        },
        {
            number: "03",
            tag: "Encuentro Cercano",
            title: "Evaluación Diagnóstica y Entrevista",
            text: "Sesión amena con el departamento psicopedagógico para conocer las fortalezas del postulante y dialogar sobre la visión educativa familiar.",
            tip: "Enfoque de madurez socioemocional y cognitivo.",
            icon: Users
        },
        {
            number: "04",
            tag: "¡Bienvenidos!",
            title: "Resultados y Reserva de Vacante",
            text: "Notificación de admisión en un plazo máximo de 48 horas. Se formaliza el ingreso con el pago de la cuota y matrícula 2027.",
            tip: "Reserva garantizada por 5 días hábiles.",
            icon: Award
        }
    ];

    // Requirements Data
    const requirements = {
        inicial: {
            title: "Nivel Inicial",
            ages: "3, 4 y 5 años (cumplidos al 31 de marzo)",
            items: [
                "Copia legible del DNI del postulante y de ambos padres o apoderados.",
                "Partida o Acta de Nacimiento original o copia legalizada.",
                "Cartilla o Ficha de Vacunación actualizada.",
                "Ficha Única de Matrícula (SIAGIE) si cursó años previos en otro nido/colegio.",
                "Constancia de no adeudo emitida por la institución de procedencia (si aplica).",
                "4 fotografías tamaño carné del postulante (fondo blanco)."
            ],
            schedule: "Lunes a Viernes: 8:00 AM a 1:00 PM",
            focus: "Desarrollo psicomotriz, estimulación del lenguaje, inmersión en inglés y juego guiado."
        },
        primaria: {
            title: "Nivel Primaria",
            ages: "1° a 6° Grado (6 años cumplidos al 31 de marzo para 1er grado)",
            items: [
                "Copia del DNI del estudiante y de ambos progenitores.",
                "Libreta de Notas o Informe de Progreso del año escolar anterior.",
                "Ficha Única de Matrícula (código modular SIAGIE).",
                "Constancia de Matrícula del colegio de procedencia.",
                "Certificado de Buena Conducta o carta de recomendación escolar.",
                "Constancia de no adeudo económico del colegio anterior."
            ],
            schedule: "Lunes a Viernes: 7:45 AM a 2:45 PM",
            focus: "Razonamiento matemático, comprensión lectora crítica, robótica, inglés y hábitos de estudio."
        },
        secundaria: {
            title: "Nivel Secundaria",
            ages: "1° a 5° Año",
            items: [
                "Copia del DNI del estudiante y de los padres / apoderados.",
                "Certificado Oficial de Estudios de todos los grados previos concluidos.",
                "Libreta de Notas o Informe de Competencias con ponderado aprobatorio.",
                "Ficha Única de Matrícula SIAGIE original.",
                "Constancia de no adeudo y conducta del colegio de origen.",
                "Entrevista personal y vocacional del estudiante con tutoría."
            ],
            schedule: "Lunes a Viernes: 7:30 AM a 3:15 PM",
            focus: "Preparación preuniversitaria intensiva, liderazgo juvenil, oratoria, ciencias y orientación profesional."
        },
        traslados: {
            title: "Traslados Externos",
            ages: "Todos los niveles (sujeto a disponibilidad de vacante por aula)",
            items: [
                "Solicitud de traslado dirigida a la Dirección del Colegio Divino Maestro.",
                "Resolución Directoral de Traslado expedida por la institución de procedencia.",
                "Ficha Única de Matrícula SIAGIE liberada por el colegio emisor.",
                "Certificados Oficiales de Estudios y Boleta de Notas a la fecha.",
                "Constancia de No Adeudo extendida por la institución previa.",
                "Evaluación diagnóstica de convalidación académica y psicopedagógica."
            ],
            schedule: "Atención continua según calendario académico",
            focus: "Integración armoniosa, nivelación de contenidos y seguimiento psicopedagógico cercano."
        }
    };

    // FAQ items
    const faqs = [
        {
            q: "¿A partir de qué edad pueden ingresar los niños al Nivel Inicial?",
            a: "De acuerdo con la normativa vigente del Ministerio de Educación (MINEDU), los niños deben tener la edad correspondiente (3, 4 o 5 años) cumplida al 31 de marzo del año escolar respectivo."
        },
        {
            q: "¿En qué consiste la evaluación diagnóstica para nuevos alumnos?",
            a: "No es un examen eliminatorio ni punitivo. Es un espacio ameno coordinado por nuestro Departamento Psicopedagógico para conocer el nivel de madurez socioemocional, habilidades comunicativas y conocimientos básicos según la edad, permitiéndonos diseñar un acompañamiento personalizado."
        },
        {
            q: "¿El colegio ofrece descuentos o convenios para hermanos?",
            a: "Sí, contamos con una política de beneficio familiar que otorga descuentos progresivos en las pensiones escolares para familias con dos o más hijos matriculados en la institución, además de facilidades para el pago anticipado."
        },
        {
            q: "¿Cuál es el tiempo de respuesta una vez realizada la postulación?",
            a: "Tras la recepción de los documentos y la entrevista familiar, el comité de admisiones emite el resultado y la carta de admisión en un plazo no mayor a 48 a 72 horas hábiles."
        },
        {
            q: "¿Es posible agendar una visita guiada para conocer las instalaciones?",
            a: "¡Totalmente! Fomentamos que las familias conozcan nuestro entorno educativo antes de tomar su decisión. Puedes coordinar una visita personalizada de lunes a viernes en horario matutino completando el formulario o escribiéndonos vía WhatsApp."
        },
        {
            q: "¿Qué ocurre una vez obtenida la constancia de admisión?",
            a: "Los padres de familia disponen de 5 días hábiles para confirmar la vacante mediante el pago de la cuota de ingreso correspondiente y la firma del contrato de servicios educativos para el año lectivo 2027."
        }
    ];

    return (
        <main>
            <Header />

            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/admisiones_hero_bg.png"
                        alt="Proceso de Admisión Colegio Divino Maestro"
                        fill
                        priority
                        sizes="100vw"
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>

                {/* Ambient Decorative Glows */}
                <div className={`${styles.glowShape} ${styles.glow1}`}></div>
                <div className={`${styles.glowShape} ${styles.glow2}`}></div>

                <div className={`container ${styles.heroContent}`}>
                    <motion.div
                        className={styles.heroBadge}
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Sparkles size={14} />
                        <span>Admisión & Matrícula 2027</span>
                        <span className={styles.pulseDot} aria-hidden="true"></span>
                        <span style={{ color: 'var(--accent-gold-light)', fontWeight: 700 }}>Vacantes Limitadas</span>
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                    >
                        Asegura una Educación de Excelencia para el Futuro de tus Hijos en{' '}
                        <span className={styles.titleHighlight}>Admisión 2027</span>
                    </motion.h1>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        Te acompañamos en cada etapa para integrarte a nuestra comunidad. Formación con sólidos
                        valores cristianos, exigencia académica preuniversitaria, bilingüismo y calidez humana.
                    </motion.p>

                    <motion.div
                        className={styles.heroActions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                    >
                        <a href="#formulario" className={styles.heroPrimaryBtn}>
                            <FileText size={18} />
                            <span>Postular en Línea</span>
                        </a>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.heroSecondaryBtn}
                        >
                            <WhatsAppIcon size={18} />
                            <span>Asesoría por WhatsApp</span>
                        </a>
                    </motion.div>

                    {/* STATS / HIGHLIGHTS RIBBON */}
                    <motion.div
                        className={styles.statsStrip}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    >
                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <Clock size={20} />
                            </div>
                            <div className={styles.statText}>
                                <div className={styles.statValue}>+25 Años</div>
                                <div className={styles.statLabel}>Trayectoria educativa</div>
                            </div>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <GraduationCap size={20} />
                            </div>
                            <div className={styles.statText}>
                                <div className={styles.statValue}>3 Niveles</div>
                                <div className={styles.statLabel}>Inicial, Primaria y Secundaria</div>
                            </div>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <Users size={20} />
                            </div>
                            <div className={styles.statText}>
                                <div className={styles.statValue}>1:15</div>
                                <div className={styles.statLabel}>Ratio tutoría personalizada</div>
                            </div>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <Award size={20} />
                            </div>
                            <div className={styles.statText}>
                                <div className={styles.statValue}>100%</div>
                                <div className={styles.statLabel}>Acompañamiento psicopedagógico</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION: WHY CHOOSE US (PILLARS) */}
            <section className={styles.valueSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>¿Por qué Elegirnos?</span>
                        <h2 className={styles.sectionTitle}>Una Inversión en el Éxito y Felicidad de tus Hijos</h2>
                        <p className={styles.sectionSubtitle}>
                            En el Colegio Divino Maestro unimos el rigor científico y académico con el amor al aprendizaje
                            y los principios que formarán a los líderes íntegros del mañana.
                        </p>
                    </motion.div>

                    <div className={styles.valueGrid}>
                        {valuePillars.map((pillar, idx) => {
                            const IconComponent = pillar.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className={styles.valueCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <div className={styles.valueIconWrapper}>
                                        <IconComponent size={28} />
                                    </div>
                                    <h3 className={styles.valueTitle}>{pillar.title}</h3>
                                    <p className={styles.valueText}>{pillar.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION: ADMISSION PROCESS ROADMAP */}
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
                        <h2 className={styles.sectionTitle}>El Proceso de Admisión en 4 Pasos</h2>
                        <p className={styles.sectionSubtitle}>
                            Un camino ágil, transparente y asistido permanentemente por nuestro equipo de admisiones.
                        </p>
                    </motion.div>

                    <div className={styles.stepsGrid}>
                        {steps.map((step, idx) => {
                            const StepIcon = step.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className={styles.stepCard}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.55, delay: idx * 0.12 }}
                                >
                                    {/* Ghost number watermark */}
                                    <span className={styles.stepWatermark} aria-hidden="true">
                                        {step.number}
                                    </span>

                                    <div className={styles.stepHeader}>
                                        <div className={styles.stepIconWrapper}>
                                            <StepIcon size={24} />
                                        </div>
                                        <div className={styles.stepBadge}>
                                            <span className={styles.stepBadgeNumber}>Paso {step.number}</span>
                                        </div>
                                    </div>

                                    <span className={styles.stepTag}>{step.tag}</span>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepText}>{step.text}</p>

                                    <div className={styles.stepTip}>
                                        <div className={styles.tipIconBadge}>
                                            <Check size={13} strokeWidth={2.8} />
                                        </div>
                                        <span className={styles.tipText}>{step.tip}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION: REQUIREMENTS BY LEVEL (TABS) */}
            <section className={styles.requirementsSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Documentación y Requisitos</span>
                        <h2 className={styles.sectionTitle}>Requisitos de Postulación por Nivel</h2>
                        <p className={styles.sectionSubtitle}>
                            Conoce con exactitud los documentos solicitados para cada etapa educativa y planifica con anticipación.
                        </p>
                    </motion.div>

                    <div className={styles.tabsContainer}>
                        {/* Tab Buttons */}
                        <div className={styles.tabsList} role="tablist" aria-label="Niveles de admisión">
                            <button
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'inicial'}
                                aria-controls="panel-inicial"
                                id="tab-inicial"
                                className={`${styles.tabBtn} ${activeTab === 'inicial' ? styles.tabBtnActive : ''}`}
                                onClick={() => setActiveTab('inicial')}
                            >
                                <Sparkles size={16} />
                                <span>Nivel Inicial</span>
                            </button>

                            <button
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'primaria'}
                                aria-controls="panel-primaria"
                                id="tab-primaria"
                                className={`${styles.tabBtn} ${activeTab === 'primaria' ? styles.tabBtnActive : ''}`}
                                onClick={() => setActiveTab('primaria')}
                            >
                                <BookOpen size={16} />
                                <span>Nivel Primaria</span>
                            </button>

                            <button
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'secundaria'}
                                aria-controls="panel-secundaria"
                                id="tab-secundaria"
                                className={`${styles.tabBtn} ${activeTab === 'secundaria' ? styles.tabBtnActive : ''}`}
                                onClick={() => setActiveTab('secundaria')}
                            >
                                <GraduationCap size={16} />
                                <span>Nivel Secundaria</span>
                            </button>

                            <button
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'traslados'}
                                aria-controls="panel-traslados"
                                id="tab-traslados"
                                className={`${styles.tabBtn} ${activeTab === 'traslados' ? styles.tabBtnActive : ''}`}
                                onClick={() => setActiveTab('traslados')}
                            >
                                <FileText size={16} />
                                <span>Traslados Externos</span>
                            </button>
                        </div>

                        {/* Tab Content Panel */}
                        <motion.div
                            key={activeTab}
                            id={`panel-${activeTab}`}
                            role="tabpanel"
                            aria-labelledby={`tab-${activeTab}`}
                            className={styles.tabContent}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Left: Document List */}
                            <div>
                                <div className={styles.reqHeader}>
                                    <span className={styles.reqBadge}>{requirements[activeTab].title}</span>
                                    <h3 className={styles.reqTitle}>Documentación Solicitada</h3>
                                    <p className={styles.reqSubtitle}>{requirements[activeTab].ages}</p>
                                </div>

                                <ul className={styles.reqList}>
                                    {requirements[activeTab].items.map((item, idx) => (
                                        <li key={idx} className={styles.reqItem}>
                                            <CheckCircle2 size={18} className={styles.reqIcon} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right: Level Specific Info & Callouts */}
                            <div className={styles.reqSideCard}>
                                <div className={styles.reqInfoBlock}>
                                    <div className={styles.reqInfoTitle}>
                                        <Clock size={15} />
                                        <span>Horario Escolar</span>
                                    </div>
                                    <p className={styles.reqInfoText}>{requirements[activeTab].schedule}</p>
                                </div>

                                <div className={styles.reqInfoBlock}>
                                    <div className={styles.reqInfoTitle}>
                                        <Award size={15} />
                                        <span>Enfoque del Nivel</span>
                                    </div>
                                    <p className={styles.reqInfoText}>{requirements[activeTab].focus}</p>
                                </div>

                                <div className={styles.reqCtaNotice}>
                                    <strong>¿Dudas con algún documento?</strong> Nuestro equipo te asiste en la regularización
                                    de traslados o constancias ante el SIAGIE / MINEDU.
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION: INTERACTIVE ADMISSION FORM & CONTACT */}
            <section className={styles.formSectionWrapper} id="formulario">
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Inicia tu Postulación</span>
                        <h2 className={styles.sectionTitle}>Solicitud de Admisión 2027</h2>
                        <p className={styles.sectionSubtitle}>
                            Completa los datos a continuación y nos comunicaremos contigo en menos de 24 horas
                            para coordinar tu entrevista y visita al campus.
                        </p>
                    </motion.div>

                    <div className={styles.formLayout}>
                        {/* FORM CONTAINER */}
                        <div className={styles.formCard}>
                            {!isSubmitted ? (
                                <>
                                    <div className={styles.formCardHeader}>
                                        <h3>Ficha de Información del Postulante</h3>
                                        <p>Los campos marcados con (*) son obligatorios para procesar la solicitud.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} noValidate={false}>
                                        <div className={styles.formGrid}>
                                            {/* Parent Name */}
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
                                                    placeholder="Ej. Carlos Mendoza Ramos"
                                                    className={styles.input}
                                                    value={formData.parentName}
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
                                                    placeholder="carlos.mendoza@ejemplo.com"
                                                    className={styles.input}
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div className={styles.inputGroup}>
                                                <label htmlFor="phone" className={styles.label}>
                                                    WhatsApp / Teléfono de Contacto <span className={styles.requiredMark}>*</span>
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

                                            {/* Grade of interest */}
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

                                            {/* Previous School */}
                                            <div className={styles.inputGroup}>
                                                <label htmlFor="previousSchool" className={styles.label}>
                                                    Colegio / Nido de Procedencia (Opcional)
                                                </label>
                                                <input
                                                    type="text"
                                                    id="previousSchool"
                                                    name="previousSchool"
                                                    placeholder="Institución actual o previa"
                                                    className={styles.input}
                                                    value={formData.previousSchool}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            {/* Additional Message */}
                                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                                <label htmlFor="message" className={styles.label}>
                                                    Consultas o Comentarios Adicionales
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={3}
                                                    placeholder="Cuéntanos algún aspecto particular sobre tu hijo/a o tus consultas sobre el proceso..."
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
                                                    Acepto las políticas de privacidad y autorizo el contacto para fines informativos del Proceso de Admisión 2027.
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
                                                        <span>Enviando Solicitud...</span>
                                                    ) : (
                                                        <>
                                                            <Send size={18} />
                                                            <span>Enviar Solicitud de Admisión 2027</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    className={styles.successCard}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className={styles.successIconWrapper}>
                                        <Check size={36} />
                                    </div>
                                    <h3 className={styles.successTitle}>¡Solicitud Recibida con Éxito!</h3>
                                    <p className={styles.successText}>
                                        Muchas gracias, <strong>{formData.parentName}</strong>. Hemos registrado la postulación para{' '}
                                        <strong>{formData.studentName || 'tu hijo/a'}</strong> para el grado{' '}
                                        <strong>{formData.grade}</strong>. Un asesor de admisiones te contactará en menos de 24 horas.
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

                        {/* ADMISSIONS OFFICE SIDE CARD */}
                        <div className={styles.sideCard}>
                            <div className={styles.sideHeader}>
                                <h3>Oficina de Admisiones</h3>
                                <p>Canales directos de atención institucional</p>
                            </div>

                            <div className={styles.contactList}>
                                <div className={styles.contactItem}>
                                    <div className={styles.contactIconWrapper}>
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <div className={styles.contactLabel}>Sede Principal</div>
                                        <div className={styles.contactValue}>Av. Principal 123, Urb. San Isidro, Lima</div>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.contactIconWrapper}>
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <div className={styles.contactLabel}>Horario de Atención</div>
                                        <div className={styles.contactValue}>
                                            Lunes a Viernes: 8:00 AM – 4:00 PM<br />
                                            Sábados: 9:00 AM – 1:00 PM
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.contactIconWrapper}>
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <div className={styles.contactLabel}>Central Telefónica</div>
                                        <div className={styles.contactValue}>
                                            <a href="tel:+5112345678" className={styles.contactLink}>(01) 234-5678</a>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.contactIconWrapper}>
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div className={styles.contactLabel}>Correo de Admisiones</div>
                                        <div className={styles.contactValue}>
                                            <a href="mailto:admisiones@divinomaestro.edu.pe" className={styles.contactLink}>
                                                admisiones@divinomaestro.edu.pe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Direct Highlight Box */}
                            <div className={styles.sideBanner}>
                                <div className={styles.sideBannerTitle}>
                                    <Sparkles size={16} />
                                    <span>¿Atención Inmediata?</span>
                                </div>
                                <p className={styles.sideBannerText}>
                                    Resuelve tus consultas con un asesor especializado en vivo o agenda tu visita al campus vía WhatsApp.
                                </p>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.sideWhatsAppBtn}
                                >
                                    <WhatsAppIcon size={18} />
                                    <span>Chatear con Admisiones</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: FREQUENTLY ASKED QUESTIONS (FAQ) */}
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
                        <h2 className={styles.sectionTitle}>Resolvemos tus Dudas sobre el Proceso</h2>
                        <p className={styles.sectionSubtitle}>
                            Encuentra respuestas claras a las preguntas más comunes sobre la postulación, vacantes y admisión 2027.
                        </p>
                    </motion.div>

                    <div className={styles.faqContainer}>
                        {faqs.map((faq, idx) => {
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

            {/* SECTION: FINAL CONVERSION BANNER */}
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
                            <span>Año Escolar 2027</span>
                        </div>

                        <h2 className={styles.ctaTitle}>
                            Elige la Excelencia Educativa que Transformará su Futuro
                        </h2>

                        <p className={styles.ctaDesc}>
                            Las vacantes para el año 2027 son limitadas por aula para garantizar nuestra atención
                            personalizada y tutoría integral. Asegura el cupo de tus hijos hoy mismo.
                        </p>

                        <div className={styles.ctaActions}>
                            <a href="#formulario" className={styles.ctaPrimaryBtn}>
                                <GraduationCap size={19} />
                                <span>Iniciar Postulación Ahora</span>
                            </a>

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
