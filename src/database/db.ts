// src/lib/db.ts

const DB_NAME = "virel-dilksong-db";
const DB_VERSION = 1;
const STORE_NAME = "user";

export type UserData = {
  id: string;
  defeated_bosses: string[];
};

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function getUser(): Promise<UserData> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);

    const request = store.get("current");

    request.onsuccess = () => {
      if (request.result) {
        resolve(request.result);
      } else {
        // Create default user if not exists
        const defaultUser: UserData = {
          id: "current",
          defeated_bosses: [],
        };

        const writeTx = db.transaction(STORE_NAME, "readwrite");
        writeTx.objectStore(STORE_NAME).put(defaultUser);

        resolve(defaultUser);
      }
    };

    request.onerror = () => reject(request.error);
  });
}

export async function updateDefeatedBosses(
  defeated_bosses: string[],
): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);

    const user: UserData = {
      id: "current",
      defeated_bosses,
    };

    const request = store.put(user);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}
