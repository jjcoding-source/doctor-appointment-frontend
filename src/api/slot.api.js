const BASE = import.meta.env.VITE_API_URL;

function authHeader() {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  };
}


export async function getDoctorSlots(doctorId) {
  const res = await fetch(`${BASE}/doctors/${doctorId}/slots`, {
    headers: authHeader()
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to load slots");
  }

  return data;
}

export async function bookAppointment(payload) {
  const res = await fetch(`${BASE}/appointments`, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(payload)
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Booking failed");
  }

  return data;
}