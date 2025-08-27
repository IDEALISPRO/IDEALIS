import "./myObjects.scss";
import img from "../../../shared/img/objImg.png";
import { ObjectsCard } from "../../../features";
import { useAuth } from "../../../app/store/reducers/auth/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../../app/store/reducers/auth/authThunks";

const data = [
  {
    id: 1,
    img: img,
    title: "Готовые квартиры с ремонтом",
    location: "Аламедин-1, ул. Тыныстанова",
    description: "1 комн • 38 м²",
    price: "3 400 000 сом",
    liked: false,
  },
  {
    id: 2,
    img: img,
    title: "Готовые квартиры с ремонтом",
    location: "Аламедин-1, ул. Тыныстанова",
    description: "1 комн • 38 м²",
    price: "3 400 000 сом",
    liked: false,
  },
  {
    id: 3,
    img: img,
    title: "Готовые квартиры с ремонтом",
    location: "Аламедин-1, ул. Тыныстанова",
    description: "1 комн • 38 м²",
    price: "3 400 000 сом",
    liked: false,
  },
  {
    id: 4,
    img: img,
    title: "Готовые квартиры с ремонтом",
    location: "Аламедин-1, ул. Тыныстанова",
    description: "1 комн • 38 м²",
    price: "3 400 000 сом",
    liked: false,
  },
  {
    id: 5,
    img: img,
    title: "Готовые квартиры с ремонтом",
    location: "Аламедин-1, ул. Тыныстанова",
    description: "1 комн • 38 м²",
    price: "3 400 000 сом",
    liked: false,
  },
  {
    id: 6,
    img: img,
    title: "Готовые квартиры с ремонтом",
    location: "Аламедин-1, ул. Тыныстанова",
    description: "1 комн • 38 м²",
    price: "3 400 000 сом",
    liked: false,
  },
  {
    id: 7,
    img: img,
    title: "Готовые квартиры с ремонтом",
    location: "Аламедин-1, ул. Тыныстанова",
    description: "1 комн • 38 м²",
    price: "3 400 000 сом",
    liked: false,
  },
  {
    id: 8,
    img: img,
    title: "Готовые квартиры с ремонтом",
    location: "Аламедин-1, ул. Тыныстанова",
    description: "1 комн • 38 м²",
    price: "3 400 000 сом",
    liked: false,
  },
  {
    id: 9,
    img: img,
    title: "Готовые квартиры с ремонтом",
    location: "Аламедин-1, ул. Тыныстанова",
    description: "1 комн • 38 м²",
    price: "3 400 000 сом",
    liked: false,
  },
  {
    id: 10,
    img: img,
    title: "Готовые квартиры с ремонтом",
    location: "Аламедин-1, ул. Тыныстанова",
    description: "1 комн • 38 м²",
    price: "3 400 000 сом",
    liked: false,
  },
];
export const MyObjects = () => {
  const dispatch = useDispatch();
  const { user: data } = useAuth();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className="container my__objects">
      {data?.listings.map((item) => (
        <ObjectsCard
          key={item.id}
          img={item.images[0]}
          title={item.title}
          location={`г. ${item.city}, мкр. ${item.district}, ул. ${item.street}, 
            ${item.house}`}
          description={item.description}
          price={item.price}
          liked={item.liked}
        />
      ))}
    </div>
  );
};
