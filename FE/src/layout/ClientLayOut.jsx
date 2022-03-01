import Footer from "component/Footer/Footer";
import Header from "component/Header/Header";
import Navbar from "components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function ClientLayOut() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
