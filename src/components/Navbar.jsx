import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-light-blue-bg p-4 shadow-md flex justify-between items-center relative z-10">
      {/* Navbar Brand */}
      <div className="flex-shrink-0">
        <a href="/" className="text-dark-blue text-2xl font-bold no-underline">
          Booking System
        </a>
      </div>

      {/* Burger Icon (Mobile/Tablet) */}
      <div className="md:hidden">
        <button onClick={toggleNavbar} className="text-dark-blue focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex space-x-6">
        <a href="/bookings" className="text-dark-blue text-lg no-underline hover:text-medium-blue-accent">
          My Bookings
        </a>
        <a href="/new-booking" className="text-dark-blue text-lg no-underline hover:text-medium-blue-accent">
          New Booking
        </a>
        <a href="/profile" className="text-dark-blue text-lg no-underline hover:text-medium-blue-accent">
          Profile
        </a>
        <a href="/contact" className="text-dark-blue text-lg no-underline hover:text-medium-blue-accent">
          Contact Us
        </a>
      </div>

      {/* Mobile Menu (Conditional Display) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-light-blue-bg shadow-lg md:hidden">
          <ul className="flex flex-col py-2">
            <li>
              <a href="/bookings" className="block px-4 py-2 text-dark-blue text-lg no-underline hover:bg-lightest-blue">
                My Bookings
              </a>
            </li>
            <li>
              <a href="/new-booking" className="block px-4 py-2 text-dark-blue text-lg no-underline hover:bg-lightest-blue">
                New Booking
              </a>
            </li>
            <li>
              <a href="/profile" className="block px-4 py-2 text-dark-blue text-lg no-underline hover:bg-lightest-blue">
                Profile
              </a>
            </li>
            <li>
              <a href="/contact" className="block px-4 py-2 text-dark-blue text-lg no-underline hover:bg-lightest-blue">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;