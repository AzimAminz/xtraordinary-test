import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        We are a team of passionate developers dedicated to building amazing web applications.
      </p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back to Home Page
      </a>
    </div>
  );
}
export default About;