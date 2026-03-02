const BASE = import.meta.env.VITE_API_URL;

function authHeader() {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  };
}



export async function getMyAppointments() {
  const res = await fetch(`${BASE}/appointments/my`, {
    headers: authHeader()
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to load appointments");
  }

  return data;
}

export async function cancelAppointment(id) {
  const res = await fetch(`${BASE}/appointments/${id}/cancel`, {
    method: "PATCH",
    headers: authHeader()
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Cancel failed");
  }

  return data;
}