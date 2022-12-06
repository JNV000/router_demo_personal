import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
/*
import Contact from "./routes/Contact";
import Error from "./routes/Error";
import Home from "./routes/Home";
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
// Note: default tailwind styles seem to have messed with intended look of the CSS

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
