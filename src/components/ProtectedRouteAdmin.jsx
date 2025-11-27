import { Navigate } from "react-router-dom";

export default function ProtectedRouteAdmin({ children }) {
  const role = localStorage.getItem("role");  // viene del login

  if (role !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  return children;
}
