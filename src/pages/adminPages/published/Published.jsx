import { useEffect } from "react";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { ObjectsCard } from "../../../features";
import img from "../../../shared/img/objImg.png";
import "./published.scss";
import { useDispatch } from "react-redux";
import { publishedGet } from "../../../app/store/reducers/admin/published/publishedThunk";

export const Published = () => {
  const { list } = usePublished();
  const dispatch = useDispatch();
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
  useEffect(() => {
    dispatch(publishedGet({ status: "published" }));
  }, []);
  return (
    <div className="container published">
      {list?.map((item) => (
        <ObjectsCard
          key={item.id}
          img={item.images[0]}
          title={item.title}
          location={`${item.district}, ул.${item.street}`}
          description={item.description}
          price={item.price}
          liked={item.liked}
        />
      ))}
    </div>
  );
};
