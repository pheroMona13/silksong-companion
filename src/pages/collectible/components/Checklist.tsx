import { useMemo } from 'react';
import Collapsible from '../../../components/collapsible/Collapsible';
import type {
  CollectibleCategoryType,
  CollectibleType,
} from '../../../data/collectibles';
import { useFoundCollectibles } from '../../../hooks/useFoundCollectibles';
import ChecklistCard from './ChecklistCard';

export type ChecklistProps = {
  title: string;
  category: CollectibleCategoryType;
  filteredList: CollectibleType[];
};
function Checklist({ title, category, filteredList }: ChecklistProps) {
  const { foundCollectibles, toggleItem } = useFoundCollectibles();

  const displayList = useMemo(() => {
    return filteredList.filter((e) => {
      return e.category === category;
    });
  }, [filteredList, category]);
  const totalCheckedCount = useMemo(() => {
    return displayList.filter((e) => {
      return foundCollectibles.includes(e.id);
    }).length;
  }, [foundCollectibles, displayList]);

  return (
    <Collapsible
      title={`[${totalCheckedCount}/${displayList.length}] ${title}`}
    >
      {!displayList.length ? (
        <p className="empty">There are no {title} in this filtered location.</p>
      ) : null}

      {displayList.map((item) => {
        return (
          <ChecklistCard
            key={item.id}
            item={item}
            isSelected={foundCollectibles.includes(item.id)}
            onToggle={toggleItem}
            selectable
          />
        );
      })}
    </Collapsible>
  );
}

export default Checklist;
