import "./sales.scss";
import img from "../../../shared/img/objImg.png";
import { SalesCard } from "../../../features";
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
export const Sales = () => {
  return (
    <div className="container sales">
      {data.map((item) => (
        <SalesCard
          key={item.id}
          img={item.img}
          title={item.title}
          location={item.location}
          description={item.description}
          price={item.price}
          liked={item.liked}
        />
      ))}
    </div>
  );
};
