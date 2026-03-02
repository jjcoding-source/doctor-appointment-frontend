import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-4 border-b bg-white font-semibold">
        Admin Panel
      </div>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}