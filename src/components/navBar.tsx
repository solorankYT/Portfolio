import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 border-r border-gray-800 shadow-lg p-6 flex flex-col">

    
      {/* Navigation */}
      <nav className="flex flex-col space-y-4  mt-50">
        <Link
          to="/"
          className="text-white px-4 py-2 rounded hover:bg-gray-800 hover:text-yellow-500 transition"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-white px-4 py-2 rounded hover:bg-gray-800 hover:text-yellow-500 transition"
        >
          About
        </Link>

        <Link
          to="/projectpage"
          className="text-white px-4 py-2 rounded hover:bg-gray-800 hover:text-yellow-500 transition"
        >
          Projects
        </Link>
      </nav>

      {/* Optional Bottom Section */}
      <div className="mt-auto text-sm text-gray-500 flex-col">
       <a href="https://github.com/solorankYT" target="_blank" className="hover:text-yellow-500">
        <FaGithub className="text-xl" />
       </a>
       <a href="https://www.linkedin.com/in/markfuna/" target="_blank" className="hover:text-yellow-500 ml-4">
        <FaLinkedin className="text-xl" />
       </a>
      </div>

    </aside>
  );
}
