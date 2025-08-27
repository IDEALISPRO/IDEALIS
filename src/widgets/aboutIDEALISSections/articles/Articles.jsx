import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./articles.scss";
import ReactPlayer from "react-player";

const videos = [
  {
    id: 1,
    src: "https://youtu.be/ZEdiws1rDMY?si=6dHqHWzS-PjClRXS",
    title: "Дома из бруса Афины",
  },
  {
    id: 2,
    src: "https://youtu.be/ZEdiws1rDMY?si=6dHqHWzS-PjClRXS",
    title: "Дома из бруса Афины",
  },
  {
    id: 3,
    src: "https://youtu.be/ZEdiws1rDMY?si=6dHqHWzS-PjClRXS",
    title: "Дома из бруса Афины",
  },
  {
    id: 4,
    src: "https://youtu.be/ZEdiws1rDMY?si=6dHqHWzS-PjClRXS",
    title: "Дома из бруса Афины",
  },
];

export function Articles() {
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);

  const handleSwiper = (swiper) => {
    setCanSlidePrev(!swiper.isBeginning);
    setCanSlideNext(!swiper.isEnd);
  };

  return (
    <div className="articles-slider">
      <h2 className="articles-slider__title">ВИДЕО И СТАТЬИ С ЭКСПЕРТАМИ</h2>

      <div className="articles-slider__container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: ".articles-slider__button--next",
            prevEl: ".articles-slider__button--prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={handleSwiper}
          onSlideChange={(swiper) => handleSwiper(swiper)}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="articles-slider__card">
                <div className="articles-slider__video-wrapper">
                  <ReactPlayer
                    width={"100%"}
                    height={"100%"}
                    src={video.src}
                  />
                </div>
                <p className="articles-slider__caption">{video.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`articles-slider__button articles-slider__button--prev ${
            canSlidePrev ? "active" : ""
          }`}
        >
          ←
        </button>
        <button
          className={`articles-slider__button articles-slider__button--next ${
            canSlideNext ? "active" : ""
          }`}
        >
          →
        </button>
      </div>
    </div>
  );
}
