import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/Contact";
import EditContact from "./routes/edit";
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
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
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
