import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useServices } from "../../app/store/reducers/admin/services/servicesSlice";
import { getServicesBanner } from "../../app/store/reducers/admin/services/servicesThunk";
import { Banner, BannerPictures } from "../../features";
import { ServicesWidget } from "../../widgets";

export const Services = () => {
  const { list } = useServices();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesBanner());
  }, [dispatch]);

  return (
    <div>
      <Banner title={list[0]?.title} description={list[0]?.description} />
      <BannerPictures images={list[0]?.images} />

      <ServicesWidget
        title={list[0]?.sub_title}
        description={list[0]?.sub_description}
      />
    </div>
  );
};
