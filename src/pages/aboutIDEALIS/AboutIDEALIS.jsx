import { BannerPictures, Banner} from "../../features";
import { Advantages, Articles, MissionsValues } from "../../widgets"

export const AboutIDEALIS = () => {
  return (
    <div>
      <Banner title={'про IDEALIS'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />

      <BannerPictures />{" "}
      <MissionsValues />
      <Advantages />
      <Articles />
    </div>
  );
};
