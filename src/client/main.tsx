import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";

import { store } from "@core/utils";
import { Rooter } from "@app/rooter";
import "@app/translations";
import reportWebVitals from "./reportWebVitals.ts";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Rooter />
  </Provider>
);

reportWebVitals();
