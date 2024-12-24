import { Link } from "react-router-dom";

export default function SignupPage({ darkMode }) {
  return (
    <div
      className={`flex items-center justify-center h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-lg shadow-lg transition-colors duration-300 ${
          darkMode ? "bg-slate-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2
          className={`text-3xl font-semibold text-center transition-colors duration-300 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Login
        </h2>
        <p
          className={`mt-2 text-center text-sm transition-colors duration-300 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Please enter your email and password to continue.
        </p>
        <form className="mt-6 space-y-4">
          {/* Email Input */}
          <div>
            <label
              className={`block text-sm font-medium transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-slate-700 text-white border-gray-600 focus:ring-slate-500"
                  : "bg-white text-black border-gray-300 focus:ring-primary"
              }`}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              className={`block text-sm font-medium transition-colors duration-300 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring transition-colors duration-300 ${
                darkMode
                  ? "bg-slate-700 text-white border-gray-600 focus:ring-slate-500"
                  : "bg-white text-black border-gray-300 focus:ring-primary"
              }`}
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className={`w-full px-4 py-2 mt-4 text-lg font-medium rounded-md transition-colors duration-300 ${
              darkMode
                ? "bg-slate-600 hover:bg-slate-500 text-white"
                : "bg-primary hover:bg-primary-dark text-white"
            }`}
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 text-center">
          <span
            className={`px-2 text-sm transition-colors duration-300 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Or
          </span>
        </div>

        {/* Sign-up Link */}
        <p
          className={`text-center text-sm transition-colors duration-300 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Don't have an account?{" "}
          <Link
            to="/resgister"
            className={`font-medium transition-colors duration-300 ${
              darkMode
                ? "text-slate-400 hover:text-slate-300"
                : "text-primary hover:underline"
            }`}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
