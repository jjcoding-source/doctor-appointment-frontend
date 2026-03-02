import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StatCard from "../components/dashboard/StatCard";
import api from "../api/axios";

export default function DoctorDashboard() {
  const [stats, setStats] = useState({
    today: 0,
    pending: 0,
    approved: 0,
    cancelled: 0,
  });

  useEffect(() => {
    loadSummary();
  }, []);

  const loadSummary = async () => {
    try {
      const res = await api.get("/doctor/appointments/summary/today");

      setStats({
        today: res.data.todayCount,
        pending: res.data.pendingCount,
        approved: res.data.approvedCount,
        cancelled: res.data.cancelledCount,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
        <p className="text-sm text-gray-500">Your appointment activity</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Today" value={stats.today} icon="📆" color="bg-indigo-100" />
        <StatCard title="Pending" value={stats.pending} icon="⏳" color="bg-orange-100" />
        <StatCard title="Approved" value={stats.approved} icon="✅" color="bg-emerald-100" />
        <StatCard title="Cancelled" value={stats.cancelled} icon="❌" color="bg-rose-100" />
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
      </div>
    </div>
  );
}