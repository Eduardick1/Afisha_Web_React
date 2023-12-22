import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Layout from "../Layout";
import HomePage from "../../pages/Home";
import Banner from "../../pages/BannerPage";
import AuthPage from "../../pages/Auth";

export function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<Banner />} />
          <Route path="About" element={<HomePage />} />
        </Route>
        <Route path="Auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
