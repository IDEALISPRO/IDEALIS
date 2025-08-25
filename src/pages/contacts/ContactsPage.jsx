import { Feedback } from "../../entities";
import { Banner,BannerPictures } from "../../features";
import { Contacts } from "../../widgets";

export const ContactsPage = () => {
    return (
        <div className="container">
            <Banner title={'контакты'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
            <BannerPictures />
            <Contacts />
            <Feedback />
        </div>
    );
}

