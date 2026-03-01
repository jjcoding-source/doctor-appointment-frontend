import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {}
        <Link to="/" className="text-xl font-bold text-indigo-600">
          MediBook
        </Link>

        {}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <a href="#services" className="hover:text-indigo-600">Services</a>
          <Link to="/login" className="hover:text-indigo-600">Login</Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Register
          </Link>
        </nav>

        {}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {}
      {open && (
        <div className="md:hidden border-t">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm text-gray-700">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
          </div>
        </div>
      )}
    </header>
  );
}