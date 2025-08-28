import "./reviewsMobile.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { reviewsGet } from "../../../app/store/reducers/public/about/aboutThunks";
import { useAbout } from "../../../app/store/reducers/public/about/aboutSlice";

export const ReviewsMobile = () => {
  const dispatch = useDispatch();
  const { review } = useAbout();

  useEffect(() => {
    dispatch(reviewsGet());
  }, [dispatch]);

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
          {review &&
            review.map((comment, i) => (
              <SwiperSlide key={i}>
                <div className="slider">
                  <div className="slider-img">
                    <div className="user">
                      <img src={comment.photo} alt="user" />
                    </div>
                    <div>
                      <h4 className="slider-title">{comment.name}</h4>
                      <Rating
                        name="read-only"
                        value={comment.rating}
                        readOnly
                      />
                    </div>
                  </div>
                  <p className="slider-text">{comment.description}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="pagination"></div>
      </div>
    </section>
  );
};
