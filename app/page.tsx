import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarSales from "@/components/CarSales";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CarSales />
      <About />
      <Footer />
    </main>
  );
}
