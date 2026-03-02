import { Link } from "react-router-dom";
import StatCard from "../components/dashboard/StatCard";

export default function PatientDashboard() {
  return (
    <div className="space-y-5">

      <div>
        <h1 className="text-2xl font-semibold">Patient Dashboard</h1>
        <p className="text-sm text-gray-500">
          Manage your appointments easily
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Total" value="--" icon="📋" color="bg-indigo-100" />
        <StatCard title="Upcoming" value="--" icon="⏰" color="bg-emerald-100" />
        <StatCard title="Completed" value="--" icon="✅" color="bg-sky-100" />
        <StatCard title="Cancelled" value="--" icon="❌" color="bg-rose-100" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        <div className="xl:col-span-2 rounded-xl border bg-white p-4">
          <h2 className="font-medium mb-3">Appointments</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/patient/book"
              className="border rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <p className="font-medium">Book appointment</p>
              <p className="text-xs text-gray-500 mt-1">
                Choose doctor and time slot
              </p>
            </Link>

            <Link
              to="/patient/appointments"
              className="border rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <p className="font-medium">My appointments</p>
              <p className="text-xs text-gray-500 mt-1">
                Track your bookings
              </p>
            </Link>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <h2 className="font-medium mb-3">Helpful info</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Book early for popular doctors</li>
            <li>• Check appointment status regularly</li>
            <li>• Arrive 10 minutes early</li>
          </ul>
        </div>

      </div>
    </div>
  );
}