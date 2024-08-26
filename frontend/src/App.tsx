import React from 'react';
import { ConfigProvider } from 'antd';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home"

import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);
function App() {
  return (
      <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
        <RouterProvider router={router} />
      </ConfigProvider>
  );
}

export default App;
