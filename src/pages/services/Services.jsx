import { ServicesWidget } from "../../widgets";
import { Banner, BannerPictures } from "../../features";
import { useBanner } from "../../app/store/reducers/admin/homeSlice/homeSlice";
import { useEffect } from "react";
import { bannerGet } from "../../app/store/reducers/admin/homeSlice/homeThunk";
import { useDispatch } from "react-redux";

export const Services = () => {
  const dispatch = useDispatch();
  const { banner } = useBanner();

  useEffect(() => {
    dispatch(bannerGet());
  }, [dispatch]);

  return (
    <div>
      <Banner title={banner[2]?.site_name} description={banner[2]?.slogan} />
      <BannerPictures images={banner[2]?.banner_photos} />

      <ServicesWidget />
    </div>
  );
};
