import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

export const NavigateCard = ({
  activeSelect,
  setActiveSelect,
  type,
  category,
  id,
  images,
}) => {
  const isActive = activeSelect === id;
  const listingCategoryTranslate = {
    secondary: "Вторичное жильё",
    newbuild: "Новостройки",
    house: "Дома",
    land: "Участки",
    business: "Под бизнес",
  };

  const handleClick = () => {
    setActiveSelect(id);
  };

  return (
    <div
      className={`categories-navigate__item ${isActive ? "active" : ""}`}
      onClick={!isActive ? handleClick : undefined}
      style={{ minHeight: "120px", cursor: "pointer" }}
    >
      <AnimatePresence mode="wait">
        {isActive ? (
          <NavLink
            to={"/estate-categories"}
            state={{ title: category?.title }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key="hover"
              className="categories-navigate__hover"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="categories-navigate__hover-item">
                <img
                  className="categories-navigate__hover-img"
                  src={images?.[0]?.url}
                  alt={category?.title}
                />
                <img
                  className="categories-navigate__hover-img"
                  src={images?.[1]?.url}
                  alt={category?.title}
                />
              </div>
              <div className="categories-navigate__hover-item categories-navigate__hover-item--center">
                <h2
                  className={`categories-navigate__hover-item-title ${
                    type === "check"
                      ? "categories-navigate__hover-item-title--check"
                      : ""
                  }`}
                >
                  {listingCategoryTranslate[category.title] || category.title}
                </h2>
                <p className="categories-navigate__hover-link">
                  Посмотреть все
                </p>
              </div>
              <div className="categories-navigate__hover-item">
                <img
                  className="categories-navigate__hover-img"
                  src={images?.[2]?.url}
                  alt={category?.title}
                />
                <img
                  className="categories-navigate__hover-img"
                  src={images?.[3]?.url}
                  alt={category?.title}
                />
              </div>
            </motion.div>
          </NavLink>
        ) : (
          <motion.div
            key="default"
            className="categories-navigate__default"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2
              className={`categories-navigate__default-title ${
                type === "check"
                  ? "categories-navigate__default-title--check"
                  : ""
              }`}
            >
              {listingCategoryTranslate[category?.title] || category?.title}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
