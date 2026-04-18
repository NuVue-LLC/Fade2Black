import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Inventory from "@/components/Inventory";
import Financing from "@/components/Financing";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Inventory />
      <Financing />
      <About />
      <Testimonials />
      <HomeCTA />
      <Footer />
    </main>
  );
}
