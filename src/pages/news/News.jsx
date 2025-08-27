import {
  HotOffers,
  MarketNews,
  EventsSection,
  UsefulTips,
  Articles,
} from "../../widgets";
import { Banner, BannerPictures } from "../../features";
import { useBanner } from "../../app/store/reducers/admin/homeSlice/homeSlice";

export const News = () => {
  const { banner } = useBanner();

  return (
    <div className="container">
      <Banner title={banner[3]?.site_name} description={banner[3]?.slogan} />
      <BannerPictures images={banner[3]?.banner_photos} />
      <HotOffers />
      <MarketNews />
      <EventsSection />
      <UsefulTips />
      <Articles />
    </div>
  );
};
