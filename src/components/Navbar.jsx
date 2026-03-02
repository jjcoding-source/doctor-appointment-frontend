import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-xl font-bold text-indigo-600">
          MediBook
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

          <Link to="/" className="hover:text-indigo-600">Home</Link>

          {!user && (
            <>
              <Link to="/login" className="hover:text-indigo-600">Login</Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
              >
                Register
              </Link>
            </>
          )}

          {user && (
            <>
              {user.role === "ADMIN" && <Link to="/admin">Dashboard</Link>}
              {user.role === "DOCTOR" && <Link to="/doctor">Dashboard</Link>}
              {user.role === "PATIENT" && <Link to="/patient">Dashboard</Link>}

              <button
                onClick={handleLogout}
                className="text-red-600"
              >
                Logout
              </button>
            </>
          )}

        </nav>
      </div>
    </header>
  );
}