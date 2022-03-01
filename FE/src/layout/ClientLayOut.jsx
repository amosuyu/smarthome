import Header from "components/Header";
import Navbar from "components/Navbar";
import HeroSlider from "components/Slide/HeroSlider";
import React from "react";
import { Outlet } from "react-router-dom";
import {Data} from '../components/Slide/Data'

export default function ClientLayOut() {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSlider  />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
