import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Persister, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import MasterContextProvider from "./utils/ContextHOOKS/MASTER_PROVIDER";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/themeMUI";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate persistor={Persister}>
        <MasterContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MasterContextProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
