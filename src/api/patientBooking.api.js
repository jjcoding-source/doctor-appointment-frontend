const BASE = import.meta.env.VITE_API_URL;

function authHeader() {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  };
}



export async function getPublicDoctors() {
  const res = await fetch(`${BASE}/public/doctors`);

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to load doctors");
  return data;
}

export async function getPublicDoctorSlots(doctorId) {
  const res = await fetch(
    `${BASE}/public/doctors/${doctorId}/slots`
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to load slots");
  return data;
}

export async function bookAppointment(slotId) {
  const res = await fetch(`${BASE}/appointments`, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ slotId })
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Booking failed");
  return data;
}