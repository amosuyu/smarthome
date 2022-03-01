// import Footer from "component/Footer/Footer";
// import Header from "component/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export default function ClientLayOut() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
