import { HotOffers, MarketNews, EventsSection, UsefulTips } from '../../widgets';
import { Banner, BannerPictures } from "../../features";

export const News = () => {
    return (
        <div className="container">
            <Banner title={'новости'} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
            <BannerPictures />
            <HotOffers />
            <MarketNews />
            <EventsSection />
            <UsefulTips />
            
        </div>
    );
}

