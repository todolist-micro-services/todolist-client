import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { setProxy, store } from "@core/utils";
import { Rooter } from "@app/rooter";
import "@app/translations";
import { Banner } from "@common/banner";
import { WrapperContextProvider } from "@app/wrapper/wrapper.tsx";
import { ProjectContextProvider } from "@app/context/project.tsx";
import { Wrapper } from "@app/wrapper";
import { Error } from "@app/errorMessage/error.tsx";
import reportWebVitals from "./reportWebVitals.ts";
import "./index.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

setProxy(import.meta.env.VITE_API_URL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <WrapperContextProvider>
      <ProjectContextProvider>
        <Banner />
        <Error />
        <Wrapper />
        <Rooter />
      </ProjectContextProvider>
    </WrapperContextProvider>
  </Provider>
);

reportWebVitals();
