import { useEffect, useState } from "react";
import { getDoctors } from "../../api/doctor.api";
import { useNavigate } from "react-router-dom";

export default function DoctorList() {

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    try {
      setLoading(true);
      const res = await getDoctors();

      
      const list = res.data || res;

      setDoctors(list);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Available Doctors
      </h1>

      {doctors.length === 0 && (
        <p>No doctors available</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((d) => (
          <div
            key={d._id}
            className="bg-white rounded-2xl shadow p-5 flex flex-col"
          >
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-700">
                {d.name?.charAt(0)}
              </div>

              <div>
                <p className="font-semibold">{d.name}</p>
                <p className="text-sm text-gray-500">
                  {d.specialization || "General"}
                </p>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              {d.email}
            </div>

            <button
              onClick={() => navigate(`/patient/doctors/${d._id}/slots`)}
              className="mt-5 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
            >
              View slots
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}