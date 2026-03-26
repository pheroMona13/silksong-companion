import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './layout/Layout.tsx';
import BossPage from './pages/boss/BossPage.tsx';
import PWABadge from './PWABadge.tsx';
import HomePage from './pages/home/HomePage.tsx';
import HundredChecklistPage from './pages/hundred-checklist/HundredChecklistPage.tsx';

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
      {
        path: '/silksong-companion/100-checklist',
        Component: HundredChecklistPage,
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
