import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./modalImg.scss";
import { useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect } from "react";

export const ModalImg = ({ images, isOpen, setOpen }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;



  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          ✖
        </button>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          className="carousel"
        >
          {images?.length > 0 && images.map((img, id) => (
            <SwiperSlide key={id}>
              <img src={img.img || img.url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-nav">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowBackIcon />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
