import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useObjects } from "../../../app/store/reducers/public/home/objectsSlice";
import { objectsGet } from "../../../app/store/reducers/public/home/objectsThunks";
import "./navigateMobile.scss";

export const NavigateMobile = () => {
  const dispatch = useDispatch();
  const { objects: links } = useObjects();

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
