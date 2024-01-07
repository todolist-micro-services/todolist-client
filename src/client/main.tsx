import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";

import { store } from "@core/utils";
import App from "@pages/home";
import reportWebVitals from "./reportWebVitals.ts";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
