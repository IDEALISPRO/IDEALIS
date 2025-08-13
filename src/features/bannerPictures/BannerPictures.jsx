import React, { useState } from "react";
import "./bannerPictures.scss";

import img1 from "../../shared/images/img1.png";
import img2 from "../../shared/images/img2.png";
import img3 from "../../shared/images/img3.png";
import img4 from "../../shared/images/img4.png";
import img5 from "../../shared/images/img5.png";
import img6 from "../../shared/images/img6.png";
import img7 from "../../shared/images/img7.png";
import img8 from "../../shared/images/img8.png";
import img9 from "../../shared/images/img9.png";

const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export const BannerPictures = () => {
  const initialImages =
    window.innerWidth <= 576 ? allImages.slice(0, 9) : allImages;

  const middle = Math.floor(initialImages.length / 2);
  const [activeIndex, setActiveIndex] = useState(middle);

  return (
    <div
      className="banner-pictures container"
      onMouseLeave={() => setActiveIndex(middle)}
    >
      {initialImages.map((src, index) => {
        const isNeighbor =
          index === activeIndex - 1 || index === activeIndex + 1;

        return (
          <div key={index} className="banner-pictures-block">
            <div
              className={`banner-pictures-item ${
                activeIndex === index ? "active" : ""
              } ${isNeighbor ? "neighbor" : ""} ${
                index === initialImages.length - 1 ? "img_end" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <img src={src} alt={`banner-${index}`} />
            </div>
            <div className="banner-pictures-item-line"></div>
          </div>
        );
      })}
    </div>
  );
};
