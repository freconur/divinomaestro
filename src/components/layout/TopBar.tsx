"use client";

import { Facebook, Instagram, Linkedin, Phone, Mail, Clock } from 'lucide-react';
import styles from './TopBar.module.css';

interface TopBarProps {
    isScrolled?: boolean;
}

export default function TopBar({ isScrolled = false }: TopBarProps) {
    return (
        <div className={`${styles.topBar} ${isScrolled ? styles.hidden : ''}`}>
            <div className={styles.container}>
                {/* Contact items */}
                <div className={styles.contactInfo}>
                    <a href="tel:+5112345678" className={styles.infoLink} title="Llamar a recepción">
                        <Phone size={12} className={styles.icon} />
                        <span>(01) 234-5678</span>
                    </a>
                    <span className={`${styles.divider} ${styles.hideOnMobile}`}>•</span>
                    <a href="mailto:informes@divinomaestro.edu.pe" className={`${styles.infoLink} ${styles.hideOnMobile}`} title="Enviar correo">
                        <Mail size={12} className={styles.icon} />
                        <span>informes@divinomaestro.edu.pe</span>
                    </a>
                    <span className={`${styles.divider} ${styles.hideOnTablet}`}>•</span>
                    <div className={`${styles.infoItem} ${styles.hideOnTablet}`}>
                        <Clock size={12} className={styles.icon} />
                        <span>Lun - Vie: 8:00 AM - 4:30 PM</span>
                    </div>
                </div>

                {/* Social links */}
                <div className={styles.rightSection}>
                    <div className={styles.socialLinks}>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="Facebook Colegio Divino Maestro"
                        >
                            <Facebook size={13} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="Instagram Colegio Divino Maestro"
                        >
                            <Instagram size={13} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            aria-label="LinkedIn Colegio Divino Maestro"
                        >
                            <Linkedin size={13} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
