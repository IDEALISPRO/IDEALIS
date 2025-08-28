import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useObjects } from "../../../app/store/reducers/public/home/objectsSlice";
import { objectsGet } from "../../../app/store/reducers/public/home/objectsThunks";
import "./navigateMobile.scss";

export const NavigateMobile = () => {
  // const links = [
  //   {
  //     id: 1,
  //     img: naw1,
  //     text: "Вторичные",
  //   },
  //   {
  //     id: 2,
  //     img: naw2,
  //     text: "Новостройки",
  //   },
  //   {
  //     id: 3,
  //     img: naw3,
  //     text: "Дома",
  //   },
  //   {
  //     id: 4,
  //     img: naw1,
  //     text: "Участки",
  //   },
  //   {
  //     id: 5,
  //     img: naw2,
  //     text: "Под бизнес",
  //   },
  //   {
  //     id: 6,
  //     img: naw3,
  //     text: "Срочно",
  //   },
  // ];
  const dispatch = useDispatch();
  const { objects: links } = useObjects();
  console.log(links);

  const listingCategoryTranslate = {
    secondary: "Вторичное жильё",
    newbuild: "Новостройки",
    house: "Дома",
    land: "Участки",
    business: "Под бизнес",
  };

  useEffect(() => {
    dispatch(objectsGet());
  }, [dispatch]);
  return (
    <section className="navigateMobile">
      {links &&
        links.map((link) => (
          <NavLink
            key={link.id}
            to={"/estate-categories"}
            state={{ title: link.category.title }}
            onClick={(e) => e.stopPropagation()}
          >
            <div key={link.id} className="navigateMobile__link">
              <div className="navigateMobile__link__img">
                <img src={link.images[0]?.url} alt="" />
              </div>
              <p>{link.title}</p>
            </div>
          </NavLink>
        ))}
    </section>
  );
};
