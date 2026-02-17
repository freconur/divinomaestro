import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from '../propuesta.module.css';
import Image from 'next/image';

export default function SecundariaPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image src="/level_secundaria.png" alt="Nivel Secundaria" fill priority />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className={styles.title}>Educación Secundaria</h1>
                    <p className={styles.description}>Liderazgo e innovación para un futuro globalizado.</p>
                </div>
            </section>

            <div className="container" style={{ padding: '8rem 0' }}>
                <div className={styles.pillarRow}>
                    <div className={styles.textPart}>
                        <h3>Preparación Pre-universitaria</h3>
                        <p>
                            En secundaria, preparamos a nuestros estudiantes para los desafíos de la educación superior. Contamos con un currículo exigente que potencia el dominio del inglés, la tecnología y el desarrollo de proyectos de impacto social.
                        </p>
                    </div>
                    <div className={styles.imagePart}>
                        <Image src="/level_secundaria.png" alt="Estudiantes en laboratorio" width={600} height={400} />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
