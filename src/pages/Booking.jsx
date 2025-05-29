import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingSection from "../components/BookingSection";

function Booking() {
  const { id } = useParams();

  return (
    <div className="font-sans antialiased bg-gray-50">
      <Header />
      <main>
        <BookingSection  initialFacilityId={id}/>
      </main>
      <Footer />
    </div>
  );
}

export default Booking;
