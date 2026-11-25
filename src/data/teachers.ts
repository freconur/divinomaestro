import { Teacher } from '@/types/teacher';

export const TEACHERS_DATA: Teacher[] = [
    {
        id: "elena-martinez",
        name: "Lic. Elena Martínez",
        role: "Directora Académica",
        category: "direccion",
        level: "Dirección",
        badge: "15+ Años de Experiencia",
        bio: "Especialista en innovación pedagógica y diseño curricular con amplia trayectoria liderando programas formativos de alto rendimiento.",
        tags: ["Gestión Educativa", "Innovación Curricular"],
        image: "/teacher_1.png",
        academicTraining: [
            {
                degree: "Licenciatura en Educación Secundaria",
                institution: "Pontificia Universidad Católica del Perú (PUCP)",
                year: "2008"
            },
            {
                degree: "Maestría en Gestión y Dirección de Instituciones Educativas",
                institution: "Universidad de Piura (UDEP)",
                year: "2014"
            },
            {
                degree: "Diplomado Internacional en Innovación Curricular y Evaluación Auténtica",
                institution: "Tecnológico de Monterrey (ITESM)",
                year: "2019"
            }
        ],
        experience: [
            {
                period: "2018 - Presente",
                role: "Directora Académica",
                description: "Lidera la planificación pedagógica general, supervisión de calidad docente y acreditaciones curriculares."
            },
            {
                period: "2012 - 2017",
                role: "Coordinadora de Secundaria y Bachillerato",
                description: "Supervisó el rendimiento preuniversitario alcanzando más del 95% de ingresos a universidades de primer nivel."
            },
            {
                period: "2008 - 2012",
                role: "Docente de Comunicación y Literatura",
                description: "Docente de aula con premios a la excelencia didáctica e impulsora del Plan Lector institucional."
            }
        ],
        quote: "La verdadera educación no busca llenar mentes, sino encender corazones con vocación de servicio y rigor intelectual.",
        officeHours: "Martes y Jueves de 10:00 AM a 12:30 PM (Previa cita)"
    },
    {
        id: "ricardo-silva",
        name: "Prof. Ricardo Silva",
        role: "Coordinador de Innovación y STEM",
        category: "direccion",
        level: "Coordinación",
        badge: "Especialista en Tecnología",
        bio: "Líder en metodologías activas y robótica educativa, promoviendo el pensamiento crítico y el aprendizaje basado en proyectos reales.",
        tags: ["Robótica & STEM", "Aprendizaje Activo"],
        image: "/teacher_2.png",
        academicTraining: [
            {
                degree: "Licenciatura en Educación con mención en Ciencias y Matemática",
                institution: "Universidad Nacional Mayor de San Marcos (UNMSM)",
                year: "2011"
            },
            {
                degree: "Especialización en Robótica Educativa y Pensamiento Computacional",
                institution: "LEGO Education Academy",
                year: "2016"
            },
            {
                degree: "Certificación Internacional en Metodología STEAM",
                institution: "Universidad de Finlandia (Online Track)",
                year: "2021"
            }
        ],
        experience: [
            {
                period: "2019 - Presente",
                role: "Coordinador del Área de Innovación y Laboratorios STEM",
                description: "Diseño e implementación de laboratorios interactivos y talleres de robótica y programación escolar."
            },
            {
                period: "2014 - 2018",
                role: "Docente de Ciencias y Robótica",
                description: "Entrenador del equipo escolar ganador de olimpiadas regionales de ciencia y tecnología."
            }
        ],
        quote: "Cuando un estudiante comprende que la ciencia y la tecnología resuelven problemas reales de su entorno, su curiosidad se vuelve imparable.",
        officeHours: "Lunes y Miércoles de 3:00 PM a 4:30 PM"
    },
    {
        id: "carmen-vega",
        name: "Lic. Carmen Vega",
        role: "Coordinadora de Bienestar Estudiantil",
        category: "bienestar",
        level: "Psicología",
        badge: "Psicóloga Educativa",
        bio: "Orientadora y especialista en inteligencia socioemocional, velando por un clima escolar seguro, empático y de acompañamiento constante.",
        tags: ["Tutoría Integral", "Desarrollo Emocional"],
        image: "/teacher_3.png",
        academicTraining: [
            {
                degree: "Licenciatura en Psicología con mención Educativa",
                institution: "Universidad Peruana Cayetano Heredia (UPCH)",
                year: "2012"
            },
            {
                degree: "Especialización en Neuroeducación y Clima Escolar Positivo",
                institution: "Universidad Nebrija de España",
                year: "2017"
            },
            {
                degree: "Certificación en Mediación y Resolución Pacífica de Conflictos",
                institution: "Asociación Peruana de Psicología Escolar",
                year: "2020"
            }
        ],
        experience: [
            {
                period: "2017 - Presente",
                role: "Jefa del Departamento Psicopedagógico",
                description: "Acompañamiento personalizado a estudiantes, talleres de inteligencia emocional y escuela de padres."
            },
            {
                period: "2013 - 2016",
                role: "Psicóloga Escolar en Nivel Primaria y Secundaria",
                description: "Diseño de programas de adaptación escolar, orientación vocacional y prevención de dificultades de aprendizaje."
            }
        ],
        quote: "Un niño que se siente seguro y valorado emocionalmente aprende el doble de rápido y forja relaciones basadas en el respeto.",
        officeHours: "Lunes a Viernes de 8:30 AM a 1:00 PM"
    },
    {
        id: "patricia-morales",
        name: "Lic. Patricia Morales",
        role: "Coordinadora de Nivel Inicial",
        category: "inicial",
        level: "Inicial",
        badge: "Especialista en Primera Infancia",
        bio: "Dedicada a la estimulación psicomotriz, el desarrollo del lenguaje y la socialización armónica en los primeros años de vida escolar.",
        tags: ["Estimulación Temprana", "Juego Guiado"],
        image: "/teacher_4.png",
        academicTraining: [
            {
                degree: "Licenciatura en Educación Inicial",
                institution: "Pontificia Universidad Católica del Perú (PUCP)",
                year: "2010"
            },
            {
                degree: "Especialización en Psicomotricidad y Desarrollo Infantil",
                institution: "Centro de Estudios Psicomotrices del Perú",
                year: "2015"
            },
            {
                degree: "Diplomado en Metodología Reggio Emilia y Espacios de Aprendizaje",
                institution: "Red Solare",
                year: "2019"
            }
        ],
        experience: [
            {
                period: "2018 - Presente",
                role: "Coordinadora Pedagógica de Nivel Inicial (3, 4 y 5 años)",
                description: "Lidera el equipo de docentes y auxiliares de preescolar, garantizando ambientes seguros y estimulantes."
            },
            {
                period: "2011 - 2017",
                role: "Docente Tutora de Aulas de 4 y 5 Años",
                description: "Implementó proyectos vivenciales de descubrimiento de la naturaleza y primeros acercamientos al pensamiento lógico."
            }
        ],
        quote: "El juego es el trabajo más serio de la infancia; en él se construyen las bases de toda la seguridad y el amor por aprender.",
        officeHours: "Miércoles de 8:00 AM a 10:30 AM"
    },
    {
        id: "javier-mendoza",
        name: "Prof. Javier Mendoza",
        role: "Docente de Matemática y Ciencias (Primaria)",
        category: "primaria",
        level: "Primaria",
        badge: "Razonamiento Lógico",
        bio: "Promueve el descubrimiento matemático mediante resolución de problemas cotidianos, retos colaborativos y pensamiento analítico.",
        tags: ["Lógica Matemática", "Método Singapur"],
        image: "/teacher_5.png",
        academicTraining: [
            {
                degree: "Licenciatura en Educación Primaria con mención en Matemáticas",
                institution: "Universidad Nacional Enrique Guzmán y Valle (La Cantuta)",
                year: "2013"
            },
            {
                degree: "Diplomado en Didáctica de las Matemáticas con Método Singapur",
                institution: "Instituto de Investigación Pedagógica",
                year: "2018"
            }
        ],
        experience: [
            {
                period: "2017 - Presente",
                role: "Docente Titular de Matemática para 4°, 5° y 6° de Primaria",
                description: "Responsable del programa de cálculo mental y razonamiento lógico aplicado."
            },
            {
                period: "2013 - 2016",
                role: "Profesor de Ciencias y Matemática Primaria",
                description: "Entrenador de equipos escolares clasificados en olimpiadas matemáticas interescolares."
            }
        ],
        quote: "No enseñamos fórmulas para memorizar, sino caminos lógicos para razonar y descubrir la belleza del pensamiento abstracto.",
        officeHours: "Viernes de 2:00 PM a 3:30 PM"
    },
    {
        id: "sofia-castro",
        name: "Prof. Sofía Castro",
        role: "Docente de Inicial & Inglés Lúdico",
        category: "inicial",
        level: "Inicial",
        badge: "Educación Bilingüe Temprana",
        bio: "Facilita la inmersión natural en inglés a través de cuentos, canciones y experiencias sensoriales que despiertan el amor por aprender.",
        tags: ["Inmersión en Inglés", "Psicomotricidad"],
        image: "/teacher_6.png",
        academicTraining: [
            {
                degree: "Licenciatura en Educación Inicial Bilingüe",
                institution: "Universidad Femenina del Sagrado Corazón (UNIFÉ)",
                year: "2017"
            },
            {
                degree: "Certificación Internacional Cambridge C1 Advanced (CAE)",
                institution: "Cambridge Assessment English",
                year: "2019"
            },
            {
                degree: "Certificación en Metodología Fonética Jolly Phonics",
                institution: "Jolly Learning UK",
                year: "2021"
            }
        ],
        experience: [
            {
                period: "2020 - Presente",
                role: "Docente de Inglés Lúdico en Inicial 3, 4 y 5 años",
                description: "Diseño de experiencias inmersivas 100% en inglés con canciones, dramatización y rimas infantiles."
            },
            {
                period: "2017 - 2019",
                role: "Docente Asistente Bilingüe",
                description: "Acompañamiento a niños en el desarrollo temprano del bilingüismo comunicativo."
            }
        ],
        quote: "Aprender un segundo idioma jugando y cantando es el regalo cognitivo más valioso que podemos dar en los primeros años.",
        officeHours: "Jueves de 9:00 AM a 11:00 AM"
    },
    {
        id: "roberto-alva",
        name: "Mg. Roberto Alva",
        role: "Docente de Ciencias Exactas y Preuniversitario",
        category: "secundaria",
        level: "Secundaria",
        badge: "Maestría en Docencia",
        bio: "Prepara a los alumnos de los últimos años para el rigor universitario con un enfoque práctico en física, química y cálculo.",
        tags: ["Exigencia Preuniversitaria", "Física & Química"],
        image: "/teacher_7.png",
        academicTraining: [
            {
                degree: "Licenciatura en Educación con especialidad en Física y Matemáticas",
                institution: "Universidad Nacional de Ingeniería (UNI)",
                year: "2006"
            },
            {
                degree: "Maestría en Docencia para la Educación Superior",
                institution: "Universidad Nacional Mayor de San Marcos (UNMSM)",
                year: "2013"
            }
        ],
        experience: [
            {
                period: "2015 - Presente",
                role: "Docente Principal de Física y Cálculo Preuniversitario (4° y 5° Secundaria)",
                description: "Coordinador del programa de preparación intensiva y olimpiadas de ciencias."
            },
            {
                period: "2007 - 2014",
                role: "Catedrático y Docente Preuniversitario",
                description: "Más de una década preparando promociones escolares con alto porcentaje de ingreso universitario."
            }
        ],
        quote: "El rigor no está reñido con la cercanía: exigimos con afecto porque conocemos el inmenso potencial de nuestros estudiantes.",
        officeHours: "Lunes de 4:00 PM a 5:30 PM"
    },
    {
        id: "gabriela-paredes",
        name: "Lic. Gabriela Paredes",
        role: "Docente de Comunicación y Comprensión Lectora",
        category: "primaria",
        level: "Primaria",
        badge: "Plan Lector & Oratoria",
        bio: "Apasionada por la literatura infantil, oratoria y la escritura creativa, fortaleciendo el pensamiento crítico y la argumentación.",
        tags: ["Comprensión Crítica", "Oratoria Infantil"],
        image: "/teacher_4.png",
        academicTraining: [
            {
                degree: "Licenciatura en Lengua y Literatura",
                institution: "Universidad Nacional Mayor de San Marcos (UNMSM)",
                year: "2014"
            },
            {
                degree: "Diplomado en Didáctica de la Lectoescritura y Fomento Lector",
                institution: "Casa de la Literatura Peruana / PUCP",
                year: "2018"
            }
        ],
        experience: [
            {
                period: "2019 - Presente",
                role: "Docente de Comunicación para 3° y 4° de Primaria",
                description: "Impulsora de clubes de debate escolar, festivales poéticos y talleres de creación narrativa."
            },
            {
                period: "2014 - 2018",
                role: "Docente de Primaria y Promotora de Lectura",
                description: "Creó programas de comprensión inferencial y crítica para estudiantes de primaria."
            }
        ],
        quote: "Un niño que lee con placer y comprende lo que lee, será un adulto con criterio propio, empático y libre.",
        officeHours: "Martes de 2:30 PM a 4:00 PM"
    },
    {
        id: "mariana-quispe",
        name: "Lic. Mariana Quispe",
        role: "Docente de Humanidades, Filosofía y Debate",
        category: "secundaria",
        level: "Secundaria",
        badge: "Debate & Liderazgo Ético",
        bio: "Guía a los jóvenes en el análisis de la historia, la ética ciudadana y los debates sociales, forjando líderes de pensamiento independiente.",
        tags: ["Debate Escolar", "Ética Ciudadana"],
        image: "/teacher_3.png",
        academicTraining: [
            {
                degree: "Licenciatura en Filosofía y Humanidades",
                institution: "Pontificia Universidad Católica del Perú (PUCP)",
                year: "2015"
            },
            {
                degree: "Especialización en Metodología de Debate Parlamentario y MUN",
                institution: "Asociación Peruana de Debate",
                year: "2019"
            }
        ],
        experience: [
            {
                period: "2018 - Presente",
                role: "Docente de Ciencias Sociales, Filosofía y Asesora del Club MUN",
                description: "Asesora de delegaciones de estudiantes participantes en modelos de Naciones Unidas intercolegiales."
            },
            {
                period: "2015 - 2017",
                role: "Docente de Historia del Perú y Formación Ciudadana",
                description: "Líder de proyectos de investigación histórica y salidas pedagógicas culturales."
            }
        ],
        quote: "Formamos jóvenes que no solo opinan, sino que argumentan con fundamentos, escuchan con respeto y defienden la verdad.",
        officeHours: "Viernes de 3:30 PM a 5:00 PM"
    }
];
