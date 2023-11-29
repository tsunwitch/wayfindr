import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RouteProvider } from "./providers/RouteProvider";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <RouteProvider>
      <App />
    </RouteProvider>
  </React.StrictMode>
);
