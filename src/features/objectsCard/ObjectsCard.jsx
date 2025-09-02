import "./objectsCard.scss";
import loca from "../../shared/icons/location.svg";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HideImageIcon from "@mui/icons-material/HideImage";
import { NavLink, useNavigate } from "react-router-dom";

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
  manager,
}) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    if (type === "public") {
      navigate(`/admin/objectDetail/${id}`);
    } else {
      navigate(`/objectDetail/${id}`);
    }
  };

  return (
    <div className="objCard">
      {img ? (
        <img
          className="objCard__img"
          src={img?.url || img?.image_url}
          alt={title}
          loading="lazy"
          onClick={goToDetail}
        />
      ) : (
        <HideImageIcon />
      )}

      <div className="objCard__info">
        <h3 className="objCard__info__title">{title.length > 30 ? `${title.slice(0, 25)}...` : title}</h3>
        <div className="objCard__info__location" onClick={goToDetail}>
          <img
            className="objCard__info__location__mark"
            src={loca}
            alt=""
            loading="lazy"
          />
          {`${district}, ${street}, ${city}`}
        </div>
        <p className="objCard__info__desc">{`${rooms} комн • ${area_m2} м²`}</p>
        <p className="objCard__info__price">{price} сом</p>
      </div>

      <div className="objCard__buttons">
        <NavLink
          className="objCard__buttons__more"
          to={
            type == "public"
              ? `/admin/objectDetail/${id}`
              : `/objectDetail/${id}`
          }
        >
          <button>Подробнее</button>
        </NavLink>
        {type === "public" ? (
          <button className="objCard__buttons__phone">
            <LocalPhoneIcon className="objCard__buttons__phone__icon" />
          </button>
        ) : (
          <button className="objCard__buttons__phone">
            <a href={`tel:${manager}`}>
              <LocalPhoneIcon className="objCard__buttons__phone__icon" />
            </a>
          </button>
        )}
        <button onClick={onLike} className="objCard__buttons__like">
          <FavoriteSharpIcon
            className={`objCard__buttons__like__icon ${liked ? "red" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};
