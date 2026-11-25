export interface AcademicItem {
    degree: string;
    institution: string;
    year?: string;
}

export interface ExperienceItem {
    period: string;
    role: string;
    description: string;
}

export interface Teacher {
    id: string;
    name: string;
    role: string;
    category: "direccion" | "inicial" | "primaria" | "secundaria" | "bienestar";
    level: string;
    badge: string;
    bio: string;
    tags: string[];
    image: string;
    academicTraining: AcademicItem[];
    experience: ExperienceItem[];
    quote: string;
    officeHours?: string;
}
