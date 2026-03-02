import { Link } from "react-router-dom";
import StatCard from "../components/dashboard/StatCard";

export default function AdminDashboard() {
  return (
    <div className="space-y-5">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <p className="text-sm text-gray-500">
          System overview & management
        </p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Doctors" value="--" icon="👨‍⚕️" color="bg-indigo-100" />
        <StatCard title="Active slots" value="--" icon="⏱️" color="bg-emerald-100" />
        <StatCard title="Appointments" value="--" icon="📅" color="bg-orange-100" />
        <StatCard title="Patients" value="--" icon="🧑‍🦱" color="bg-pink-100" />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        {/* Main panel */}
        <div className="xl:col-span-2 rounded-xl border bg-white p-4">
          <h2 className="font-medium mb-3">Administration</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/admin/doctors"
              className="border rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <p className="font-medium">Manage doctors</p>
              <p className="text-xs text-gray-500 mt-1">
                Activate, deactivate and view doctors
              </p>
            </Link>

            <Link
              to="/admin/slots"
              className="border rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <p className="font-medium">Manage slots</p>
              <p className="text-xs text-gray-500 mt-1">
                Create and control available slots
              </p>
            </Link>
          </div>
        </div>

        {/* Side panel */}
        <div className="rounded-xl border bg-white p-4">
          <h2 className="font-medium mb-3">Quick tips</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Verify doctor availability regularly</li>
            <li>• Remove unused slots</li>
            <li>• Monitor appointment traffic</li>
          </ul>
        </div>

      </div>
    </div>
  );
}