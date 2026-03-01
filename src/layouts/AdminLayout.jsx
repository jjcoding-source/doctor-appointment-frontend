import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      {}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}