"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bell,
    Award,
    Megaphone,
    CalendarCheck,
    CheckCircle2,
    Clock,
    Sparkles,
    Shield,
    ChevronRight,
    Download,
    FileText,
    Smile,
    QrCode,
    User,
    Check,
    AlertCircle,
    Users,
    X
} from 'lucide-react';
import styles from './IzicoleMockup.module.css';

type ActiveFeature = 'notificaciones' | 'notas' | 'comunicados' | 'asistencias' | 'cuenta';

interface FeatureItem {
    id: ActiveFeature;
    title: string;
    subtitle: string;
    tag: string;
    icon: typeof Bell;
    badge: string;
    description: string;
    highlights: string[];
}

interface StudentData {
    id: string;
    name: string;
    paternalSurname: string;
    maternalSurname: string;
    initials: string;
    level: string;
    levelKey: 'primaria' | 'secundaria' | 'inicial';
    grade: string;
    section: string;
    dni: string;
    code: string;
    status: string;
}

const STUDENTS: StudentData[] = [
    {
        id: 'mateo',
        name: 'Mateo Mendoza Ramos',
        paternalSurname: 'Mendoza',
        maternalSurname: 'Ramos',
        initials: 'MM',
        level: 'Primaria',
        levelKey: 'primaria',
        grade: '5° de Primaria',
        section: 'Sección "A"',
        dni: '74839201',
        code: '2026-PRI-054',
        status: 'Alumno Regular'
    },
    {
        id: 'valeria',
        name: 'Valeria Mendoza Ramos',
        paternalSurname: 'Mendoza',
        maternalSurname: 'Ramos',
        initials: 'VM',
        level: 'Secundaria',
        levelKey: 'secundaria',
        grade: '2° de Secundaria',
        section: 'Sección "B"',
        dni: '71940283',
        code: '2026-SEC-019',
        status: 'Alumna Regular'
    },
    {
        id: 'joaquin',
        name: 'Joaquín Mendoza Ramos',
        paternalSurname: 'Mendoza',
        maternalSurname: 'Ramos',
        initials: 'JM',
        level: 'Inicial',
        levelKey: 'inicial',
        grade: 'Inicial 5 Años',
        section: 'Aula "Estrellitas"',
        dni: '78491029',
        code: '2026-INI-082',
        status: 'Alumno Regular'
    }
];

const ENTRY_NOTIFICATIONS = [
    {
        id: 'entry-mateo',
        name: 'Mateo Mendoza Ramos',
        initials: 'MM',
        levelKey: 'primaria' as const,
        grade: '5° Primaria • Sección "A"',
        time: '07:42 AM',
        status: 'Puntual',
        location: 'Puerta Principal • Credencial QR'
    },
    {
        id: 'entry-valeria',
        name: 'Valeria Mendoza Ramos',
        initials: 'VM',
        levelKey: 'secundaria' as const,
        grade: '2° Secundaria • Sección "B"',
        time: '07:35 AM',
        status: 'Puntual',
        location: 'Molinete 2 • Fotocheck Digital'
    },
    {
        id: 'entry-joaquin',
        name: 'Joaquín Mendoza Ramos',
        initials: 'JM',
        levelKey: 'inicial' as const,
        grade: 'Inicial 5 Años • "Estrellitas"',
        time: '07:50 AM',
        status: 'Puntual',
        location: 'Puerta Inicial • Tópico Verificado'
    }
];

