import styles from './NosotrosHero.module.css';
import Image from 'next/image';

export default function NosotrosHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/nosotros_hero_bg.png"
                    alt="Nosotros - Colegio Divino Maestro"
                    fill
                    priority
                />
            </div>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.title}>Nuestra Historia y Valores</h1>
                    <p className={styles.description}>
                        Más de dos décadas formando líderes íntegros, apasionados por el aprendizaje y comprometidos con el futuro del país.
                    </p>
                </div>
            </div>
        </section>
    );
}
