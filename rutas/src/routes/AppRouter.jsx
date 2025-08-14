import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Error404Page from "../pages/Error404Page";
import AdminPage from "../pages/AdminPage";
import AdminRoute from "./AdminRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>

      {/* rutas protegidas */}
      <Route element={<AdminRoute></AdminRoute>}>
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      </Route>

      <Route path="*" element={<Error404Page></Error404Page>}></Route>
    </Routes>
  );
};

export default AppRouter;
