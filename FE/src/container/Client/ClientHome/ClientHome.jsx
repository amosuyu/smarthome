import React from "react";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import ListDoorLock from "./ListDoorLock/ListDoorLock";
import SliderFeaturedBrand from "./SliderFeaturedBrand/SliderFeaturedBrand";
import HeroSlider from "./Slide/HeroSlider";
import Contact from "../Contact/Contact";
import Blog from "../ClientBlog/Blog";
import BlogPage from "../ClientBlogPage/BlogPage";

export default function ClientHome() {
  return (
    <div>
      {/* <Breadcrumb /> */}
      {/* <ListDoorLock /> */}
      <HeroSlider />
      <SliderFeaturedBrand />
      {/* <Contact />
      <Blog /> */}
      {/* <BlogPage /> */}
    </div>
  );
}
