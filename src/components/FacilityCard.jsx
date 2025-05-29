import React from "react";
import { Link } from "react-router-dom";

const StarIcon = () => (
  <svg
    className="w-4 h-4 text-accent-orange"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.976 6.076a1 1 0 00.95.69h6.302c.962 0 1.372 1.24.588 1.81l-5.105 3.707a1 1 0 00-.364 1.118l1.976 6.076c.3.921-.755 1.688-1.539 1.118l-5.105-3.707a1 1 0 00-1.176 0l-5.105 3.707c-.784.57-1.838-.197-1.539-1.118l1.976-6.076a1 1 0 00-.364-1.118L2.05 9.493c-.784-.57-.373-1.81.588-1.81h6.302a1 1 0 00.95-.69l1.976-6.076z" />
  </svg>
);

// Komponen utama RoomCard
const FacilityCard = ({ id,imageUrl, facilityType, price, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto">
      <div className="relative">
        <img
          src={imageUrl}
          alt={facilityType}
          className="w-full h-48 object-cover"
        />

        <div className="absolute bottom-4 left-4 bg-accent-orange text-white text-sm font-semibold px-3 py-1 rounded">
          STARTING FROM
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-3">
          <span className="text-2xl font-bold text-primary-blue">
            ${price}
            <span className="text-lg text-gray-500">/Hour</span>
          </span>

          <div className="flex space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-primary-blue mb-3">
          {facilityType}
        </h3>

        <div className="flex items-center text-gray-600 text-sm mb-4 space-x-3">
          <div className="flex items-center space-x-1">
            <span>Open in: Weekend</span>
          </div>
          <span className="text-gray-400 ">|</span>
          <div className="flex items-center space-x-1">
            <span>Operation Hour: 08:00 am - 12:00 pm</span>
          </div>
        </div>

        <p className="text-gray-700 text-base leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-auto">
          <Link to={`/booking/${id}`} className="bg-primary-blue hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded transition-colors w-full">
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
