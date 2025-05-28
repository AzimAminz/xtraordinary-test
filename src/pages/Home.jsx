import Navbar from "../components/Navbar";

function Home() {
  return (
    // Menggunakan flex flex-col dan min-h-screen untuk memastikan tata letak kolom yang mengisi seluruh tinggi viewport.
    <div className="flex flex-col min-h-screen bg-lightest-blue">
      <Navbar />
      {/* Div konten utama sekarang menggunakan flex-grow untuk mengisi sisa ruang vertikal. */}
      {/* min-h-[calc(100vh-70px)] dihapus karena flex-grow menanganinya secara dinamis. */}
      <div className="p-5 bg-medium-blue-accent flex-grow">
        <h2 className="text-dark-blue text-3xl font-bold mb-4">Welcome to the Booking System!</h2>
        <p className="text-dark-blue text-lg mb-6">
          This is where your main application content will be displayed.
          The navbar above will adapt to different screen sizes.
        </p>
        <button
          className="bg-dark-blue text-white px-6 py-3 rounded-md text-lg font-semibold
                     hover:bg-blue-700 transition-colors duration-300 focus:outline-none"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Home;
