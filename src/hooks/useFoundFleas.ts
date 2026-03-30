import { useEffect, useState } from 'react';
import { getUser, updateFoundFleas } from '../database/db';

export function useFoundFleas() {
  const [foundFleas, setFoundFleas] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const user = await getUser();
    return user.found_fleas ?? [];
  }

  useEffect(() => {
    async function updateData() {
      const result = await load();

      setFoundFleas(result);
      setLoading(false);
    }

    updateData();
  }, []);

  async function toggleFlea(id: string) {
    let updated: string[];

    const result = await load();

    if (result.includes(id)) {
      updated = result.filter((item) => item !== id);
    } else {
      updated = [...result, id];
    }

    setFoundFleas(updated);
    await updateFoundFleas(updated);
  }

  return {
    foundFleas,
    toggleFlea,
    loading,
  };
}
