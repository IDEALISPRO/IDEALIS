import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useObjects } from "../../../app/store/reducers/public/home/objectsSlice";
import { getCategory } from "../../../app/store/reducers/public/home/objectsThunks";
import "./navigateMobile.scss";

export const NavigateMobile = () => {
  const dispatch = useDispatch();
  const { list: links } = useObjects();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  // console.log(links);

  return (
    <section className="navigateMobile">
      {links &&
        links.map((link) => (
          <NavLink
            key={link.id || `${link.key}-${link.title}`} // уникальный ключ
            to="/estate-categories"
            state={{ title: link.category?.title }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="navigateMobile__link">
              <div className="navigateMobile__link__img">
                <img
                  src={link.images?.[0]?.image_url}
                  alt={link.title || "category"}
                />
              </div>
              <p>{link.title}</p>
            </div>
          </NavLink>
        ))}
    </section>
  );
};
