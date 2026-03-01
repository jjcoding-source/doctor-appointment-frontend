import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PublicLayout from "./layouts/PublicLayout";

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}