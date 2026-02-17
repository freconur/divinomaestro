import Header from "@/components/layout/Header";
import Hero from "@/components/sections/home/Hero";
import Features from "@/components/sections/home/Features"; // Rebranded as Pilares in CSS/UI
import Teachers from "@/components/sections/home/Teachers";
import Levels from "@/components/sections/home/Levels";
import AdmissionsCTA from "@/components/sections/home/AdmissionsCTA";
import Location from "@/components/sections/home/Location";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features /> {/* Nuestros Pilares */}
      <Levels />
      <Teachers /> {/* Nuestros Profesores */}
      <AdmissionsCTA />
      <Location />
      <Footer />
    </main>
  );
}
