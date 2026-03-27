import { useEffect, useState } from "react";
import type { ImageItemProps } from "../types/image";
import { IMAGE_STORE, initDB } from "../db";

export const useImageHistory = () => {
  const [history, setHistory] = useState<ImageItemProps[]>([]);

  useEffect(() => {
    const loadHistory = async () => {
      const db = await initDB();
      const allItems = await db.getAllFromIndex(IMAGE_STORE, "date");
      setHistory(allItems.sort((a, b) => b.date - a.date));
    };
    loadHistory();
  }, []);

  const isSameFile = (a: ImageItemProps, b: ImageItemProps) =>
    a.name === b.name && a.weight === b.weight && a.type === b.type;

  const addToHistory = async (images: ImageItemProps[]) => {
    const db = await initDB();

    const existing: ImageItemProps[] = await db.getAll(IMAGE_STORE);

    const updatedHistory = [...existing];
    const now = Date.now();

    images.forEach((img) => {
      const index = updatedHistory.findIndex((item) => isSameFile(item, img));

      if (index !== -1) {
        updatedHistory[index] = {
          ...updatedHistory[index],
          date: now,
        };
      } else {
        updatedHistory.push({
          ...img,
          date: now,
        });
      }
    });

    updatedHistory.sort((a, b) => b.date - a.date);

    const limited = updatedHistory.slice(0, 30);
    const tx = db.transaction(IMAGE_STORE, "readwrite");
    await tx.store.clear();

    limited.forEach((item) => tx.store.put(item));

    await tx.done;

    setHistory(limited);
  };

  const removeFromHistory = async (id: string) => {
    const db = await initDB();

    const tx = db.transaction(IMAGE_STORE, "readwrite");
    await tx.store.delete(id);
    await tx.done;

    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const clearHistory = async () => {
    const db = await initDB();
    const tx = db.transaction(IMAGE_STORE, "readwrite");
    await tx.store.clear();
    await tx.done;
    setHistory([]);
  };

  return { history, addToHistory, removeFromHistory, clearHistory };
};
