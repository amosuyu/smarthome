import React from "react";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import ListDoorLock from "./ListDoorLock/ListDoorLock";
import SliderFeaturedBrand from "./SliderFeaturedBrand/SliderFeaturedBrand";
import HeroSlider from "./Slide/HeroSlider";
import OverView from '../ClientHome/OverView/OverView'

export default function ClientHome() {
  return (
    <div>
      {/* <Breadcrumb /> */}
      {/* <ListDoorLock /> */}
      <HeroSlider />
      <SliderFeaturedBrand />
      <OverView  />
    </div>
  );
}
