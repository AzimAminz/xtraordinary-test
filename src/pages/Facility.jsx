import Header from "../components/Header";
import Footer from "../components/Footer";
import FacilitySection from "../components/FacilitySection";

function Facility() {
  return (
    <div className="font-sans antialiased bg-gray-50">
        <Header />
        <main>
           <FacilitySection />
        </main>
        <Footer />
      
    </div>
  );
}

export default Facility;
