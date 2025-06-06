import React from "react";
import nasImage from "./assets/nas.png"; 

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white px-6 py-10 flex flex-col justify-center items-center">
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience Lightning-Fast NAS Storage</h1>
        <p className="text-lg md:text-xl text-gray-300">
          Try our next-generation NAS solution for free. Reliable, secure, and blazing fast.
        </p>
      </header>

      <div className="w-full max-w-4xl mb-10">
        <img src={nasImage} alt="Cloud Home NAS" className="rounded-xl w-full h-auto object-cover shadow-lg" />
      </div>

      <section className="w-full max-w-4xl bg-blue-800 bg-opacity-20 rounded-2xl p-8 shadow-xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Why Choose Cloud Home?</h2>
        <ul className="text-left text-gray-300 space-y-3 mb-8">
          <li>✅ Plug and play simplicity</li>
          <li>✅ Automatically utilizes home Wi-Fi for faster transfer</li>
          <li>✅ Seamless remote access from anywhere</li>
          <li>✅ Military-grade encryption</li>
          <li>✅ Easy web-based management</li>
        </ul>
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-xl text-lg font-semibold shadow-md">
          Start Your Free Trial
        </button>
      </section>

      <footer className="w-full max-w-4xl text-center mt-10 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Cloud Home Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}