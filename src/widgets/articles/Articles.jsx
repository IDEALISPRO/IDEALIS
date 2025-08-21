import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./articles.scss";

const videos = [
  { id: 1, youtubeId: "VR7Gyji8RVo", title: "Дома из бруса Афины" },
  { id: 2, youtubeId: "xv3qEi3rBqg", title: "Дома из бруса Афины" },
  { id: 3, youtubeId: "KP4LoBFMNmw", title: "Дома из бруса Афины" },
  { id: 4, youtubeId: "A92uM-WAbWY", title: "Дома из бруса Афины" },
  { id: 5, youtubeId: "g_Y9ZV-y3bM", title: "Дома из бруса Афины" },
  { id: 6, youtubeId: "G3zIcX54UlY", title: "Дома из бруса Афины" },
  { id: 7, youtubeId: "_hHwN1S2NF4", title: "Дома из бруса Афины" },
];

export function Articles() {
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);

  const handleSwiper = (swiper) => {
    setCanSlidePrev(!swiper.isBeginning);
    setCanSlideNext(!swiper.isEnd);
  };

  const openYouTube = (youtubeId) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, "_blank");
  };

  return (
    <div className="articles-slider container">
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
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={handleSwiper}
          onSlideChange={(swiper) => handleSwiper(swiper)}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div
                className="articles-slider__card"
                onClick={() => openYouTube(video.youtubeId)}
              >
                <div className="articles-slider__video-wrapper">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="articles-slider__thumbnail"
                    style={{ cursor: "pointer" , height: "200px"}}
                  />
                  <div className="articles-slider__play"></div>
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
