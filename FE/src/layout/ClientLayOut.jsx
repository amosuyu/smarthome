import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "container/Client/Contact/Contact";
import HeroSlider from "container/Client/ClientHome/Slide/HeroSlider";


export default function ClientLayOut() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
