import { useEffect, useState } from "react";
import { getMyAppointments, cancelAppointment } from "../../api/appointment.api";

export default function MyAppointments() {

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cancelId, setCancelId] = useState(null);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const res = await getMyAppointments();
      const list = res.data || res;
      setAppointments(list);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    if (!confirm("Cancel this appointment?")) return;

    try {
      setCancelId(id);
      await cancelAppointment(id);
      await loadAppointments();
    } catch (e) {
      alert(e.message);
    } finally {
      setCancelId(null);
    }
  };

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        My appointments
      </h1>

      {appointments.length === 0 && (
        <p>No appointments found</p>
      )}

      <div className="space-y-4">
        {appointments.map((a) => (
          <div
            key={a._id}
            className="bg-white rounded-xl border p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div>
              <p className="font-semibold">
                Dr. {a.doctor?.name}
              </p>
              <p className="text-sm text-gray-600">
                {new Date(a.startTime).toLocaleDateString()}{" "}
                {new Date(a.startTime).toLocaleTimeString()}
              </p>
              <p className="text-xs text-gray-500">
                Status: {a.status}
              </p>
            </div>

            {a.status === "BOOKED" && (
              <button
                disabled={cancelId === a._id}
                onClick={() => handleCancel(a._id)}
                className="px-4 py-2 text-sm rounded-lg border border-red-500 text-red-600 hover:bg-red-50 disabled:opacity-60"
              >
                {cancelId === a._id ? "Cancelling..." : "Cancel"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}