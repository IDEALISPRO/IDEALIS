import { useBanner } from "../../app/store/reducers/admin/homeSlice/homeSlice";
import { Feedback } from "../../entities";
import { Banner, BannerPictures } from "../../features";
import { Contacts } from "../../widgets";

export const ContactsPage = () => {
  const { banner } = useBanner();

  return (
    <div className="container">
      <Banner title={banner[4]?.site_name} description={banner[4]?.slogan} />
      <BannerPictures images={banner[4]?.banner_photos} />
      <Contacts />
      <Feedback />
    </div>
  );
};
