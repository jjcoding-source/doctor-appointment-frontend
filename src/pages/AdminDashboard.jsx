import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">
        Admin Dashboard
      </h1>

      <Link
        to="/admin/doctors"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Manage Doctors
      </Link>

      <Link
        to="/admin/slots"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Manage Slots
      </Link>
      
    </div>
  );
}