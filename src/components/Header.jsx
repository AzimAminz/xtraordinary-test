import React, { useState } from 'react';
import NavbarItem from './NavbarItem'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary-blue text-white py-4 shadow-md  z-50"> {/* Tambahkan relative dan z-index untuk mobile menu */}
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Contact Info */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">HopeCourt</h1>
        </div>

        {/* Desktop Navigation Links */}
        {/* 'md:flex' akan memastikan ini tampil sebagai flexbox hanya di layar md ke atas */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="#" className="hover:text-accent-orange transition-colors">HOME</a>
          <a href="#" className="hover:text-accent-orange transition-colors">ABOUT</a>
          <a href="#" className="hover:text-accent-orange transition-colors">ROOMS</a>
          <a href="#" className="hover:text-accent-orange transition-colors">PAGES</a>
          <a href="#" className="hover:text-accent-orange transition-colors">ELEMENTS</a>
        </nav>


        {/* Burger Icon (Mobile/Tablet) */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu  */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-blue shadow-lg  transition-all duration-300 ease-in-out transform origin-top animate-fade-in-down">
          <ul className="flex flex-col ">
            <NavbarItem href="#" title="HOME"/>
            <NavbarItem href="#" title="ABOUT"/>
            <NavbarItem href="#" title="ROOMS"/>
            <NavbarItem href="#" title="PAGES"/>
            <NavbarItem href="#" title="ELEMENTS"/>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;