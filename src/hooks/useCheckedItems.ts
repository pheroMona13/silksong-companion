import { useEffect, useState } from 'react';
import { getUser, updateCheckedItems } from '../database/db';

export function useCheckedItems() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const user = await getUser();
      setCheckedItems(user.checked_items);
      setLoading(false);
    }

    load();
  }, []);

  async function toggleItem(bossId: string) {
    let updated: string[];

    if (checkedItems.includes(bossId)) {
      updated = checkedItems.filter((id) => id !== bossId);
    } else {
      updated = [...checkedItems, bossId];
    }

    setCheckedItems(updated);
    await updateCheckedItems(updated);
  }

  return {
    checkedItems,
    toggleItem,
    loading,
  };
}
