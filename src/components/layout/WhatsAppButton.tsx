"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const whatsappNumber = "51987654321";
    const message = encodeURIComponent("¡Hola! Me gustaría recibir información sobre el proceso de matrícula 2027.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <AnimatePresence>
            {isVisible && (
                <div className={styles.wrapper}>
                    <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                        aria-label="Contactar por WhatsApp"
                    >
                        <span className={styles.pulseRing} aria-hidden="true" />
                        <WhatsAppIcon size={32} />
                    </motion.a>
                </div>
            )}
        </AnimatePresence>
    );
}
