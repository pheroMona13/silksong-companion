import { useEffect, useState } from 'react';
import { getUser, updateCheckedItems } from '../database/db';

export function useCheckedItems() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const user = await getUser();
      setCheckedItems(user.checked_items ?? []);
      setLoading(false);
    }

    load();
  }, []);

  async function toggleItem(id: string) {
    let updated: string[];

    if (checkedItems.includes(id)) {
      updated = checkedItems.filter((item) => item !== id);
    } else {
      updated = [...checkedItems, id];
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
