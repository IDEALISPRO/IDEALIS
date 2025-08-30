import "./objectsCard.scss";
import loca from "../../shared/icons/location.svg";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HideImageIcon from "@mui/icons-material/HideImage";
import { NavLink } from "react-router-dom";

export const ObjectsCard = ({
  img,
  type,
  id,
  title,
  district,
  street,
  city,
  area_m2,
  rooms,
  price,
  liked,
  onLike,
  manager
}) => {
  return (
    <div className="objCard">
      {img ? (
        <img
          className="objCard__img"
          src={img[0]?.url || img?.image_url}
          alt={title}
          loading="lazy"
        />
      ) : (
        <HideImageIcon />
      )}

      <div className="objCard__info">
        <h3 className="objCard__info__title">{title}</h3>
        <p className="objCard__info__location">
          <NavLink to={`/objectDetail/${id}`}>
            <img
              className="objCard__info__location__mark"
              src={loca}
              alt=""
              loading="lazy"
            />
          </NavLink>
          {`${district}, ${street}, ${city}`}
        </p>
        <p className="objCard__info__desc">{`${rooms} комн • ${area_m2} м²`}</p>
        <p className="objCard__info__price">{price} сом</p>
      </div>

      <div className="objCard__buttons">
        <NavLink className="objCard__buttons__more" to={`/objectDetail/${id}`}>
          <button>Подробнее</button>
        </NavLink>
        <button className="objCard__buttons__phone">
          <a href={`tel:${manager}`}>
            <LocalPhoneIcon className="objCard__buttons__phone__icon" />
          </a>
        </button>
        <button onClick={onLike} className="objCard__buttons__like">
          <FavoriteSharpIcon
            className={`objCard__buttons__like__icon ${liked ? "red" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};
