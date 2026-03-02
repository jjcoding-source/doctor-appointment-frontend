import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StatCard from "../components/dashboard/StatCard";
import api from "../api/axios";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    doctors: 0,
    activeSlots: 0,
    appointments: 0,
    patients: 0,
  });

  useEffect(() => {
    loadAdminStats();
  }, []);

  const loadAdminStats = async () => {
    try {
      const res = await api.get("/admin/dashboard/summary");
      setStats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <p className="text-sm text-gray-500">System overview & management</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Doctors" value={stats.doctors} icon="👨‍⚕️" color="bg-indigo-100" />
        <StatCard title="Active slots" value={stats.activeSlots} icon="⏱️" color="bg-emerald-100" />
        <StatCard title="Appointments" value={stats.appointments} icon="📅" color="bg-orange-100" />
        <StatCard title="Patients" value={stats.patients} icon="🧑‍🦱" color="bg-pink-100" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2 rounded-xl border bg-white p-4">
          <h2 className="font-medium mb-3">Administration</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/admin/doctors" className="border rounded-lg p-4 hover:bg-gray-50">
              Manage doctors
            </Link>

            <Link to="/admin/slots" className="border rounded-lg p-4 hover:bg-gray-50">
              Manage slots
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}