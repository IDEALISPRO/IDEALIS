import { Navigate, NavigateMobile } from "../../widgets";
import { FilterWidget } from "../../widgets/FilterWidget/FilterWidget";
import { Banner, BannerPictures } from "../../features";
import { ObjectsSections } from "../../widgets";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bannerGet } from "../../app/store/reducers/admin/homeSlice/homeThunk";
import { useBanner } from "../../app/store/reducers/admin/homeSlice/homeSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { banner } = useBanner();

  useEffect(() => {
    dispatch(bannerGet());
  }, [dispatch]);

  return (
    <div className="container">
      <Banner title={banner[0]?.site_name} description={banner[0]?.slogan} />
      <BannerPictures images={banner[0]?.banner_photos} />

      <Navigate />
      <NavigateMobile />
      <FilterWidget />
      <ObjectsSections />
    </div>
  );
};
