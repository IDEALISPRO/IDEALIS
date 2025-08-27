import { ServicesWidget } from "../../widgets";
import { Banner, BannerPictures } from "../../features";
import { useBanner } from "../../app/store/reducers/admin/homeSlice/homeSlice";

export const Services = () => {
  const { banner } = useBanner();

  return (
    <div>
      <Banner title={banner[2]?.site_name} description={banner[2]?.slogan} />
      <BannerPictures images={banner[2]?.banner_photos} />

      <ServicesWidget />
    </div>
  );
};
