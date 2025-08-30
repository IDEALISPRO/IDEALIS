import "./salesCard.scss";
import loca from "../../shared/icons/location.svg";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useState } from "react";

export const SalesCard = ({ img, title, location, description, price }) => {
  const [liked, setLiked] = useState(false);
  console.log(img);

  const HandleLike = () => {
    console.log(liked);
    setLiked(!liked);
  };
  return (
    <div className="salesCard">
      <div className="img">
        <img
          className="salesCard__img"
          src={img?.image_url}
          alt={title}
          loading="lazy"
        />
        <span className="status">Продано</span>
      </div>

      <div className="salesCard__info">
        <h3 className="salesCard__info__title">{title}</h3>
        <p className="salesCard__info__location">
          <img
            className="salesCard__info__location__mark"
            src={loca}
            alt=""
            loading="lazy"
          />
          {location}
        </p>
        <p className="salesCard__info__desc">{description}</p>
        <p className="salesCard__info__price">{price}</p>
      </div>

      <div className="salesCard__buttons">
        <button className="salesCard__buttons__more">Подробнее</button>
        <button className="salesCard__buttons__phone">
          <LocalPhoneIcon className="salesCard__buttons__phone__icon" />
        </button>
        <button onClick={HandleLike} className={"salesCard__buttons__like"}>
          <FavoriteSharpIcon
            className={`salesCard__buttons__like__icon ${liked ? `red` : ""}`}
          />
        </button>
      </div>
    </div>
  );
};
