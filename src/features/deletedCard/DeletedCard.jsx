import "./deletedCard.scss";
import loca from "../../shared/icons/location.svg";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useState } from "react";

export const DeletedCard = ({ img, title, location, description, price }) => {
  const [liked, setLiked] = useState(false);
  console.log(img);

  const HandleLike = () => {
    console.log(liked);
    setLiked(!liked);
  };
  return (
    <div className="deletedCard">
      <div className="img">
        <img
          className="deletedCard__img"
          src={img?.image_url}
          alt={title}
          loading="lazy"
        />
        <span className="status">Удаленное</span>
      </div>

      <div className="deletedCard__info">
        <h3 className="deletedCard__info__title">{title}</h3>
        <p className="deletedCard__info__location">
          <img
            className="deletedCard__info__location__mark"
            src={loca}
            alt=""
            loading="lazy"
          />
          {location}
        </p>
        <p className="deletedCard__info__desc">{description}</p>
        <p className="deletedCard__info__price">{price}</p>
      </div>

      <div className="deletedCard__buttons">
        <button className="deletedCard__buttons__more">Подробнее</button>
        <button className="deletedCard__buttons__phone">
          <LocalPhoneIcon className="deletedCard__buttons__phone__icon" />
        </button>
        <button onClick={HandleLike} className={"deletedCard__buttons__like"}>
          <FavoriteSharpIcon
            className={`deletedCard__buttons__like__icon ${liked ? `red` : ""}`}
          />
        </button>
      </div>
    </div>
  );
};
