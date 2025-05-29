import React from 'react';

// Fungsi bantuan untuk membuat ikon bintang
const StarIcon = () => (
  <svg className="w-4 h-4 text-accent-orange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.976 6.076a1 1 0 00.95.69h6.302c.962 0 1.372 1.24.588 1.81l-5.105 3.707a1 1 0 00-.364 1.118l1.976 6.076c.3.921-.755 1.688-1.539 1.118l-5.105-3.707a1 1 0 00-1.176 0l-5.105 3.707c-.784.57-1.838-.197-1.539-1.118l1.976-6.076a1 1 0 00-.364-1.118L2.05 9.493c-.784-.57-.373-1.81.588-1.81h6.302a1 1 0 00.95-.69l1.976-6.076z" />
  </svg>
);

// Fungsi bantuan untuk ikon fasilitas (Bed)
const BedIcon = () => (
  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Fungsi bantuan untuk ikon fasilitas (Bath)
const BathIcon = () => (
  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 12h.01M15 12h.01M12 12h.01M12 16h.01" />
  </svg>
);

// Fungsi bantuan untuk ikon fasilitas (Wi-Fi)
const WifiIcon = () => (
  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.288 15.038a5.25 5.25 0 017.424 0M10.15 13.03a2.25 2.25 0 013.3 0M3 8.25l7.214 7.214a12.318 12.318 0 001.954 1.835 12.318 12.318 0 001.954-1.835L21 8.25m-18 0A2.25 2.25 0 015.25 6h13.5a2.25 2.25 0 012.25 2.25m-18 0A2.25 2.25 0 003 10.5v.75m18-2.25V11.25m0 0A2.25 2.25 0 0118.75 13.5H5.25a2.25 2.25 0 01-2.25-2.25M12 10.5V1.5" />
  </svg>
);

// Komponen utama RoomCard
const FacilityCard = ({ imageUrl, roomType, price, beds, baths, wifi, description }) => {
  return (
    // Kontainer utama kartu. Karena tidak ada kelas 'md:flex', elemen di dalamnya akan menumpuk secara vertikal.
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto">
      {/* Gambar Kamar */}
      {/* Gambar akan mengambil 100% lebar dari kontainer kartu */}
      <div className="relative">
        <img src={imageUrl} alt={roomType} className="w-full h-48 object-cover" />
        {/* Tag "STARTING FROM" */}
        <div className="absolute bottom-4 left-4 bg-accent-orange text-white text-sm font-semibold px-3 py-1 rounded">
          STARTING FROM
        </div>
      </div>

      {/* Konten Detail Kamar */}
      {/* Konten akan berada di bawah gambar, mengambil 100% lebar dari kontainer kartu */}
      <div className="p-6 flex flex-col justify-between">
        {/* Harga dan Rating Bintang */}
        <div className="flex justify-between items-center mb-3">
          {/* Harga dengan format "$150/Night" */}
          <span className="text-2xl font-bold text-primary-blue">${price}<span className="text-lg text-gray-500">/Night</span></span>
          {/* 5 Bintang Orange */}
          <div className="flex space-x-0.5">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
        </div>

        {/* Tipe Kamar */}
        <h3 className="text-2xl font-bold text-primary-blue mb-3">{roomType}</h3>

        {/* Fasilitas (Bed, Bath, Wi-Fi) */}
        <div className="flex items-center text-gray-600 text-sm mb-4 space-x-3">
          <div className="flex items-center space-x-1">
            <BedIcon />
            <span>{beds} Bed</span>
          </div>
          <span className="text-gray-400">|</span>
          <div className="flex items-center space-x-1">
            <BathIcon />
            <span>{baths} Bath</span>
          </div>
          <span className="text-gray-400">|</span>
          <div className="flex items-center space-x-1">
            <WifiIcon />
            <span>{wifi ? 'WI-FI' : 'No Wi-Fi'}</span>
          </div>
        </div>

        {/* Deskripsi Kamar */}
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-auto">
          <button className="bg-accent-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition-colors w-full">
            BOOK DETAIL
          </button>
          <button className="bg-primary-blue hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded transition-colors w-full">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;