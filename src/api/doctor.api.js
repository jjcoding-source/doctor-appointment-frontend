const BASE = import.meta.env.VITE_API_URL;

export async function getDoctors() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE}/doctors`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to load doctors");
  }

  return data;
}