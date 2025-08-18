import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swagger.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import {
  Navigation,
  Pagination,
} from "swiper/modules";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import slide1 from "./swaggerImg/slide1.svg";
import slide2 from "./swaggerImg/slide2.svg";
import slide3 from "./swaggerImg/slide3.svg";
import slide4 from "./swaggerImg/slide4.svg";

export const Swagger = () => {
  const Slides = [
    {
      img: slide1,
      name: "Смирнов Александр",
      position: "Мастер по проектированию",
    },
    {
      img: slide2,
      name: "Смирнов Александр",
      position: "Мастер по проектированию",
    },
    {
      img: slide3,
      name: "Смирнов Александр",
      position: "Мастер по проектированию",
    },
    {
      img: slide4,
      name: "Смирнов Александр",
      position: "Мастер по проектированию",
    },
    {
      img: slide1,
      name: "Смирнов Александр",
      position: "Мастер по проектированию",
    },
    {
      img: slide3,
      name: "Смирнов Александр",
      position: "Мастер по проектированию",
    },
    {
      img: slide2,
      name: "Смирнов Александр",
      position: "Мастер по проектированию",
    },
  ];
  return (
    <div className="swagger">
      <div className="swagger-header">
        <h3 className="swagger-title">КОМАНДА</h3>
        <div className="swagger-nav nav">
          <button className="nav-prev btn">
            <ArrowBackRoundedIcon />
          </button>
          <button className="nav-next btn">
            <ArrowForwardRoundedIcon />
          </button>
        </div>
      </div>
      <div className="swagger-swiper">
        <Swiper
          initialSlide={2}
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={-100}
          breakpoints={{
           1380:{
            slidesPerView: 5,
            spaceBetween: -50
           },
           1255:{
            slidesPerView: 4,
            spaceBetween: -200
           },
           930:{
            slidesPerView: 3,
            spaceBetween:-100
           },
           710:{
            slidesPerView: 2,
            
           },
           0:{
            slidesPerView: 1,
           
           }
          }}
          navigation={{
            prevEl: ".nav-prev",
            nextEl: ".nav-next",
          }}
          pagination={{
            el: ".pagination",
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="swwiper"
        >
          {Slides.map((slide, i) => (
            <SwiperSlide key={i} className="slider">
              <img src={slide.img} alt="" className="slider-img" />
              <h4 className="slider-title">{slide.name}</h4>
              <p className="slider-text">{slide.position}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination"></div>
      </div>
    </div>
  );
};
