import { useDispatch } from "react-redux";
import { DeletedCard } from "../../../features";
import img from "../../../shared/img/objImg.png";
import "./deleted.scss";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { useEffect } from "react";
import { publishedGet } from "../../../app/store/reducers/admin/published/publishedThunk";

export const Deleted = () => {
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
  const dispatch = useDispatch();
  const { list: data } = usePublished();

  useEffect(() => {
    dispatch(publishedGet({ status: "deleted" }));
  }, []);
  return (
    <div className="container deleted_card">
      {data.map((item) => (
        <DeletedCard
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
