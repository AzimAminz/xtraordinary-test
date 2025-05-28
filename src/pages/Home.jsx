import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import BookingForm from "../components/BookingForm";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="font-sans antialiased bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        
        <AboutUsSection />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
