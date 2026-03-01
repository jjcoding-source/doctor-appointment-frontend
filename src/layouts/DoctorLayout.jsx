import { Outlet } from "react-router-dom";

export default function DoctorLayout() {
  return (
    <div className="min-h-screen flex">
      {}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}