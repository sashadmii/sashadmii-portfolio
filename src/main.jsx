import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';

import router from './routes/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
