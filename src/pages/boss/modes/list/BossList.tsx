import { useMemo, useState } from "react";
import { bosses } from "../../../../data/bosses";
import BossCard from "./components/BossCard";
import Button from "../../../../components/button/Button";
import { useDefeatedBosses } from "../../../../hooks/useDefeatedBosses";
import "./BossList.scss";

function BossList() {
  const { defeatedBosses, toggleBoss } = useDefeatedBosses();

  const [isSelectable, setIsSelectable] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleStatus = () => {
    setIsSelectable((prev) => !prev);
  };
  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const filteredBosses = useMemo(() => {
    return bosses.filter((boss) => {
      return boss.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm]);

  return (
    <div className="boss_list">
      <h2>All 48 Hollow Knight Silksong bosses, in order</h2>

      <div className="toolbar">
        <Button onClick={toggleStatus}>status</Button>
        <Button onClick={toggleFilter}>
          {!isFilterVisible && searchTerm ? "filters *" : "filters"}
        </Button>
      </div>

      {isFilterVisible ? (
        <div className="filters">
          <input
            type="text"
            placeholder="search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      ) : null}

      <div className="list">
        {filteredBosses.map((boss) => (
          <BossCard
            key={boss.id}
            boss={boss}
            selectable={isSelectable}
            isSelected={defeatedBosses.includes(boss.id)}
            onToggle={toggleBoss}
          />
        ))}

        {filteredBosses.length === 0 && (
          <div className="no_results">No bosses match your search.</div>
        )}
      </div>
    </div>
  );
}

export default BossList;
