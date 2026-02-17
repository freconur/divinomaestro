import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import styles from './propuesta.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function PropuestaPage() {
    return (
        <main>
            <Header />

            <section className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image src="/school_hero_bg.png" alt="Propuesta Educativa" fill priority />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className={styles.title}>Nuestra Propuesta Educativa</h1>
                    <p className={styles.description}>Un modelo integral diseñado para los retos del siglo XXI.</p>
                </div>
            </section>

            <div className="container" style={{ paddingTop: '8rem' }}>
                <div className={styles.pillarDetails}>
                    <div className={styles.pillarRow}>
                        <div className={styles.imagePart}>
                            <Image src="/level_primaria.png" alt="Metodología" width={600} height={400} />
                        </div>
                        <div className={styles.textPart}>
                            <h3>Metodología Activa</h3>
                            <p>
                                Nuestro enfoque pedagógico pone al estudiante en el centro del aprendizaje. A través de proyectos colaborativos y el uso de herramientas tecnológicas, fomentamos la autonomía, la investigación y el pensamiento crítico.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.pillarRow} ${styles.reverse}`}>
                        <div className={styles.imagePart}>
                            <Image src="/level_secundaria.png" alt="Infraestructura" width={600} height={400} />
                        </div>
                        <div className={styles.textPart}>
                            <h3>Aprendizaje con Propósito</h3>
                            <p>
                                No solo enseñamos conocimientos, sino que ayudamos a nuestros estudiantes a encontrar su propósito. Integramos valores éticos y habilidades blandas en cada sesión de aprendizaje.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className={styles.levelsSection}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>Niveles Educativos</h2>
                    <div className={styles.levelGrid}>
                        <div className={styles.levelCard}>
                            <h3 style={{ marginBottom: '1rem' }}>Inicial</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--slate-500)' }}>Cimentando el amor por aprender.</p>
                            <Link href="/propuesta-educativa/inicial" className="btn-primary">Ver Nivel</Link>
                        </div>
                        <div className={styles.levelCard}>
                            <h3 style={{ marginBottom: '1rem' }}>Primaria</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--slate-500)' }}>Desarrollando habilidades sólidas.</p>
                            <Link href="/propuesta-educativa/primaria" className="btn-primary">Ver Nivel</Link>
                        </div>
                        <div className={styles.levelCard}>
                            <h3 style={{ marginBottom: '1rem' }}>Secundaria</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--slate-500)' }}>Preparando para el futuro global.</p>
                            <Link href="/propuesta-educativa/secundaria" className="btn-primary">Ver Nivel</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
