import "./reviews.scss";
import img1 from "../../../shared/img/avatar1.jpg";
import img2 from "../../../shared/img/avatar2.jpg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { teamGet } from "../../../app/store/reducers/public/about/aboutThunks";
import { useAbout } from "../../../app/store/reducers/public/about/aboutSlice";

export const Reviews = () => {
  const reviewsData = [
    {
      avatar: img1,
      title: "БЫСТРЫЕ СРОКИ",
      text: "Вы можете начать строительство дома сегодня, а уже завтра — поехать покупать сумки.",
    },
    {
      avatar: img2,
      title: "БЫСТРЫЕ СРОКИ",
      text: "Вы можете начать строительство дома сегодня, а уже завтра — поехать покупать сумки.",
    },
    {
      avatar: img1,
      title: "БЫСТРЫЕ СРОКИ",
      text: "Вы можете начать строительство дома сегодня, а уже завтра — поехать покупать сумки.",
    },
    {
      avatar: img2,
      title: "БЫСТРЫЕ СРОКИ",
      text: "Вы можете начать строительство дома сегодня, а уже завтра — поехать покупать сумки.",
    },
  ];
  
  return (
    <div className="reviews">
      <div className="reviews__wrapper">
        <div className="reviews__header">
          <h2 className="title reviews_title">ОТЗЫВЫ</h2>
        </div>

        <div className="reviews__layout">
          <div className="reviews__item">
            <img
              src={reviewsData[0].avatar}
              alt="Avatar"
              className="reviews__avatar"
            />
            <h3 className="reviews__item-title">{reviewsData[0].title}</h3>

            <p className="reviews__item-text">{reviewsData[0].text}</p>
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
              src={reviewsData[1].avatar}
              alt="Avatar"
              className="reviews__avatar"
            />
            <h3 className="reviews__item-title">{reviewsData[1].title}</h3>
            <p className="reviews__item-text">{reviewsData[1].text}</p>
          </div>
        </div>

        <div className="reviews__bottom">
          {reviewsData.slice(2).map((review, index) => (
            <div className="reviews__item" key={index}>
              <img
                src={review.avatar}
                alt="Avatar"
                className="reviews__avatar"
              />
              <h3 className="reviews__item-title">{review.title}</h3>
              <p className="reviews__item-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
