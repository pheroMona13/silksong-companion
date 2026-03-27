import { useEffect, useState } from 'react';
import { getUser, updateFoundFleas } from '../database/db';

export function useFoundMemoryLockets() {
  const [foundMemoryLockets, setFoundMemoryLockets] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const user = await getUser();
      setFoundMemoryLockets(user.found_fleas ?? []);
      setLoading(false);
    }

    load();
  }, []);

  async function toggleMemoryLocket(id: string) {
    let updated: string[];

    if (foundMemoryLockets.includes(id)) {
      updated = foundMemoryLockets.filter((item) => item !== id);
    } else {
      updated = [...foundMemoryLockets, id];
    }

    setFoundMemoryLockets(updated);
    await updateFoundFleas(updated);
  }

  return {
    foundMemoryLockets,
    toggleMemoryLocket,
    loading,
  };
}
