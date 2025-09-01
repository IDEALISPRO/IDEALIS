import { useEffect, useState } from "react";
import { NavigateCard } from "../../../entities/navigateCard/NavigateCard";
import "./navigate.scss";
import { useDispatch } from "react-redux";
import { useObjects } from "../../../app/store/reducers/public/home/objectsSlice";
import {
  getCategory,
  objectsGet,
} from "../../../app/store/reducers/public/home/objectsThunks";

export const Navigate = () => {
  const [activeSelect, setActiveSelect] = useState(null);

  const dispatch = useDispatch();
  const { list: objects } = useObjects();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <section className="categories-navigate container">
      <h2 className="title">Категории недвижимости</h2>
      <div className="categories-navigate__content">
        {objects?.map(({ key, ...rest }) => (
          <NavigateCard
            activeSelect={activeSelect}
            setActiveSelect={setActiveSelect}
            key={key} 
            id={key} 
            {...rest}
          />
        ))}
      </div>
    </section>
  );
};
