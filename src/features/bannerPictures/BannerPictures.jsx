import { useEffect, useState, useMemo } from "react";
import "./bannerPictures.scss";

export const BannerPictures = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // нормализуем массив: получаем всегда массив строк
  const normalizedImages = useMemo(() => {
    if (!images) return [];
    return images.map((item) =>
      typeof item === "string" ? item : item?.image
    );
  }, [images]);

  useEffect(() => {
    if (normalizedImages.length > 0) {
      setActiveIndex(Math.floor(normalizedImages.length / 2));
    }
  }, [normalizedImages]);

  return (
    <div
      className="banner-pictures container"
      onMouseLeave={() =>
        setActiveIndex(Math.floor(normalizedImages.length / 2))
      }
    >
      {normalizedImages.map((src, index) => {
        const isNeighbor =
          index === activeIndex - 1 || index === activeIndex + 1;

        return (
          <div key={index} className="banner-pictures-block">
            <div
              className={`banner-pictures-item ${
                activeIndex === index ? "activee" : ""
              } ${isNeighbor ? "neighborr" : ""} ${
                index === normalizedImages.length - 1 ? "img_end" : ""
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
