import styles from "./DownloadAll.module.css";
import type { ImageItemProps } from "../../types/image";
import { DownloadIcon } from "../../assets/icons/DownloadIcon";
import { downloadImagesAsZip } from "../../utils/download";

type DownloadAllProps = {
  images: ImageItemProps[];
};

function DownloadAll({ images }: DownloadAllProps) {
  const convertedImages = images.filter(
    (img) => img.status === "converted" && img.webp,
  );

  return (
    <div className={styles.container}>
      <p className={styles.counter}>Total {convertedImages.length} files</p>
      <div>
        <button
        className={styles.downloadAll}
          onClick={() => downloadImagesAsZip(images)}
          disabled={convertedImages.length === 0}
        >
          <DownloadIcon />
          Download All
        </button>
      </div>
    </div>
  );
}

export default DownloadAll;
