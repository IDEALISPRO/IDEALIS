import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import lawyersReducer from "./reducers/admin/lawyers/lawyersSlice";
import videoTutorialsReducer from './reducers/admin/videoTutorials/videoTutorialsSlice';
import rulesReducer from './reducers/admin/rules/rulesSlice';
import agentsReducer from "./reducers/admin/agents/agentsSlice";
import savedSearchedReducer from "./reducers/admin/savedSearches/savedSearchesSlice";
import bannerReducer from "./reducers/admin/homeSlice/homeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lawyer: lawyersReducer,
    videoTutorials: videoTutorialsReducer,
    rules: rulesReducer,
    agents: agentsReducer,
    savedSearched: savedSearchedReducer,
    banner: bannerReducer,
  },
});
