import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from '../propuesta.module.css';
import Image from 'next/image';

export default function InicialPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image src="/level_inicial.png" alt="Nivel Inicial" fill priority />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className={styles.title}>Educación Inicial</h1>
                    <p className={styles.description}>Aprendizaje basado en el juego, la curiosidad y el afecto.</p>
                </div>
            </section>

            <div className="container" style={{ padding: '8rem 0' }}>
                <div className={styles.pillarRow}>
                    <div className={styles.textPart}>
                        <h3>Desarrollo Integral</h3>
                        <p>
                            En el nivel inicial (3, 4 y 5 años), nos enfocamos en el desarrollo socioemocional, motor y cognitivo de los más pequeños. Nuestra metodología promueve la exploración libre y guiada, permitiendo que cada niño descubra el mundo a su propio ritmo.
                        </p>
                    </div>
                    <div className={styles.imagePart}>
                        <Image src="/level_inicial.png" alt="Niños jugando" width={600} height={400} />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
