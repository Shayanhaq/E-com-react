import React from "react";
import Footer from "../components/Footer";

export default function AboutUsPage({ darkMode }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Image Section */}
      <div className="flex-1 m-3">
        <img
          src="https://img.freepik.com/free-photo/small-businesses-sme-owners-woman-entrepreneurs-working-receipt-box-check-online-order_74952-2792.jpg?t=st=1731677924~exp=1731681524~hmac=3bbe3d7b55217ea1694163afef93ba8323b24e164f7e35db01a896cdc41a0e6b&w=740"
          alt="About Us"
          className="rounded-lg shadow-lg"
        />
      </div>
      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-red-500">About Us</h1>
        <p className={`mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          We are passionate about what we do. Since our inception, we've been
          driven by the goal of providing the best products and services to our
          customers.
        </p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-red-500">Our Values</h2>
          <ul
            className={`list-disc list-inside mt-2 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <li>Customer-centric approach</li>
            <li>Integrity and transparency</li>
            <li>Innovation and creativity</li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 ">
          <div
            className={`flex-1 p-4 rounded-lg shadow transition-colors duration-300 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold text-red-500">10+</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Years of Experience
            </p>
          </div>
          <div
            className={`flex-1 p-4 rounded-lg shadow transition-colors duration-300 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold text-red-500">1M+</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Happy Customers
            </p>
          </div>
          <div
            className={`flex-1 p-4 rounded-lg shadow transition-colors duration-300 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold text-red-500">50+</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Awards Won
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Modern Design Section
function ModernDesign() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 text-white py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">We Lead with Innovation</h2>
        <p className="text-xl mb-6">
          Our team is dedicated to creating cutting-edge solutions that make a
          real impact on the world.
        </p>
        <button className="px-6 py-3 bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all">
          Get Started
        </button>
      </div>
      <Footer />
    </div>
  );
}
