import { ObjectsSections } from "../../widgets";
import { Banner, BannerPictures, ObjectsCard } from "../../features";

export const Favorites = () => {
    return (
        <div>
            <Banner 
                title={'ИЗБРАННОЕ'} 
                description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} 
            />
            <BannerPictures />
            <ObjectsSections />
            
        </div>
    );
};
