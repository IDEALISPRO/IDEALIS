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
  const { banner, loading, error } = useBanner(); // берём из redux slice

  useEffect(() => {
    dispatch(bannerGet()); // запрос на API при монтировании
  }, [dispatch]);

  if (loading) return <p>Загрузка баннера...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container">
      <Banner
        title={banner?.site_name}
        description={banner?.slogan}
      />
      <BannerPictures pictures={banner?.banner_photo || []} />

      <Navigate />
      <NavigateMobile />
      <FilterWidget />
      <ObjectsSections />
    </div>
  );
};
