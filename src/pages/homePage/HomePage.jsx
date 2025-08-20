import { Navigate } from "../../widgets";
import { FilterWidget } from "../../widgets/FilterWidget/FilterWidget";
import { Banner, BannerPictures } from "../../features";
import { Contacts } from "../../widgets/";


export const HomePage = () => {
    return (
        <div className="container">
            <Banner title={'IDEALIS'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
            <BannerPictures />
            <Navigate />

            <FilterWidget />
        </div>
    );
}

