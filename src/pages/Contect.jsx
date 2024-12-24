import React, { useState } from "react";

function ModernContactForm({ darkMode }) {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., send an API request)
    alert(`Message sent by ${name}!\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Contact Info */}
      <div className="flex-1 space-y-4 m-6">
        <h1 className="text-4xl font-bold text-red-500">Get in Touch</h1>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Have any questions or need help? Reach out to us via email or phone, or use the form to send us a message.
        </p>
        <div>
          <p>
            <strong className="text-red-400">Email:</strong> support@example.com
          </p>
          <p>
            <strong className="text-red-400">Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong className="text-red-400">Address:</strong> 123 Main Street, City, Country
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1">
        <form
          className={`space-y-4 p-6 m-1 rounded-lg shadow-lg transition-colors duration-300 ${
            darkMode ? "bg-gray-800" : "bg-red-50"
          }`}
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div>
            <label
              className={`block mb-1 transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-red-500"
                  : "border-gray-300 focus:ring-red-400"
              }`}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              className={`block mb-1 transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-red-500"
                  : "border-gray-300 focus:ring-red-400"
              }`}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              className={`block mb-1 transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-red-500"
                  : "border-gray-300 focus:ring-red-400"
              }`}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full px-6 py-2 text-white rounded-md transition-all duration-300 ${
              darkMode ? "bg-red-600 hover:bg-red-700" : "bg-red-500 hover:bg-red-700"
            }`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModernContactForm;
