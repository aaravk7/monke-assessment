import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { AnalysisLoader } from "./views/Analysis/analysis.controller.ts";
import Analysis from "./views/Analysis/Analysis.tsx";
import Home from "./views/Home/Home.tsx";
import { InventoryLoader } from "./views/Inventory/inventory.controller.ts";
import Inventory from "./views/Inventory/Inventory.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
        loader: InventoryLoader,
      },
      {
        path: "/analysis/:modelName",
        element: <Analysis />,
        loader: AnalysisLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
