import { Swiper, SwiperSlide } from "swiper/react";
import "./swagger.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination } from "swiper/modules";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import slide1 from "../../../shared/swaggerImg/slide1.svg";
import slide2 from "../../../shared/swaggerImg/slide2.svg";
import slide3 from "../../../shared/swaggerImg/slide3.svg";
import slide4 from "../../../shared/swaggerImg/slide4.svg";
import { useDispatch } from "react-redux";
import { useAbout } from "../../../app/store/reducers/public/about/aboutSlice";
import { useEffect } from "react";
import { teamGet } from "../../../app/store/reducers/public/about/aboutThunks";

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
    {
      img: slide1,
      name: "Смирнов Александр",
      position: "Мастер по проектированию",
    },
  ];
  const dispatch = useDispatch();
  const { teams } = useAbout();

  console.log(teams);

  useEffect(() => {
    dispatch(teamGet());
  }, [dispatch]);

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
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          navigation={{ prevEl: ".nav-prev", nextEl: ".nav-next" }}
          pagination={{ el: ".pagination", clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: false },
            980: { slidesPerView: 3, centeredSlides: true },
            1400: { slidesPerView: 5, centeredSlides: true },
          }}
        >
          {
            teams && 
          teams.map((slide, i) => (
            <SwiperSlide key={i} className="slider">
              <div className="slider-img">
                <img src={slide.image} alt="user" />
              </div>
              <h4 className="slider-title">{slide.full_name}</h4>
              <p className="slider-text">{slide.position}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination"></div>
      </div>
    </div>
  );
};
