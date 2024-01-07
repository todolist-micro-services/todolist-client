import React from "react";
import ReactDOM from "react-dom/client";
import App from "@pages/home";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "../todolist-client-core/src/utils/store.ts";
import reportWebVitals from "./reportWebVitals.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
