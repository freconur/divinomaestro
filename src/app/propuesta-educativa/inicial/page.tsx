import type { Metadata } from 'next';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LevelDetailTemplate from "@/components/sections/propuesta/LevelDetailTemplate";

export const metadata: Metadata = {
    title: "Nivel Inicial (3, 4 y 5 años) | Colegio Particular Divino Maestro",
    description: "Conoce nuestra propuesta para el Nivel Inicial en el Colegio Divino Maestro: aprendizaje basado en el juego, inmersión en inglés, psicomotricidad y valores.",
};

export default function InicialPage() {
    return (
        <main>
            <Header />
            <LevelDetailTemplate
                levelKey="inicial"
                titlePrefix="Educación Inicial:"
                titleHighlight="Aprender Jugando con Amor, Afecto y Seguridad"
                subtitle="3, 4 y 5 años"
                heroImage="/level_inicial.png"
                badgeText="Nivel Inicial • 3, 4 y 5 Años"
                ageRange="3, 4 y 5 años cumplidos al 31 de marzo"
                schedule="8:00 a.m. a 1:00 p.m."
                ratio="1 Docente y 1 Auxiliar por aula (máx. 18 niños)"
                approach="Lúdico vivencial, bilingüe y socioafectivo"
                breadcrumbLabel="Nivel Inicial"
                introParagraph="En el Colegio Particular Divino Maestro brindamos un segundo hogar cálido y protector. Estimulamos la curiosidad natural, el desarrollo psicomotriz y la autonomía de tus hijos mediante proyectos lúdicos vivenciales, rincones de aprendizaje e inmersión temprana al idioma inglés."
                pillarsSubtitle="Metodología de los Primeros Años"
                pillarsTitle="Pilares del Aprendizaje en Inicial"
                pillarsDesc="Cada experiencia en nuestras aulas está planificada con ternura y base pedagógica para sembrar en los más pequeños el amor por descubrir el mundo."
                pillars={[
                    {
                        title: "Desarrollo Psicomotriz y Sensorial",
                        description: "El movimiento es el lenguaje del niño. Desarrollamos su coordinación, equilibrio y motricidad fina como cimiento indispensable para su madurez neurológica.",
                        iconName: "Palette",
                        badge: "Cuerpo y Movimiento",
                        points: [
                            "Circuitos motrices diarios con materiales seguros y ergonómicos",
                            "Estimulación multisensorial y conciencia de su esquema corporal",
                            "Aprestamiento motriz fino para la grafomotricidad y dibujo"
                        ]
                    },
                    {
                        title: "Inmersión Lúdica en Inglés (Play & Learn)",
                        description: "Aprovechamos la plasticidad cerebral de la primera infancia para incorporar el idioma inglés a través de rutinas, canciones, cuentos e interacciones cotidianas.",
                        iconName: "Languages",
                        badge: "Early Bilingual",
                        points: [
                            "Canciones, rimas y narraciones orales interactivas",
                            "Adquisición natural del vocabulario sin presiones ni traducción mecánica",
                            "Docentes especializadas en enseñanza temprana de idiomas"
                        ]
                    },
                    {
                        title: "Inteligencia Emocional y Convivencia Cristiana",
                        description: "Enseñamos a los niños a reconocer, nombrar y gestionar sus emociones en un entorno donde la empatía, el compartir y el afecto son normas vivas.",
                        iconName: "HeartHandshake",
                        badge: "Afecto y Fraternidad",
                        points: [
                            "Asambleas diarias de bienvenida y expresión de sentimientos",
                            "Acompañamiento cercano del departamento psicopedagógico",
                            "Formación en valores cristianos de gratitud, respeto y generosidad"
                        ]
                    },
                    {
                        title: "Curiosidad Científica y Pensamiento Creativo",
                        description: "Estimulamos la indagación a través de rincones de exploración libre y proyectos donde los niños formulan preguntas sobre plantas, animales y la naturaleza.",
                        iconName: "Sparkles",
                        badge: "Exploración Libre",
                        points: [
                            "Mini proyectos de indagación y contacto guiado con la naturaleza",
                            "Nociones espaciales, temporales y clasificación matemática vivencial",
                            "Juego simbólico en rincones de dramatización y construcción"
                        ]
                    }
                ]}
                curriculumSubtitle="Programa Curricular Integral"
                curriculumTitle="Áreas de Aprendizaje y Talleres de Inicial"
                curriculumDesc="Un plan de estudios equilibrado que respeta los ritmos evolutivos y estimula todas las inteligencias múltiples del estudiante."
                curriculum={[
                    {
                        area: "Comunicación y Lenguaje Oral",
                        description: "Narración de cuentos, títeres, trabalenguas y desarrollo de la fluidez verbal y escucha atenta.",
                        tag: "Comunicación",
                        iconName: "BookOpen"
                    },
                    {
                        area: "Iniciación Matemática Vivencial",
                        description: "Clasificación por color, forma y tamaño; seriación, conteo con material concreto y nociones lógicas.",
                        tag: "Lógica",
                        iconName: "Calculator"
                    },
                    {
                        area: "Inglés Intensivo - English Tots",
                        description: "Sesiones diarias dinámicas con juegos, canciones y rutinas conversacionales en inglés.",
                        tag: "Bilingüe",
                        iconName: "Languages"
                    },
                    {
                        area: "Psicomotricidad y Expresión Corporal",
                        description: "Circuitos de destreza motriz, rondas musicales, coordinación rítmica y relajación guiada.",
                        tag: "Motricidad",
                        iconName: "Palette"
                    },
                    {
                        area: "Mini Científicos y Medio Ambiente",
                        description: "Observación de la naturaleza, cultivo de plantas, experimentos con agua, arena y texturas.",
                        tag: "Ciencia",
                        iconName: "Microscope"
                    },
                    {
                        area: "Música, Arte y Creatividad",
                        description: "Pintura dactilar, modelado con arcilla/plastilina, instrumentos de percusión y baile.",
                        tag: "Arte",
                        iconName: "Smile"
                    }
                ]}
                facilitiesSubtitle="Infraestructura Adaptada"
                facilitiesTitle="Espacios Diseñados para la Primera Infancia"
                facilitiesDesc="Nuestra sede cuenta con un pabellón exclusivo de Inicial concebido bajo altos estándares de seguridad, higiene y ergonomía."
                facilities={[
                    {
                        title: "Aulas Temáticas con Pisos Antideslizantes",
                        description: "Mobiliario a la medida del niño, iluminación natural, ventilación cruzada y materiales pedagógicos libres de tóxicos.",
                        iconName: "School"
                    },
                    {
                        title: "Patio de Juegos Exclusivo de Inicial",
                        description: "Zona recreativa independiente con piso amortiguador de impacto, juegos modulares seguros y supervisión permanente.",
                        iconName: "Building2"
                    },
                    {
                        title: "Rincones de Lectura y Juego Simbólico",
                        description: "Espacios ambientados con cuentos ilustrados, disfraces y módulos de construcción que invitan a crear historias.",
                        iconName: "Sparkles"
                    },
                    {
                        title: "Servicios Higiénicos Infantiles a Escala",
                        description: "Baños sanitarios adaptados a su estatura dentro del propio pabellón para reforzar su autonomía y hábitos de higiene.",
                        iconName: "ShieldCheck"
                    }
                ]}
                routineSubtitle="La Jornada Escolar"
                routineTitle="Un Día Típico en el Nivel Inicial"
                routineDesc="Estructuramos horarios equilibrados que combinan momentos de concentración, actividad física, alimentación nutritiva y descanso."
                routine={[
                    {
                        time: "8:00 - 8:30 a.m.",
                        activity: "Acogida y Asamblea Inicial",
                        detail: "Bienvenida afectuosa por parte de las docentes, canciones de saludo, oración matinal y diálogo sobre cómo se sienten hoy.",
                        iconName: "HeartHandshake"
                    },
                    {
                        time: "8:30 - 10:00 a.m.",
                        activity: "Proyectos de Aprendizaje Vivencial",
                        detail: "Actividades de desarrollo del lenguaje, exploración matemática con bloques y dinámicas en rincones de aprendizaje.",
                        iconName: "BookOpen"
                    },
                    {
                        time: "10:00 - 10:45 a.m.",
                        activity: "Lonchera Saludable y Recreo Guiado",
                        detail: "Fomento de hábitos alimenticios saludables e higiene de manos, seguido de juego libre seguro en el patio infantil.",
                        iconName: "Clock"
                    },
                    {
                        time: "10:45 - 12:15 p.m.",
                        activity: "Inmersión en Inglés y Psicomotricidad",
                        detail: "Sesión interactiva en inglés con juegos auditivos, seguida de circuitos de motricidad gruesa, ritmo y música.",
                        iconName: "Languages"
                    },
                    {
                        time: "12:15 - 1:00 p.m.",
                        activity: "Taller Artístico, Cierre y Salida",
                        detail: "Modelado, dibujo libre, recuento de los aprendizajes del día, preparación de mochilas y entrega personalizada a los padres.",
                        iconName: "Sparkles"
                    }
                ]}
                profileSubtitle="Perfil Formativo"
                profileTitle="¿Qué Logran Nuestros Pequeños al Egresar de Inicial?"
                profileDesc="Culminan los 5 años preparados para dar el salto con total confianza y madurez hacia la Educación Primaria."
                profileItems={[
                    "Autonomía y seguridad personal para comunicarse, expresar sus ideas y resolver pequeños conflictos con diálogo.",
                    "Madurez psicomotriz fina y gruesa consolidada, con óptimo aprestamiento para la lectoescritura y el cálculo.",
                    "Hábitos firmes de orden, higiene, respeto por las normas de convivencia y colaboración con sus compañeros.",
                    "Familiaridad natural con el idioma inglés, reconociendo comandos, vocabulario cotidiano, números y canciones.",
                    "Sensibilidad hacia los valores cristianos: gratitud, generosidad, respeto y amor hacia su familia y maestros."
                ]}
                profileSummary="«Al finalizar Inicial, cada estudiante de Divino Maestro posee las bases socioemocionales, intelectuales y valóricas para disfrutar de una primaria exitosa y feliz.»"
                whatsappMessage="¡Hola! Deseo recibir información detallada sobre vacantes y el proceso de admisión 2027 para el Nivel Inicial (3, 4 y 5 años) del Colegio Divino Maestro."
            />
            <Footer />
        </main>
    );
}
