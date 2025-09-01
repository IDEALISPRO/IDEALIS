import { useDispatch } from "react-redux";
import { useBanner } from "../../app/store/reducers/admin/homeSlice/homeSlice";
import { Feedback } from "../../entities";
import { Banner, BannerPictures } from "../../features";
import { Contacts } from "../../widgets";
import { useEffect } from "react";
import {
  contactBannerGet,
  contactGet,
} from "../../app/store/reducers/public/contact/contactThunks";
import { useContact } from "../../app/store/reducers/public/contact/contactSlice";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const { contact, contactBanner } = useContact();

  console.log(contactBanner);

  useEffect(() => {
    dispatch(contactBannerGet());
    dispatch(contactGet());
  }, [dispatch]);

  return (
    <div className="container">
      <Banner
        title={contactBanner[0]?.title}
        description={contactBanner[0]?.description}
      />
      <BannerPictures images={contactBanner[0]?.images} />
      <Contacts contact={contact[0]} />
      <Feedback />
    </div>
  );
};
