import { Navigate } from "../../widgets";
import { FilterWidget } from "../../widgets/FilterWidget/FilterWidget";

export const HomePage = () => {
    return (
        <div className="container">
            <Navigate />

            <FilterWidget />
        </div>
    );
}

