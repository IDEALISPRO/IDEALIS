import "./navigateMobile.scss";
import naw1 from "../../../shared/nawLink/naw1.jpg";
import naw2 from "../../../shared/nawLink/naw2.jpg";
import naw3 from "../../../shared/nawLink/naw3.jpg";
import { NavLink } from "react-router-dom";

export const NavigateMobile = () => {
  const links = [
    {
      id: 1,
      img: naw1,
      text: "Вторичные",
    },
    {
      id: 2,
      img: naw2,
      text: "Новостройки",
    },
    {
      id: 3,
      img: naw3,
      text: "Дома",
    },
    {
      id: 4,
      img: naw1,
      text: "Участки",
    },
    {
      id: 5,
      img: naw2,
      text: "Под бизнес",
    },
    {
      id: 6,
      img: naw3,
      text: "Срочно",
    },
  ];
  return (
    <section className="navigateMobile">
      {links &&
        links.map((link) => (
          <NavLink
            key={link.id}
            to={"/estate-categories"}
            state={{ title: link.text }}
            onClick={(e) => e.stopPropagation()}
          >
            <div key={link.id} className="navigateMobile__link">
              <div className="navigateMobile__link__img">
                <img src={link.img} alt="" />
              </div>
              <p>{link.text}</p>
            </div>
          </NavLink>
        ))}
    </section>
  );
};
