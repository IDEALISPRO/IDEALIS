import { useDispatch } from "react-redux";
import { ObjectsCard, ObjectsBtn } from "../../../features/index";
import "./objects.scss";
import { useEffect, useState } from "react";
import { objectsGet } from "../../../app/store/reducers/public/home/objectsThunks";
import { useObjects } from "../../../app/store/reducers/public/home/objectsSlice";
import {
  detailGet,
  detailLikesPatch,
} from "../../../app/store/reducers/admin/detailObject/detailObjectThunk";

export const ObjectsSections = () => {
  const dispatch = useDispatch();
  const { objects } = useObjects();

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(objectsGet());
  }, [dispatch]);
  console.log(data);

  useEffect(() => {
    if (objects?.length) {
      const likedIds = JSON.parse(localStorage.getItem("likedIds")) || [];
      const withLiked = objects.map((obj) => ({
        ...obj,
        liked: likedIds.includes(obj.id),
      }));
      setData(withLiked);
    }
  }, [objects]);

  const toggleLike = (id) => {
    dispatch(detailGet(id))
      .unwrap()
      .then((data) => {
        if (!data?.stats) return;

        const newItem = {
          stats: {
            favorites: (data.stats.favorites ?? 0) + 1,
          },
        };

        dispatch(detailLikesPatch({ id, newObject: newItem }));
      });
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );

    const likedIds = JSON.parse(localStorage.getItem("likedIds")) || [];
    if (likedIds.includes(id)) {
      const newIds = likedIds.filter((itemId) => itemId !== id);
      localStorage.setItem("likedIds", JSON.stringify(newIds));
    } else {
      localStorage.setItem("likedIds", JSON.stringify([...likedIds, id]));
    }
  };

  return (
    <div className=" objects">
      <div className="flex-cont">
        <div className="objects__title">
          <h1 className="objects__title__text">
            Количество найденных объектов
          </h1>
          <h1 className="objects__title__mobile">Кол-во найденных объектов</h1>
        </div>

        <div className="objects__info">
          <p className="objects__info__res">Результаты</p>

          <p className="objects__info__count">
            {data[0]?.id}{" "}
            {data?.length && data?.length > 9 ? `-${data[9]?.id}` : ""} из{" "}
            {data?.length} найденных объектов
          </p>
          <p className="objects__info__mobile">
            {data[9]?.id} найденных объектов
          </p>
        </div>
      </div>

      <div className="objects__cards">
        {data &&
          data
            .slice(0, 10)
            .map((item) => (
              <ObjectsCard
                manager={item.manager?.phone_number}
                key={item.id}
                id={item.id}
                img={item.images[0]}
                title={item.title}
                district={item.district}
                street={item.street}
                city={item.city}
                rooms={item.rooms}
                area_m2={item.area_m2}
                price={item.price}
                liked={item.liked}
                onLike={() => toggleLike(item.id)}
              />
            ))}
        <ObjectsBtn />
      </div>
    </div>
  );
};
