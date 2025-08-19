import { ServicesWidget, MiniMenu } from "../../widgets";
import { Banner, BannerPictures } from "../../features";

export const Services = () => {
    return (
        <div>
            <Banner title={'Услуги'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
            <BannerPictures />
            <MiniMenu />
            <ServicesWidget />

        </div>
    );
}

