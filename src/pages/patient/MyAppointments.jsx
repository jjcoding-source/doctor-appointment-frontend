import { useEffect, useState } from "react";
import { getMyAppointments } from "../../api/patientAppointments.api";

export default function MyAppointments() {

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const res = await getMyAppointments();
      setAppointments(res.data || res);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        My Appointments
      </h1>

      {appointments.length === 0 && (
        <p className="text-sm text-gray-500">
          No appointments found
        </p>
      )}

      <div className="space-y-4">
        {appointments.map(a => (
          <div
            key={a._id}
            className="bg-white border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <p className="font-semibold">
                {a.doctor?.name}
              </p>

              <p className="text-sm text-gray-600">
                {new Date(a.startTime).toLocaleString()} -{" "}
                {new Date(a.endTime).toLocaleTimeString()}
              </p>
            </div>

            <div>
              <span
                className={`text-xs px-3 py-1 rounded-full
                ${a.status === "APPROVED" && "bg-green-100 text-green-700"}
                ${a.status === "BOOKED" && "bg-yellow-100 text-yellow-700"}
                ${a.status === "CANCELLED" && "bg-red-100 text-red-700"}
              `}
              >
                {a.status}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}