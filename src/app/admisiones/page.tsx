import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from './admisiones.module.css';
import Image from 'next/image';

export default function AdmisionesPage() {
    return (
        <main>
            <Header />

            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image src="/admisiones_hero_bg.png" alt="Admisiones" fill priority />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className={styles.title}>Proceso de Admisión 2026</h1>
                    <p className={styles.description}>Únete a nuestra familia educativa y asegura el futuro de tus hijos.</p>
                </div>
            </section>

            <div className="container">
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Pasos para Postular</h2>
                    <div className={styles.stepsGrid}>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>1</div>
                            <h3 className={styles.stepTitle}>Solicitud de Información</h3>
                            <p className={styles.stepText}>Completa el formulario de contacto o visítanos para conocer más sobre nuestra propuesta.</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>2</div>
                            <h3 className={styles.stepTitle}>Charla Informativa</h3>
                            <p className={styles.stepText}>Participa en nuestras sesiones informativas virtuales o presenciales con la dirección escolar.</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>3</div>
                            <h3 className={styles.stepTitle}>Evaluación y Entrevista</h3>
                            <p className={styles.stepText}>Programamos una evaluación diagnóstica para el estudiante y una entrevista con los padres.</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>4</div>
                            <h3 className={styles.stepTitle}>Resultados y Reserva</h3>
                            <p className={styles.stepText}>Tras la admisión, se procede con el pago de la cuota de ingreso y reserva de vacante.</p>
                        </div>
                    </div>

                    <div className={styles.formSection}>
                        <div className={styles.formHeader}>
                            <h2>Inicia el proceso hoy</h2>
                            <p style={{ color: 'var(--slate-500)', fontSize: '1.1rem' }}>
                                Completa los datos y un asesor se pondrá en contacto contigo para programar una visita.
                            </p>
                        </div>
                        <form>
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label>Nombre del Padre/Madre</label>
                                    <input type="text" placeholder="Ej. Juan Pérez" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Correo Electrónico</label>
                                    <input type="email" placeholder="juan@ejemplo.com" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>WhatsApp / Teléfono</label>
                                    <input type="tel" placeholder="987 654 321" />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Grado de interés</label>
                                    <select>
                                        <option>Inicial - 3 años</option>
                                        <option>Inicial - 4 años</option>
                                        <option>Inicial - 5 años</option>
                                        <option>Primaria - 1ero</option>
                                        {/* ... otros grados */}
                                    </select>
                                </div>
                                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                    <label>Mensaje adicional</label>
                                    <textarea rows={4} placeholder="Cuéntanos un poco sobre tu hijo/a..."></textarea>
                                </div>
                                <div className={styles.fullWidth}>
                                    <button type="button" className="btn-primary" style={{ width: '100%', padding: '1.2rem' }}>
                                        Enviar Solicitud de Información
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
