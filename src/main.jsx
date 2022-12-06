import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";

import Root from "./routes/root";
/*
import Contact from "./routes/Contact";
import Error from "./routes/Error";
import Home from "./routes/Home";
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
/* progress form in class
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
