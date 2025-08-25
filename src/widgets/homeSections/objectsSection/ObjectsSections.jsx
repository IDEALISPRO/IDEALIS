import { ObjectsCard, ObjectsBtn } from "../../../features/index";
import img from "../../../shared/img/objImg.png";
import "./objects.scss";

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

export const ObjectsSections = () => {
  return (
    <div className="container objects">
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
            {data[0].id}-{data[9].id} из 12118 найденных объектов
          </p>
          <p className="objects__info__mobile">
            {data[9].id} найденных объектов
          </p>
        </div>
      </div>

      <div className="objects__cards">
        {data.map((item) => (
          <ObjectsCard
            key={item.id}
            img={item.img}
            title={item.title}
            location={item.location}
            description={item.description}
            price={item.price}
            liked={item.liked}
          />
        ))}
        <ObjectsBtn />
      </div>
    </div>
  );
};
