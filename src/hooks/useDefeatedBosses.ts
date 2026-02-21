import { useEffect, useState } from "react";
import { getUser, updateDefeatedBosses } from "../database/db";

export function useDefeatedBosses() {
  const [defeatedBosses, setDefeatedBosses] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const user = await getUser();
      setDefeatedBosses(user.defeated_bosses);
      setLoading(false);
    }

    load();
  }, []);

  async function toggleBoss(bossId: string) {
    let updated: string[];

    if (defeatedBosses.includes(bossId)) {
      updated = defeatedBosses.filter((id) => id !== bossId);
    } else {
      updated = [...defeatedBosses, bossId];
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
