import Header from "@/components/layout/Header";
import Hero from "@/components/sections/home/Hero";
import Trajectory from "@/components/sections/home/Trajectory"; // Trayectoria institucional (fundado 1996, labores 1997)
import WhyChooseUs from "@/components/sections/home/WhyChooseUs"; // ¿Por qué elegirnos? (Línea de tiempo interactiva)
import Levels from "@/components/sections/home/Levels";
import ManagementTech from "@/components/sections/home/ManagementTech"; // Tecnología y Gestión Escolar
import Teachers from "@/components/sections/home/Teachers";
import Testimonials from "@/components/sections/home/Testimonials";
import AdmissionsCTA from "@/components/sections/home/AdmissionsCTA";
import Location from "@/components/sections/home/Location";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Trajectory />
      <WhyChooseUs /> {/* ¿Por qué elegirnos? */}
      <Levels />
      <ManagementTech /> {/* Ecosistema Digital & Gestión Escolar */}
      <Teachers /> {/* Nuestros Profesores */}
      <Testimonials /> {/* Comentarios de los Papás */}
      <AdmissionsCTA />
      <Location />
      <Footer />
    </main>
  );
}
