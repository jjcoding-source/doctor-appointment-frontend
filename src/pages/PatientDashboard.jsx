import { Link } from "react-router-dom";

export default function PatientDashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">
        Patient Dashboard
      </h1>

      <Link
        to="/patient/doctors"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Book appointment
      </Link>
    </div>
  );
}