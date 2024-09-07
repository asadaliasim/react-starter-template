import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../Layout';

import Home from '../pages/Home';
import About from '../pages/About';
import NewsLetter from '../pages/NewsLetter';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/news-letter',
        element: <NewsLetter />,
      },
      {
        path: '*',
        element: <div>Page Not Found</div>,
      },
    ],
  },
]);

export default router;
