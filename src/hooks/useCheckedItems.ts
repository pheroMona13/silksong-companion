import { useEffect, useState } from 'react';
import { getUser, updateCheckedItems } from '../database/db';

export function useCheckedItems() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const user = await getUser();
    return user.checked_items ?? [];
  }

  useEffect(() => {
    async function updateData() {
      const result = await load();

      setCheckedItems(result);
      setLoading(false);
    }

    updateData();
  }, []);

  async function toggleItem(id: string) {
    let updated: string[];

    const result = await load();

    if (result.includes(id)) {
      updated = result.filter((item) => item !== id);
    } else {
      updated = [...result, id];
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
