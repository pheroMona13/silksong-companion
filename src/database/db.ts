// src/lib/db.ts

import type { SaveType } from '../pages/save/SavePage';

const DB_NAME = 'silksong-companion-db';
const DB_VERSION = 1;
const STORE_NAME = 'user';

export type UserData = {
  id: string;
  defeated_bosses: string[];
  checked_items: string[];
  found_fleas: string[];
  found_collectibles: string[];
  found_memory_lockets: string[];
};

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function resetAllChecked(): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const request = store.get('current');

    request.onsuccess = () => {
      const requestPut = store.put({
        id: 'current',
        defeated_bosses: [],
        checked_items: [],
        found_fleas: [],
        found_collectibles: [],
        found_memory_lockets: [],
      });

      requestPut.onsuccess = () => resolve();
      requestPut.onerror = () => reject(request.error);
    };

    request.onerror = () => reject(request.error);
  });
}

export async function getUser(): Promise<UserData> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);

    const request = store.get('current');

    request.onsuccess = () => {
      if (request.result) {
        resolve(request.result);
      } else {
        // Create default user if not exists
        const defaultUser: UserData = {
          id: 'current',
          defeated_bosses: [],
          checked_items: [],
          found_fleas: [],
          found_collectibles: [],
          found_memory_lockets: [],
        };

        const writeTx = db.transaction(STORE_NAME, 'readwrite');
        writeTx.objectStore(STORE_NAME).put(defaultUser);

        resolve(defaultUser);
      }
    };

    request.onerror = () => reject(request.error);
  });
}

export async function loadSave(save?: SaveType): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const request = store.get('current');

    request.onsuccess = () => {
      const requestPut = store.put(
        save?.data ?? {
          id: 'current',
          defeated_bosses: [],
          checked_items: [],
          found_fleas: [],
          found_collectibles: [],
          found_memory_lockets: [],
        },
      );

      requestPut.onsuccess = () => resolve();
      requestPut.onerror = () => reject(request.error);
    };

    request.onerror = () => reject(request.error);
  });
}

export async function updateDefeatedBosses(
  defeated_bosses: string[],
): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const request = store.get('current');

    request.onsuccess = () => {
      let currentData: UserData;

      if (request.result) {
        currentData = request.result;
      } else {
        // Create default user if not exists
        currentData = {
          id: 'current',
          defeated_bosses: [],
          checked_items: [],
          found_fleas: [],
          found_collectibles: [],
          found_memory_lockets: [],
        };
      }

      const user: UserData = {
        ...currentData,
        defeated_bosses,
      };

      const requestPut = store.put(user);

      requestPut.onsuccess = () => resolve();
      requestPut.onerror = () => reject(request.error);
    };

    request.onerror = () => reject(request.error);
  });
}

export async function updateCheckedItems(
  checked_items: string[],
): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const request = store.get('current');

    request.onsuccess = () => {
      let currentData: UserData;

      if (request.result) {
        currentData = request.result;
      } else {
        // Create default user if not exists
        currentData = {
          id: 'current',
          defeated_bosses: [],
          checked_items: [],
          found_fleas: [],
          found_collectibles: [],
          found_memory_lockets: [],
        };
      }

      const user: UserData = {
        ...currentData,
        checked_items,
      };

      const requestPut = store.put(user);

      requestPut.onsuccess = () => resolve();
      requestPut.onerror = () => reject(request.error);
    };

    request.onerror = () => reject(request.error);
  });
}

export async function updateFoundFleas(found_fleas: string[]): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const request = store.get('current');

    request.onsuccess = () => {
      let currentData: UserData;

      if (request.result) {
        currentData = request.result;
      } else {
        // Create default user if not exists
        currentData = {
          id: 'current',
          defeated_bosses: [],
          checked_items: [],
          found_fleas: [],
          found_collectibles: [],
          found_memory_lockets: [],
        };
      }

      const user: UserData = {
        ...currentData,
        found_fleas,
      };

      const requestPut = store.put(user);

      requestPut.onsuccess = () => resolve();
      requestPut.onerror = () => reject(request.error);
    };

    request.onerror = () => reject(request.error);
  });
}

export async function updateFoundCollectibles(
  found_collectibles: string[],
): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const request = store.get('current');

    request.onsuccess = () => {
      let currentData: UserData;

      if (request.result) {
        currentData = request.result;
      } else {
        // Create default user if not exists
        currentData = {
          id: 'current',
          defeated_bosses: [],
          checked_items: [],
          found_fleas: [],
          found_collectibles: [],
          found_memory_lockets: [],
        };
      }

      const user: UserData = {
        ...currentData,
        found_collectibles,
      };

      const requestPut = store.put(user);

      requestPut.onsuccess = () => resolve();
      requestPut.onerror = () => reject(request.error);
    };

    request.onerror = () => reject(request.error);
  });
}

export async function updateFoundMemoryLockets(
  found_memory_lockets: string[],
): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    const request = store.get('current');

    request.onsuccess = () => {
      let currentData: UserData;

      if (request.result) {
        currentData = request.result;
      } else {
        // Create default user if not exists
        currentData = {
          id: 'current',
          defeated_bosses: [],
          checked_items: [],
          found_fleas: [],
          found_collectibles: [],
          found_memory_lockets: [],
        };
      }

      const user: UserData = {
        ...currentData,
        found_memory_lockets,
      };

      const requestPut = store.put(user);

      requestPut.onsuccess = () => resolve();
      requestPut.onerror = () => reject(request.error);
    };

    request.onerror = () => reject(request.error);
  });
}
