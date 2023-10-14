import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SelectedRouteProvider } from "./providers/selectedRouteProvider";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <SelectedRouteProvider>
      <App />
    </SelectedRouteProvider>
  </React.StrictMode>
);
