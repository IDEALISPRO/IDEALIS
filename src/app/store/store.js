import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import lawyersReducer from "./reducers/admin/lawyers/lawyersSlice";
import videoTutorialsReducer from "./reducers/admin/videoTutorials/videoTutorialsSlice";
import rulesReducer from "./reducers/admin/rules/rulesSlice";
import agentsReducer from "./reducers/admin/agents/agentsSlice";
import publishedReducer from "./reducers/admin/published/publishedSlice";
import savedSearchedReducer from "./reducers/admin/savedSearches/savedSearchesSlice";
import bannerReducer from "./reducers/admin/homeSlice/homeSlice";
import headerReducer from "./reducers/admin/header/headerSlice";
import aboutReducer from "./reducers/public/about/aboutSlice";
import contactReducer from './reducers/public/contact/contactSlice';
import objectsReducer from './reducers/public/home/objectsSlice';
import detailReducer from './reducers/admin/detailObject/detailObjectSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lawyer: lawyersReducer,
    videoTutorials: videoTutorialsReducer,
    rules: rulesReducer,
    agents: agentsReducer,
    published: publishedReducer,
    savedSearched: savedSearchedReducer,
    banner: bannerReducer,
    header: headerReducer,
    about: aboutReducer,
    contact: contactReducer,
    objects: objectsReducer,
    detail: detailReducer,
  },
});
