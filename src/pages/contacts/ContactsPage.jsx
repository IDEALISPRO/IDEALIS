import { useDispatch } from "react-redux";
import { useBanner } from "../../app/store/reducers/admin/homeSlice/homeSlice";
import { Feedback } from "../../entities";
import { Banner, BannerPictures } from "../../features";
import { Contacts } from "../../widgets";
import { useEffect } from "react";
import { bannerGet } from "../../app/store/reducers/admin/homeSlice/homeThunk";
import { contactGet } from "../../app/store/reducers/public/contact/contactThunks";
import { useContact } from "../../app/store/reducers/public/contact/contactSlice";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const { banner } = useBanner();
  const { contact } = useContact();

  useEffect(() => {
    dispatch(bannerGet());
    dispatch(contactGet());
  }, [dispatch]);

  return (
    <div className="container">
      <Banner title={banner[4]?.site_name} description={banner[4]?.slogan} />
      <BannerPictures images={banner[4]?.banner_photos} />
      <Contacts contact={contact} />
      <Feedback />
    </div>
  );
};
