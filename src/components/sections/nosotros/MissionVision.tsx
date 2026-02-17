import styles from './MissionVision.module.css';

export default function MissionVision() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <span className={styles.icon}>🎯</span>
                        <h2 className={styles.title}>Misión</h2>
                        <p className={styles.text}>
                            Brindar una educación integral de alta calidad, basada en valores y excelencia académica, que potencie las capacidades críticas y creativas de nuestros estudiantes para transformarlos en líderes comprometidos con la sociedad.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <span className={styles.icon}>🔭</span>
                        <h2 className={styles.title}>Visión</h2>
                        <p className={styles.text}>
                            Ser reconocidos como una institución educativa referente en innovación y formación de valores, donde cada estudiante alcance su máximo potencial y esté preparado para liderar los desafíos de un mundo globalizado.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
