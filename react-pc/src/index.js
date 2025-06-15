import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import "react-quill/dist/quill.snow.css"

import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

