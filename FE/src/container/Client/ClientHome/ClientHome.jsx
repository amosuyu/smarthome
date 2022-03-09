import React from "react";
// import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import ListDoorLock from "./ListDoorLock/ListDoorLock";
import SliderFeaturedBrand from "./SliderFeaturedBrand/SliderFeaturedBrand";
import HeroSlider from "./Slide/HeroSlider";
// import OverView from '../ClientHome/OverView/OverView'
// import FeatureBrandDetail from '../FeatureBrandDetail/FeatureBrandDetail'
import Blog from "./Blog/Blog";

export default function ClientHome() {
  return (
    <div>
      {/* <Breadcrumb /> */}
      <HeroSlider />
      {/* <ListDoorLock /> */}
      <SliderFeaturedBrand />
      {/* <OverView  /> */}
      {/* <Blog /> */}
      {/* <FeatureBrandDetail /> */}
    </div>
  );
}