const FEATURES: FeatureItem[] = [
    {
        id: 'notificaciones',
        title: 'Gestión Familiar • Mis Hijos',
        subtitle: 'Todos tus hijos en una sola cuenta institucional',
        tag: 'Familia Divino Maestro',
        icon: Users,
        badge: 'Hasta 3 Hermanos',
        description: 'Visualiza la información de todos tus hijos matriculados en Inicial, Primaria y Secundaria desde un único perfil familiar unificado.',
        highlights: [
            'Hermanos vinculados con apellidos paterno y materno compartidos',
            'Expedientes individuales con DNI, grado, sección y código institucional',
            'Selección rápida de estudiante para consultar sus notas y asistencias'
        ]
    },
    {
        id: 'notas',
        title: 'Matriz de Notas Oficial',
        subtitle: 'Consolidado bimestral en matriz completa',
        tag: 'Currículo CNEB / SIAGIE',
        icon: Award,
        badge: 'Matriz Oficial (AD - A)',
        description: 'Visualiza la matriz completa de calificaciones de todo el año escolar: notas por periodos (I, II, III, IV Bimestre), promedio acumulado y nivel de logro oficial en formato de tabla.',
        highlights: [
            'Matriz comparativa por periodos (I, II, III, IV Bimestre)',
            'Ponderados y nivel de logro CNEB (AD, A, B, C)',
            'Descarga directa del acta/boleta consolidada en PDF'
        ]
    },
    {
        id: 'comunicados',
        title: 'Comunicados Oficiales Directos',
        subtitle: 'Cero papeleo y cero circulares olvidadas',
        tag: 'Canal Oficial',
        icon: Megaphone,
        badge: 'Acuse de Recibo',
        description: 'Todas las circulares de dirección, citaciones de tutoría y roles de exámenes llegan directamente a tu app con confirmación de lectura.',
        highlights: [
            'Etiquetas por prioridad: Urgente, Informativo, Tarea o Evento',
            'Confirmación digital de lectura sin talonarios de papel',
            'Archivos adjuntos, cronogramas y rúbricas disponibles 24/7'
        ]
    },
    {
        id: 'asistencias',
        title: 'Resumen Mensual de Asistencia',
        subtitle: 'Récord histórico y estadísticas de puntualidad',
        tag: 'Métricas Transparentes',
        icon: CalendarCheck,
        badge: 'Récord 96% Puntualidad',
        description: 'Consulta el calendario consolidado del mes, porcentaje de asistencia acumulada, desglose de días puntuales, tardanzas y justificaciones médicas.',
        highlights: [
            'Tasa de puntualidad mensual con barra de avance verificado',
            'Contadores compactos: Puntuales, Tardanzas y Faltas',
            'Detalle de cada jornada con hora de entrada (07:42 AM) y salida'
        ]
    },
    {
        id: 'cuenta',
        title: 'Perfil Familiar y Mi Cuenta',
        subtitle: 'Datos de apoderado, accesos y soporte escolar',
        tag: 'Seguridad y Apoderados',
        icon: User,
        badge: 'Acceso Seguro 24/7',
        description: 'Administra tus datos como apoderado titular, credenciales de acceso institucional para el ingreso de tus hijos y canales directos de atención y soporte escolar.',
        highlights: [
            'Perfil del apoderado titular con datos de contacto verificados',
            'Gestión de credenciales QR y servicios digitales sincronizados',
            'Canal de atención directa con secretaría y soporte técnico escolar'
        ]
    }
];

const TAB_ORDER: ActiveFeature[] = ['notificaciones', 'notas', 'comunicados', 'asistencias', 'cuenta'];

