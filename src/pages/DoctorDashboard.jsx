import { Link } from "react-router-dom";

export default function DoctorDashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">
        Doctor Dashboard
      </h1>

      <Link
        to="/doctor/appointments"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        View appointments
      </Link>
    </div>
  );
}