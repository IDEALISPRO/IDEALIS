import "./sales.scss";
import img from "../../../shared/img/objImg.png";
import { SalesCard } from "../../../features";
import { useDispatch } from "react-redux";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { useEffect } from "react";
import { publishedGet } from "../../../app/store/reducers/admin/published/publishedThunk";
// const data = [
//   {
//     id: 1,
//     img: img,
//     title: "Готовые квартиры с ремонтом",
//     location: "Аламедин-1, ул. Тыныстанова",
//     description: "1 комн • 38 м²",
//     price: "3 400 000 сом",
//     liked: false,
//   },
//   {
//     id: 2,
//     img: img,
//     title: "Готовые квартиры с ремонтом",
//     location: "Аламедин-1, ул. Тыныстанова",
//     description: "1 комн • 38 м²",
//     price: "3 400 000 сом",
//     liked: false,
//   },
//   {
//     id: 3,
//     img: img,
//     title: "Готовые квартиры с ремонтом",
//     location: "Аламедин-1, ул. Тыныстанова",
//     description: "1 комн • 38 м²",
//     price: "3 400 000 сом",
//     liked: false,
//   },
//   {
//     id: 4,
//     img: img,
//     title: "Готовые квартиры с ремонтом",
//     location: "Аламедин-1, ул. Тыныстанова",
//     description: "1 комн • 38 м²",
//     price: "3 400 000 сом",
//     liked: false,
//   },
//   {
//     id: 5,
//     img: img,
//     title: "Готовые квартиры с ремонтом",
//     location: "Аламедин-1, ул. Тыныстанова",
//     description: "1 комн • 38 м²",
//     price: "3 400 000 сом",
//     liked: false,
//   },
//   {
//     id: 6,
//     img: img,
//     title: "Готовые квартиры с ремонтом",
//     location: "Аламедин-1, ул. Тыныстанова",
//     description: "1 комн • 38 м²",
//     price: "3 400 000 сом",
//     liked: false,
//   },
//   {
//     id: 7,
//     img: img,
//     title: "Готовые квартиры с ремонтом",
//     location: "Аламедин-1, ул. Тыныстанова",
//     description: "1 комн • 38 м²",
//     price: "3 400 000 сом",
//     liked: false,
//   },
//   {
//     id: 8,
//     img: img,
//     title: "Готовые квартиры с ремонтом",
//     location: "Аламедин-1, ул. Тыныстанова",
//     description: "1 комн • 38 м²",
//     price: "3 400 000 сом",
//     liked: false,
//   },
//   {
//     id: 9,
//     img: img,
//     title: "Готовые квартиры с ремонтом",
//     location: "Аламедин-1, ул. Тыныстанова",
//     description: "1 комн • 38 м²",
//     price: "3 400 000 сом",
//     liked: false,
//   },
//   {
//     id: 10,
//     img: img,
//     title: "Готовые квартиры с ремонтом",
//     location: "Аламедин-1, ул. Тыныстанова",
//     description: "1 комн • 38 м²",
//     price: "3 400 000 сом",
//     liked: false,
//   },
// ];
export const Sales = () => {
  const dispatch = useDispatch();
  const { list: data } = usePublished();

  useEffect(() => {
    dispatch(publishedGet({ status: "sold" }));
  }, []);
  return (
    <div className="container sales">
      {data.map((item) => (
        <SalesCard
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
