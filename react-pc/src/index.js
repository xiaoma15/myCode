import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './route';
import { RouterProvider } from 'react-router-dom';
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

