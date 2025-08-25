import { ImpressionCard } from "../../../features";
import img from "../../../shared/images/ImpressionsImg1.png";
import './impressions.scss';

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
];
export const Impressions = () => {
  return (
    <div className="container impressions">
      <div className="impressions__cards">
        {data.map((item) => (
          <ImpressionCard
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
    </div>
  );
};
