import { Link } from "react-router-dom";

export default function PatientDashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">
        Patient Dashboard
      </h1>

      <Link
        to="/patient/book"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Book appointment
      </Link>

      <div className="flex gap-4">
        <Link
          to="/patient/doctors"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Book appointment
        </Link>

        <Link
          to="/patient/appointments"
          className="border px-4 py-2 rounded-lg"
        >
          My appointments
        </Link>
      </div>
    </div>
  );
}