import { Outlet } from "react-router-dom";

export default function PatientLayout() {
  return (
    <div className="min-h-screen">
      {}
      <Outlet />
    </div>
  );
}