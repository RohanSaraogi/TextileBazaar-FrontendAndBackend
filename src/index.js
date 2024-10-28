import React from "react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

ReactDOM.render(
  <Provider store={Store}>
    <App />
    <SpeedInsights/>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
