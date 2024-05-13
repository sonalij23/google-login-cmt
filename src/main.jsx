import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProvider from "./context/UserProvider.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([

  {
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:'/user-profile',
        element: <ProfilePage/>
      }

    ]
  },
  
]);

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </GoogleOAuthProvider>
    </UserProvider>
  </React.StrictMode>
);
