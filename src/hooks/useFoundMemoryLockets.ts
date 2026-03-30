import { useEffect, useState } from 'react';
import { getUser, updateFoundMemoryLockets } from '../database/db';

export function useFoundMemoryLockets() {
  const [foundMemoryLockets, setFoundMemoryLockets] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const user = await getUser();
    return user.found_memory_lockets ?? [];
  }

  useEffect(() => {
    async function updateData() {
      const result = await load();

      setFoundMemoryLockets(result);
      setLoading(false);
    }

    updateData();
  }, []);

  async function toggleMemoryLocket(id: string) {
    let updated: string[];

    const result = await load();

    if (result.includes(id)) {
      updated = result.filter((item) => item !== id);
    } else {
      updated = [...result, id];
    }

    setFoundMemoryLockets(updated);
    await updateFoundMemoryLockets(updated);
  }

  return {
    foundMemoryLockets,
    toggleMemoryLocket,
    loading,
  };
}
