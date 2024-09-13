import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./Routes/AppRoutes";
import { ContextProvider } from "./global.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  </React.StrictMode>
);
