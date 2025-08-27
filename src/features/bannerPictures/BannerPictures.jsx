import { useState } from "react";
import "./bannerPictures.scss";

export const BannerPictures = ({ images }) => {
  const initialImages = window.innerWidth <= 576 ? images.slice(0, 9) : images;
  const middle = Math.floor(initialImages?.length / 2);
  const [activeIndex, setActiveIndex] = useState(middle);

  return (
    <div
      className="banner-pictures container"
      onMouseLeave={() => setActiveIndex(middle)}
    >
      {initialImages?.map((item, index) => {
        const isNeighbor =
          index === activeIndex - 1 || index === activeIndex + 1;

        return (
          <div key={item.id} className="banner-pictures-block">
            <div
              className={`banner-pictures-item ${
                activeIndex === index ? "activee" : ""
              } ${isNeighbor ? "neighborr" : ""} ${
                index === initialImages?.length - 1 ? "img_end" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <img src={item.image} alt={`banner-${item.id}`} />
            </div>
            <div className="banner-pictures-item-line"></div>
          </div>
        );
      })}
    </div>
  );
};