export default function IzicoleMockup() {
    const [activeTab, setActiveTab] = useState<ActiveFeature>('notificaciones');
    const [selectedStudent, setSelectedStudent] = useState(0);
    const [showNotifModal, setShowNotifModal] = useState(false);
    const [comunicadoLeido, setComunicadoLeido] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const handleTabClick = (tab: ActiveFeature) => {
        setIsAutoPlaying(false);
        setActiveTab(tab);
    };

    // Auto-transición cada 5 segundos hasta que el usuario interactúa manualmente
    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setActiveTab((prevTab) => {
                const currentIndex = TAB_ORDER.indexOf(prevTab);
                const nextIndex = (currentIndex + 1) % TAB_ORDER.length;
                return TAB_ORDER[nextIndex];
            });
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const currentStudent = STUDENTS[selectedStudent];

    return (
        <div className={styles.showcaseWrapper}>
            <div className={styles.showcaseGrid}>
                {/* COLUMNA IZQUIERDA: Selector interactivo de funcionalidades */}
                <div className={styles.featureSelectorCol}>
                    <div className={styles.selectorIntro}>
                        <div className={styles.pillLabel}>
                            <Sparkles size={14} />
                            <span>La escuela en tus manos</span>
                        </div>
                        <h3 className={styles.selectorTitle}>
                            Diseñada para resolver lo que más importa a los padres de familia
                        </h3>
                        <p className={styles.selectorSubtitle}>
                            Explora cómo <strong style={{ color: 'var(--primary)' }}>izicole</strong> conecta a las familias del Colegio Divino Maestro con la vida escolar diaria en tiempo real:
                        </p>
                    </div>

                    <div className={styles.featureList} role="tablist" aria-label="Funcionalidades destacadas de la aplicación">
                        {FEATURES.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    className={`${styles.featureItemBtn} ${isActive ? styles.featureItemActive : ''}`}
                                    onClick={() => handleTabClick(item.id)}
                                >
                                    <div className={styles.featureIconContainer}>
                                        <Icon size={20} />
                                    </div>
                                    <div className={styles.featureTextContainer}>
                                        <div className={styles.featureItemHeader}>
                                            <span className={styles.featureItemTitle}>{item.title}</span>
                                            <span className={styles.featureItemTag}>{item.badge}</span>
                                        </div>
                                        <p className={styles.featureItemDesc}>{item.subtitle}</p>
                                    </div>
                                    <ChevronRight
                                        size={18}
                                        className={`${styles.featureArrow} ${isActive ? styles.featureArrowActive : ''}`}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* COLUMNA DERECHA: Smartphone Mockup con izicole UI */}
                <div className={styles.deviceShowcaseCol}>
                    {/* SMARTPHONE FRAME */}
                    <div className={styles.phoneFrame}>
                        {/* Speaker & Dynamic Notch */}
                        <div className={styles.phoneSpeaker}></div>
                        <div className={styles.phoneCameraDot}></div>

                        {/* Top System Status Bar */}
                        <div className={styles.phoneStatusBar}>
                            <span className={styles.statusTime}>09:41 AM</span>
                            <div className={styles.statusIcons}>
                                <span className={styles.networkIndicator}>5G</span>
                                <div className={styles.wifiBar}></div>
                                <span className={styles.batteryPill}>100% ⚡</span>
                            </div>
                        </div>

                        {/* izicole App Header */}
                        <div className={styles.appHeader}>
                            <div className={styles.appHeaderLeft}>
                                <div className={styles.appIconContainer}>
                                    <Image
                                        src="/izicole_icon.png"
                                        alt="izicole"
                                        width={24}
                                        height={24}
                                        className={styles.appLogoCircle}
                                    />
                                </div>
                                <div>
                                    <div className={styles.appTitleRow}>
                                        <span className={styles.appHeaderName}>izicole</span>
                                        <span className={styles.appOnlineTag}>En Vivo</span>
                                    </div>
                                    <div className={styles.appHeaderSub}>Colegio Divino Maestro</div>
                                </div>
                            </div>
                            <div className={styles.appHeaderRight}>
                                <button
                                    type="button"
                                    className={styles.bellBtn}
                                    onClick={() => setShowNotifModal(prev => !prev)}
                                    aria-label="Abrir centro de notificaciones"
                                    title="Notificaciones de ingreso y comunicados"
                                >
                                    <Bell size={15} />
                                    <span className={styles.bellDot}></span>
                                </button>
                            </div>
                        </div>

                        {/* Student Switcher / Info Strip (Shown for student tabs, hidden on Father's Account) */}
                        {activeTab !== 'cuenta' && (
                            <div className={styles.studentStrip}>
                                <div className={`${styles.studentAvatar} ${styles['avatar_' + currentStudent.levelKey]}`}>
                                    {currentStudent.initials}
                                </div>
                                <div className={styles.studentMeta}>
                                    <span className={styles.studentName}>{currentStudent.name}</span>
                                    <span className={styles.studentGrade}>{currentStudent.grade} • {currentStudent.section}</span>
                                </div>
                                <div className={styles.dniChip}>DNI: {currentStudent.dni}</div>
                            </div>
                        )}

                        {/* SCREEN CONTENT AREA (Changes dynamically based on active tab) */}
                        <div className={styles.screenScrollArea}>
                            <AnimatePresence mode="wait">
                                {activeTab === 'notificaciones' && (
                                    <motion.div
                                        key="notificaciones"
                                        className={styles.screenBody}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.28 }}
                                    >
                                        <div className={styles.screenSectionTitle}>
                                            <Smile size={14} className={styles.sectionIcon} />
                                            <span>Estudiantes Vinculados (3 Hijos)</span>
                                        </div>

                                        <div className={styles.studentsList}>
                                            {STUDENTS.map((student, idx) => {
                                                const isSelected = selectedStudent === idx;
                                                return (
                                                    <div
                                                        key={student.id}
                                                        className={`${styles.studentCardItem} ${isSelected ? styles.studentCardSelected : ''}`}
                                                        onClick={() => setSelectedStudent(idx)}
                                                        role="button"
                                                        tabIndex={0}
                                                        aria-label={`Seleccionar estudiante ${student.name}`}
                                                    >
                                                        <div className={styles.studentCardTop}>
                                                            <div className={`${styles.studentCardAvatar} ${styles['avatar_' + student.levelKey]}`}>
                                                                {student.initials}
                                                            </div>
                                                            <div className={styles.studentCardMain}>
                                                                <div className={styles.studentCardNameRow}>
                                                                    <span className={styles.studentCardName}>{student.name}</span>
                                                                    <span className={`${styles.levelBadge} ${styles['levelBadge_' + student.levelKey]}`}>
                                                                        {student.level}
                                                                    </span>
                                                                </div>
                                                                <div className={styles.studentCardGrade}>
                                                                    {student.grade} • {student.section}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={styles.studentCardDetails}>
                                                            <div className={styles.studentCardDetailItem}>
                                                                <span className={styles.detailItemLabel}>DNI</span>
                                                                <span className={styles.detailItemValue}>{student.dni}</span>
                                                            </div>
                                                            <div className={styles.studentCardDetailItem}>
                                                                <span className={styles.detailItemLabel}>Código</span>
                                                                <span className={styles.detailItemValue}>{student.code}</span>
                                                            </div>
                                                            <div className={styles.studentCardDetailItem}>
                                                                <span className={styles.detailItemLabel}>Condición</span>
                                                                <span className={styles.detailItemStatus}>{student.status}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className={styles.familyInfoBox}>
                                            <Shield size={14} className={styles.familyShieldIcon} />
                                            <span>
                                                Familia <strong>Mendoza Ramos</strong> • 3 hermanos matriculados en Inicial, Primaria y Secundaria
                                            </span>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'notas' && (
                                    <motion.div
                                        key="notas"
                                        className={styles.screenBody}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.28 }}
                                    >
                                        <div className={styles.matrixScreenHeader}>
                                            <div className={styles.screenSectionTitle}>
                                                <Award size={14} className={styles.sectionIcon} />
                                                <span>Matriz Consolidada de Notas</span>
                                            </div>
                                            <span className={styles.siagieBadge}>SIAGIE 2026</span>
                                        </div>

                                        {/* Academic Honor Summary Bar */}
                                        <div className={styles.matrixSummaryCard}>
                                            <div className={styles.matrixSummaryLeft}>
                                                <span className={styles.matrixSummaryLabel}>NIVEL DE LOGRO GENERAL</span>
                                                <div className={styles.matrixScoreRow}>
                                                    <span className={styles.matrixGradeBig}>AD</span>
                                                    <span className={styles.matrixScoreNum}>(18.6 / 20)</span>
                                                </div>
                                            </div>
                                            <div className={styles.honorBadge}>
                                                <Sparkles size={12} />
                                                <span>Cuadro de Honor</span>
                                            </div>
                                        </div>

                                        {/* LA MATRIZ DE NOTAS (TABLA CONSOLIDADA) */}
                                        <div className={styles.matrixContainer}>
                                            <table className={styles.matrixTable}>
                                                <thead>
                                                    <tr>
                                                        <th className={styles.thCourse}>ÁREA / CURSO</th>
                                                        <th className={styles.thPeriod}>I B</th>
                                                        <th className={`${styles.thPeriod} ${styles.thPeriodActive}`}>
                                                            II B
                                                            <span className={styles.activePeriodDot} title="Bimestre Actual"></span>
                                                        </th>
                                                        <th className={styles.thPeriod}>III B</th>
                                                        <th className={styles.thPeriod}>IV B</th>
                                                        <th className={styles.thProm}>PROM</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className={styles.tdCourse}>Matemática</td>
                                                        <td className={styles.tdScore}>AD</td>
                                                        <td className={`${styles.tdScore} ${styles.cellActive}`}>AD</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdProm}><span className={styles.badgeAD}>AD</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className={styles.tdCourse}>Comunicación</td>
                                                        <td className={styles.tdScore}>A</td>
                                                        <td className={`${styles.tdScore} ${styles.cellActive}`}>AD</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdProm}><span className={styles.badgeAD}>AD</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className={styles.tdCourse}>Ciencia y Tec.</td>
                                                        <td className={styles.tdScore}>A</td>
                                                        <td className={`${styles.tdScore} ${styles.cellActive}`}>A</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdProm}><span className={styles.badgeA}>A</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className={styles.tdCourse}>Personal Social</td>
                                                        <td className={styles.tdScore}>AD</td>
                                                        <td className={`${styles.tdScore} ${styles.cellActive}`}>AD</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdProm}><span className={styles.badgeAD}>AD</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className={styles.tdCourse}>Inglés Británico</td>
                                                        <td className={styles.tdScore}>AD</td>
                                                        <td className={`${styles.tdScore} ${styles.cellActive}`}>AD</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdProm}><span className={styles.badgeAD}>AD</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className={styles.tdCourse}>Arte y Cultura</td>
                                                        <td className={styles.tdScore}>A</td>
                                                        <td className={`${styles.tdScore} ${styles.cellActive}`}>AD</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdProm}><span className={styles.badgeAD}>AD</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className={styles.tdCourse}>Educación Física</td>
                                                        <td className={styles.tdScore}>AD</td>
                                                        <td className={`${styles.tdScore} ${styles.cellActive}`}>AD</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdProm}><span className={styles.badgeAD}>AD</span></td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr className={styles.trTotal}>
                                                        <td className={styles.tdCourseTotal}>PROM. BIMESTRAL</td>
                                                        <td className={styles.tdTotalNum}>A</td>
                                                        <td className={`${styles.tdTotalNum} ${styles.cellActive}`}>AD</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdMuted}>--</td>
                                                        <td className={styles.tdTotalFinal}>
                                                            <span className={styles.badgeFinal}>AD</span>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>

                                        {/* Leyenda Escala CNEB / MINEDU */}
                                        <div className={styles.matrixLegend}>
                                            <span className={styles.legendItem}>
                                                <span className={`${styles.legendDot} ${styles.dotAD}`}></span>
                                                <strong>AD:</strong> Destacado (18-20)
                                            </span>
                                            <span className={styles.legendItem}>
                                                <span className={`${styles.legendDot} ${styles.dotA}`}></span>
                                                <strong>A:</strong> Esperado (14-17)
                                            </span>
                                        </div>

                                        {/* Download PDF Button */}
                                        <div className={styles.pdfDownloadBtn}>
                                            <Download size={13} />
                                            <span>Descargar Matriz Oficial (PDF con QR)</span>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'comunicados' && (
                                    <motion.div
                                        key="comunicados"
                                        className={styles.screenBody}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.28 }}
                                    >
                                        <div className={styles.screenSectionTitle}>
                                            <Megaphone size={14} className={styles.sectionIcon} />
                                            <span>Cuaderno y Comunicados Oficiales</span>
                                        </div>

                                        {/* Filter Chips */}
                                        <div className={styles.filterChipRow}>
                                            <span className={`${styles.filterChip} ${styles.filterChipActive}`}>Todo</span>
                                            <span className={styles.filterChip}>Urgentes (1)</span>
                                            <span className={styles.filterChip}>Tareas (2)</span>
                                            <span className={styles.filterChip}>Eventos</span>
                                        </div>

                                        {/* Comunicado 1: Urgente / Evaluaciones */}
                                        <div className={styles.comunicadoCard}>
                                            <div className={styles.comunicadoTop}>
                                                <div className={styles.badgeRow}>
                                                    <span className={styles.tagUrgente}>Urgente</span>
                                                    <span className={styles.tagColegio}>Dirección Académica</span>
                                                </div>
                                                <span className={styles.comunicadoDate}>Hoy 08:30 AM</span>
                                            </div>
                                            <div className={styles.comunicadoTitle}>
                                                Rol Oficial de Evaluaciones del II Bimestre
                                            </div>
                                            <div className={styles.comunicadoSnippet}>
                                                Estimados padres: Compartimos el calendario de evaluaciones y rúbricas finales de primaria.
                                            </div>
                                            <div className={styles.comunicadoFooter}>
                                                <div className={styles.attachment}>
                                                    <FileText size={12} />
                                                    <span>cronograma_evaluaciones.pdf</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    className={`${styles.readConfirmBtn} ${comunicadoLeido ? styles.readConfirmed : ''}`}
                                                    onClick={() => setComunicadoLeido(!comunicadoLeido)}
                                                >
                                                    {comunicadoLeido ? (
                                                        <>
                                                            <Check size={12} />
                                                            <span>Lectura Confirmada</span>
                                                        </>
                                                    ) : (
                                                        <span>Confirmar Lectura</span>
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Comunicado 2: Tarea / Proyecto STEAM */}
                                        <div className={styles.comunicadoCard}>
                                            <div className={styles.comunicadoTop}>
                                                <div className={styles.badgeRow}>
                                                    <span className={styles.tagTarea}>Tarea</span>
                                                    <span className={styles.tagHijo}>Para: Mateo (5° A)</span>
                                                </div>
                                                <span className={styles.comunicadoDate}>Ayer</span>
                                            </div>
                                            <div className={styles.comunicadoTitle}>
                                                Proyecto STEAM: Maqueta de Energías Limpias
                                            </div>
                                            <div className={styles.comunicadoSnippet}>
                                                Entrega de prototipo funcional y cuaderno de campo para la Feria de Ciencias.
                                            </div>
                                            <div className={styles.dueDateBadge}>
                                                <Clock size={12} />
                                                <span>Vence: Este Viernes 11:59 PM</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'asistencias' && (
                                    <motion.div
                                        key="asistencias"
                                        className={styles.screenBody}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.28 }}
                                    >
                                        <div className={styles.screenSectionTitle}>
                                            <CalendarCheck size={14} className={styles.sectionIcon} />
                                            <span>Resumen Mensual de Asistencia</span>
                                        </div>

                                        <div className={styles.monthHeaderRow}>
                                            <span className={styles.monthLabel}>Noviembre 2026</span>
                                            <span className={styles.verifiedRecordBadge}>
                                                <CheckCircle2 size={12} />
                                                <span>Récord Oficial</span>
                                            </span>
                                        </div>

                                        {/* izicole Compact Attendance Stats Block */}
                                        <div className={styles.attendanceStatsBlock}>
                                            {/* Tasa de Puntualidad */}
                                            <div className={styles.rateBlock}>
                                                <div className={styles.rateHeader}>PUNTUALIDAD</div>
                                                <div className={styles.rateValueRow}>
                                                    <span className={styles.rateNumber}>96%</span>
                                                    <CheckCircle2 size={15} color="#16a34a" />
                                                </div>
                                                <div className={styles.rateProgressTrack}>
                                                    <div className={styles.rateProgressFill} style={{ width: '96%' }}></div>
                                                </div>
                                                <div className={styles.rateDays}>21 días reg.</div>
                                            </div>

                                            <div className={styles.statDivider}></div>

                                            {/* 3 Contadores Compactos (izicole exact palette) */}
                                            <div className={styles.statCellsRow}>
                                                <div className={`${styles.statCell} ${styles.statPuntual}`}>
                                                    <CheckCircle2 size={13} color="#16a34a" />
                                                    <span className={styles.statNum}>20</span>
                                                    <span className={styles.statTag}>Puntual</span>
                                                </div>
                                                <div className={`${styles.statCell} ${styles.statTardanza}`}>
                                                    <Clock size={13} color="#d97706" />
                                                    <span className={styles.statNum}>1</span>
                                                    <span className={styles.statTag}>Tardanza</span>
                                                </div>
                                                <div className={`${styles.statCell} ${styles.statFalta}`}>
                                                    <AlertCircle size={13} color="#dc2626" />
                                                    <span className={styles.statNum}>0</span>
                                                    <span className={styles.statTag}>Falta</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* izicole AttendanceTimeline: Detalle del Día */}
                                        <div className={styles.timelineCard}>
                                            <div className={styles.timelineHeader}>
                                                <div className={styles.statusPillPuntual}>
                                                    <CheckCircle2 size={12} color="#16a34a" />
                                                    <span>Puntual (Día 21)</span>
                                                </div>
                                                <span className={styles.timelineDayTag}>Jornada de Hoy</span>
                                            </div>

                                            <div className={styles.timesRow}>
                                                <div className={styles.timeCol}>
                                                    <div className={styles.timeLabel}>ENTRADA</div>
                                                    <div className={styles.timeValueIn}>07:42 AM</div>
                                                    <div className={styles.timeSub}>Puerta 1 • QR OK</div>
                                                </div>
                                                <div className={styles.timeDivider}></div>
                                                <div className={styles.timeCol}>
                                                    <div className={styles.timeLabel}>SALIDA</div>
                                                    <div className={styles.timeValueOut}>02:15 PM</div>
                                                    <div className={styles.timeSub}>Retiro Regular</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.attendanceTip}>
                                            <span>💡 Justificaciones médicas o permisos familiares se gestionan en 1 clic desde esta pantalla.</span>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'cuenta' && (
                                    <motion.div
                                        key="cuenta"
                                        className={styles.screenBody}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.28 }}
                                    >
                                        <div className={styles.screenSectionTitle}>
                                            <User size={14} className={styles.sectionIcon} />
                                            <span>Perfil del Apoderado Titular</span>
                                        </div>

                                        {/* Parent Profile Card */}
                                        <div className={styles.parentProfileCard}>
                                            <div className={styles.parentProfileTop}>
                                                <div className={styles.parentAvatar}>RM</div>
                                                <div className={styles.parentInfo}>
                                                    <div className={styles.parentNameRow}>
                                                        <span className={styles.parentName}>Ing. Roberto Mendoza Vargas</span>
                                                        <span className={styles.parentBadge}>Apoderado</span>
                                                    </div>
                                                    <span className={styles.parentDni}>DNI: 09483921 • Vínculo: Padre</span>
                                                </div>
                                            </div>

                                            <div className={styles.parentContactList}>
                                                <div className={styles.parentContactItem}>
                                                    <span className={styles.contactLabel}>Correo:</span>
                                                    <span className={styles.contactValue}>r.mendoza@padres.divinomaestro.edu.pe</span>
                                                </div>
                                                <div className={styles.parentContactItem}>
                                                    <span className={styles.contactLabel}>Celular:</span>
                                                    <span className={styles.contactValue}>+51 987 654 321</span>
                                                </div>
                                                <div className={styles.parentContactItem}>
                                                    <span className={styles.contactLabel}>Hijos a Cargo:</span>
                                                    <span className={styles.contactValue}>3 Estudiantes (Mateo, Valeria, Joaquín)</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Account Services & Security */}
                                        <div className={styles.accountSettingsGroup}>
                                            <div className={styles.settingsGroupTitle}>SERVICIOS DIGITALES ACTIVOS</div>
                                            <div className={styles.settingsList}>
                                                <div className={styles.settingsItem}>
                                                    <div className={styles.settingsItemLeft}>
                                                        <CheckCircle2 size={15} className={styles.settingsCheckIcon} />
                                                        <div>
                                                            <span className={styles.settingsItemTitle}>Credencial Digital Familiar</span>
                                                            <span className={styles.settingsItemSub}>Código QR de acceso habilitado</span>
                                                        </div>
                                                    </div>
                                                    <span className={styles.activePill}>Activo</span>
                                                </div>

                                                <div className={styles.settingsItem}>
                                                    <div className={styles.settingsItemLeft}>
                                                        <CheckCircle2 size={15} className={styles.settingsCheckIcon} />
                                                        <div>
                                                            <span className={styles.settingsItemTitle}>Notificaciones Push</span>
                                                            <span className={styles.settingsItemSub}>Alertas inmediatas de ingreso</span>
                                                        </div>
                                                    </div>
                                                    <span className={styles.activePill}>Activo</span>
                                                </div>

                                                <div className={styles.settingsItem}>
                                                    <div className={styles.settingsItemLeft}>
                                                        <Shield size={15} className={styles.settingsCheckIcon} />
                                                        <div>
                                                            <span className={styles.settingsItemTitle}>Google Workspace Educativo</span>
                                                            <span className={styles.settingsItemSub}>Cuentas @divinomaestro.edu.pe</span>
                                                        </div>
                                                    </div>
                                                    <span className={styles.activePill}>Vinculado</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Support & Quick Contact */}
                                        <div className={styles.supportHelpBox}>
                                            <div className={styles.supportTitle}>
                                                <Sparkles size={14} className={styles.supportIcon} />
                                                <span>Mesa de Ayuda y Soporte Escolar</span>
                                            </div>
                                            <p className={styles.supportDesc}>
                                                ¿Consultas sobre la app o trámites de secretaría? Atención de Lunes a Viernes de 8:00 AM a 4:30 PM.
                                            </p>
                                            <div className={styles.supportBtnRow}>
                                                <span className={styles.supportPillBtn}>📞 Central: (01) 485-2391</span>
                                                <span className={styles.supportPillBtn}>💬 Soporte WhatsApp</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* izicole Bottom Tab Bar */}
                        <div className={styles.appBottomNav}>
                            <button
                                type="button"
                                className={`${styles.navTab} ${activeTab === 'notificaciones' ? styles.navTabActive : ''}`}
                                onClick={() => handleTabClick('notificaciones')}
                            >
                                <Smile size={19} />
                                <span>Mis Hijos</span>
                            </button>

                            <button
                                type="button"
                                className={`${styles.navTab} ${activeTab === 'notas' ? styles.navTabActive : ''}`}
                                onClick={() => handleTabClick('notas')}
                            >
                                <Award size={19} />
                                <span>Notas</span>
                            </button>

                            <button
                                type="button"
                                className={`${styles.navTab} ${activeTab === 'comunicados' ? styles.navTabActive : ''}`}
                                onClick={() => handleTabClick('comunicados')}
                            >
                                <div className={styles.navIconWithBadge}>
                                    <Megaphone size={19} />
                                    <span className={styles.navBadge}>2</span>
                                </div>
                                <span>Avisos</span>
                            </button>

                            <button
                                type="button"
                                className={`${styles.navTab} ${activeTab === 'asistencias' ? styles.navTabActive : ''}`}
                                onClick={() => handleTabClick('asistencias')}
                            >
                                <QrCode size={19} />
                                <span>Asistencia</span>
                            </button>

                            <button
                                type="button"
                                className={`${styles.navTab} ${activeTab === 'cuenta' ? styles.navTabActive : ''}`}
                                onClick={() => handleTabClick('cuenta')}
                            >
                                <User size={19} />
                                <span>Cuenta</span>
                            </button>
                        </div>

                        {/* Centro de Notificaciones (Ingreso de hijos y Comunicado) */}
                        <AnimatePresence>
                            {showNotifModal && (
                                <motion.div
                                    className={styles.notifOverlay}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => setShowNotifModal(false)}
                                >
                                    <motion.div
                                        className={styles.notifModalCard}
                                        initial={{ y: 60, opacity: 0, scale: 0.95 }}
                                        animate={{ y: 0, opacity: 1, scale: 1 }}
                                        exit={{ y: 40, opacity: 0, scale: 0.95 }}
                                        transition={{ type: "spring", damping: 26, stiffness: 340 }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className={styles.notifDragHandle}></div>

                                        <div className={styles.notifModalHeader}>
                                            <div className={styles.notifModalTitleRow}>
                                                <div className={styles.notifBellIconCircle}>
                                                    <Bell size={15} />
                                                </div>
                                                <div>
                                                    <div className={styles.notifModalTitle}>Notificaciones</div>
                                                    <div className={styles.notifModalSubtitle}>3 Ingresos • 1 Comunicado</div>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                className={styles.notifCloseBtn}
                                                onClick={() => setShowNotifModal(false)}
                                                aria-label="Cerrar notificaciones"
                                            >
                                                <X size={15} />
                                            </button>
                                        </div>

                                        <div className={styles.notifModalBody}>
                                            <div className={styles.notifSectionHeader}>
                                                <span>Control de Ingreso (Hijos)</span>
                                                <span className={styles.notifLiveBadge}>
                                                    <span className={styles.notifPulseDot}></span>
                                                    <span>En Vivo</span>
                                                </span>
                                            </div>

                                            <div className={styles.notifChildrenList}>
                                                {ENTRY_NOTIFICATIONS.map((entry) => (
                                                    <div key={entry.id} className={styles.notifChildCard}>
                                                        <div className={`${styles.notifChildAvatar} ${styles['avatar_' + entry.levelKey]}`}>
                                                            {entry.initials}
                                                        </div>
                                                        <div className={styles.notifChildInfo}>
                                                            <div className={styles.notifChildNameRow}>
                                                                <span className={styles.notifChildName}>{entry.name}</span>
                                                                <span className={styles.notifChildTime}>{entry.time}</span>
                                                            </div>
                                                            <div className={styles.notifChildMetaRow}>
                                                                <span className={styles.notifChildGrade}>{entry.grade}</span>
                                                                <span className={styles.notifChildStatus}>{entry.status}</span>
                                                            </div>
                                                            <div className={styles.notifChildLocation}>{entry.location}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className={styles.notifSectionHeader}>
                                                <span>Comunicado Institucional</span>
                                            </div>

                                            <div
                                                className={styles.notifOfficialCard}
                                                onClick={() => {
                                                    handleTabClick('comunicados');
                                                    setShowNotifModal(false);
                                                }}
                                                role="button"
                                                tabIndex={0}
                                                title="Toca para ir al Cuaderno de Avisos"
                                            >
                                                <div className={styles.notifOfficialHeader}>
                                                    <span className={styles.notifOfficialTag}>URGENTE</span>
                                                    <span className={styles.notifOfficialTime}>Hoy 08:30 AM</span>
                                                </div>
                                                <div className={styles.notifOfficialTitle}>
                                                    Rol Oficial de Evaluaciones del II Bimestre
                                                </div>
                                                <div className={styles.notifOfficialSnippet}>
                                                    Dirección Académica: Se ha publicado el calendario oficial de evaluaciones finales y rúbricas.
                                                </div>
                                                <div className={styles.notifOfficialAction}>
                                                    <Megaphone size={13} />
                                                    <span>Toca para abrir en Avisos y confirmar lectura</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.notifModalFooter}>
                                            <button
                                                type="button"
                                                className={styles.notifDismissBtn}
                                                onClick={() => setShowNotifModal(false)}
                                            >
                                                Cerrar Notificaciones
                                            </button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
