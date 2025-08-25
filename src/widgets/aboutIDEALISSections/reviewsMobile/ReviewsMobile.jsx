import "./reviewsMobile.scss";
import img1 from "../../../shared/img/avatar1.jpg";
import img2 from "../../../shared/img/avatar2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Rating } from "@mui/material";

export const ReviewsMobile = () => {
  const reviewsData = [
    {
      avatar: img1,
      title: "БЫСТРЫЕ СРОКИ",
      text: "Вы можете начать строительство дома сегодня, а уже завтра — поехать покупать сумки.",
    },
    {
      avatar: img2,
      title: "КАЧЕСТВО",
      text: "Надёжность и внимание к деталям — наша главная цель.",
    },
    {
      avatar: img1,
      title: "ГАРАНТИЯ",
      text: "Мы даём гарантию на все выполненные работы.",
    },
    {
      avatar: img2,
      title: "ИНДИВИДУАЛЬНЫЙ ПОДХОД",
      text: "Каждый клиент получает персональное решение.",
    },
  ];

  return (
    <section className="reviewsMobile">
      <h2 className="title">ОТЗЫВЫ</h2>
      <div className="reviews-swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          navigation={{ prevEl: ".nav-prev", nextEl: ".nav-next" }}
          pagination={{ el: ".pagination" }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          autoHeight={true}
        >
          {reviewsData.map((comment, i) => (
            <SwiperSlide key={i}>
              <div className="slider">
                <div className="slider-img">
                  <div className="user">
                    <img src={comment.avatar} alt="user" />
                  </div>
                  <div>
                    <h4 className="slider-title">{comment.title}</h4>
                    <Rating name="read-only" value={5} readOnly />
                  </div>
                </div>
                <p className="slider-text">{comment.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination"></div>
      </div>
    </section>
  );
};
