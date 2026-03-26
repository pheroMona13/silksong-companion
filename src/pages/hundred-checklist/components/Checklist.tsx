import { useMemo } from 'react';
import Collapsible from '../../../components/collapsible/Collapsible';
import {
  checklists,
  type ChecklistCategoryType,
  type ChecklistType,
} from '../../../data/checklists';
import { useCheckedItems } from '../../../hooks/useCheckedItems';
import ChecklistCard from './ChecklistCard';

export type ChecklistProps = {
  title: string;
  category: ChecklistCategoryType;
  filteredList: ChecklistType[];
};
function Checklist({ title, category, filteredList }: ChecklistProps) {
  const { checkedItems, toggleItem } = useCheckedItems();

  const displayList = useMemo(() => {
    return filteredList.filter((e) => {
      return e.category === category;
    });
  }, [filteredList, category]);
  const totalItemsInCategory = useMemo(() => {
    return checklists.filter((e) => {
      return e.category === category;
    });
  }, [category]);
  const totalCheckedCount = useMemo(() => {
    return totalItemsInCategory.filter((e) => {
      return checkedItems.includes(e.id);
    }).length;
  }, [checkedItems, totalItemsInCategory]);

  return (
    <Collapsible
      title={`[${totalCheckedCount}/${totalItemsInCategory.length}] ${title}`}
    >
      {!displayList.length ? (
        <p className="empty">There are no {title} in this filtered location.</p>
      ) : null}

      {displayList.map((item) => {
        return (
          <ChecklistCard
            key={item.id}
            item={item}
            isSelected={checkedItems.includes(item.id)}
            onToggle={toggleItem}
            selectable
          />
        );
      })}
    </Collapsible>
  );
}

export default Checklist;
