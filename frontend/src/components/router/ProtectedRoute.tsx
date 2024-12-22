import { Nav } from "../core/Nav";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";
import { HomePage } from "../core/HomePage";

export const ProtectedRoute = () => {
  const authenticated = useAuth();

  return (
    <>
      <Nav />
      <HomePage />
      {/* {authenticated ? <Outlet/> : <Navigate to="/login" />} */}
    </>
  );
};