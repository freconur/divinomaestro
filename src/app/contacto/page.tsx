import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from './contacto.module.css';
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactoPage() {
    return (
        <main>
            <Header />

            {/* Premium Hero Section */}
            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/contact_hero_bg.png"
                        alt="Contacto - Colegio Divino Maestro"
                        fill
                        priority
                    />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className={styles.title}>Estamos para Ayudarte</h1>
                    <p className={styles.description}>
                        Resuelve tus dudas y conoce más sobre nuestra comunidad educativa.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.contactInfoCard}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--primary-dark)' }}>
                                Canales de Atención
                            </h2>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <MapPin size={24} />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Nuestra Sede</h3>
                                    <p>Av. Principal 123, Urb. San Isidro, Lima</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Phone size={24} />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Llámanos</h3>
                                    <p>(01) 234-5678<br />+51 987 654 321</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Mail size={24} />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Escríbenos</h3>
                                    <p>informes@divinomaestro.edu.pe</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <Clock size={24} />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Horario Administrativo</h3>
                                    <p>Lunes a Viernes<br />8:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Solicita Información</h2>
                            <p style={{ color: 'var(--slate-500)', marginBottom: '2.5rem' }}>
                                Completa el formulario y un asesor se comunicará contigo a la brevedad.
                            </p>

                            <form>
                                <div className={styles.formGrid}>
                                    <div className={styles.inputGroup}>
                                        <label>Nombre del Padre/Madre</label>
                                        <input type="text" placeholder="Ej. Juan Pérez" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Correo de Contacto</label>
                                        <input type="email" placeholder="usuario@ejemplo.com" />
                                    </div>
                                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                        <label>Interés Académico</label>
                                        <input type="text" placeholder="Ej. Vacantes para Primaria 2027" />
                                    </div>
                                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                        <label>Tu Consulta</label>
                                        <textarea rows={5} placeholder="Cuéntanos en qué podemos ayudarte..."></textarea>
                                    </div>
                                    <div className={styles.fullWidth}>
                                        <button type="button" className="btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}>
                                            Enviar Solicitud
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* <div className={styles.map}>
                        <div style={{ textAlign: 'center' }}>
                            <MapPin size={48} style={{ marginBottom: '1rem', opacity: 0.3 }} />
                            <p>Mapa Interactivo de Ubicación</p>
                        </div>
                    </div> */}
                </div>
            </section>

            <Footer />
        </main>
    );
}
