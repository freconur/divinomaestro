import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NosotrosHero from "@/components/sections/nosotros/NosotrosHero";
import MissionVision from "@/components/sections/nosotros/MissionVision";

export default function NosotrosPage() {
    return (
        <main>
            <Header />
            <NosotrosHero />
            <MissionVision />
            {/* Secciones adicionales como Valores o Historia podrían ir aquí */}
            <Footer />
        </main>
    );
}
