import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import DoctorLayout from "./layouts/DoctorLayout";
import PatientLayout from "./layouts/PatientLayout";

import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";

import DoctorList from "./pages/patient/DoctorList";
import DoctorSlots from "./pages/patient/DoctorSlots";
import MyAppointments from "./pages/patient/MyAppointments";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import AdminDoctors from "./pages/admin/AdminDoctors";
import AdminDoctorSlots from "./pages/admin/AdminDoctorSlots";
import BookAppointment from "./pages/patient/BookAppointment";

export const router = createBrowserRouter([
  // public
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> }
    ]
  },

  // admin
  {
    element: <ProtectedRoute allowedRoles={["ADMIN"]} />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: "/admin", element: <AdminDashboard /> },
          { path: "/admin/doctors", element: <AdminDoctors /> },
          { path: "/admin/slots", element: <AdminDoctorSlots /> }
        ]
      }
    ]
  },

  // doctor
  {
    element: <ProtectedRoute allowedRoles={["DOCTOR"]} />,
    children: [
      {
        element: <DoctorLayout />,
        children: [
          { path: "/doctor", element: <DoctorDashboard /> },
          { path: "/doctor/appointments", element: <DoctorAppointments /> }
        ]
      }
    ]
  },

  // patient
  {
    element: <ProtectedRoute allowedRoles={["PATIENT"]} />,
    children: [
      {
        element: <PatientLayout />,
       children: [
         { path: "/patient", element: <PatientDashboard /> },
         { path: "/patient/book", element: <BookAppointment /> },
         { path: "/patient/appointments", element: <MyAppointments /> },
         { path: "/patient/doctors", element: <DoctorList /> },
         { path: "/patient/doctors/:doctorId/slots", element: <DoctorSlots /> }
         
      ]
    }
   ]
  }
]);