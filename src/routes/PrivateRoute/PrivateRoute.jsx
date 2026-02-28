import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import DashboardSkeleton from "../../pages/Dashboard/DashboardSkeleton/DashboardSkeleton";

const PrivateRoute = ({ children }) => {
  const { token, loading } = useAuth();
  const location = useLocation();

  if (loading) return<DashboardSkeleton></DashboardSkeleton>;

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
