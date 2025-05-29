import React, {useState} from 'react';
import FacilityCard from './FacilityCard';
import JsonData from '../data.json'; 



const FacilitySection = () => {
  const [facilityData, setFacilityData] = useState(JsonData.facilities); 

  return (
    <section className="py-16 bg-white"> {/* Gunakan bg-white sesuai desain gambar */}
      <div className="container mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-12 uppercase relative"> {/* Tambahkan relative untuk pseudo-element */}
          <span className="relative z-10">Explore Our <span className="text-accent-orange">Facilities</span></span>
          
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-accent-orange"></span>
        </h2>

        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilityData.map((facility) => (
            <FacilityCard
              key={facility.id}
              id={facility.id}
              imageUrl={facility.picture}   
              roomType={facility.name}
              price={facility.price_per_hour_usd}  
              description= {facility.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;