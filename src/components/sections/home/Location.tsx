import styles from './Location.module.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
    return (
        <section className={styles.location} id="contacto">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.subtitle}>Encuéntranos</span>
                    <h2 className={styles.title}>Ubicación y Contacto</h2>
                </div>

                <div className={styles.container}>
                    <div className={styles.infoCard}>
                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <MapPin size={24} />
                            </div>
                            <div className={styles.itemText}>
                                <h4>Dirección</h4>
                                <p>Calle Las Flores 123, San Juan de Lurigancho, Lima</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <Phone size={24} />
                            </div>
                            <div className={styles.itemText}>
                                <h4>Teléfono</h4>
                                <p>(01) 456-7890 / 987 654 321</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <Mail size={24} />
                            </div>
                            <div className={styles.itemText}>
                                <h4>Correo Electrónico</h4>
                                <p>informes@divinomaestro.edu.pe</p>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconWrapper}>
                                <Clock size={24} />
                            </div>
                            <div className={styles.itemText}>
                                <h4>Horario de Atención</h4>
                                <p>Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.432616428751!2d-77.0146059!3d-11.9840251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c56df9c74f57%3A0xa9457f9c264c76b1!2sSan%20Juan%20de%20Lurigancho!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
