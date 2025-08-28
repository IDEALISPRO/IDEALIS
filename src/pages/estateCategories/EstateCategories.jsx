import { useLocation } from "react-router-dom";
import { Banner, ObjectsCard } from "../../features";
import "./estateCategories.scss";
import img from "../../shared/img/objImg.png";
import { useDispatch } from "react-redux";
import { useObjects } from "../../app/store/reducers/public/home/objectsSlice";
import { objectsGet } from "../../app/store/reducers/public/home/objectsThunks";
import { useEffect } from "react";

export const EstateCategories = () => {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const { objects } = useObjects();
  // const listingTitle = getSumsByKind(clientDeals);

  const listingCategoryTranslate = {
    secondary: "Вторичное жильё",
    newbuild: "Новостройки",
    house: "Дома",
    land: "Участки",
    business: "Под бизнес",
  };
  console.log(location.state.title);

  useEffect(() => {
    dispatch(objectsGet({ category: location.state.title }));
  }, [dispatch]);
  return (
    <div className="container estate__categories">
      <Banner
        title={
          listingCategoryTranslate[location.state.title] || location.state.title
        }
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      />
      <div className="row objects">
        <p>Все</p>
        <p>{objects?.length} объектов</p>
      </div>
      <section className="estate__cards">
        {objects.map((item) => (
          <ObjectsCard
            key={item.id}
            img={item?.images}
            title={item.title}
            location={`г. ${item.city}, мкр. ${item.district}, ул. ${item.street}, 
            ${item.house}`}
            description={item.description}
            price={item.price}
            liked={item.liked}
          />
        ))}
      </section>
    </div>
  );
};
