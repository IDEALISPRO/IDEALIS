import { useEffect, useState } from "react";
import "./bannerPictures.scss";

export const BannerPictures = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const image = images || [];
  console.log(images);
  

  useEffect(() => {
    if (image.length > 0) {
      setActiveIndex(Math.floor(image.length / 2));
    }
  }, [image]);

  return (
    <div
      className="banner-pictures container"
      onMouseLeave={() => setActiveIndex(Math.floor(image.length / 2))}
    >
      {image.map((src, index) => {
        const isNeighbor =
          index === activeIndex - 1 || index === activeIndex + 1;

        return (
          <div key={src.id} className="banner-pictures-block">
            <div
              className={`banner-pictures-item ${
                activeIndex === index ? "activee" : ""
              } ${isNeighbor ? "neighborr" : ""} ${
                index === image.length - 1 ? "img_end" : ""
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
