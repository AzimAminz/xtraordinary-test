import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-700 mb-6">This is a simple React app using Vite and Tailwind CSS.</p>
      <a href="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </a>
    </div>
  );
}
export default Home;