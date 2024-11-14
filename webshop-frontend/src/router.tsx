import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout.tsx";
import LoginPage from "./views/LoginPage";
import DefaultLayout from "./layouts/DefaultLayout.tsx";
import HomePage from "./views/HomePage.tsx";
import ServicesPage from "./views/ServicesPage.tsx";
import NotFoundPage from "./views/NotFoundPage.tsx";
import CustomerServicePage from "./views/CustomerServicePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/customer-service",
        element: <CustomerServicePage />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
