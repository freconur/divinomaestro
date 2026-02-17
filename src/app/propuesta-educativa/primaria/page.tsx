import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from '../propuesta.module.css';
import Image from 'next/image';

export default function PrimariaPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image src="/level_primaria.png" alt="Nivel Primaria" fill priority />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className={styles.title}>Educación Primaria</h1>
                    <p className={styles.description}>Construyendo bases sólidas para el pensamiento crítico.</p>
                </div>
            </section>

            <div className="container" style={{ padding: '8rem 0' }}>
                <div className={styles.pillarRow}>
                    <div className={styles.textPart}>
                        <h3>Potenciando Habilidades</h3>
                        <p>
                            Nuestra primaria se centra en consolidar las capacidades de lectoescritura, razonamiento lógico-matemático y la formación en valores. Integramos proyectos de ciencia y arte que estimulan la creatividad y el trabajo en equipo.
                        </p>
                    </div>
                    <div className={styles.imagePart}>
                        <Image src="/level_primaria.png" alt="Estudiantes en clase" width={600} height={400} />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
