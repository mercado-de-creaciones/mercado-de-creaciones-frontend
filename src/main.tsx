import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '/src/app.css';
import { Login } from './presentation/pages/auth/Login';
import { Register } from './presentation/pages/auth/Register';
import { ResetPassword } from './presentation/pages/auth/ResetPassword';
import { NewPassword } from './presentation/pages/auth/NewPassword';
import { ConfirmAccount } from './presentation/pages/auth/ConfirmAccount';
import { AuthLayout } from './presentation/layouts/AuthLayout';
import { Products } from './presentation/pages/auth/Products';

const queryClientProvider = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
    children: [
      {
        index: true,
        path: "/",
        element: <Login />,
      },
      {
        path: "/registrar",
        element: <Register />,
      },
      {
        path: "olvide-password",
        element: <ResetPassword />,
      },
      {
        path: "/olvide-password/:token",
        element: <NewPassword />,
      },
      {
        path: "confirmar/:id",
        element: <ConfirmAccount />,
      },
      {
        path: "/productos",
        element: <Products />
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClientProvider}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
