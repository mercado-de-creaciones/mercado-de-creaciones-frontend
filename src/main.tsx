import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '/src/app.css';
import { HomeLayout } from './presentation/components/layouts/HomeLayout';
import { Home } from './presentation/pages/home/Home';


const queryClientProvider = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
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