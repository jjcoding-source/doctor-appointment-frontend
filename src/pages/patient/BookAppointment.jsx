import { useEffect, useState } from "react";
import {
  getPublicDoctors,
  getPublicDoctorSlots,
  bookAppointment
} from "../../api/patientBooking.api";

export default function BookAppointment() {

  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState(null);

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    const res = await getPublicDoctors();
    setDoctors(res.data || res);
  };

  const loadSlots = async (id) => {
    setLoading(true);
    try {
      const res = await getPublicDoctorSlots(id);
      setSlots(res.data || res);
    } finally {
      setLoading(false);
    }
  };

  const handleDoctorChange = async (e) => {
    const id = e.target.value;
    setDoctorId(id);
    setSlots([]);

    if (id) {
      await loadSlots(id);
    }
  };

  const handleBook = async (slotId) => {
    try {
      setBookingId(slotId);
      await bookAppointment(slotId);
      alert("Appointment booked");
      await loadSlots(doctorId);
    } catch (e) {
      alert(e.message);
    } finally {
      setBookingId(null);
    }
  };

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        Book Appointment
      </h1>

      {/* doctor selector */}
      <div className="max-w-md">
        <label className="text-sm font-medium">
          Select doctor
        </label>
        <select
          value={doctorId}
          onChange={handleDoctorChange}
          className="mt-1 w-full border rounded-lg px-3 py-2"
        >
          <option value="">Select doctor</option>
          {doctors.map(d => (
            <option key={d._id} value={d._id}>
              {d.name} {d.specialization && `(${d.specialization})`}
            </option>
          ))}
        </select>
      </div>

      {/* slots */}
      {doctorId && (
        <div className="bg-white border rounded-xl overflow-hidden">

          <div className="px-4 py-3 border-b font-medium">
            Available slots
          </div>

          {loading && (
            <p className="p-4">Loading...</p>
          )}

          {!loading && slots.length === 0 && (
            <p className="p-4 text-sm text-gray-500">
              No slots available
            </p>
          )}

          {!loading && slots.map(s => (
            <div
              key={s._id}
              className="flex items-center justify-between px-4 py-3 border-b last:border-b-0"
            >
              <div className="text-sm">
                {new Date(s.startTime).toLocaleString()}
                {" - "}
                {new Date(s.endTime).toLocaleString()}
              </div>

              <button
                disabled={bookingId === s._id}
                onClick={() => handleBook(s._id)}
                className="bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-lg disabled:opacity-60"
              >
                Book
              </button>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}