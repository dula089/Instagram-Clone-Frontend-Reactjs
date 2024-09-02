import { Route, Navigate , Outlet} from "react-router-dom";

const PrivateRoute = () => {
  let email = localStorage.getItem("email");

  return !email ? <Navigate to="/login" /> : <Outlet />;
}
export default PrivateRoute;
