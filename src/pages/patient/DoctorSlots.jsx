import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoctorSlots, bookAppointment } from "../../api/slot.api";

export default function DoctorSlots() {
  const { doctorId } = useParams();
  const navigate = useNavigate();

  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [bookingId, setBookingId] = useState(null);

  useEffect(() => {
    loadSlots();
  }, []);

  const loadSlots = async () => {
    try {
      setLoading(true);
      const res = await getDoctorSlots(doctorId);

      const list = res.data || res;
      setSlots(list);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBook = async (slot) => {
    try {
      setBookingId(slot._id);

      await bookAppointment({
        doctorId,
        slotId: slot._id
      });

      alert("Appointment booked successfully");
      navigate("/patient");
    } catch (e) {
      alert(e.message);
    } finally {
      setBookingId(null);
    }
  };

  if (loading) return <p>Loading slots...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Available slots
      </h1>

      {slots.length === 0 && (
        <p>No available slots</p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {slots.map((slot) => (
          <div
            key={slot._id}
            className="bg-white rounded-xl border p-4 flex flex-col justify-between"
          >
            <div className="space-y-1">
              <p className="font-semibold">
                {new Date(slot.startTime).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                {new Date(slot.startTime).toLocaleTimeString()} –{" "}
                {new Date(slot.endTime).toLocaleTimeString()}
              </p>
            </div>

            <button
              disabled={bookingId === slot._id}
              onClick={() => handleBook(slot)}
              className="mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-60"
            >
              {bookingId === slot._id ? "Booking..." : "Book"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}