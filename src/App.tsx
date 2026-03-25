import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './layout/Layout.tsx';
import BossPage from './pages/boss/BossPage.tsx';
import PWABadge from './PWABadge.tsx';
import HomePage from './pages/home/HomePage.tsx';

const router = createBrowserRouter([
  {
    path: '/silksong-companion',
    Component: Layout,
    children: [
      {
        path: '/silksong-companion',
        Component: HomePage,
      },
      {
        path: '/silksong-companion/bosses',
        Component: BossPage,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <PWABadge />
    </>
  );
}

export default App;
