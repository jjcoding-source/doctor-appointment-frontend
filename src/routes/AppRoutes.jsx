import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import PatientLayout from "../layouts/PatientLayout";
import DoctorLayout from "../layouts/DoctorLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import PatientDoctors from "../pages/patient/Doctors";
import PatientAppointments from "../pages/patient/Appointments";

import DoctorDashboard from "../pages/doctor/Dashboard";
import DoctorAppointments from "../pages/doctor/Appointments";
import DoctorCalendar from "../pages/doctor/Calendar";

import AdminDoctors from "../pages/admin/Doctors";
import AdminSlots from "../pages/admin/Slots";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Patient */}
      <Route path="/patient" element={<PatientLayout />}>
        <Route path="doctors" element={<PatientDoctors />} />
        <Route path="appointments" element={<PatientAppointments />} />
      </Route>

      {/* Doctor */}
      <Route path="/doctor" element={<DoctorLayout />}>
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route path="calendar" element={<DoctorCalendar />} />
        <Route path="appointments" element={<DoctorAppointments />} />
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="doctors" element={<AdminDoctors />} />
        <Route path="slots" element={<AdminSlots />} />
      </Route>

    </Routes>
  );
}