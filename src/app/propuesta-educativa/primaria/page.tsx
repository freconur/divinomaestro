import type { Metadata } from 'next';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LevelDetailTemplate from "@/components/sections/propuesta/LevelDetailTemplate";

export const metadata: Metadata = {
    title: "Nivel Primaria (1° a 6° Grado) | Colegio Particular Divino Maestro",
    description: "Conoce nuestra propuesta para el Nivel Primaria en el Colegio Divino Maestro: matemática analítica, plan lector crítico, ciencias STEAM e inglés intensivo.",
};

export default function PrimariaPage() {
    return (
        <main>
            <Header />
            <LevelDetailTemplate
                levelKey="primaria"
                titlePrefix="Educación Primaria:"
                titleHighlight="Pensamiento Crítico, Ciencia y Principios Sólidos"
                subtitle="1° a 6° Grado"
                heroImage="/level_primaria.png"
                badgeText="Nivel Primaria • 1° a 6° Grado"
                ageRange="6 a 11 años (1° a 6° de Primaria)"
                schedule="7:45 a.m. a 2:15 p.m."
                ratio="Tutor permanente y máx. 25 alumnos por aula"
                approach="Aprendizaje Basado en Proyectos (ABP), STEAM y Bilingüe"
                breadcrumbLabel="Nivel Primaria"
                introParagraph="En el Nivel Primaria consolidamos las competencias fundamentales para toda la trayectoria escolar. Promovemos el razonamiento matemático contextualizado, la comprensión lectora crítica, la experimentación científica en laboratorio y el dominio del idioma inglés en un ambiente de exigencia académica y calidez humana."
                pillarsSubtitle="Formación Intelectual y de Carácter"
                pillarsTitle="Pilares del Aprendizaje en Primaria"
                pillarsDesc="Una propuesta pedagógica rigurosa y vivencial que convierte el aprendizaje en una aventura estimulante y desafiante."
                pillars={[
                    {
                        title: "Razonamiento Lógico-Matemático Aplicado",
                        description: "Trascendemos la memorización mecánica de fórmulas para enseñar a nuestros alumnos a pensar, deducir, modelar problemas y encontrar soluciones creativas.",
                        iconName: "Calculator",
                        badge: "Lógica y Desafíos",
                        points: [
                            "Resolución de problemas vinculados a situaciones reales de la vida",
                            "Desarrollo de cálculo mental ágil y pensamiento espacial",
                            "Participación en olimpiadas matemáticas escolares y retos de razonamiento"
                        ]
                    },
                    {
                        title: "Comprensión Lectora Crítica y Oratoria",
                        description: "Formamos lectores apasionados y autónomos. Desarrollamos la capacidad de discernir ideas principales, argumentar con sustento y hablar con elocuencia.",
                        iconName: "BookOpen",
                        badge: "Plan Lector Activo",
                        points: [
                            "Plan lector con obras selectas de la literatura infantil y juvenil",
                            "Producción escrita guiada: redacción de cuentos, ensayos y crónicas",
                            "Talleres continuos de debate, expresión oral y declamación"
                        ]
                    },
                    {
                        title: "Inglés Intensivo por Competencias (Cambridge Pathway)",
                        description: "Enseñamos el idioma inglés con enfoque comunicativo integral. Los alumnos leen, redactan, escuchan y debaten con fluidez y naturalidad.",
                        iconName: "Languages",
                        badge: "Bilingual Growth",
                        points: [
                            "6 a 8 horas semanales de inmersión en inglés por niveles",
                            "Integración de contenidos científicos e históricos en lengua inglesa",
                            "Alineamiento gradual hacia estándares de certificación internacional"
                        ]
                    },
                    {
                        title: "Enfoque STEAM, Robótica y Experimentación",
                        description: "Fomentamos la mentalidad científica desde temprana edad. Los alumnos no solo leen ciencia: la comprueban en el laboratorio y construyen tecnología.",
                        iconName: "Microscope",
                        badge: "Ciencia y Tecnología",
                        points: [
                            "Sesiones prácticas en el laboratorio escolar de ciencias naturales",
                            "Kits de robótica educativa y programación lógica para niños",
                            "Feria anual de innovación, ciencias y medio ambiente"
                        ]
                    }
                ]}
                curriculumSubtitle="Estructura Curricular"
                curriculumTitle="Áreas de Aprendizaje y Talleres de Primaria"
                curriculumDesc="Un currículo equilibrado que integra ciencias exactas, humanidades, idiomas, tecnología, artes y formación espiritual."
                curriculum={[
                    {
                        area: "Matemática y Razonamiento Analítico",
                        description: "Aritmética, geometría, iniciación al álgebra, estadística y resolución de problemas cotidianos.",
                        tag: "Ciencias Exactas",
                        iconName: "Calculator"
                    },
                    {
                        area: "Comunicación Integral y Redacción",
                        description: "Gramática aplicada, ortografía, producción textual, análisis crítico y comprensión profunda.",
                        tag: "Humanidades",
                        iconName: "BookOpen"
                    },
                    {
                        area: "Inglés Intensivo Comunicativo",
                        description: "Desarrollo simultáneo de listening, speaking, reading y writing con material internacional.",
                        tag: "Bilingüe",
                        iconName: "Languages"
                    },
                    {
                        area: "Ciencias Naturales y Laboratorio",
                        description: "Biología, anatomía elemental, física vivencial, ecología y métodos de investigación científica.",
                        tag: "Ciencias",
                        iconName: "Microscope"
                    },
                    {
                        area: "Robótica y Pensamiento Computacional",
                        description: "Algoritmos básicos, diseño digital seguro, ofimática escolar y resolución de retos tecnológicos.",
                        tag: "Tecnología",
                        iconName: "Laptop"
                    },
                    {
                        area: "Tutoría, Convivencia y Formación en Valores",
                        description: "Educación socioemocional, hábitos de estudio autónomo y principios ético-cristianos.",
                        tag: "Valores",
                        iconName: "HeartHandshake"
                    }
                ]}
                facilitiesSubtitle="Infraestructura Diseñada para Primaria"
                facilitiesTitle="Espacios que Inspiran el Aprendizaje Activo"
                facilitiesDesc="Instalaciones modernas equipadas para garantizar seguridad, confort y recursos de vanguardia para cada clase."
                facilities={[
                    {
                        title: "Aulas Multimedia con Proyectores Interactivos",
                        description: "Ambientes climatizados con mobiliario ergonómico y conectividad digital para sesiones dinámicas e interactivas.",
                        iconName: "School"
                    },
                    {
                        title: "Laboratorio de Cómputo y Robótica",
                        description: "Equipos informáticos modernos y kits pedagógicos de robótica para proyectos de ciencia y código escolar.",
                        iconName: "Laptop"
                    },
                    {
                        title: "Laboratorio de Ciencias Escolares",
                        description: "Espacio dotado de instrumental seguro, microscopios y reactivos para comprobar leyes científicas.",
                        iconName: "Microscope"
                    },
                    {
                        title: "Complejo Polideportivo y Patios Techados",
                        description: "Canchas multideportivas para fútbol, vóley y básquetbol, además de espacios seguros para recreos.",
                        iconName: "Building2"
                    }
                ]}
                routineSubtitle="La Jornada Escolar"
                routineTitle="Un Día Típico en el Nivel Primaria"
                routineDesc="Estructuramos horarios optimizados para aprovechar los momentos de mayor concentración cognitiva y balancearlos con recreación activa."
                routine={[
                    {
                        time: "7:45 - 8:00 a.m.",
                        activity: "Formación, Reflexión y Oración Matinal",
                        detail: "Ingreso ordenado, entonación del Himno Nacional, oración comunitaria y reflexión sobre el valor del mes.",
                        iconName: "HeartHandshake"
                    },
                    {
                        time: "8:00 - 10:15 a.m.",
                        activity: "Bloques Académicos Centrales",
                        detail: "Clases de alta demanda cognitiva: Razonamiento Matemático, Comunicación o Aritmética con metodología activa.",
                        iconName: "Calculator"
                    },
                    {
                        time: "10:15 - 10:45 a.m.",
                        activity: "Primer Recreo y Lonchera Nutritiva",
                        detail: "Pausa activa supervisada, alimentación balanceada y esparcimiento libre en los patios deportivos.",
                        iconName: "Clock"
                    },
                    {
                        time: "10:45 - 12:45 p.m.",
                        activity: "Inglés Intensivo y Ciencias en Laboratorio",
                        detail: "Módulos de conversación en inglés y trabajo experimental en los laboratorios de ciencias o robótica.",
                        iconName: "Languages"
                    },
                    {
                        time: "12:45 - 1:15 p.m.",
                        activity: "Segundo Receso y Almuerzo Escolar",
                        detail: "Almuerzo guiado por tutores, fortaleciendo hábitos de higiene, orden y camaradería entre pares.",
                        iconName: "Clock"
                    },
                    {
                        time: "1:15 - 2:15 p.m.",
                        activity: "Talleres Formativos, Tutoría y Cierre",
                        detail: "Sesión de arte, educación física, oratoria o tutoría grupal para evaluar logros del día y asignar metas.",
                        iconName: "Sparkles"
                    }
                ]}
                profileSubtitle="Perfil del Egresado"
                profileTitle="¿Qué Competencias Consolida el Alumno al Culminar Primaria?"
                profileDesc="Nuestros estudiantes egresan de 6° grado listos para afrontar con solvencia la exigencia y los retos de la Secundaria."
                profileItems={[
                    "Comprensión lectora analítica y capacidad de estructurar argumentos orales y escritos con coherencia y claridad.",
                    "Dominio sólido de las operaciones matemáticas, razonamiento deductivo y habilidad para resolver problemas cotidianos.",
                    "Competencia comunicativa en idioma inglés que les permite sostener diálogos, comprender textos y redactar párrafos bilingües.",
                    "Uso ético, crítico y productivo de las tecnologías digitales e iniciación exitosa al pensamiento computacional.",
                    "Liderazgo fraterno, empatía, hábitos de estudio autónomos y compromiso activo con el bienestar de su familia y entorno."
                ]}
                profileSummary="«El egresado de Primaria en Divino Maestro es un estudiante curioso, disciplinado y ético, plenamente preparado para liderar los desafíos de la Secundaria.»"
                whatsappMessage="¡Hola! Deseo recibir información detallada sobre vacantes y el proceso de admisión 2027 para el Nivel Primaria (1° a 6° grado) del Colegio Divino Maestro."
            />
            <Footer />
        </main>
    );
}
