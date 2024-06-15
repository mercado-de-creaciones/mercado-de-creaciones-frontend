import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { ResetPassword } from "../pages/auth/ResetPassword";
import { NewPassword } from "../pages/auth/NewPassword";
import { ConfirmAccount } from "../pages/auth/ConfirmAccount";

const authRoutes = [
  {
    to: "/",
    component: <Login />,
  },
  {
    to: "/registrar",
    component: <Register />,
  },
  {
    to: "/olvide-password",
    component: <ResetPassword />,
  },
  {
    to: "/olvide-password/:token",
    component: <NewPassword />,
  },
  {
    to: "/confirmar/:id",
    component: <ConfirmAccount />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      ...authRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        index: true,
        path: authRoutes.at(0)?.to,
        element: authRoutes.at(0)?.component,
      },
    ],
  },
]);
