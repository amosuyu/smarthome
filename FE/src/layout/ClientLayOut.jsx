import Header from "components/Header";
import Navbar from "components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";


export default function ClientLayOut() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
