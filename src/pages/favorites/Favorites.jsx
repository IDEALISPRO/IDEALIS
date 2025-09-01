import { useDispatch } from "react-redux";
import { useBanner } from "../../app/store/reducers/admin/homeSlice/homeSlice";
import { bannerGet } from "../../app/store/reducers/admin/homeSlice/homeThunk";
import { Banner, BannerPictures, ObjectsCard } from "../../features";
import "./favorites.scss";
import { useEffect, useState } from "react";
import { objectsGet } from "../../app/store/reducers/public/home/objectsThunks";
import { useObjects } from "../../app/store/reducers/public/home/objectsSlice";

export const Favorites = () => {
  const dispatch = useDispatch();
  const { banner } = useBanner();
  const { objects } = useObjects();

  const [favorites, setFavorites] = useState([]);

  console.log(favorites);
  

  useEffect(() => {
    dispatch(bannerGet());
    dispatch(objectsGet());
  }, [dispatch]);

  useEffect(() => {
    const likedIds = JSON.parse(localStorage.getItem("likedIds")) || [];
    const favs = objects?.filter((obj) => likedIds.includes(obj.id));
    setFavorites(favs);
  }, [objects]);

  const handleRemoveLike = (id) => {
    const likedIds = JSON.parse(localStorage.getItem("likedIds")) || [];
    const newIds = likedIds.filter((itemId) => itemId !== id);
    localStorage.setItem("likedIds", JSON.stringify(newIds));

    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container favorite__container">
      <Banner title={banner[2]?.site_name} description={banner[2]?.slogan} />
      <BannerPictures images={banner[2]?.banner_photos} />
      <div className="row objects">
        <p>Все</p>
        <p>{favorites.length} объектов</p>
      </div>
      <section className="favorite__cards">
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <ObjectsCard
              key={item.id}
              img={item?.images[0]}
              title={item.title}
              district={item.district}
              street={item.street}
              city={item.city}
              rooms={item.rooms}
              area_m2={item.area_m2}
              price={item.price}
              liked={true}
              onLike={() => handleRemoveLike(item.id)}
            />
          ))
        ) : (
          <p>Нет избранных объектов</p>
        )}
      </section>
    </div>
  );
};
