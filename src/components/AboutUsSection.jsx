import React from "react";

const AboutUsSection = () => {
  return (
    <section id="about" className="container mx-auto my-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Content (About Us) */}
        <div>
          <span className="text-accent-orange text-sm font-semibold uppercase tracking-wider">
            About Us ⎯⎯
          </span>
          <h3 className="text-4xl font-bold text-gray-800 mt-2 mb-6">
            Welcome to <span className="text-pink-900">HopeCourt</span>
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Every weekend, our facilities open not just for sports — but for
            hope. Each booking directly supports underprivileged students with
            essentials like school uniforms, supplies, and access to extra
            classes. At HopeCourt, community and purpose come together to build
            a brighter future, one game at a time.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 border rounded-lg shadow-sm">
              <img
                src="/assets/icons/facilities.svg"
                alt="Facilities Icon"
                className="w-10 h-10 mx-auto mb-2"
              />
              <p className="text-3xl font-bold text-primary-blue">3</p>
              <p className="text-gray-600">Facilities</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <img
                src="/assets/icons/staffs.svg" 
                alt="Staffs Icon"
                className="w-10 h-10 mx-auto mb-2 "
              />
              <p className="text-3xl font-bold text-primary-blue">63</p>
              <p className="text-gray-600">Staffs</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <img
                src="/assets/icons/clients.svg" 
                alt="Clients Icon"
                className="w-10 h-10 mx-auto mb-2"
              />
              <p className="text-3xl font-bold text-primary-blue">27</p>
              <p className="text-gray-600">Clients</p>
            </div>
          </div>
        </div>

        {/* Right Content (Location Map) */}
        <div className="flex flex-col items-start mb-8">
          <span className="text-accent-orange text-sm font-semibold uppercase tracking-wider mb-2">
            Location
          </span>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9536978251467!2d101.61614517559889!3d3.1069503534093044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bad251e7cad%3A0x11c51f797cdeae91!2sXtraordinary%20Digital%20School%20Hub!5e0!3m2!1sen!2smy!4v1748446357451!5m2!1sen!2smy"
              width="100%"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
