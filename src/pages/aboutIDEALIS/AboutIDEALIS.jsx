import { BannerPictures, Banner} from "../../features";
import { Advantages, Articles, HistoryAgency, MissionsValues, Swagger } from "../../widgets"

export const AboutIDEALIS = () => {
  return (
    <div className="container">
      <Banner title={'про IDEALIS'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
      <BannerPictures />

      <HistoryAgency />
      <MissionsValues />
      <Advantages />
      <Swagger/>

    </div>
  );
};

