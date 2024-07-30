import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Chatpage from './pages/chatpage/Chatpage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Homepage/>
    ),
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
      {path:"/dashboard/chats/:id", element: <Chatpage/>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
