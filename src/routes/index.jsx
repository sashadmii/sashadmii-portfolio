import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/sashadmii-portfolio/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
]);

export default router;
