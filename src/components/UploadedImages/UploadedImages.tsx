import styles from "./UploadedImages.module.css";
import type { ImageItemProps } from "../../types/image";
import WebPFormatIcon from "../../assets/icons/png-format.png";
import { LoadingIndicator } from "../application/loading-indicator/loading-indicator";
import { VerifiedIcon } from "../../assets/icons/VerifiedIcon";
import { DownloadIcon } from "../../assets/icons/DownloadIcon";
import { downloadImage } from "../../utils/download";
import { ErrorIcon } from "../../assets/icons/ErrorIcon";
import { formatFileName, formatFileWeight } from "../../utils/fileHelpers";

type UploadedImagesProps = {
  images: ImageItemProps[];
};

function UploadedImages({ images }: UploadedImagesProps) {
  return (
    <div className={styles.uploadedImages}>
      {images.map((file) => (
        <div key={file.id} className={styles.imageTile}>
          <div className={`${styles["imgInner-container"]}`}>
            <div className={styles.format}>
              {file.type === "image/webp" && (
                <img src={WebPFormatIcon} alt="WebP" />
              )}
            </div>
            {/* <p className={styles.title}> */}
            <p className="title">
              {formatFileName(file.name, file.type)}
            </p>
          </div>
          <div className={`${styles["imgInner-container"]} ${styles.status}`}>
            {file.status === "converting" && (
              <LoadingIndicator type="line-simple" size="xs" />
            )}
            {file.status === "converted" && <VerifiedIcon />}
            {file.status === "error" && <ErrorIcon />}
            <p className={styles[file.status]}>
              {file.status}
              {file.status === "converting" && "..."}
            </p>
          </div>
          <div className={styles.downloadImageWrapper}>
            {file.status === "converted" && (
              <>
                <p className={`weight ${styles.weight}`}>{formatFileWeight(file.weight)}</p>
                <button
                  className={styles.downloadImage}
                  disabled={!file.webp}
                  onClick={() => downloadImage(file)}
                >
                  <DownloadIcon />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UploadedImages;
