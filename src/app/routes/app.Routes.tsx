import Home from '@pages/Home/Home';
import Layout from '@pages/Layout/Layout';

const appRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
];

export default appRoutes;
