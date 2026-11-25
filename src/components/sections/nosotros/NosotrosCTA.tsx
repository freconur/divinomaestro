"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import styles from './NosotrosCTA.module.css';

export default function NosotrosCTA() {
    const whatsappNumber = "5112345678";
    const whatsappMsg = encodeURIComponent("¡Hola! Me gustaría agendar una visita guiada para conocer el Colegio Divino Maestro e informarme sobre el proceso de admisión 2027.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.banner}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.glowShape}></div>

                    <div className={styles.content}>
                        <div className={styles.badge}>
                            <Sparkles size={14} className={styles.badgeSparkle} />
                            <span>Sé Parte de Nuestra Familia Educativa</span>
                        </div>

                        <h2 className={styles.title}>
                            Construyamos Juntos el Futuro de tus Hijos
                        </h2>

                        <p className={styles.description}>
                            Te invitamos a recorrer nuestras instalaciones, conversar con nuestro equipo pedagógico
                            y descubrir cómo brindamos una educación con propósito, afecto y rigor.
                        </p>

                        <div className={styles.actions}>
                            <Link href="/admisiones" className={styles.primaryBtn}>
                                <GraduationCap size={19} />
                                <span>Iniciar Proceso de Admisión</span>
                            </Link>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.secondaryBtn}
                            >
                                <WhatsAppIcon size={19} />
                                <span>Agendar Visita por WhatsApp</span>
                            </a>
                        </div>

                        <div className={styles.reassurance}>
                            <div className={styles.reassuranceItem}>
                                <CheckCircle2 size={15} className={styles.checkIcon} />
                                <span>Vacantes limitadas 2027</span>
                            </div>
                            <span className={styles.divider}>•</span>
                            <div className={styles.reassuranceItem}>
                                <CheckCircle2 size={15} className={styles.checkIcon} />
                                <span>Recorridos guiados de lunes a viernes</span>
                            </div>
                            <span className={styles.divider}>•</span>
                            <div className={styles.reassuranceItem}>
                                <CheckCircle2 size={15} className={styles.checkIcon} />
                                <span>Entrevistas personalizadas</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
