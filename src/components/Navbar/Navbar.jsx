import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import portfolio from "../../Data/portfolio";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-xl md:text-2xl font-bold text-blue-500">
          {portfolio.name}
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 text-slate-200">

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Button */}

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-slate-800"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-slate-800"
          >
            Skills
          </a>

          <a
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-slate-800"
          >
            Experience
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-slate-800"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-slate-800"
          >
            Contact
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;