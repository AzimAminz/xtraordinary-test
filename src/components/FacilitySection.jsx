import React from 'react';
import FacilityCard from './FacilityCard'; // Pastikan path import RoomCard sudah benar

const FacilitySection = () => {
  return (
    <section className="py-16 bg-white"> {/* Gunakan bg-white sesuai desain gambar */}
      <div className="container mx-auto px-4">
        {/* Judul sesuai gambar: "Explore Our ROOMS" */}
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-12 uppercase relative"> {/* Tambahkan relative untuk pseudo-element */}
          <span className="relative z-10">Explore Our <span className="text-accent-orange">Facilities</span></span>
          {/* Garis oranye di bawah "Our ROOMS" seperti di gambar */}
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-accent-orange"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Item 1: Junior Suite */}
          <FacilityCard
            imageUrl="http://googleusercontent.com/image_generation_content/0" // Ganti dengan URL gambar Junior Suite
            roomType="Junior Suite"
            price="150"
            beds="2" // Bed count for Junior Suite
            baths="1" // Bath count for Junior Suite
            wifi={true} // Wi-Fi status for Junior Suite
            description="A spacious and comfortable suite offering a luxurious stay with modern amenities and a serene ambiance, perfect for relaxation and productivity."
          />

          {/* Item 2: Executive Suite */}
          <FacilityCard
            imageUrl="http://googleusercontent.com/image_generation_content/1" // Ganti dengan URL gambar Executive Suite
            roomType="Executive Suite"
            price="180"
            beds="2" // Bed count for Executive Suite (example, adjust if different)
            baths="2" // Bath count for Executive Suite (example, adjust if different)
            wifi={true} // Wi-Fi status for Executive Suite (example, adjust if different)
            description="Our Executive Suite offers a sophisticated and private retreat, ideal for business travelers or those seeking extra space and luxury."
          />

          {/* Item 3: Super Deluxe */}
          <FacilityCard
            imageUrl="http://googleusercontent.com/image_generation_content/2" // Ganti dengan URL gambar Super Deluxe
            roomType="Super Deluxe"
            price="250"
            beds="3" // Bed count for Super Deluxe (example, adjust if different)
            baths="2" // Bath count for Super Deluxe (example, adjust if different)
            wifi={true} // Wi-Fi status for Super Deluxe (example, adjust if different)
            description="Indulge in ultimate comfort in our Super Deluxe room, featuring expansive views, premium amenities, and an unparalleled lodging experience."
          />
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;