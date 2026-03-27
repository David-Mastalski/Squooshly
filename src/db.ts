import { openDB } from "idb";

export const DB_NAME = "webpConverterDB";
export const DB_VERSION = 1;
export const IMAGE_STORE = "images";

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(IMAGE_STORE)) {
        const store = db.createObjectStore(IMAGE_STORE, { keyPath: "id" });
        store.createIndex("date", "date");
      }
    },
  });
};
