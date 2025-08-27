import "./impressionsCard.scss";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const ImpressionCard = ({
  img,
  title,
  location,
  description,
  price,
  stats,
}) => {
  const [liked, setLiked] = useState(false);

  const HandleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="impressionItem">
      <div className="impressionCard">
        <img
          className="impressionCard__img"
          src={img.image_url}
          alt={title}
          loading="lazy"
        />

        <div className="impressionCard__info">
          <h3 className="impressionCard__info__title">{title}</h3>
          <p className="impressionCard__info__location">
            <LocationOnIcon />
            {location}
          </p>
          <p className="impressionCard__info__desc">{description}</p>
          <p className="impressionCard__info__price">{price}</p>
        </div>

        <div className="statistics none">
          <div className="statistics__line"></div>
          <div className="statistics__content">
            <h3 className="statistics__title">Статистика</h3>

            <div className="statistics__row">
              <span>Просмотры:</span>
              <div className="statistics__time-indicators">
                <span>{stats.views}</span>
              </div>
            </div>
            <div className="statistics__row">
              <span>В избранное:</span>
              <div className="statistics__time-indicators">
                <span>{stats.favorites}</span>
              </div>
            </div>
            <div className="statistics__row">
              <span>Обращения:</span>
              <div className="statistics__time-indicators">
                <span>{stats.contacts}</span>
              </div>
            </div>
            <p className="statistics__date">
              Последний показ: {stats.last_show_at}
            </p>
          </div>
        </div>

        <div className="impressionCard__buttons">
          <button className="impressionCard__buttons__more">Подробнее</button>
          <button className="impressionCard__buttons__phone">
            <LocalPhoneIcon className="impressionCard__buttons__phone__icon" />
          </button>
          <button
            onClick={HandleLike}
            className="impressionCard__buttons__like"
          >
            <FavoriteSharpIcon
              className={`impressionCard__buttons__like__icon ${liked ? `red` : ""}`}
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
              <span>{stats.views}</span>
            </div>
          </div>
          <div className="statistics__row">
            <span>В избранное:</span>
            <div className="statistics__time-indicators">
              <span>{stats.favorites}</span>
            </div>
          </div>
          <div className="statistics__row">
            <span>Обращения:</span>
            <div className="statistics__time-indicators">
              <span>{stats.contacts}</span>
            </div>
          </div>
          <p className="statistics__date">
            Последний показ: {stats.last_show_at}
          </p>
        </div>
      </div>
    </div>
  );
};
