import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../contexts/UserContexts";

export function GuestRoute() {
  const ctx = useContext(userContext);

  if (!ctx) return <Outlet />; // no context fallback

  const { user } = ctx;

  // if already logged in → redirect to home
  return user ? <Navigate to="/home" /> : <Outlet />;
}