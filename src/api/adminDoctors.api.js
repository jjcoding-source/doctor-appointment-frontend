const BASE = import.meta.env.VITE_API_URL;

function authHeader() {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json"
  };
}


export async function getAllDoctors() {
  const res = await fetch(`${BASE}/admin/doctors`, {
    headers: authHeader()
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to load doctors");
  }

  return data;
}

export async function activateDoctor(id) {
  const res = await fetch(`${BASE}/admin/doctors/${id}/activate`, {
    method: "PATCH",
    headers: authHeader()
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Activation failed");
  }

  return data;
}

export async function deactivateDoctor(id) {
  const res = await fetch(`${BASE}/admin/doctors/${id}/deactivate`, {
    method: "PATCH",
    headers: authHeader()
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Deactivation failed");
  }

  return data;
}