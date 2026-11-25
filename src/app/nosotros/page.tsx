import type { Metadata } from 'next';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NosotrosHero from "@/components/sections/nosotros/NosotrosHero";
import MissionVision from "@/components/sections/nosotros/MissionVision";
import Values from "@/components/sections/nosotros/Values";
import Timeline from "@/components/sections/nosotros/Timeline";
import WhyUs from "@/components/sections/nosotros/WhyUs";
import NosotrosCTA from "@/components/sections/nosotros/NosotrosCTA";

export const metadata: Metadata = {
    title: "Nosotros | Colegio Particular Divino Maestro",
    description: "Conoce nuestra historia, misión, visión, valores y trayectoria formativa en el Colegio Particular Divino Maestro. Más de 25 años educando con valores y excelencia académica.",
};

export default function NosotrosPage() {
    return (
        <main>
            <Header />
            <NosotrosHero />
            <MissionVision />
            <Values />
            <Timeline />
            <WhyUs />
            <NosotrosCTA />
            <Footer />
        </main>
    );
}
