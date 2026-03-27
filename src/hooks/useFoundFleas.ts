import { useEffect, useState } from 'react';
import { getUser, updateFoundFleas } from '../database/db';

export function useFoundFleas() {
  const [foundFleas, setFoundFleas] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const user = await getUser();
      setFoundFleas(user.found_fleas ?? []);
      setLoading(false);
    }

    load();
  }, []);

  async function toggleFlea(id: string) {
    let updated: string[];

    if (foundFleas.includes(id)) {
      updated = foundFleas.filter((item) => item !== id);
    } else {
      updated = [...foundFleas, id];
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
