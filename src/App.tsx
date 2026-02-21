import Layout from "./layout/Layout.tsx";
import BossPage from "./pages/boss/BossPage.tsx";
import PWABadge from "./PWABadge.tsx";

function App() {
  return (
    <>
      <Layout>
        <BossPage />
      </Layout>

      <PWABadge />
    </>
  );
}

export default App;
