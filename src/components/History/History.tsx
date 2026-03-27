import { useEffect, useRef, useState } from "react";
import styles from "./History.module.css";
import type { ImageItemProps } from "../../types/image";
import { formatFileName, formatFileWeight } from "../../utils/fileHelpers";
import { MoreOptionsIcon } from "../../assets/icons/MoreOptionsIcon";
import { TrashIcon } from "../../assets/icons/TrashIcon";

type HistoryProps = {
  history: ImageItemProps[];
  removeFromHistory: (id: string) => Promise<void>;
  clearHistory: () => Promise<void>;
  onConvert: (img: ImageItemProps) => void;
  isAlreadyConverted: (img: ImageItemProps) => boolean;
};

function History({
  history,
  removeFromHistory,
  clearHistory,
  onConvert,
  isAlreadyConverted,
}: HistoryProps) {
  const [openOptionsId, setOpenOptionsId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOptions = (id: string) => {
    setOpenOptionsId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenOptionsId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`panel ${styles.historyPanel}`}>
      <div className={styles.header}>
        <h2>History</h2>
        <button onClick={clearHistory} className={styles.clearHistory}>
          <TrashIcon />
        </button>
      </div>
      <div className={styles.files} ref={containerRef}>
        {history.map((img) => (
          <div key={img.id} className={styles.file}>
            <div className={styles.leftCol}>
              <div className={styles.filePreview}>
                <img src={img.preview} alt={img.name} loading="lazy" />
              </div>
              <div>
                <p className={`title`}>{formatFileName(img.name, img.type)}</p>
                <span className="weight">{formatFileWeight(img.weight)}</span>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <button
                className={styles.showOptionsBtn}
                onClick={() => toggleOptions(img.id)}
              >
                <MoreOptionsIcon />
              </button>

              <div
                className={styles.options}
                style={{ display: openOptionsId === img.id ? "flex" : "none" }}
              >
                <button
                  onClick={() => {
                    removeFromHistory(img.id);
                    setOpenOptionsId(null);
                  }}
                >
                  Delete
                </button>
                <button
                  disabled={isAlreadyConverted(img)}
                  onClick={() => {
                    onConvert(img);
                    setOpenOptionsId(null);
                  }}
                >
                  {isAlreadyConverted(img)
                    ? "Already converted"
                    : "Convert to WebP"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
