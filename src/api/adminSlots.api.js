const BASE = import.meta.env.VITE_API_URL;

function authHeader() {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  };
}



export async function getDoctorsForSlots() {
  const res = await fetch(`${BASE}/admin/doctors`, {
    headers: authHeader()
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to load doctors");
  return data;
}

export async function getDoctorSlots(doctorId) {
  const res = await fetch(
    `${BASE}/admin/doctors/${doctorId}/slots`,
    { headers: authHeader() }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to load slots");
  return data;
}

export async function createDoctorSlot(doctorId, payload) {
  const res = await fetch(
    `${BASE}/admin/doctors/${doctorId}/slots`,
    {
      method: "POST",
      headers: authHeader(),
      body: JSON.stringify(payload)
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to create slot");
  return data;
}

export async function deleteSlot(slotId) {
  const res = await fetch(
    `${BASE}/admin/slots/${slotId}`,
    {
      method: "DELETE",
      headers: authHeader()
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to delete slot");
  return data;
}