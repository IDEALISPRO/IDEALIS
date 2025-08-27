import {
  HotOffers,
  MarketNews,
  EventsSection,
  UsefulTips,
} from "../../widgets";
import { Banner, BannerPictures } from "../../features";
import { useNews } from "../../app/store/reducers/admin/news/newsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNewsBanner } from "../../app/store/reducers/admin/news/newsThunk";

export const News = () => {
  const { list, loading, error } = useNews();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsBanner());
  }, [dispatch]);

  return (
    <div className="container">
      <Banner title={list[0]?.title} description={list[0]?.description} />
      <BannerPictures images={list[0]?.images} />
      <HotOffers />
      <MarketNews />
      <EventsSection />
      <UsefulTips />
    </div>
  );
};
