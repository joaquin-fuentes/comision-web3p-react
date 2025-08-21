import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/FavoritesPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import Error404Page from "../pages/Error404Page";
import LayoutConNav from "../layouts/LayoutConNav";
import UserRoute from "./UserRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutConNav></LayoutConNav>}>
        {/* en el layout con navbar */}
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route element={<UserRoute></UserRoute>}>
          <Route
            path="/favoritos"
            element={<FavoritesPage></FavoritesPage>}
          ></Route>
          <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
        </Route>
      </Route>

      {/* en el layout sin navbar  */}
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/registro" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="*" element={<Error404Page></Error404Page>}></Route>
    </Routes>
  );
};

export default AppRouter;
