import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from "react-router-dom";

import { AppRoutes } from './router/routes';
import { HomeScreen, LoginScreen, OtherProfileScreen, ProfileScreen, RootScreen } from './screens';

const protectedRouteLoader = ({ request }) => {
  if (!localStorage.getItem('isUserLoggedIn')) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect(AppRoutes.login + "?" + params.toString());
  }

  return null;
};

const publicRouteLoader = ({ request }) => {
  if (localStorage.getItem('isUserLoggedIn')) {
    return redirect(AppRoutes.home);
  }

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootScreen />,
  },
  {
    path: AppRoutes.login,
    loader: publicRouteLoader,
    element: <LoginScreen />,
  },
  {
    path: AppRoutes.home,
    loader: protectedRouteLoader,
    element: <HomeScreen />
  },
  {
    path: AppRoutes.profile,
    loader: protectedRouteLoader,
    element: <ProfileScreen />
  },
  {
    path: AppRoutes.otherProfile,
    loader: protectedRouteLoader,
    element: <OtherProfileScreen />
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
