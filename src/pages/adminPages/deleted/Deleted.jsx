import { useDispatch } from "react-redux";
import { DeletedCard } from "../../../features";
import img from "../../../shared/img/objImg.png";
import "./deleted.scss";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { useEffect } from "react";
import { publishedGet } from "../../../app/store/reducers/admin/published/publishedThunk";

export const Deleted = () => {
  const dispatch = useDispatch();
  const { list: data } = usePublished();

  console.log(data);

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
