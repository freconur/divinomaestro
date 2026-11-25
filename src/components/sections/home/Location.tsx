import styles from './Location.module.css';
import { MapPin, Phone, Mail, Clock, Sparkles, Navigation } from 'lucide-react';
import OpenMapsButton from '@/components/ui/OpenMapsButton';

export default function Location() {

    return (
        <section className={styles.location} id="contacto">
            <div className={styles.wrapper}>
                {/* Section Header */}
                <header className={styles.header}>
                    <div className={styles.badge}>
                        <Sparkles size={14} />
                        <span>Canales y Sede Institucional</span>
                    </div>
                    <h2 className={styles.title}>Ubícanos y Canales de Atención</h2>
                    <p className={styles.description}>
                        Información oficial de contacto, atención de secretaría y localización física de nuestro campus en Pamplona Alta.
                    </p>
                </header>

                <div className={styles.layoutGrid}>
                    {/* LEFT COLUMN: Compact Informative Panel (No WhatsApp, visual email, phone, hours) */}
                    <div className={styles.channelsCol}>
                        <article className={styles.contactPanelCard}>
                            <div className={styles.panelHeader}>
                                <span className={styles.panelBadge}>Secretaría & Mesa de Partes</span>
                                <h3 className={styles.panelTitle}>Atención Institucional</h3>
                                <p className={styles.panelSubtitle}>
                                    Canales oficiales de secretaría para consultas y trámites de padres y postulantes.
                                </p>
                            </div>

                            <div className={styles.compactList}>
                                {/* Item 1: Email (Visual only, no link) */}
                                <div className={styles.compactRow}>
                                    <div className={styles.iconBoxEmail}>
                                        <Mail size={18} />
                                    </div>
                                    <div className={styles.rowContent}>
                                        <div className={styles.rowHeader}>
                                            <span className={styles.rowLabel}>Correo Electrónico</span>
                                            <span className={styles.rowBadge}>Mesa de Partes</span>
                                        </div>
                                        <div className={styles.rowValueBox}>
                                            <span className={styles.rowValue}>informes@divinomaestro.edu.pe</span>
                                        </div>
                                        <span className={styles.rowHint}>Recepción de expedientes de postulantes y trámites documentarios.</span>
                                    </div>
                                </div>

                                <div className={styles.rowDivider}></div>

                                {/* Item 2: Phone (Visual only) */}
                                <div className={styles.compactRow}>
                                    <div className={styles.iconBoxPhone}>
                                        <Phone size={18} />
                                    </div>
                                    <div className={styles.rowContent}>
                                        <div className={styles.rowHeader}>
                                            <span className={styles.rowLabel}>Central Telefónica</span>
                                            <span className={styles.rowBadgeAmber}>Línea Directa</span>
                                        </div>
                                        <div className={styles.rowValueBox}>
                                            <span className={styles.rowValue}>(01) 234-5678 • 987 654 321</span>
                                        </div>
                                        <span className={styles.rowHint}>Atención telefónica directa en secretaría del colegio.</span>
                                    </div>
                                </div>

                                <div className={styles.rowDivider}></div>

                                {/* Item 3: Schedule (Visual only) */}
                                <div className={styles.compactRow}>
                                    <div className={styles.iconBoxClock}>
                                        <Clock size={18} />
                                    </div>
                                    <div className={styles.rowContent}>
                                        <div className={styles.rowHeader}>
                                            <span className={styles.rowLabel}>Horario de Atención</span>
                                            <span className={styles.rowBadgeSlate}>Presencial</span>
                                        </div>
                                        <div className={styles.rowValueBox}>
                                            <span className={styles.rowValue}>Lunes a Viernes: 8:00 AM – 4:30 PM</span>
                                        </div>
                                        <span className={styles.rowHint}>Atención administrativa presencial en el local escolar.</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* RIGHT COLUMN: Physical Campus & Interactive Map */}
                    <div className={styles.mapCol}>
                        <article className={styles.campusCard}>
                            <div className={styles.campusHeader}>
                                <div className={styles.campusIcon}>
                                    <MapPin size={24} />
                                </div>
                                <div className={styles.campusMeta}>
                                    <div className={styles.campusTopBar}>
                                        <span className={styles.campusBadge}>Sede Física Oficial</span>
                                        <span className={styles.campusCity}>Lima • Perú</span>
                                    </div>
                                    <h3 className={styles.campusName}>Colegio Divino Maestro de Pamplona</h3>
                                    <p className={styles.campusAddress}>
                                        Mz. T3 Lote 21, Paseo de la Solidaridad • Pamplona Alta, San Juan de Miraflores
                                    </p>
                                </div>
                            </div>

                            <div className={styles.campusFeaturesBar}>
                                <div className={styles.campusPill}>
                                    <span className={styles.pillDot}></span>
                                    <span>Niveles Inicial, Primaria y Secundaria</span>
                                </div>
                                <div className={styles.campusPill}>
                                    <Navigation size={12} />
                                    <span>Fácil acceso en San Juan de Miraflores</span>
                                </div>
                            </div>

                            <div className={styles.mapContainer}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.0!2d-76.9655498!3d-12.1359793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b91282766217%3A0xcf3d3098bae0857b!2sColegio%20Divino%20Maestro%20de%20Pamplona!5e0!3m2!1ses-419!2spe"
                                    title="Ubicación física del Colegio Divino Maestro de Pamplona en Mz. T3 Lote 21, Paseo de la Solidaridad, San Juan de Miraflores"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className={styles.mapIframe}
                                ></iframe>
                            </div>

                            <footer className={styles.campusFooter}>
                                <div className={styles.visitNotice}>
                                    <p>
                                        <strong>¿Deseas visitar el campus?</strong> Coordinamos visitas guiadas presenciales previa cita para familias postulantes.
                                    </p>
                                </div>
                                <OpenMapsButton className={styles.mapsBtn} />
                            </footer>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
