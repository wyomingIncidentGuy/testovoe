import { createBrowserRouter, Navigate } from 'react-router-dom';
import Cars from '../pages/Cars/Cars';
import Favorites from '../pages/Favorites/Favorites';
import Layout from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/cars" replace />,
      },
      {
        path: '/cars',
        element: <Cars />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
]); 