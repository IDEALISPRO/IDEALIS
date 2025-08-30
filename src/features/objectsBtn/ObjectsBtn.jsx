import "./objectsBtn.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink } from "react-router-dom";

export const ObjectsBtn = () => {
  return (
    <NavLink to={"/estate-categories"} state={{ title: "Все" }}>
      <button className="objectsMoreBtn">
        <div className="objectsMoreBtn__btn">
          <ArrowForwardIcon className="objectsMoreBtn__btn__icon" />
        </div>
        <h2 className="objectsMoreBtn__text">Посмотреть все</h2>
      </button>
    </NavLink>
  );
};
