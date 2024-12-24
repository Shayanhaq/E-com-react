import React from "react";

export default function Profile({ darkMode }) {
  return (
    <div
      className={`flex justify-center items-center p-6 transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full transition-colors duration-300 ${
          darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex items-center space-x-6">
          <img
            src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/465009504_3936006186645848_3308954008077880070_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEH-HAyelHYaTdDYC5ApPusCgm9DDWIYJgKCb0MNYhgmIz_nleMFFQjvA36dXkCH2tIDhJPCJdjAufKTXeYf9qL&_nc_ohc=g3UFOu4070cQ7kNvgHcDeTt&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=A10i7uUpi_BYKP6DU5HjOdW&oh=00_AYAymFC5lE6o421QxEC5BlZjHZyAQiUFCE39uBeNJErLBw&oe=674ADC8C"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold">{darkMode ? "text-gray-300" : "text-gray-800"}" SHAYAN HAQ</h2>
            <p className="text-gray-500">@Shayanhaq</p>
            <p className="mt-2">{darkMode ? "text-gray-400" : "text-gray-600"}
              A passionate developer with a love for coding and creativity.
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="text-2xl font-semibold mb-4">Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Email:</span>
              <span className={darkMode ? "text-gray-300" : "text-gray-800"}>haqshayan2@gmail.com</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Phone:</span>
              <span className={darkMode ? "text-gray-300" : "text-gray-800"}>090078601</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Address:</span>
              <span className={darkMode ? "text-gray-300" : "text-gray-800"}>Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-red-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
  