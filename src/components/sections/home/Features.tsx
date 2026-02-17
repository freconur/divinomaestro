import styles from './Features.module.css';
import { Target, School, Users, GraduationCap } from 'lucide-react';

const PILLARS = [
    {
        title: "Metodología Centrada en el Estudiante",
        description: "Actividades diseñadas para que los estudiantes aprendan, compartan e interactúen, fomentando su desarrollo intelectual y bienestar socioemocional.",
        icon: <Target size={32} />
    },
    {
        title: "Infraestructura para el Aprendizaje",
        description: "Espacios modernos y seguros diseñados específicamente para potenciar la curiosidad y el aprendizaje activo en cada nivel.",
        icon: <School size={32} />
    },
    {
        title: "Profesores con Propósito",
        description: "Guías apasionados que acompañan y retroalimentan el proceso educativo, inspirando a los estudiantes a alcanzar su máximo potencial.",
        icon: <Users size={32} />
    },
    {
        title: "Líderes con Valores",
        description: "Formamos personas íntegras y éticas, preparadas para liderar con responsabilidad en un mundo en constante cambio.",
        icon: <GraduationCap size={32} />
    }
];

export default function Features() {
    return (
        <section className={styles.features} id="propuesta">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.subtitle}>Propuesta Educativa</span>
                    <h2 className={styles.title}>Nuestros 4 Pilares Educativos</h2>
                    <p className={styles.featureDescription} style={{ maxWidth: '700px', margin: '0 auto' }}>
                        Desarrollamos una educación 360° que prepara a nuestros estudiantes para destacar en la vida real.
                    </p>
                </div>

                <div className={styles.grid}>
                    {PILLARS.map((pillar, index) => (
                        <div key={index} className={styles.card} data-number={`0${index + 1}`}>
                            <div className={styles.iconWrapper}>
                                {pillar.icon}
                            </div>
                            <h3 className={styles.featureTitle}>{pillar.title}</h3>
                            <p className={styles.featureDescription}>{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
