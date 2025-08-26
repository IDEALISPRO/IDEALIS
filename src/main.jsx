import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/routes/App.jsx";
import "./i18n/i18n.js";
import { Provider } from "react-redux";
import { store } from "./app/store/store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
