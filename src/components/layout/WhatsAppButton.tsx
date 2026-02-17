"use client";

import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000); // Show after 2 seconds
        return () => clearTimeout(timer);
    }, []);

    const whatsappNumber = "5112345678"; // Generic number, should be updated by user
    const message = encodeURIComponent("¡Hola! Me gustaría recibir información sobre el proceso de matrícula 2026.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <AnimatePresence>
            {isVisible && (
                <div className={styles.wrapper}>
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <span>Comienza tu matrícula por WhatsApp</span>
                        <div className={styles.badgeArrow}></div>
                    </motion.div>

                    <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Contactar por WhatsApp"
                    >
                        <MessageCircle size={32} fill="currentColor" />
                    </motion.a>
                </div>
            )}
        </AnimatePresence>
    );
}
