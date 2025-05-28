import Navbar from "../components/Navbar";


function Home() {
  return (
    <div className="min-h-screen bg-lightest-blue">
      <Navbar />
      {/* Your other booking system content goes here */}
      <div className="p-5 bg-medium-blue-accent min-h-[calc(100vh-70px)]"> {/* Adjusted height for content below navbar */}
        <h2 className="text-dark-blue text-3xl font-bold mb-4">Welcome to the Booking System!</h2>
        <p className="text-dark-blue text-lg mb-6">
          This is where your main application content will be displayed.
          The navbar above will adapt to different screen sizes.
        </p>
        <button
          className="bg-dark-blue text-white px-6 py-3 rounded-md text-lg font-semibold
                     hover:bg-blue-700 transition-colors duration-300 focus:outline-none" // Using a standard darker blue from Tailwind's palette for hover
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
export default Home;