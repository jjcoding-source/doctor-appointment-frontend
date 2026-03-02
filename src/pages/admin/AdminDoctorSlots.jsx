import { useEffect, useState } from "react";
import {
  getDoctorsForSlots,
  getDoctorSlots,
  createDoctorSlot,
  deleteSlot
} from "../../api/adminSlots.api";

export default function AdminDoctorSlots() {

  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [slots, setSlots] = useState([]);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    const res = await getDoctorsForSlots();
    setDoctors(res.data || res);
  };

  const loadSlots = async (id) => {
    setLoading(true);
    try {
      const res = await getDoctorSlots(id);
      setSlots(res.data || res);
    } finally {
      setLoading(false);
    }
  };

  const handleDoctorChange = async (e) => {
    const id = e.target.value;
    setDoctorId(id);
    if (id) {
      await loadSlots(id);
    } else {
      setSlots([]);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!doctorId) return alert("Select doctor");

    await createDoctorSlot(doctorId, {
      startTime,
      endTime
    });

    setStartTime("");
    setEndTime("");

    await loadSlots(doctorId);
  };

  const handleDelete = async (slotId) => {
    if (!confirm("Delete this slot?")) return;

    await deleteSlot(slotId);
    await loadSlots(doctorId);
  };

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        Doctor Slots
      </h1>

      {/* doctor selector */}
      <div className="max-w-md">
        <label className="text-sm font-medium">
          Doctor
        </label>
        <select
          value={doctorId}
          onChange={handleDoctorChange}
          className="mt-1 w-full border rounded-lg px-3 py-2"
        >
          <option value="">Select doctor</option>
          {doctors.map(d => (
            <option key={d._id} value={d._id}>
              {d.name}
            </option>
          ))}
        </select>
      </div>

      {/* create slot */}
      {doctorId && (
        <form
          onSubmit={handleCreate}
          className="bg-white border rounded-xl p-4 max-w-xl space-y-4"
        >

          <h2 className="font-semibold">
            Create slot
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Start time</label>
              <input
                type="datetime-local"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="text-sm">End time</label>
              <input
                type="datetime-local"
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                required
              />
            </div>
          </div>

          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Create slot
          </button>

        </form>
      )}

      {/* slots list */}
      {doctorId && (
        <div className="bg-white border rounded-xl overflow-hidden">

          <div className="px-4 py-3 border-b font-medium">
            Slots
          </div>

          {loading && (
            <p className="p-4">Loading...</p>
          )}

          {!loading && slots.length === 0 && (
            <p className="p-4 text-sm text-gray-500">
              No slots created
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
                onClick={() => handleDelete(s._id)}
                className="text-xs text-red-600 border border-red-500 px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}