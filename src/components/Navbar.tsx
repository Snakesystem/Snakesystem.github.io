import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Nav Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              Brand
            </Link>
          </div>
          {/* Middle Nav Links */}
          <div className="hidden md:flex md:space-x-6">
            <Link to="/" className="text-white text-lg">Home</Link>
            <Link to="/portfolio" className="text-white text-lg">Portfolio</Link>
            <Link to="/experience" className="text-white text-lg">Experience</Link>
            <Link to="/about" className="text-white text-lg">About</Link>
            <Link to="/contact" className="text-white text-lg">Contact</Link>
          </div>
          {/* Right - Language Selector */}
          <div className="hidden md:block">
            <select className="bg-gray-700 text-white px-4 py-2 rounded-md">
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
            </select>
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <Link to="/" className="block text-white px-4 py-2">Home</Link>
          <Link to="/portfolio" className="block text-white px-4 py-2">Portfolio</Link>
          <Link to="/experience" className="block text-white px-4 py-2">Experience</Link>
          <Link to="/about" className="block text-white px-4 py-2">About</Link>
          <Link to="/contact" className="block text-white px-4 py-2">Contact</Link>
          <select className="bg-gray-600 text-white block w-full mt-2 p-2 rounded-md">
            <option value="en">English</option>
            <option value="id">Bahasa Indonesia</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
