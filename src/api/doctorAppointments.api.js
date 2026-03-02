const BASE = import.meta.env.VITE_API_URL;

function authHeader() {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  };
}


export async function getDoctorAppointments() {
  const res = await fetch(`${BASE}/doctor/appointments`, {
    headers: authHeader()
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to load appointments");
  }

  return data;
}

export async function approveAppointment(id) {
  const res = await fetch(`${BASE}/appointments/${id}/approve`, {
    method: "PATCH",
    headers: authHeader()
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Approve failed");
  }

  return data;
}

export async function cancelAppointmentByDoctor(id) {
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