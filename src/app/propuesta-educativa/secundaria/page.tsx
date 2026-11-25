import type { Metadata } from 'next';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LevelDetailTemplate from "@/components/sections/propuesta/LevelDetailTemplate";

export const metadata: Metadata = {
    title: "Nivel Secundaria (1° a 5° Año) | Colegio Particular Divino Maestro",
    description: "Conoce nuestra propuesta para el Nivel Secundaria en el Colegio Divino Maestro: preparación preuniversitaria rigurosa, inglés B2, laboratorios y liderazgo ético.",
};

export default function SecundariaPage() {
    return (
        <main>
            <Header />
            <LevelDetailTemplate
                levelKey="secundaria"
                titlePrefix="Educación Secundaria:"
                titleHighlight="Exigencia Académica, Liderazgo y Rumbo Preuniversitario"
                subtitle="1° a 5° Año"
                heroImage="/level_secundaria.png"
                badgeText="Nivel Secundaria • 1° a 5° Año"
                ageRange="12 a 17 años (1° a 5° de Secundaria)"
                schedule="7:30 a.m. a 3:00 p.m. (incluye módulos preuniversitarios)"
                ratio="Tutoría vocacional personalizada y máx. 28 alumnos por aula"
                approach="Preparación Preuniversitaria, Liderazgo Juvenil y Bilingüismo Avanzado"
                breadcrumbLabel="Nivel Secundaria"
                introParagraph="En el Nivel Secundaria preparamos a los líderes del futuro. Nuestra propuesta fusiona un plan de estudios de alta exigencia académica orientado al ingreso a las mejores universidades del país y del exterior, con el dominio avanzado del inglés, prácticas de laboratorio científico, orientación vocacional continua y una sólida formación ética."
                pillarsSubtitle="Formación Preuniversitaria de Excelencia"
                pillarsTitle="Pilares del Aprendizaje en Secundaria"
                pillarsDesc="Preparamos a los jóvenes para asumir con madurez, rigor intelectual y convicción los retos de la vida universitaria y profesional."
                pillars={[
                    {
                        title: "Sistema Preuniversitario de Alto Rendimiento",
                        description: "Currículo intensivo y estructurado conforme a los estándares de admisión de las universidades más prestigiosas del país (UNMSM, UNI, PUCP, Cayetano Heredia, etc.).",
                        iconName: "GraduationCap",
                        badge: "Preuniversitario",
                        points: [
                            "Módulos intensivos de Álgebra, Geometría, Trigonometría y Raz. Matemático",
                            "Simulacros de examen de admisión mensuales con calificación y retroalimentación",
                            "Banco de preguntas contextualizadas y resolución guiada de exámenes de admisión"
                        ]
                    },
                    {
                        title: "Inglés B2 y Competencias Globales",
                        description: "Preparamos a los estudiantes para el mundo internacional. Desarrollamos destrezas avanzadas de oratoria, redacción formal y lectura crítica en inglés.",
                        iconName: "Languages",
                        badge: "B2 Proficiency",
                        points: [
                            "Preparación para exámenes de certificación internacional (Cambridge / TOEFL)",
                            "Debates formales y ensayos argumentativos íntegramente en idioma inglés",
                            "Acceso a bibliografía y contenidos científicos contemporáneos bilingües"
                        ]
                    },
                    {
                        title: "Investigación Científica, STEAM y Tecnología",
                        description: "Consolidamos el método científico en laboratorios equipados. Fomentamos la experimentación en física, química y biología, junto a la programación digital.",
                        iconName: "Microscope",
                        badge: "Ciencia Rigurosa",
                        points: [
                            "Prácticas semanales en laboratorios de ciencias con reactivos e instrumental seguro",
                            "Desarrollo de monografías y proyectos científicos con rigor metodológico",
                            "Pensamiento algorítmico, ciencia de datos y herramientas digitales aplicadas"
                        ]
                    },
                    {
                        title: "Orientación Vocacional y Liderazgo Juvenil",
                        description: "Acompañamos la toma de decisiones vocacionales de cada joven mediante orientación psicopedagógica personalizada, ferias universitarias y talleres de liderazgo.",
                        iconName: "Compass",
                        badge: "Proyecto de Vida",
                        points: [
                            "Evaluaciones psicométricas y orientación vocacional desde 3° de secundaria",
                            "Visitas guiadas a campus universitarios y charlas con profesionales destacados",
                            "Proyectos de proyección social comunitaria, debate ético y valores cristianos"
                        ]
                    }
                ]}
                curriculumSubtitle="Plan Curricular Preuniversitario"
                curriculumTitle="Cursos y Especialidades en Secundaria"
                curriculumDesc="Una malla curricular de vanguardia estructurada para superar con éxito las evaluaciones universitarias más exigentes."
                curriculum={[
                    {
                        area: "Ciencias Matemáticas Preuniversitarias",
                        description: "Álgebra superior, Geometría analítica, Trigonometría, Aritmética avanzada y Raz. Matemático.",
                        tag: "Exactas",
                        iconName: "Calculator"
                    },
                    {
                        area: "Física, Química y Biología Experimental",
                        description: "Mecánica clásica, electromagnetismo, química orgánica e inorgánica, citología y genética.",
                        tag: "Ciencias",
                        iconName: "Microscope"
                    },
                    {
                        area: "Humanidades, Filosofía y Debate Crítico",
                        description: "Literatura universal y peruana, Filosofía, Historia universal y del Perú, Economía política.",
                        tag: "Humanidades",
                        iconName: "BookOpen"
                    },
                    {
                        area: "Inglés Avanzado B2 / Certificaciones",
                        description: "Análisis de textos académicos en inglés, expresión oral formal y preparación para exámenes.",
                        tag: "Bilingüe",
                        iconName: "Languages"
                    },
                    {
                        area: "Tecnología, Programación e Informática",
                        description: "Lógica computacional, desarrollo web básico, análisis de datos y suites de productividad avanzada.",
                        tag: "Tecnología",
                        iconName: "Laptop"
                    },
                    {
                        area: "Orientación Vocacional y Liderazgo Ético",
                        description: "Tutoría personalizada, proyecto de vida, bioética, inteligencia emocional y doctrina cristiana.",
                        tag: "Valores",
                        iconName: "HeartHandshake"
                    }
                ]}
                facilitiesSubtitle="Infraestructura Preuniversitaria"
                facilitiesTitle="Espacios para el Estudio de Alto Rendimiento"
                facilitiesDesc="Instalaciones preparadas para brindar la mejor experiencia académica, científica, cultural y deportiva a nuestros jóvenes."
                facilities={[
                    {
                        title: "Laboratorios de Ciencias Experimentales",
                        description: "Mesas de trabajo especializadas, campana extractora, microscopios de precisión y material de laboratorio para física y química.",
                        iconName: "Microscope"
                    },
                    {
                        title: "Centro de Cómputo de Alto Rendimiento",
                        description: "Computadoras con procesadores veloces, conectividad de fibra óptica y software pedagógico de simulación científica.",
                        iconName: "Laptop"
                    },
                    {
                        title: "Auditorio Institucional para Debates y Ponencias",
                        description: "Salón acondicionado para modelos de debate estilo Naciones Unidas, presentaciones orales y conferencias magistrales.",
                        iconName: "School"
                    },
                    {
                        title: "Complejo Polideportivo y Gimnasio",
                        description: "Canchas reglamentarias de básquetbol, fútbol y vóleibol para el desarrollo de la salud física y el trabajo en equipo.",
                        iconName: "Building2"
                    }
                ]}
                routineSubtitle="La Jornada Escolar"
                routineTitle="Un Día Típico en el Nivel Secundaria"
                routineDesc="Estructura horaria de alto rendimiento con equilibrio entre rigor intelectual, asesoría continua y bienestar socioemocional."
                routine={[
                    {
                        time: "7:30 - 7:45 a.m.",
                        activity: "Ingreso y Reflexión Vocacional Matinal",
                        detail: "Ingreso puntual, organización de materiales y mensaje de motivación orientado a la perseverancia y la excelencia.",
                        iconName: "Clock"
                    },
                    {
                        time: "7:45 - 10:45 a.m.",
                        activity: "Bloques Intensivos de Ciencias Exactas",
                        detail: "Clases de alta exigencia: Álgebra, Física o Razonamiento Matemático con resolución de casos tipo admisión.",
                        iconName: "Calculator"
                    },
                    {
                        time: "10:45 - 11:15 a.m.",
                        activity: "Receso y Refrigerio Saludable",
                        detail: "Descanso, hidratación y esparcimiento en los patios y áreas de recreación juvenil.",
                        iconName: "Clock"
                    },
                    {
                        time: "11:15 - 1:15 p.m.",
                        activity: "Laboratorios de Ciencias e Inglés Avanzado",
                        detail: "Experimentación práctica en química o biología, alternando con módulos conversacionales de inglés B2.",
                        iconName: "Microscope"
                    },
                    {
                        time: "1:15 - 1:55 p.m.",
                        activity: "Almuerzo y Convivencia Estudiantil",
                        detail: "Almuerzo compartido, diálogo entre compañeros y pausas de desconexión activa.",
                        iconName: "Clock"
                    },
                    {
                        time: "1:55 - 3:00 p.m.",
                        activity: "Asesorías Preuniversitarias y Simulacros",
                        detail: "Resolución de dudas en grupos pequeños, preparación para simulacros, talleres de oratoria o deportes.",
                        iconName: "GraduationCap"
                    }
                ]}
                profileSubtitle="Perfil del Graduado"
                profileTitle="¿Qué Perfil Logran Nuestros Egresados de Secundaria?"
                profileDesc="Al culminar el 5° año de secundaria, nuestros estudiantes están preparados para liderar su futuro universitario con honores."
                profileItems={[
                    "Excelente rendimiento intelectual y preparación rigurosa que garantiza el ingreso directo a universidades líderes del país.",
                    "Fluidez en el idioma inglés (nivel B2 intermedio-avanzado) para acceder a bibliografía global y certificaciones internacionales.",
                    "Pensamiento crítico, sólidas competencias de redacción académica y elocuencia para defender ideas con fundamento ético.",
                    "Proyecto de vida y vocación claramente definidos gracias a un proceso continuo de acompañamiento psicopedagógico.",
                    "Liderazgo ético, valores cristianos de justicia, honestidad, empatía y voluntad constante de servicio a la sociedad."
                ]}
                profileSummary="«Nuestros egresados de Secundaria salen al mundo con la frente en alto: preparados para la universidad más exigente, éticamente íntegros y comprometidos con el Perú.»"
                whatsappMessage="¡Hola! Deseo recibir información detallada sobre vacantes y el proceso de admisión 2027 para el Nivel Secundaria (1° a 5° año) del Colegio Divino Maestro."
            />
            <Footer />
        </main>
    );
}
