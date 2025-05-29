import React, { useEffect, useState } from 'react';
import JsonData from '../data.json';
import { Link } from 'react-router-dom';

const HeroSection = () => {

  const pictures = JsonData.facilities.map(fac => fac.picture);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [opacityState, setOpacityState] = useState(() => 
    pictures.map((_, index) => index === 0) 
  );

  useEffect(() => {
    const fadeDuration = 1000; // Durasi transisi fade dalam milidetik (misalnya 1 detik)
    const displayDuration = 3000; // Durasi gambar tampil penuh sebelum mulai fade out (misalnya 3 detik)
    const totalCycleTime = fadeDuration + displayDuration; // Total waktu satu siklus per gambar (4 detik)

    const interval = setInterval(() => {
      setOpacityState(prev => {
        const newState = prev.map(() => false); 
        const nextIndex = (currentImageIndex + 1) % pictures.length;
        newState[nextIndex] = true; 
        return newState;
      });

  
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % pictures.length);
      }, fadeDuration);

    }, totalCycleTime); 
    return () => clearInterval(interval);
  }, [currentImageIndex, pictures.length]); 


  return (
    <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Images Container */}
      <div className="absolute inset-0">
        {pictures.map((pictureUrl, index) => (
          <div
            key={pictureUrl} // Gunakan URL gambar sebagai key unik
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out 
              ${opacityState[index] ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${pictureUrl})` }}
          />
        ))}
      </div>

      {/* Simple Overlay */}
      <div className="absolute inset-0 bg-black/40 z-20" />

      {/* Content */}
      <div className="relative z-30 text-center p-4">
        <div className="flex items-center justify-center">
          <span className="text-primary-blue">⎯⎯</span>
          <span className="text-sm tracking-widest uppercase px-3 py-1">
            Play. Support. Inspire.
          </span>
          <span className="text-primary-blue">⎯⎯</span>
        </div>

        <h2 className="text-5xl font-bold mt-4 mb-8 leading-tight">
          Every booking <br /> brings hope
        </h2>

        <Link
          to="/facility"
          className="inline-block bg-accent-orange text-white px-8 py-3 rounded-md hover:bg-pink-900 transition-colors text-lg"
        >
          BOOK NOW
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;