import "./sales.scss";
import { SalesCard } from "../../../features";
import { useDispatch } from "react-redux";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { useEffect } from "react";
import { publishedGet } from "../../../app/store/reducers/admin/published/publishedThunk";

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
