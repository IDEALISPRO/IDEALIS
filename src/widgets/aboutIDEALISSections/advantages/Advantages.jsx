import { useDispatch } from "react-redux";
import "./advantages.scss";
import { useEffect, useMemo } from "react";
import { advantagesGet } from "../../../app/store/reducers/public/about/aboutThunks";
import { useAbout } from "../../../app/store/reducers/public/about/aboutSlice";

export function Advantages() {
  const dispatch = useDispatch();
  const { advantage } = useAbout();

  useEffect(() => {
    dispatch(advantagesGet());
  }, [dispatch]);

  const advantagesWithType = useMemo(() => {
    return (advantage || []).map((item) => ({
      ...item,
      type: Math.random() > 0.5 ? "circle" : "square",
    }));
  }, [advantage]);

  return (
    <div className="advantages container">
      <div className="advantages__header">
        <h3 className="advantages__title">ПРЕИМУЩЕСТВА</h3>
        <p className="advantages__text">{advantage && advantage[0]?.preface}</p>
      </div>

      <div className="advantages__box">
        {advantagesWithType.map((item, index) => (
          <div
            key={index}
            className={
              item.type === "circle"
                ? "advantages__circle"
                : "advantages__square-box"
            }
          >
            <p className="advantages__item-title">{item.title}</p>
            <p className="advantages__item-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
