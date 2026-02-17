"use client";

import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import styles from './TopBar.module.css';

export default function TopBar() {
    return (
        <div className={styles.topBar}>
            <div className={styles.container}>
                <div className={styles.contactInfo}>
                    <a href="tel:+5112345678" className={styles.infoLink}>
                        <Phone size={14} />
                        <span>(01) 234-5678</span>
                    </a>
                    <a href="mailto:informes@divinomaestro.edu.pe" className={styles.infoLink}>
                        <Mail size={14} />
                        <span>informes@divinomaestro.edu.pe</span>
                    </a>
                </div>

                <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialIcon} aria-label="Facebook">
                        <Facebook size={16} />
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="Instagram">
                        <Instagram size={16} />
                    </a>
                    <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                        <Linkedin size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
}
