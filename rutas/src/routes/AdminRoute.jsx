import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  //  buscar si hay un usuario en session

  const user = JSON.parse(sessionStorage.getItem("usuario")) || null;
  console.log(user);
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminRoute;
