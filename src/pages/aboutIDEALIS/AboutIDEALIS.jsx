import { useBanner } from "../../app/store/reducers/admin/homeSlice/homeSlice";
import { BannerPictures, Banner } from "../../features";
import {
  Advantages,
  HistoryAgency,
  MissionsValues,
  Reviews,
  ReviewsMobile,
  Swagger,
} from "../../widgets";

export const AboutIDEALIS = () => {
  const { banner } = useBanner();

  return (
    <div className="container">
      <Banner title={banner[1]?.site_name} description={banner[1]?.slogan} />
      <BannerPictures images={banner[1]?.banner_photos} />

      <HistoryAgency />
      <MissionsValues />
      <Advantages />
      <Reviews />
      <ReviewsMobile />
      <Swagger />
    </div>
  );
};
