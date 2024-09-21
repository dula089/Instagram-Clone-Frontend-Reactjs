import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  let token = localStorage.getItem("token");

  return !token ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;
