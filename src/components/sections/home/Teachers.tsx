import styles from './Teachers.module.css';
import Image from 'next/image';

const TEACHERS = [
    {
        name: "Lic. Elena Martínez",
        role: "Directora Académica",
        bio: "Más de 15 años de experiencia en innovación educativa y gestión de talentos.",
        image: "/teacher_1.png"
    },
    {
        name: "Prof. Ricardo Silva",
        role: "Coordinador de Innovación",
        bio: "Especialista en metodologías activas y tecnología aplicada al aprendizaje.",
        image: "/teacher_2.png"
    },
    {
        name: "Lic. Carmen Vega",
        role: "Coordinadora de Bienestar",
        bio: "Psicóloga educativa con enfoque en el desarrollo emocional y clima escolar.",
        image: "/teacher_3.png"
    }
];

export default function Teachers() {
    return (
        <section className={styles.teachers} id="profesores">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.subtitle}>Nuestro Equipo</span>
                    <h2 className={styles.title}>Docentes con Propósito</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--slate-500)' }}>
                        Contamos con un equipo de profesionales apasionados, comprometidos con el desarrollo integral y el bienestar de cada estudiante.
                    </p>
                </div>

                <div className={styles.grid}>
                    {TEACHERS.map((teacher, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={teacher.image}
                                    alt={teacher.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className={styles.info}>
                                <span className={styles.role}>{teacher.role}</span>
                                <h3 className={styles.name}>{teacher.name}</h3>
                                <p className={styles.bio}>{teacher.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
