import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './layout/Layout.tsx';
import BossPage from './pages/boss/BossPage.tsx';
import PWABadge from './PWABadge.tsx';
import HomePage from './pages/home/HomePage.tsx';
import HundredChecklistPage from './pages/hundred-checklist/HundredChecklistPage.tsx';
import FleaPage from './pages/flea/FleaPage.tsx';
import CollectiblesPage from './pages/collectible/CollectiblesPage.tsx';
import MemoryLocketPage from './pages/memory-locket/MemoryLocketPage.tsx';
import OptionsPage from './pages/options/OptionsPage.tsx';
import SavePage from './pages/save/SavePage.tsx';

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
      {
        path: '/silksong-companion/fleas',
        Component: FleaPage,
      },
      {
        path: '/silksong-companion/collectibles',
        Component: CollectiblesPage,
      },
      {
        path: '/silksong-companion/memory-lockets',
        Component: MemoryLocketPage,
      },
      {
        path: '/silksong-companion/options',
        Component: OptionsPage,
      },
      {
        path: '/silksong-companion/save',
        Component: SavePage,
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
