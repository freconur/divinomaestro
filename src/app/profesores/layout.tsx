import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Plana Docente | Colegio Divino Maestro',
    description: 'Conoce a nuestro equipo de educadores, psicólogos y coordinadores comprometidos con la excelencia académica y los valores en el Colegio Divino Maestro.',
};

export default function ProfesoresLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
