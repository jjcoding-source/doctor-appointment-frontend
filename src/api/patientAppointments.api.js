const BASE = import.meta.env.VITE_API_URL;

function authHeader() {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  };
}



export async function getMyAppointments() {
  const res = await fetch(`${BASE}/patient/appointments`, {
    headers: authHeader()
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to load appointments");
  }

  return data;
}