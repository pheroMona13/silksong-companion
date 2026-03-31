import { Link } from 'react-router';
import './HomePage.scss';

function HomePage() {
  return (
    <div className="HomePage">
      <Link to="/silksong-companion/100-checklist" className="card">
        100% Checklist
      </Link>
      <Link to="/silksong-companion/bosses" className="card">
        List of Bosses
      </Link>
      <Link to="/silksong-companion/fleas" className="card">
        List of Fleas
      </Link>
      <Link to="/silksong-companion/collectibles" className="card">
        List of Collectibles
      </Link>
      <Link to="/silksong-companion/memory-lockets" className="card">
        List of Memory Lockets
      </Link>
      <Link to="/silksong-companion/options" className="card">
        Options
      </Link>
    </div>
  );
}

export default HomePage;
