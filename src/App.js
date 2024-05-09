import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { AppRoutes } from './router/routes';
import { HomeScreen, LoginScreen, RootScreen } from './screens';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootScreen />,
  },
  {
    path: AppRoutes.login,
    element: <LoginScreen />,
  },
  {
    path: AppRoutes.home,
    element: <HomeScreen />,
  },
  {
    path: "/test",
    element: <Navigate to={AppRoutes.home} />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
