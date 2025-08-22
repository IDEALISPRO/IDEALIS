import "./reviews.scss";
import img1 from "../../shared/img/avatar1.jpg";
import img2 from "../../shared/img/avatar2.jpg";
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
    <div className="container reviews">
      <div className="reviews_div1">
        <div className="reviews_div1_h1">
          <h1>ОТЗЫВЫ</h1>
        </div>
        <div className="card">
          <div className="reviews__card reviews__card--left">
            <img
              src={reviewsData[0].avatar}
              alt="Avatar"
              className="reviews__avatar"
            />
            <h3 className="reviews__card-title">{reviewsData[0].title}</h3>
            <p className="reviews__card-text">{reviewsData[0].text}</p>
          </div>
          <div className="reviews__center">
            <div className="reviews__main-text">
              МЕЧТАЕТЕ О СОБСТВЕННОМ ДОМЕ, НО НЕ ЗНАЕТЕ,
              <br />
              КАК ЕГО ПОСТРОИТЬ? ИПОТЕКА НА
              <br />
              СТРОИТЕЛЬСТВО ДОМА - ЭТО ИДЕАЛЬНОЕ
              <br />
              РЕШЕНИЕ ДЛЯ ВАС!
            </div>
            <div className="reviews__sub-text">
              Не упустите возможность
              <br />
              связаться с нами сегодня и узнать
              <br />
              больше о том, как мы можем
              <br />
              помочь вам воплотить мечты об
              <br />
              идеальном доме на
              <br />
              строительство для вас!
            </div>
          </div>
          <div className="reviews__card reviews__card--left">
            <img
              src={reviewsData[0].avatar}
              alt="Avatar"
              className="reviews__avatar"
            />
            <h3 className="reviews__card-title">{reviewsData[0].title}</h3>
            <p className="reviews__card-text">{reviewsData[0].text}</p>
          </div>
        </div>
        <div className="card1">
          <div className="reviews__card reviews__card--left">
            <img
              src={reviewsData[0].avatar}
              alt="Avatar"
              className="reviews__avatar"
            />
            <h3 className="reviews__card-title">{reviewsData[0].title}</h3>
            <p className="reviews__card-text">{reviewsData[0].text}</p>
          </div>{" "}
          <div className="reviews__card reviews__card--left">
            <img
              src={reviewsData[0].avatar}
              alt="Avatar"
              className="reviews__avatar"
            />
            <h3 className="reviews__card-title">{reviewsData[0].title}</h3>
            <p className="reviews__card-text">{reviewsData[0].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
