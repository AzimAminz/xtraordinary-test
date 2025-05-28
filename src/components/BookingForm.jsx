import React, { useState } from 'react';

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ checkIn, checkOut, adults, children });
    // Lakukan sesuatu dengan data booking
  };

  return (
    <div className="bg-white p-8 shadow-lg rounded-lg -mt-20 relative z-20 mx-auto max-w-5xl">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        {/* Check In */}
        <div>
          <label htmlFor="checkin" className="block text-gray-700 text-sm font-bold mb-2">
            Check in
          </label>
          <input
            type="date"
            id="checkin"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        {/* Check Out */}
        <div>
          <label htmlFor="checkout" className="block text-gray-700 text-sm font-bold mb-2">
            Check out
          </label>
          <input
            type="date"
            id="checkout"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        {/* Adult */}
        <div>
          <label htmlFor="adult" className="block text-gray-700 text-sm font-bold mb-2">
            Adult
          </label>
          <select
            id="adult"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          >
            {[...Array(10).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>

        {/* Child */}
        <div>
          <label htmlFor="child" className="block text-gray-700 text-sm font-bold mb-2">
            Child
          </label>
          <select
            id="child"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          >
            {[...Array(5).keys()].map(i => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-accent-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;