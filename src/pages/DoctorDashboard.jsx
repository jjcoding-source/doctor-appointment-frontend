import { Link } from "react-router-dom";
import StatCard from "../components/dashboard/StatCard";

export default function DoctorDashboard() {
  return (
    <div className="space-y-5">

      <div>
        <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
        <p className="text-sm text-gray-500">
          Your appointment activity
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Today" value="--" icon="📆" color="bg-indigo-100" />
        <StatCard title="Pending" value="--" icon="⏳" color="bg-orange-100" />
        <StatCard title="Approved" value="--" icon="✅" color="bg-emerald-100" />
        <StatCard title="Cancelled" value="--" icon="❌" color="bg-rose-100" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

        <div className="xl:col-span-2 rounded-xl border bg-white p-4">
          <h2 className="font-medium mb-3">Appointments</h2>

          <Link
            to="/doctor/appointments"
            className="block border rounded-lg p-4 hover:bg-gray-50 transition"
          >
            <p className="font-medium">View appointment requests</p>
            <p className="text-xs text-gray-500 mt-1">
              Approve or cancel patient bookings
            </p>
          </Link>
        </div>

        <div className="rounded-xl border bg-gradient-to-br from-indigo-600 to-indigo-500 p-4 text-white">
          <p className="text-sm opacity-90">Focus</p>
          <p className="text-lg font-medium mt-1">
            Respond to pending requests
          </p>
          <p className="text-sm mt-3 opacity-90">
            Faster responses improve patient satisfaction.
          </p>
        </div>

      </div>
    </div>
  );
}