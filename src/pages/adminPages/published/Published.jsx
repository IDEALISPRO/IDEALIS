import { useEffect } from "react";
import { usePublished } from "../../../app/store/reducers/admin/published/publishedSlice";
import { ObjectsCard } from "../../../features";
import "./published.scss";
import { useDispatch, useSelector } from "react-redux";
import { publishedGet } from "../../../app/store/reducers/admin/published/publishedThunk";

export const Published = () => {
  const { list } = usePublished();
  const dispatch = useDispatch();

  const access = useSelector((state) => state.auth.access);

  useEffect(() => {
    if (access) {
      dispatch(publishedGet());
    }
  }, [access, dispatch]);

  return (
    <div className="container published">
      {list?.map((item) => (
        <ObjectsCard
          type="public"
          key={item.id}
          id={item.id}
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
