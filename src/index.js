import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App";
import "./index.css";
import { ConfigProvider } from "antd";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#f97e9b",
            colorLink: "#f97e9b",
            colorSuccess: "#52c41a",
            colorWarning: "#faad14",
            colorError: "#f5222d",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Router>
  </React.StrictMode>
);
