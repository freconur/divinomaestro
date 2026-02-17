import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>Colegio Divino Maestro</h3>
                        <p>
                            Formando líderes con valores y una educación de excelencia preparada para los retos del futuro desde hace más de 20 años.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4>Enlaces</h4>
                        <ul className={styles.links}>
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="/nosotros">Nosotros</Link></li>
                            <li><Link href="/propuesta-educativa">Propuesta</Link></li>
                            <li><Link href="/admisiones">Admisiones</Link></li>
                            <li><Link href="/blog">Noticias</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Niveles</h4>
                        <ul className={styles.links}>
                            <li><Link href="/propuesta-educativa/inicial">Inicial</Link></li>
                            <li><Link href="/propuesta-educativa/primaria">Primaria</Link></li>
                            <li><Link href="/propuesta-educativa/secundaria">Secundaria</Link></li>
                            <li><Link href="/propuesta-educativa/talleres">Talleres</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Contacto</h4>
                        <div className={styles.contactInfo}>
                            <p><span>📍</span> Av. Principal 123, Ciudad del Saber</p>
                            <p><span>📞</span> (01) 234-5678</p>
                            <p><span>✉️</span> informes@divinomaestro.edu.pe</p>
                            <div className={styles.socials}>
                                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Colegio Divino Maestro. Todos los derechos reservados.</p>
                    <div className={styles.links} style={{ display: 'flex', gap: '2rem' }}>
                        <Link href="/privacidad">Privacidad</Link>
                        <Link href="/terminos">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
