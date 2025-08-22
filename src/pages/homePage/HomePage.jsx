import { Swagger } from "../../widgets";
import { FilterWidget } from "../../widgets/FilterWidget/FilterWidget";

export const HomePage = () => {
    return (
        <div className="container">
            <FilterWidget />

            <Swagger />
        </div>
    );
}

