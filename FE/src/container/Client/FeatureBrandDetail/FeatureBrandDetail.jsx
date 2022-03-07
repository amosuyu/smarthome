import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//scss
import "./style.scss";
//img from assests
import img1 from "assets/2472divbig.jpg";
import img2 from "assets/2472dlalbig_1.jpg";
import img3 from "assets/outlet_dimmer.jpg";
import img4 from "assets/vai-pdp-msi.jpg";
//zoom image
import ReactImageMagnify from "react-image-magnify";

export default function FeatureBrandDetail() {
  const location = useLocation();
  const { description, price, title } = location.state;
  const [imgShow, setImgShow] = useState(
    "http://localhost:3000/static/media/2472divbig.791c2e6efcffe540ff69.jpg"
  );

  const onChangeImg = (e) => {
    setImgShow(e.target.src);
    const items = document.querySelectorAll(".border_img");
    items.forEach((item) => {
      item.classList.remove("img_style_border");
      if (item.src == e.target.src) {
        item.classList.toggle("img_style_border");
      }
    });
  };

  return (
    <div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="border-2 p-7">
                <div className="space-y-5 flex align-top justify-between">
                  <div className="w-1/3 m-0">
                    <img
                      onClick={onChangeImg}
                      src={img1}
                      className="border_img w-16 img_style_border"
                      alt="..."
                    />
                    <img
                      className="border_img w-16"
                      onClick={onChangeImg}
                      src={img2}
                      alt="..."
                    />
                    <img
                      className="border_img w-16"
                      onClick={onChangeImg}
                      src={img3}
                      alt="..."
                    />
                    <img
                      className="border_img w-16"
                      onClick={onChangeImg}
                      src={img4}
                      alt="..."
                    />
                  </div>
                  <div className="mt-0 w-96">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: imgShow,
                        },
                        largeImage: {
                          src: imgShow,
                          width: 1000,
                          height: 1000,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="border-2 p-7">
                <div>
                  <p className="text-[25px] font-medium text-[#1e2d7d]">
                    {title}
                  </p>
                  <div className="text-sm">
                    <span className="text-[#00badb]">INSTE</span>
                    <span className="ml-1 pl-1 border-l-2">SKU: 2474DWH</span>
                  </div>
                </div>
                <hr />
                <div>
                  <div>
                    <span className="text-[#1e2d7d] font-medium">Price:</span>{" "}
                    <span className="ml-9 text-[#00badb] text-2xl">
                      {price} VND
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="text-[#1e2d7d] font-medium">Quantity</span>
                    <select className="w-16 h-8 border-[#00badb] border-2 rounded ml-3">
                      {(() => {
                        const options = [];
                        for (let i = 1; i <= 10; i++) {
                          options.push(
                            <option key={i} value={i}>
                              {i}
                            </option>
                          );
                        }
                        return options;
                      })()}
                    </select>
                  </div>
                </div>
                <button className="ease-linear	duration-300 bg-[#fa9405] mt-8 h-12 text-white w-6/12 hover:bg-[rgba(250,148,5,.8)]">
                  Add to card
                </button>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
