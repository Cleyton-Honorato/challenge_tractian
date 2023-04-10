import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import ptBr from "antd/locale/pt_BR";
import { Provider } from "react-redux";
import store from './redux';

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={ptBr}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
