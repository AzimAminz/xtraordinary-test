import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1: HopeCourt Info */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-accent-orange">HopeCourt</h4>
          <p className="text-gray-300 leading-relaxed mb-4">
            A community space dedicated to sports and charity. Your bookings directly support underprivileged students.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons (replace with actual SVG/FontAwesome/React-icons) */}
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Facebook Icon */}
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Twitter/X Icon */}
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.357.646 4.192 4.192 0 0 0 1.822-2.272c-.818.487-1.726.843-2.687 1.036a4.183 4.183 0 0 0-7.143 3.823 11.815 11.815 0 0 1-8.601-4.351 4.187 4.187 0 0 0 1.298 5.589 4.183 4.183 0 0 1-1.896-.523v.053a4.185 4.185 0 0 0 3.35 4.103 4.194 4.194 0 0 1-1.884.072 4.202 4.202 0 0 0 3.925 2.909 8.397 8.397 0 0 1-5.197 1.791 11.818 11.818 0 0 0 6.425 1.884c7.707 0 11.934-6.38 11.934-11.934l-.001-.544a8.556 8.556 0 0 0 2.083-2.177z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Instagram Icon */}
                <path fillRule="evenodd" d="M12 4C8.683 4 4 8.683 4 12s4.683 8 8 8 8-4.683 8-8-4.683-8-8-8zm0 2c-.683 0-1.32.062-1.928.181-.607.12-.533.402-.533 1.01s.074.89.533 1.01c.608.119 1.245.181 1.928.181s1.32-.062 1.928-.181c.607-.12.533-.402.533-1.01s-.074-.89-.533-1.01c-.608-.119-1.245-.181-1.928-.181zM12 9c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 2c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm6.5-5.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Facilities</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Booking</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Contact Info</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.727A8 8 0 016.343 5.273v11.454a8 8 0 0111.314 0z" />
              </svg>
              <span className="text-gray-300">123 ABC Street, Melaka, Malaysia</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-300">info@hopecourt.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L9.5 13.5a11.002 11.002 0 005 5l1.414-1.414a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-300">+60 12-345 6789</span> {/* Menggunakan format nomor Malaysia */}
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter / Latest Posts (Optional) */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">Newsletter</h4>
          <p className="text-gray-300 mb-4">
            Subscribe to our newsletter for the latest updates and promotions.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-accent-orange text-gray-800"
            />
            <button
              type="submit"
              className="bg-accent-orange text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} HopeCourt. All Rights Reserved. Designed by You.</p>
      </div>
    </footer>
  );
};

export default Footer;