import  { useState } from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center p-4 relative">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          aria-label="Mark Funa Homepage"
        >
          <span className="self-center text-2xl font-semibold text-white">
            Mark Funa
          </span>
        </Link>

        <div className="flex-grow flex justify-center">
          <div
            className={`w-full md:flex md:w-auto md:order-1 transition-max-height duration-300 ease-in-out overflow-hidden ${
              menuOpen ? "max-h-96" : "max-h-0"
            } md:max-h-full`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-gray-900 md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0 justify-center">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projectpage"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-yellow-500"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navbar-sticky"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}
