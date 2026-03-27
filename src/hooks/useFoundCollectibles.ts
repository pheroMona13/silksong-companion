import { useEffect, useState } from 'react';
import { getUser, updateFoundCollectibles } from '../database/db';

export function useFoundCollectibles() {
  const [foundCollectibles, setFoundCollectibles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const user = await getUser();
      setFoundCollectibles(user.found_collectibles ?? []);
      setLoading(false);
    }

    load();
  }, []);

  async function toggleItem(id: string) {
    let updated: string[];

    if (foundCollectibles.includes(id)) {
      updated = foundCollectibles.filter((item) => item !== id);
    } else {
      updated = [...foundCollectibles, id];
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
