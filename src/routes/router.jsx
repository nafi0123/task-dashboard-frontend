import { createBrowserRouter, Navigate } from "react-router";
import Login from "../pages/Auth/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },





  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
         index: "/",
       
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
