import Navbar from "@/components/Navbar";
import WindowTinting from "@/components/WindowTinting";
import Footer from "@/components/Footer";

export default function TintingPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20" />
      <WindowTinting />
      <Footer />
    </main>
  );
}
