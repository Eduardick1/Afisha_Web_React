import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import AddBlock from "./AddBlock";

export default function Layout() {
  // const { VisitedEvents } = useVisited();
  return (
    <>
      <Header />
      <Outlet />
      <AddBlock />

      <Footer />
    </>
  );
}
