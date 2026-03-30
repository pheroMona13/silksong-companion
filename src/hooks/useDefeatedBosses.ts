import { useEffect, useState } from 'react';
import { getUser, updateDefeatedBosses } from '../database/db';

export function useDefeatedBosses() {
  const [defeatedBosses, setDefeatedBosses] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const user = await getUser();
    return user.defeated_bosses ?? [];
  }

  useEffect(() => {
    async function updateData() {
      const result = await load();

      setDefeatedBosses(result);
      setLoading(false);
    }

    updateData();
  }, []);

  async function toggleBoss(bossId: string) {
    let updated: string[];

    const result = await load();

    if (result.includes(bossId)) {
      updated = result.filter((id) => id !== bossId);
    } else {
      updated = [...result, bossId];
    }

    setDefeatedBosses(updated);
    await updateDefeatedBosses(updated);
  }

  return {
    defeatedBosses,
    toggleBoss,
    loading,
  };
}
