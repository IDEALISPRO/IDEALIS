import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./articles.scss";

import preview from "../../../shared/img/articles.mp4";
import preview2 from "../../../shared/img/articles-2.mp4";
import preview3 from "../../../shared/img/articles-3.mp4";

const videos = [
  { id: 1, src: preview, title: "Дома из бруса Афины" },
  { id: 2, src: preview2, title: "Дома из бруса Афины" },
  { id: 3, src: preview3, title: "Дома из бруса Афины" },
  { id: 4, src: preview2, title: "Дома из бруса Афины" },
];

export function Articles() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);

  const openModal = (src) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if(isModalOpen){
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    return () => {
        document.body.style.overflow = "auto"; 
      }
  }, [isModalOpen]);



  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  const handleSwiper = (swiper) => {
    setCanSlidePrev(!swiper.isBeginning);
    setCanSlideNext(!swiper.isEnd);
  };

  return (
    <div className="articles-slider container">
      <h2 className="articles-slider__title">
        ВИДЕО И СТАТЬИ С ЭКСПЕРТАМИ
      </h2>

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
            576: { slidesPerView: 3 },
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
                onClick={() => openModal(video.src)}
              >
                <div className="articles-slider__video-wrapper">
                  <video src={video.src} className="articles-slider__video" muted />
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

      {isModalOpen && (
        <div className="articles-slider__modal">
          <div className="articles-slider__modal-content">
            <button
              className="articles-slider__modal-close"
              onClick={closeModal}
            >
              ✕
            </button>
            <video src={videoSrc} controls autoPlay className="articles-slider__video"></video>
          </div>
        </div>
      )}
    </div>
  );
}
