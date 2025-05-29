import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";


function Home() {
  return (
    <div className="font-sans antialiased bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        
        <AboutUsSection />
        
      </main>
      <Footer />
    </div>
  );
}

export default Home;
