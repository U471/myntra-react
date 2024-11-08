
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from './routes/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: HomeItem,
      },
      {
        path: "/bag",
        element: <Bag />,
        // action: createPostAction,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>);
