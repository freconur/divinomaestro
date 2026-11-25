"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Cpu,
    Smartphone,
    Cloud,
    MessageSquareCode,
    ShieldCheck,
    CheckCircle2,
    Calendar,
    GraduationCap,
    Users,
    FileCheck2,
    Lock,
    Server,
    Headphones,
    ChevronDown,
    Check,
    Laptop,
    Wifi,
    Bot
} from 'lucide-react';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import styles from './tecnologia.module.css';

export default function TecnologiaPage() {
    const [activeTab, setActiveTab] = useState<'padres' | 'estudiantes' | 'docentes'>('padres');
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const whatsappNumber = "51987654321";
    const whatsappMsg = encodeURIComponent("¡Hola! Deseo más información sobre el ecosistema tecnológico y las herramientas digitales del Colegio Divino Maestro.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    const PLATFORMS = [
        {
            icon: Smartphone,
            tag: "Gestión en Tiempo Real",
            title: "Intranet Escolar & App Móvil Familiar",
            desc: "Plataforma centralizada y aplicación móvil multiplataforma que conecta a las familias con la vida académica diaria de sus hijos, garantizando transparencia y seguimiento permanente.",
            features: [
                "Boletas y libretas de notas digitales con actualización y ponderados automáticos.",
                "Control diario de asistencia y puntualidad con alertas en tiempo real al teléfono celular.",
                "Agenda escolar virtual con fechas de exámenes, entregas de proyectos y tareas.",
                "Gestión de justificaciones médicas, permisos de salida y citas con 1 solo clic.",
                "Historial de desempeño bimestral y comparativo de progreso académico."
            ],
            badges: ["App iOS & Android", "Acceso Web 24/7", "Notificaciones Push", "Historial Digital"]
        },
        {
            icon: Cloud,
            tag: "Entorno Cloud Oficial",
            title: "Google Workspace for Education",
            desc: "Convenio oficial con Google para dotar a cada alumno y profesor de herramientas colaborativas profesionales bajo un entorno seguro y libre de publicidad.",
            features: [
                "Cuentas de correo institucional protegidas (@divinomaestro.edu.pe) para alumnos y plana docente.",
                "Google Classroom para entrega de tareas, rúbricas de evaluación y material multimedia interactivo.",
                "Google Drive con almacenamiento en la nube para portafolios digitales de evidencias.",
                "Filtros de navegación escolar avanzada y políticas de seguridad infantil certificadas.",
                "Herramientas de ofimática colaborativa (Docs, Sheets, Slides) para proyectos grupales."
            ],
            badges: ["Google Classroom", "Drive Seguro", "Meet Educativo", "Seguridad Infantil"]
        },
        {
            icon: MessageSquareCode,
            tag: "Cero Papeleo",
            title: "Comunicación Institucional Directa",
            desc: "Canal oficial y unificado que erradica la pérdida de circulares y los chats no oficiales, asegurando una comunicación formal, respetuosa y oportuna entre la escuela y el hogar.",
            features: [
                "Envío directo de circulares, comunicados y cronogramas institucionales con confirmación de lectura.",
                "Agendamiento organizado de entrevistas personales con tutores de aula y psicopedagogía.",
                "Reportes periódicos sobre la evolución socioemocional, hábitos y convivencia escolar.",
                "Trámites de secretaría digital: solicitud de constancias de estudio y certificados oficiales.",
                "Cero desperdicio de papel: enfoque 100% ecológico y digitalmente sostenible."
            ],
            badges: ["Circulares Digitales", "Citas con Tutores", "Secretaría Online", "100% Ecológico"]
        },
        {
            icon: ShieldCheck,
            tag: "Tranquilidad Familiar",
            title: "Campus Seguro & Control Digital",
            desc: "Integración de tecnologías de seguridad física y automatización administrativa para asegurar el bienestar de los estudiantes y la tranquilidad de sus padres.",
            features: [
                "Control de acceso inteligente mediante credenciales con código QR y registro biométrico.",
                "Circuito cerrado de televisión (CCTV) con monitoreo preventivo en accesos y áreas recreativas.",
                "Pasarela de pagos en línea multicanal para matrículas y pensiones sin necesidad de hacer filas.",
                "Ficha médica digital y registro sistematizado de atenciones en el tópico de enfermería.",
                "Alertas inmediatas ante cualquier incidencia de salud o reprogramación de actividades."
            ],
            badges: ["Acceso con Código QR", "CCTV Monitoreado", "Pasarela de Pagos", "Tópico Digital"]
        }
    ];

    const SHOWCASE_DATA = {
        padres: {
            role: "Para Padres de Familia",
            title: "El colegio en la palma de tu mano, estés donde estés",
            desc: "Nuestra aplicación móvil institucional te permite participar activamente en la educación de tus hijos, recibiendo información confiable en tiempo real sin trámites engorrosos.",
            features: [
                {
                    title: "Alertas Inmediatas de Ingreso y Salida",
                    text: "Notificación push automática cuando tu hijo/a ingresa al colegio por la mañana y al culminar su jornada."
                },
                {
                    title: "Seguimiento Continuo del Rendimiento",
                    text: "Visualiza calificaciones parciales, rúbricas de evaluación y recomendaciones de los profesores antes de la libreta bimestral."
                },
                {
                    title: "Atención Tutorial y Psicopedagógica Directa",
                    text: "Agenda reuniones presenciales o virtuales con los tutores con solo elegir fecha y hora disponible."
                }
            ],
            mockup: {
                student: "Mateo Mendoza Ramos",
                grade: "5° Grado de Primaria",
                attendance: "Asistencia Registrada: 07:42 AM",
                average: "AD (Destacado)",
                nextActivity: "Feria de Ciencias: Maqueta de Energías Limpias",
                nextDate: "Jueves, 10:30 AM"
            }
        },
        estudiantes: {
            role: "Para Estudiantes",
            title: "Aulas interactivas y competencias para el siglo XXI",
            desc: "Preparamos a nuestros estudiantes para un mundo digitalizado mediante metodologías activas donde la tecnología es un medio para investigar, colaborar y crear soluciones innovadoras.",
            features: [
                {
                    title: "Aulas Cloud & Google Classroom",
                    text: "Material de clase organizado, foros de debate guiados, rúbricas de evaluación y biblioteca de recursos multimedia."
                },
                {
                    title: "Laboratorios STEAM y Robótica Educativa",
                    text: "Programación por bloques, diseño 3D, ensamblaje de robots y proyectos de indagación científica aplicada."
                },
                {
                    title: "Ciudadanía y Ciberseguridad Digital",
                    text: "Formación en el uso ético, reflexivo y responsable de las redes y herramientas de inteligencia artificial y tecnología."
                }
            ],
            mockup: {
                student: "Camila Silva Vega",
                grade: "3° Año de Secundaria",
                attendance: "Presente en Laboratorio STEAM",
                average: "18.5 (Sobresaliente)",
                nextActivity: "Entrega de Ensayo: Pensamiento Crítico & IA",
                nextDate: "Viernes, 11:59 PM"
            }
        },
        docentes: {
            role: "Para Docentes & Directivos",
            title: "Analítica pedagógica para un acompañamiento oportuno",
            desc: "Los profesores disponen de plataformas que optimizan su tiempo administrativo para concentrarse en lo que verdaderamente importa: guiar, motivar y acompañar a cada estudiante de forma individualizada.",
            features: [
                {
                    title: "Detección Temprana de Alertas Académicas",
                    text: "Identificación preventiva de estudiantes que requieren reforzamiento o apoyo psicopedagógico antes de fin de ciclo."
                },
                {
                    title: "Planificación Curricular Centralizada",
                    text: "Programación de unidades y sesiones de aprendizaje perfectamente alineadas a los estándares del Currículo Nacional MINEDU."
                },
                {
                    title: "Expediente Digital 360° del Estudiante",
                    text: "Historial completo de logros, habilidades socioemocionales, salud e incidencias para una tutoría integral."
                }
            ],
            mockup: {
                student: "Panel Docente: Aula 4° Primaria",
                grade: "Ratio Tutoría: 1:15",
                attendance: "Asistencia del Aula: 100%",
                average: "Progreso Bimestral: 94%",
                nextActivity: "Sesión Tutorial: Inteligencia Emocional & Convivencia",
                nextDate: "Miércoles, 08:30 AM"
            }
        }
    };

    const STEAM_FEATURES = [
        {
            icon: Bot,
            title: "Robótica Educativa y Programación",
            desc: "Desde primaria, los alumnos construyen modelos y programan algoritmos utilizando kits educativos que desarrollan la lógica matemática y resolución de problemas."
        },
        {
            icon: Laptop,
            title: "Aulas Multimedia y Proyección Interactiva",
            desc: "Todas las aulas del colegio cuentan con proyectores de alta resolución, audio envolvente y conexión de red para clases vivenciales y participativas."
        },
        {
            icon: Wifi,
            title: "Conectividad Wi-Fi 6 Administrada",
            desc: "Red inalámbrica escolar de alta velocidad segmentada por roles, con filtros avanzados de contenido y control estricto de accesos para máxima seguridad."
        }
    ];

    const TRUST_PILLARS = [
        {
            icon: Lock,
            title: "Privacidad y Ley N° 29733",
            desc: "Cumplimiento riguroso de la Ley de Protección de Datos Personales de la República del Perú. La información familiar y de menores nunca es comercializada ni expuesta."
        },
        {
            icon: Server,
            title: "Disponibilidad 99.9% en la Nube",
            desc: "Sistemas alojados en servidores de clase mundial con respaldos automáticos diarios, garantizando acceso ininterrumpido a notas, asistencias y clases."
        },
        {
            icon: Headphones,
            title: "Mesa de Ayuda y Capacitación",
            desc: "Soporte técnico dedicado para resolver dudas de los padres en la instalación de la app, recuperación de credenciales y acompañamiento constante a la plana docente."
        }
    ];

    const FAQS = [
        {
            q: "¿Cómo y cuándo reciben los padres las credenciales de la app móvil e intranet?",
            a: "Al formalizar la matrícula escolar, la Secretaría de Admisiones genera las credenciales institucionales únicas (usuario y contraseña) para ambos padres de familia y las envía por correo electrónico con una guía paso a paso de instalación."
        },
        {
            q: "¿El uso de la intranet escolar y de Google Workspace tiene algún costo adicional?",
            a: "No. El acceso a la intranet, la aplicación móvil y el ecosistema completo de Google Workspace for Education (@divinomaestro.edu.pe) está 100% incluido dentro de la propuesta educativa del colegio sin cargos adicionales."
        },
        {
            q: "¿En qué dispositivos se puede utilizar la plataforma del colegio?",
            a: "Nuestra plataforma es totalmente multiplataforma. Cuenta con app nativa para smartphones y tablets Android e iOS, además de acceso web responsive compatible con cualquier computadora de escritorio o laptop."
        },
        {
            q: "¿Cómo se protege a los estudiantes de contenido inadecuado en internet?",
            a: "Toda la navegación dentro del campus y las cuentas institucionales de Google cuentan con filtros perimetrales DNS de ciberseguridad que bloquean automáticamente contenido inapropiado, redes sociales no académicas y sitios riesgosos para menores."
        },
        {
            q: "¿Qué sucede si extravío mi contraseña o tengo inconvenientes con la app?",
            a: "Disponemos de un módulo de autorecuperación de clave por correo electrónico y de un equipo de soporte técnico en el colegio que atiende a través de WhatsApp y teléfono de lunes a viernes en horario administrativo."
        }
    ];

    const currentShowcase = SHOWCASE_DATA[activeTab];

    return (
        <main>
            <Header />

            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/school_hero_bg.png"
                        alt="Tecnología y Gestión Escolar en Colegio Divino Maestro"
                        fill
                        priority
                        sizes="100vw"
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay}></div>
                </div>

                <div className={`${styles.glowShape} ${styles.glow1}`}></div>
                <div className={`${styles.glowShape} ${styles.glow2}`}></div>

                <div className={`container ${styles.heroContainer}`}>
                    <div className={styles.heroContent}>
                        <motion.div
                            className={styles.heroBadge}
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Sparkles size={14} />
                            <span>Innovación Educativa & Gestión 360°</span>
                            <span className={styles.pulseDot} aria-hidden="true"></span>
                            <span style={{ color: 'var(--accent-gold-light)', fontWeight: 700 }}>Ecosistema Digital Activo</span>
                        </motion.div>

                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        >
                            Tecnología al Servicio de una{' '}
                            <span className={styles.titleHighlight}>Gestión Escolar Conectada</span>
                        </motion.h1>

                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            Conoce las plataformas, sistemas y entornos interactivos que implementamos en el Colegio Divino Maestro
                            para ofrecer una experiencia educativa transparente, segura y orientada a los desafíos del futuro.
                        </motion.p>

                        <motion.div
                            className={styles.heroActions}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                        >
                            <a href="#plataformas" className={styles.heroPrimaryBtn}>
                                <Cpu size={18} />
                                <span>Explorar Plataformas</span>
                            </a>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.heroSecondaryBtn}
                            >
                                <WhatsAppIcon size={18} />
                                <span>Consultar con un Asesor</span>
                            </a>
                        </motion.div>
                    </div>

                    {/* STATS STRIP */}
                    <motion.div
                        className={styles.statsStrip}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    >
                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <Smartphone size={20} />
                            </div>
                            <div className={styles.statText}>
                                <div className={styles.statValue}>100%</div>
                                <div className={styles.statLabel}>Gestión digital y cero papeles</div>
                            </div>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <Cloud size={20} />
                            </div>
                            <div className={styles.statText}>
                                <div className={styles.statValue}>Google</div>
                                <div className={styles.statLabel}>Workspace for Education</div>
                            </div>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <ShieldCheck size={20} />
                            </div>
                            <div className={styles.statText}>
                                <div className={styles.statValue}>Seguro</div>
                                <div className={styles.statLabel}>Control QR & CCTV en campus</div>
                            </div>
                        </div>

                        <div className={styles.statItem}>
                            <div className={styles.statIconWrapper}>
                                <Server size={20} />
                            </div>
                            <div className={styles.statText}>
                                <div className={styles.statValue}>99.9%</div>
                                <div className={styles.statLabel}>Disponibilidad en la nube</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION: DETAILED PLATFORMS BREAKDOWN */}
            <section className={styles.systemsSection} id="plataformas">
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Infraestructura Digital</span>
                        <h2 className={styles.sectionTitle}>Plataformas de Gestión y Aprendizaje</h2>
                        <p className={styles.sectionSubtitle}>
                            Cada sistema ha sido seleccionado e implementado para brindar máxima eficiencia administrativa,
                            comunicación transparente con las familias y una experiencia pedagógica interactiva.
                        </p>
                    </motion.div>

                    <div className={styles.systemsGrid}>
                        {PLATFORMS.map((platform, idx) => {
                            const Icon = platform.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className={styles.systemCard}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.55, delay: idx * 0.12 }}
                                >
                                    <div className={styles.systemCardTop}>
                                        <div className={styles.iconWrapper}>
                                            <Icon size={28} />
                                        </div>
                                        <span className={styles.systemTag}>{platform.tag}</span>
                                    </div>

                                    <h3 className={styles.systemTitle}>{platform.title}</h3>
                                    <p className={styles.systemDescription}>{platform.desc}</p>

                                    <ul className={styles.featuresList}>
                                        {platform.features.map((feat, fIdx) => (
                                            <li key={fIdx} className={styles.featureItem}>
                                                <CheckCircle2 size={18} className={styles.featureIcon} />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className={styles.techBadgesRow}>
                                        {platform.badges.map((badge, bIdx) => (
                                            <span key={bIdx} className={styles.techBadge}>{badge}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION: INTERACTIVE ROLE SHOWCASE */}
            <section className={styles.showcaseSectionWrapper}>
                <div className="container">
                    <motion.div
                        className={styles.showcaseContainer}
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.65 }}
                    >
                        <div className={styles.showcaseHeader}>
                            <div className={styles.showcaseTag}>
                                <Sparkles size={13} />
                                <span>Experiencia Multirol 360°</span>
                            </div>
                            <h3 className={styles.showcaseTitle}>
                                Una Plataforma Diseñada para Cada Integrante de la Comunidad
                            </h3>
                            <p className={styles.showcaseSubtitle}>
                                Selecciona un rol para ver cómo nuestras herramientas simplifican y potencian la vida escolar día a día.
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className={styles.tabsNav} role="tablist" aria-label="Perfiles de usuario en la plataforma">
                            <button
                                type="button"
                                role="tab"
                                id="tab-padres"
                                aria-selected={activeTab === 'padres'}
                                aria-controls="panel-padres"
                                className={`${styles.tabBtn} ${activeTab === 'padres' ? styles.tabBtnActive : ''}`}
                                onClick={() => setActiveTab('padres')}
                            >
                                <Users size={16} />
                                <span>Para Padres de Familia</span>
                            </button>

                            <button
                                type="button"
                                role="tab"
                                id="tab-estudiantes"
                                aria-selected={activeTab === 'estudiantes'}
                                aria-controls="panel-estudiantes"
                                className={`${styles.tabBtn} ${activeTab === 'estudiantes' ? styles.tabBtnActive : ''}`}
                                onClick={() => setActiveTab('estudiantes')}
                            >
                                <GraduationCap size={16} />
                                <span>Para Estudiantes</span>
                            </button>

                            <button
                                type="button"
                                role="tab"
                                id="tab-docentes"
                                aria-selected={activeTab === 'docentes'}
                                aria-controls="panel-docentes"
                                className={`${styles.tabBtn} ${activeTab === 'docentes' ? styles.tabBtnActive : ''}`}
                                onClick={() => setActiveTab('docentes')}
                            >
                                <FileCheck2 size={16} />
                                <span>Para Docentes & Directivos</span>
                            </button>
                        </div>

                        {/* Tab Content */}
                        <motion.div
                            key={activeTab}
                            id={`panel-${activeTab}`}
                            role="tabpanel"
                            aria-labelledby={`tab-${activeTab}`}
                            className={styles.showcaseContent}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className={styles.showcaseDetails}>
                                <span className={styles.roleBadge}>{currentShowcase.role}</span>
                                <h4 className={styles.roleTitle}>{currentShowcase.title}</h4>
                                <p className={styles.roleDesc}>{currentShowcase.desc}</p>

                                <ul className={styles.featureListLarge}>
                                    {currentShowcase.features.map((feat, fIdx) => (
                                        <li key={fIdx} className={styles.featureItemLarge}>
                                            <div className={styles.featureIconWrapper}>
                                                <Check size={16} />
                                            </div>
                                            <div>
                                                <div className={styles.featureTitle}>{feat.title}</div>
                                                <div className={styles.featureText}>{feat.text}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Live Mobile Device Mockup */}
                            <div className={styles.mockupWrapper}>
                                <div className={styles.mockupDevice}>
                                    <div className={styles.mockupTopBar}>
                                        <span>09:41 AM</span>
                                        <div className={styles.mockupCameraDot}></div>
                                        <span>100% ⚡</span>
                                    </div>

                                    <div className={styles.mockupAppHeader}>
                                        <div className={styles.appBrand}>
                                            <div className={styles.appLogoIcon}>
                                                <GraduationCap size={18} />
                                            </div>
                                            <div>
                                                <div className={styles.appBrandName}>Colegio Divino Maestro</div>
                                                <div className={styles.appBrandSub}>Portal Digital Familiar</div>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.18)', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                                            Activo
                                        </span>
                                    </div>

                                    <div className={styles.mockupBody}>
                                        <div className={styles.userCard}>
                                            <div>
                                                <div className={styles.userName}>{currentShowcase.mockup.student}</div>
                                                <div className={styles.userGrade}>{currentShowcase.mockup.grade}</div>
                                            </div>
                                            <div className={styles.statusLivePill}>
                                                <CheckCircle2 size={13} />
                                                <span>Conectado</span>
                                            </div>
                                        </div>

                                        <div className={styles.infoTile}>
                                            <div className={styles.tileHeader}>
                                                <span>Control de Asistencia</span>
                                                <span style={{ color: '#16a34a' }}>En Vivo</span>
                                            </div>
                                            <div className={styles.tileTitle}>{currentShowcase.mockup.attendance}</div>
                                            <div className={styles.tileValue}>Validado mediante credencial inteligente con QR institucional.</div>
                                        </div>

                                        <div className={styles.infoTile}>
                                            <div className={styles.tileHeader}>
                                                <span>Rendimiento Académico</span>
                                                <Calendar size={13} />
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div>
                                                    <div className={styles.tileTitle}>Promedio General</div>
                                                    <div className={styles.tileValue}>Bimestre en Curso</div>
                                                </div>
                                                <div className={styles.gradeScore}>{currentShowcase.mockup.average}</div>
                                            </div>
                                        </div>

                                        <div className={styles.infoTile}>
                                            <div className={styles.tileHeader}>
                                                <span>Próxima Actividad</span>
                                                <span>Agenda</span>
                                            </div>
                                            <div className={styles.tileTitle}>{currentShowcase.mockup.nextActivity}</div>
                                            <div className={styles.tileValue}>{currentShowcase.mockup.nextDate}</div>
                                        </div>

                                        <div className={styles.tileButton}>
                                            <Smartphone size={16} />
                                            <span>Disponible en App Store y Google Play</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION: STEAM, ROBOTICS & INTERACTIVE CLASSROOMS */}
            <section className={styles.steamSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Innovación Pedagógica</span>
                        <h2 className={styles.sectionTitle}>Tecnología dentro del Aula</h2>
                        <p className={styles.sectionSubtitle}>
                            No solo gestionamos digitalmente el colegio, sino que preparamos a tus hijos para interactuar
                            y crear con la tecnología mediante laboratorios modernos y aprendizaje vivencial.
                        </p>
                    </motion.div>

                    <div className={styles.steamGrid}>
                        {STEAM_FEATURES.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className={styles.steamCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                                >
                                    <div className={styles.steamIconWrapper}>
                                        <Icon size={26} />
                                    </div>
                                    <h3 className={styles.steamTitle}>{item.title}</h3>
                                    <p className={styles.steamDesc}>{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION: CYBERSECURITY & DATA PRIVACY */}
            <section className={styles.trustSection}>
                <div className="container">
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.sectionTag}>Seguridad & Privacidad</span>
                        <h2 className={styles.sectionTitle}>Protección de Datos y Confianza</h2>
                        <p className={styles.sectionSubtitle}>
                            La seguridad de los estudiantes y la confidencialidad de la información familiar es nuestra máxima prioridad.
                        </p>
                    </motion.div>

                    <div className={styles.trustGrid}>
                        {TRUST_PILLARS.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    className={styles.trustCard}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                                >
                                    <div className={styles.trustIconWrapper}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className={styles.trustTitle}>{item.title}</h3>
                                    <p className={styles.trustDesc}>{item.desc}</p>
                                </motion.div>
                            );
                        })}
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
                        <h2 className={styles.sectionTitle}>Dudas Frecuentes sobre Tecnología</h2>
                        <p className={styles.sectionSubtitle}>
                            Respuestas claras a las consultas más habituales sobre nuestras plataformas, app y soporte digital.
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

            {/* FINAL CTA BANNER */}
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
                            <span>Admisiones 2027 Abiertas</span>
                        </div>

                        <h2 className={styles.ctaTitle}>
                            Conecta el Futuro de tus Hijos con una Educación de Vanguardia
                        </h2>

                        <p className={styles.ctaDesc}>
                            Sé parte de una comunidad educativa moderna, segura y con sólidos valores.
                            Las vacantes para el año escolar 2027 son limitadas por aula para garantizar una enseñanza personalizada.
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
