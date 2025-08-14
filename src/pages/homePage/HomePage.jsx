import { FilterWidget } from "../../widgets/FilterWidget/FilterWidget";
import { EventsSection } from "../../widgets/NewsEvent/EventsSection";

export const HomePage = () => {
    return (
        <div className="container">
            <FilterWidget />
            <EventsSection />
        </div>
    );
}

