import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarSales from "@/components/CarSales";
import Financing from "@/components/Financing";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CarSales />
      <Financing />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}
