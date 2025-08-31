import { Navigate, NavigateMobile } from "../../widgets";
import { FilterWidget } from "../../widgets/FilterWidget/FilterWidget";
import { Banner, BannerPictures } from "../../features";
import { ObjectsSections } from "../../widgets";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bannerGet } from "../../app/store/reducers/admin/homeSlice/homeThunk";
import { useBanner } from "../../app/store/reducers/admin/homeSlice/homeSlice";
import { objectsGet } from "../../app/store/reducers/public/home/objectsThunks";
import { useHeader } from "../../app/store/reducers/admin/header/headerSlice";
import { headerGet } from "../../app/store/reducers/admin/header/headerThunk";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { banner } = useBanner();
  const { header } = useHeader();
  console.log(header);
  

  useEffect(() => {
    dispatch(bannerGet());
    dispatch(headerGet());
  }, [dispatch]);

  const handleSubmit = async (data) => {
    try {
      const response = await dispatch(objectsGet(data)).unwrap();
      return response;
    } catch (error) {
      console.error("Failed to apply filters:", error);
    }
  };

  return (
    <div className="container">
      <Banner img={header?.logo} title={banner[0]?.site_name} description={banner[0]?.slogan} />
      <BannerPictures images={banner[0]?.banner_photos} />
      <Navigate />
      <NavigateMobile />
      <FilterWidget handleSubmit={handleSubmit} />
      <ObjectsSections />
    </div>
  );
};
