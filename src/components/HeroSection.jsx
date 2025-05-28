import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: 'url("/path/to/your/hero-image.jpg")' }} 
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay gelap */}
      <div className="relative z-10 text-center">
        <span className='text-primary-blue'>⎯⎯</span>
        <span className="text-sm tracking-widest uppercase  px-3 py-1">Play. Support. Inspire.</span>
        <span className='text-primary-blue'>⎯⎯</span>
        <h2 className="text-5xl font-bold mt-4 mb-8 leading-tight">
        Every booking <br />brings hope 
        </h2>
        <div className="flex space-x-4 justify-center">
          <button className="bg-accent-orange text-white px-8 py-3 rounded-md hover:bg-pink-900 transition-colors text-lg">
            BOOK NOW
          </button>
          
        </div>
      </div>
      {/* Tombol navigasi slide (kiri/kanan) bisa ditambahkan di sini */}
    </section>
  );
};

export default HeroSection;