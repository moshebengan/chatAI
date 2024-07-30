import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Chatpage from "./pages/chatpage/Chatpage.jsx";
import Rootlayout from "./layouts/rootlayout/Rootlayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";



const router = createBrowserRouter([
  {
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        element:<DashboardLayout/>,
        children: [
          {
            path:"/dashboard",
            element:<Dashboard/>
          },
          {
            path:"/dashboard/chats/:id",
            element:<Chatpage/>
          }
        ]
      }
    ],
  },
  // {
  //   path: "/",
  //   element: <Homepage />,
  // },
  // {
  //   path: "/dashboard",
  //   children: [{path:"/dashboard", element: <Dashboard/>}, { path: "/dashboard/chats/:id", element: <Chatpage /> }],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
