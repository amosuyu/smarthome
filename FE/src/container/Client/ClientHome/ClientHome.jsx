import React from "react";
// import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import ListDoorLock from "./ListDoorLock/ListDoorLock";
import SliderFeaturedBrand from "./SliderFeaturedBrand/SliderFeaturedBrand";
import HeroSlider from "./Slide/HeroSlider";
import Contact from "../Contact/Contact";
import Blog from "../ClientBlog/Blog";
import BlogPage from "../ClientBlogPage/BlogPage";
// import OverView from '../ClientHome/OverView/OverView'
// import FeatureBrandDetail from '../FeatureBrandDetail/FeatureBrandDetail'

import ProductInCart from "../Cart/ProductInCart";

export default function ClientHome() {
  return (
    <div>
      {/* <Breadcrumb /> */}
      <HeroSlider />
      {/* <ListDoorLock /> */}
      <SliderFeaturedBrand />
      {/* <Contact />
      <Blog /> */}
      {/* <BlogPage /> */}
      {/* <OverView  /> */}
      {/* <Blog /> */}
      {/* <FeatureBrandDetail /> */}
    </div>
  );
}
