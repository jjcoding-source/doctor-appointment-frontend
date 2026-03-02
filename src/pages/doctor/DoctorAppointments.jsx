import { useEffect, useState } from "react";
import {
  getDoctorAppointments,
  approveAppointment,
  cancelAppointmentByDoctor
} from "../../api/doctorAppointments.api";

export default function DoctorAppointments() {

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      const res = await getDoctorAppointments();
      const list = res.data || res;
      setAppointments(list);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      setActionId(id);
      await approveAppointment(id);
      await loadAppointments();
    } catch (e) {
      alert(e.message);
    } finally {
      setActionId(null);
    }
  };

  const handleCancel = async (id) => {
    if (!confirm("Cancel this appointment?")) return;

    try {
      setActionId(id);
      await cancelAppointmentByDoctor(id);
      await loadAppointments();
    } catch (e) {
      alert(e.message);
    } finally {
      setActionId(null);
    }
  };

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        My Appointments
      </h1>

      {appointments.length === 0 && (
        <p>No appointments found</p>
      )}

      <div className="space-y-4">
        {appointments.map((a) => (
          <div
            key={a._id}
            className="bg-white rounded-xl border p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <p className="font-semibold">
                {a.patient?.name}
              </p>
              <p className="text-sm text-gray-600">
                {new Date(a.startTime).toLocaleDateString()}{" "}
                {new Date(a.startTime).toLocaleTimeString()}
              </p>
              <p className="text-xs text-gray-500">
                Status: {a.status}
              </p>
            </div>

            <div className="flex gap-3">

              {a.status === "BOOKED" && (
                <>
                  <button
                    disabled={actionId === a._id}
                    onClick={() => handleApprove(a._id)}
                    className="px-4 py-2 rounded-lg text-sm bg-green-600 text-white hover:bg-green-700 disabled:opacity-60"
                  >
                    Approve
                  </button>

                  <button
                    disabled={actionId === a._id}
                    onClick={() => handleCancel(a._id)}
                    className="px-4 py-2 rounded-lg text-sm border border-red-500 text-red-600 disabled:opacity-60"
                  >
                    Cancel
                  </button>
                </>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}