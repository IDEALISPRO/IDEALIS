import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import lawyersReducer from "./reducers/admin/lawyers/lawyersSlice";
import videoTutorialsReducer from "./reducers/admin/videoTutorials/videoTutorialsSlice";
import rulesReducer from "./reducers/admin/rules/rulesSlice";
import agentsReducer from "./reducers/admin/agents/agentsSlice";
import publishedReducer from "./reducers/admin/published/publishedSlice";
import savedSearchedReducer from "./reducers/admin/savedSearches/savedSearchesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lawyer: lawyersReducer,
    videoTutorials: videoTutorialsReducer,
    rules: rulesReducer,
    agents: agentsReducer,
    published: publishedReducer,
    savedSearched: savedSearchedReducer,
  },
});
