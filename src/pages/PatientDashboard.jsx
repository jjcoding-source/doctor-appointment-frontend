import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StatCard from "../components/dashboard/StatCard";
import api from "../api/axios";

export default function PatientDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    upcoming: 0,
    completed: 0,
    cancelled: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const res = await api.get("/patient/appointments/summary");

      setStats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">Patient Dashboard</h1>
        <p className="text-sm text-gray-500">Manage your appointments easily</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Total" value={stats.total} icon="📋" color="bg-indigo-100" />
        <StatCard title="Upcoming" value={stats.upcoming} icon="⏰" color="bg-emerald-100" />
        <StatCard title="Completed" value={stats.completed} icon="✅" color="bg-sky-100" />
        <StatCard title="Cancelled" value={stats.cancelled} icon="❌" color="bg-rose-100" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2 rounded-xl border bg-white p-4">
          <h2 className="font-medium mb-3">Appointments</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/patient/book" className="border rounded-lg p-4 hover:bg-gray-50">
              Book appointment
            </Link>

            <Link to="/patient/appointments" className="border rounded-lg p-4 hover:bg-gray-50">
              My appointments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}