import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";

import { setProxy, store } from "@core/utils";
import { Rooter } from "@app/rooter";
import "@app/translations";
import { Banner } from "@common/banner";
import { WrapperContextProvider } from "@app/wrapper/wrapper.tsx";
import { Wrapper } from "@app/wrapper";
import reportWebVitals from "./reportWebVitals.ts";
import "./index.scss";

setProxy(import.meta.env.VITE_API_URL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Banner />
    <WrapperContextProvider>
      <Wrapper />
      <Rooter />
    </WrapperContextProvider>
  </Provider>
);

reportWebVitals();
