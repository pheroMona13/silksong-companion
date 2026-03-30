import { useEffect, useState } from 'react';
import { getUser, updateFoundCollectibles } from '../database/db';

export function useFoundCollectibles() {
  const [foundCollectibles, setFoundCollectibles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const user = await getUser();
    return user.found_collectibles ?? [];
  }

  useEffect(() => {
    async function updateData() {
      const result = await load();

      setFoundCollectibles(result);
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

    setFoundCollectibles(updated);
    await updateFoundCollectibles(updated);
  }

  return {
    foundCollectibles,
    toggleItem,
    loading,
  };
}
