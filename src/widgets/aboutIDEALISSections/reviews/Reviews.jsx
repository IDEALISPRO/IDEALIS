import "./reviews.scss";
import img1 from "../../../shared/img/avatar1.jpg";
import img2 from "../../../shared/img/avatar2.jpg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  reviewsGet,
  teamGet,
} from "../../../app/store/reducers/public/about/aboutThunks";
import { useAbout } from "../../../app/store/reducers/public/about/aboutSlice";

export const Reviews = () => {
  const dispatch = useDispatch();
  const { review } = useAbout();

  useEffect(() => {
    dispatch(reviewsGet());
  }, [dispatch]);

  return (
    <div className="reviews">
      <div className="reviews__wrapper">
        <div className="reviews__header">
          <h2 className="title reviews_title">ОТЗЫВЫ</h2>
        </div>

        <div className="reviews__layout">
          <div className="reviews__item">
            <img
              src={review[0]?.photo}
              alt="Avatar"
              className="reviews__avatar"
            />
            <h3 className="reviews__item-title">
              {review[0]?.short_description}
            </h3>

            <p className="reviews__item-text">{review[0]?.description}</p>
          </div>

          <div className="reviews__center">
            <div className="reviews__main-text">
              МЕЧТАЕТЕ О СОБСТВЕННОМ ДОМЕ, НО НЕ ЗНАЕТЕ, КАК ЕГО ПОСТРОИТЬ?
              ИПОТЕКА НА СТРОИТЕЛЬСТВО ДОМА - ЭТО ИДЕАЛЬНОЕ РЕШЕНИЕ ДЛЯ ВАС!
            </div>
            <div className="reviews__sub-text">
              Не упустите возможность связаться с нами сегодня и узнать больше о
              том, как мы можем помочь вам воплотить мечты об идеальном доме!
            </div>
          </div>

          <div className="reviews__item">
            <img
              src={review[1]?.photo}
              alt="Avatar"
              className="reviews__avatar"
            />
            <h3 className="reviews__item-title">
              {review[1]?.short_description}
            </h3>
            <p className="reviews__item-text">{review[1]?.description}</p>
          </div>
        </div>

        <div className="reviews__bottom">
          {review &&
            review.slice(2, 5).map((review, index) => (
              <div className="reviews__item" key={index}>
                <img
                  src={review.photo}
                  alt="Avatar"
                  className="reviews__avatar"
                />
                <h3 className="reviews__item-title">
                  {review.short_description}
                </h3>
                <p className="reviews__item-text">{review.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
