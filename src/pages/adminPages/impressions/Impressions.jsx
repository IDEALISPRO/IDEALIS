import { useDispatch } from "react-redux";
import { ImpressionCard } from "../../../features";
import "./impressions.scss";
import { useAuth } from "../../../app/store/reducers/auth/authSlice";
import { useEffect } from "react";
import { getUser } from "../../../app/store/reducers/auth/authThunks";

export const Impressions = () => {
  const dispatch = useDispatch();
  const { user: data } = useAuth();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className="container impressions">
      <div className="impressions__cards">
        {data?.listings.map((item) => (
          <ImpressionCard
            key={item.id}
            img={item.images[0]}
            title={item.title}
            location={`г. ${item.city}, мкр. ${item.district}, ул. ${item.street}, 
            ${item.house}`}
            description={item.description}
            price={item.price}
            liked={item.liked}
            stats={item.stats}
          />
        ))}
      </div>
    </div>
  );
};
