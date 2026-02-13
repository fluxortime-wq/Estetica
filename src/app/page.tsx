import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Procedures from "@/components/Procedures";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Location from "@/components/Location";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Benefits />
      <Procedures />
      <Testimonials />
      <CTA />
      <Location />
      <FloatingWhatsApp />
    </main>
  );
}

