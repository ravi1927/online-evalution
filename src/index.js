import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./Styles/style";
import "./Styles/index.css";
import Spinner from "./components/Common/Spinner";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { getConfig } from "./utils/config";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {  persistor, store } from "./store/index.tsx";
import "@fontsource/titillium-web";
import "@fontsource/titillium-web/400.css"; 
import "@fontsource/titillium-web/400-italic.css"

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<Spinner />}>
        <Router basename={getConfig("CONTEXT_ROOT")}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </StyledEngineProvider>
        </Router>
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
