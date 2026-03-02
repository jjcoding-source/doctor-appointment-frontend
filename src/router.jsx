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
          { path: "/admin", element: <AdminDashboard /> }
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
          { path: "/doctor", element: <DoctorDashboard /> }
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
          { path: "/patient", element: <PatientDashboard /> }
        ]
      }
    ]
  }
]);