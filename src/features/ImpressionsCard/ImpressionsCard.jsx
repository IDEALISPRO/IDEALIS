import "./impressionsCard.scss";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const ImpressionsCard = ({
  img,
  title,
  location,
  description,
  price,
}) => {
  const [liked, setLiked] = useState(false);

  const HandleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="impressionItem">
      <div className="objCard">
        <img className="objCard__img" src={img} alt={title} loading="lazy" />

        <div className="objCard__info">
          <h3 className="objCard__info__title">{title}</h3>
          <p className="objCard__info__location">
            <LocationOnIcon />
            {location}
          </p>
          <p className="objCard__info__desc">{description}</p>
          <p className="objCard__info__price">{price}</p>
        </div>

        <div className="statistics none">
        <div className="statistics__line"></div>
        <div className="statistics__content">
          <h3 className="statistics__title">Статистика</h3>

          <div className="statistics__row">
            <span>Просмотры:</span>
            <div className="statistics__time-indicators">
              <span>154</span>
            </div>
          </div>
          <div className="statistics__row">
            <span>В избранное:</span>
            <div className="statistics__time-indicators">
              <span>6</span>
            </div>
          </div>
          <div className="statistics__row">
            <span>Обращения:</span>
            <div className="statistics__time-indicators">
              <span>6</span>
            </div>
          </div>
          <p className="statistics__date">Последний показ: 02.08.2025</p>
        </div>
      </div>

        <div className="objCard__buttons">
          <button className="objCard__buttons__more">Подробнее</button>
          <button className="objCard__buttons__phone">
            <LocalPhoneIcon className="objCard__buttons__phone__icon" />
          </button>
          <button onClick={HandleLike} className="objCard__buttons__like">
            <FavoriteSharpIcon
              className={`objCard__buttons__like__icon ${liked ? `red` : ""}`}
            />
          </button>
          <div className="impressionItem_lines"></div>
        </div>
      </div>

      <div className="statistics">
        <div className="statistics__line"></div>
        <div className="statistics__content">
          <h3 className="statistics__title">Статистика</h3>

          <div className="statistics__row">
            <span>Просмотры:</span>
            <div className="statistics__time-indicators">
              <span>154</span>
            </div>
          </div>
          <div className="statistics__row">
            <span>В избранное:</span>
            <div className="statistics__time-indicators">
              <span>6</span>
            </div>
          </div>
          <div className="statistics__row">
            <span>Обращения:</span>
            <div className="statistics__time-indicators">
              <span>6</span>
            </div>
          </div>
          <p className="statistics__date">Последний показ: 02.08.2025</p>
        </div>
      </div>
    </div>
  );
};
