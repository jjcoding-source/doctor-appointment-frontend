import { useEffect, useState } from "react";
import {
  getAllDoctors,
  activateDoctor,
  deactivateDoctor
} from "../../api/adminDoctors.api";

export default function AdminDoctors() {

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    try {
      setLoading(true);
      const res = await getAllDoctors();
      setDoctors(res.data || res);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleActivate = async (id) => {
    try {
      setActionId(id);
      await activateDoctor(id);
      await loadDoctors();
    } catch (e) {
      alert(e.message);
    } finally {
      setActionId(null);
    }
  };

  const handleDeactivate = async (id) => {
    if (!confirm("Deactivate this doctor?")) return;

    try {
      setActionId(id);
      await deactivateDoctor(id);
      await loadDoctors();
    } catch (e) {
      alert(e.message);
    } finally {
      setActionId(null);
    }
  };

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Doctors
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Specialization</th>
              <th className="text-left p-3">Status</th>
              <th className="text-right p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map(d => (
              <tr key={d._id} className="border-b last:border-b-0">
                <td className="p-3 font-medium">
                  {d.name}
                </td>
                <td className="p-3 text-gray-600">
                  {d.email}
                </td>
                <td className="p-3">
                  {d.specialization || "-"}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs
                    ${d.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                    }`}
                  >
                    {d.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="p-3 text-right">

                  {d.isActive ? (
                    <button
                      disabled={actionId === d._id}
                      onClick={() => handleDeactivate(d._id)}
                      className="px-3 py-1.5 rounded-lg border border-red-500 text-red-600 text-xs disabled:opacity-60"
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      disabled={actionId === d._id}
                      onClick={() => handleActivate(d._id)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs disabled:opacity-60"
                    >
                      Activate
                    </button>
                  )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}