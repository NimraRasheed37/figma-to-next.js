import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Destination from "@/components/Destination";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
export default function Home() {
  return (
    <>
    <div className="hero-bg">
    <Navbar />
    <Hero />
    </div>

    <Services />
<Destination />
<Booking />
<Reviews />
    <Logos />
    <Contact />
    <Footer />
    </>
  );
}
