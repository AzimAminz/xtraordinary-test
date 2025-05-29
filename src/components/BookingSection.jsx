import React, { useState, useEffect } from 'react';
import JsonData from '../data.json'; // Pastikan path ke data.json Anda sudah benar

const projectData = JsonData; // Memuat semua data dari data.json

const BookingSection = ({ initialFacilityId }) => {
  // State untuk menyimpan ID fasilitas yang dipilih.
  // Akan diinisialisasi dengan initialFacilityId (dari URL) atau default fasilitas pertama.
  const [selectedFacilityId, setSelectedFacilityId] = useState(initialFacilityId || projectData.facilities[0].id);

  // State untuk data form booking
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [sessionType, setSessionType] = useState('full'); // 'full' atau 'hourly'
  const [startTime, setStartTime] = useState(projectData.booking_hours.start_time); // Default start time
  const [numHours, setNumHours] = useState(1); // Default 1 jam untuk booking hourly
  const [specialRequest, setSpecialRequest] = useState('');

  // State untuk feedback harga dan ketersediaan
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [dateError, setDateError] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [bookedSlots, setBookedSlots] = useState({}); // Contoh: { 'YYYY-MM-DD': { 'facilityId': { 'hour': true } } }

  // Ambil jam mulai dan akhir booking dari data
  const bookingHoursStart = parseInt(projectData.booking_hours.start_time.split(':')[0]); // Contoh: 8 (untuk 08:00)
  const bookingHoursEnd = parseInt(projectData.booking_hours.end_time.split(':')[0]);     // Contoh: 12 (untuk 12:00)

  // Buat array slot waktu yang tersedia untuk dropdown 'Start Time'
  const availableTimeSlots = [];
  for (let i = bookingHoursStart; i < bookingHoursEnd; i++) {
    availableTimeSlots.push(`${i.toString().padStart(2, '0')}:00`); // Contoh: "08:00", "09:00", dll.
  }

  // EFFECT: Memperbarui selectedFacilityId jika initialFacilityId berubah (dari URL)
  // Ini penting agar komponen secara otomatis menyesuaikan diri jika user navigasi via Link ke ID fasilitas lain
  useEffect(() => {
    if (initialFacilityId && initialFacilityId !== selectedFacilityId) {
      setSelectedFacilityId(initialFacilityId);
    }
  }, [initialFacilityId, selectedFacilityId]); // Dependencies: initialFacilityId, selectedFacilityId

  // EFFECT: Menghitung harga dan memeriksa ketersediaan setiap kali ada perubahan pada input form
  useEffect(() => {
    // Reset error dan ketersediaan jika tanggal belum dipilih
    if (!bookingDate) {
      setDateError('');
      setIsAvailable(true);
      setEstimatedPrice(0);
      return;
    }

    // Periksa apakah tanggal booking adalah hari Sabtu atau Minggu
    const date = new Date(bookingDate);
    const dayOfWeek = date.getDay(); // 0 = Minggu, 6 = Sabtu

    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      setDateError('Bookings are only available on Saturdays and Sundays.');
      setIsAvailable(false);
      setEstimatedPrice(0);
      return;
    } else {
      setDateError('');
    }

    // Temukan detail fasilitas yang sedang dipilih
    const currentFacility = projectData.facilities.find(f => f.id === selectedFacilityId);
    if (!currentFacility) {
      setIsAvailable(false); // Fasilitas tidak ditemukan
      setEstimatedPrice(0);
      return;
    }

    let bookingIsAvailable = true;
    let priceCalculation = 0;

    // Ambil slot yang sudah dibooking untuk tanggal dan fasilitas ini
    const facilityBookingsForDate = bookedSlots[bookingDate]?.[selectedFacilityId] || {};

    if (sessionType === 'full') {
      // Hitung harga untuk sesi penuh
      priceCalculation = currentFacility.price_full_session_usd;
      // Periksa setiap jam dalam sesi penuh apakah sudah dibooking
      for (let i = bookingHoursStart; i < bookingHoursEnd; i++) {
        const hourKey = i.toString().padStart(2, '0');
        if (facilityBookingsForDate[hourKey]) {
          bookingIsAvailable = false; // Ada jam yang sudah dibooking
          break;
        }
      }
    } else { // Booking per jam (hourly)
      // Hitung harga per jam
      priceCalculation = currentFacility.price_per_hour_usd * numHours;
      const startHour = parseInt(startTime.split(':')[0]);

      // Periksa setiap jam yang diminta apakah sudah dibooking atau melebihi jam operasional
      for (let i = 0; i < numHours; i++) {
        const hourToCheck = startHour + i;
        if (hourToCheck >= bookingHoursEnd) {
          bookingIsAvailable = false;
          setDateError('Requested hours extend beyond booking hours (8AM - 12PM).'); // Pesan error jika melebihi jam operasional
          break;
        }
        const hourKey = hourToCheck.toString().padStart(2, '0');
        if (facilityBookingsForDate[hourKey]) {
          bookingIsAvailable = false; // Ada jam yang sudah dibooking
          break;
        }
      }
    }

    // Perbarui state ketersediaan dan harga estimasi
    setIsAvailable(bookingIsAvailable);
    setEstimatedPrice(bookingIsAvailable ? priceCalculation : 0);

  }, [bookingDate, selectedFacilityId, sessionType, startTime, numHours, bookedSlots, bookingHoursStart, bookingHoursEnd]); // Dependencies untuk useEffect ini

  // Handler untuk submit form booking
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // Validasi dasar form
    if (!userName || !userEmail || !bookingDate || (!isAvailable && !dateError)) {
        alert('Please fill in all required fields and ensure the slot is available.');
        return;
    }

    if (dateError) {
      alert(dateError);
      return;
    }

    if (!isAvailable) {
      alert('The selected slot is not available. Please choose another time or date.');
      return;
    }

    // Logika untuk menandai slot sebagai "dibooking"
    setBookedSlots(prevBookedSlots => {
      const newBookedSlots = { ...prevBookedSlots };
      if (!newBookedSlots[bookingDate]) {
        newBookedSlots[bookingDate] = {};
      }
      if (!newBookedSlots[bookingDate][selectedFacilityId]) { 
        newBookedSlots[bookingDate][selectedFacilityId] = {};
      }

      if (sessionType === 'full') {
        for (let i = bookingHoursStart; i < bookingHoursEnd; i++) {
          const hourKey = i.toString().padStart(2, '0');
          newBookedSlots[bookingDate][selectedFacilityId][hourKey] = true;
        }
      } else { // Hourly
        const startHour = parseInt(startTime.split(':')[0]);
        for (let i = 0; i < numHours; i++) {
          const hourKey = (startHour + i).toString().padStart(2, '0');
          newBookedSlots[bookingDate][selectedFacilityId][hourKey] = true;
        }
      }
      return newBookedSlots;
    });

    // Output detail booking ke console (untuk tujuan debugging/simulasi)
    console.log({
      userName,
      userEmail,
      selectedFacilityId,
      bookingDate,
      sessionType,
      startTime: sessionType === 'hourly' ? startTime : projectData.booking_hours.start_time,
      endTime: sessionType === 'hourly' ?
                (parseInt(startTime.split(':')[0]) + numHours).toString().padStart(2, '0') + ':00' :
                projectData.booking_hours.end_time,
      numHours: sessionType === 'hourly' ? numHours : projectData.booking_hours.total_hours_per_day,
      specialRequest,
      estimatedPrice
    });

    // Konfirmasi booking ke user
    alert(`Booking confirmed for ${projectData.facilities.find(f => f.id === selectedFacilityId)?.name} on ${bookingDate} for $${estimatedPrice}. Check console for full details.`);

    // Reset form setelah booking berhasil
    setUserName('');
    setUserEmail('');
    setBookingDate('');
    setSessionType('full');
    setStartTime(projectData.booking_hours.start_time);
    setNumHours(1);
    setSpecialRequest('');
  };

  // Temukan nama fasilitas berdasarkan selectedFacilityId untuk ditampilkan di input readOnly
  const currentFacilityName = projectData.facilities.find(f => f.id === selectedFacilityId)?.name || 'Facility Not Found';

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          <div className="relative h-96 md:h-auto">
            <img
              src={projectData.facilities.find(f => f.id === selectedFacilityId)?.picture || "https://via.placeholder.com/700x500.png?text=HopeCourt+Facilities"}
              alt={projectData.facilities.find(f => f.id === selectedFacilityId)?.name || "HopeCourt Facilities"}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-primary-blue p-8 md:p-12 text-white">
            <p className="text-red-100 text-sm font-semibold uppercase tracking-wider mb-2">
              {projectData.project.name.toUpperCase()}
            </p>
            <h3 className="text-4xl font-bold mb-8">
              BOOK A FACILITY
            </h3>

            <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4" action="">
              {/* Your Name */}
              <div>
                <label htmlFor="userName" >Your Name</label>
                <input
                  type="text"
                  id="userName"
                  // -------- PERUBAHAN DI SINI --------
                  className="w-full px-4 py-3  border border-primary-blue rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-orange text-primary-blue"
                  // ------------------------------------
                  placeholder="Your Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>

              {/* Your Email */}
              <div>
                <label htmlFor="userEmail" >Your Email</label>
                <input
                  type="email"
                  id="userEmail"
                  // -------- PERUBAHAN DI SINI --------
                  className="w-full px-4 py-3  border border-primary-blue rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-orange text-primary-blue"
                  // ------------------------------------
                  placeholder="Your Email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>

              {/* Check In Date (Booking Date) */}
              <div>
                <label htmlFor="bookingDate" >Check In Date</label>
                <input
                  type="date"
                  id="bookingDate"
                  // -------- PERUBAHAN DI SINI --------
                  className={`w-full px-4 py-3 border rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 ${dateError ? 'border-red-500 ring-red-500' : 'border-primary-blue ring-accent-orange'} text-primary-blue`}
                  // ------------------------------------
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  required
                />
                {dateError && <p className="text-red-400 text-sm mt-1">{dateError}</p>}
              </div>

              {/* Session Type */}
              <div>
                <label htmlFor="sessionType" >Session Type</label>
                <select
                  id="sessionType"
                  // -------- PERUBAHAN DI SINI --------
                  className="w-full px-4 py-3.5  border border-primary-blue rounded-md focus:outline-none focus:ring-2 focus:ring-accent-orange text-primary-blue"
                  // ------------------------------------
                  value={sessionType}
                  onChange={(e) => setSessionType(e.target.value)}
                >
                  <option value="full">Full Session ({projectData.booking_hours.start_time} - {projectData.booking_hours.end_time})</option>
                  <option value="hourly">Hourly</option>
                </select>
              </div>

              {/* Selected Facility (readOnly input) */}
              <div className="col-span-full">
                <label htmlFor="facility" >Selected Facility</label>
                <input
                  type="text"
                  readOnly
                  id="facility"
                  // -------- PERUBAHAN DI SINI --------
                  className="w-full px-4 py-3  border border-primary-blue rounded-md focus:outline-none focus:ring-2 focus:ring-accent-orange text-primary-blue cursor-not-allowed"
                  // ------------------------------------
                  value={currentFacilityName}
                />
              </div>

              {/* Start Time (only if Hourly session) */}
              {sessionType === 'hourly' && (
                <div>
                  <label htmlFor="startTime" >Start Time</label>
                  <select
                    id="startTime"
                    // -------- PERUBAHAN DI SINI --------
                    className="w-full px-4 py-3  border border-primary-blue rounded-md focus:outline-none focus:ring-2 focus:ring-accent-orange text-primary-blue"
                    // ------------------------------------
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  >
                    {availableTimeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Number of Hours (only if Hourly session) */}
              {sessionType === 'hourly' && (
                <div>
                  <label htmlFor="numHours" >Number of Hours</label>
                  <input
                    type="number"
                    id="numHours"
                    min="1"
                    max={bookingHoursEnd - parseInt(startTime.split(':')[0])}
                    // -------- PERUBAHAN DI SINI --------
                    className="w-full px-4 py-3  border border-primary-blue rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-orange text-primary-blue"
                    // ------------------------------------
                    placeholder="Number of Hours"
                    value={numHours}
                    onChange={(e) => setNumHours(parseInt(e.target.value))}
                    required
                  />
                </div>
              )}

              {/* Estimated Price & Availability Status (Tidak berubah di sini) */}
              <div className="col-span-full flex justify-between items-center mt-2">
                <div className="text-left">
                  <p className="text-sm text-red-100">Estimated Price:</p>
                  <p className="text-3xl font-bold text-green-400">${estimatedPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-red-100">Availability:</p>
                  <p className={`text-xl font-bold ${isAvailable ? 'text-green-400' : 'text-red-400'}`}>
                    {bookingDate ? (isAvailable ? 'AVAILABLE' : 'BOOKED') : 'Select Date'}
                  </p>
                </div>
              </div>

              {/* Special Request */}
              <div className="col-span-full">
                <label htmlFor="specialRequest" >Special Request</label>
                <textarea
                  id="specialRequest"
                  // -------- PERUBAHAN DI SINI --------
                  className="w-full px-4 py-3  border border-primary-blue rounded-md placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-orange text-primary-blue h-24"
                  // ------------------------------------
                  placeholder="Special Request"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                ></textarea>
              </div>

              {/* BOOK NOW Button (Tidak berubah) */}
              <div className="col-span-full mt-4">
                <button
                  type="submit"
                  className={`w-full py-4 rounded-md font-bold text-lg transition-colors ${isAvailable && !dateError && bookingDate && userName && userEmail ? 'bg-accent-orange hover:bg-pink-900 text-white' : 'bg-red-200 text-red-400 cursor-not-allowed'}`}
                  disabled={!isAvailable || !!dateError || !bookingDate || !userName || !userEmail}
                >
                  BOOK NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;