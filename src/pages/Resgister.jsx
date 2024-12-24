import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-lg shadow-lg transition-colors duration-300 ${
          darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2
          className={`text-2xl font-bold text-center transition-colors duration-300 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Full Name Input */}
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-slate-700 text-white border-gray-600 focus:ring-slate-500"
                  : "bg-white text-black border-gray-300 focus:ring-primary"
              }`}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-slate-700 text-white border-gray-600 focus:ring-slate-500"
                  : "bg-white text-black border-gray-300 focus:ring-primary"
              }`}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className={`block text-sm font-medium transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-slate-700 text-white border-gray-600 focus:ring-slate-500"
                  : "bg-white text-black border-gray-300 focus:ring-primary"
              }`}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 mt-4 text-lg font-medium rounded-md transition-colors duration-300 ${
              darkMode
                ? "bg-slate-600 hover:bg-slate-500 text-white"
                : "bg-primary hover:bg-primary-dark text-white"
            }`}
          >
            Sign Up
          </button>
        </form>

        {/* Log In Link */}
        <p
          className={`mt-4 text-center text-sm transition-colors duration-300 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className={`font-medium transition-colors duration-300 ${
              darkMode
                ? "text-slate-400 hover:text-slate-300"
                : "text-primary hover:underline"
            }`}
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
