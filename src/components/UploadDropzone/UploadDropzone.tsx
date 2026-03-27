import React, { useState } from "react";
import styles from "./UploadDropzone.module.css";
import UploadImageIcon from "../../assets/icons/UploadImageIcon";
import type { ImageItemProps } from "../../types/image";

interface UploadDropzoneProps {
  setImages: React.Dispatch<React.SetStateAction<ImageItemProps[]>>;
  addToHistory: (images: ImageItemProps[]) => Promise<void>;
  isInImages: (img: ImageItemProps) => boolean;
}

function UploadDropzone({
  setImages,
  addToHistory,
  isInImages,
}: UploadDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const mapFilesToImageItems = async (
    files: File[],
  ): Promise<ImageItemProps[]> => {
    const promises = files.map(async (file) => {
      const now = Date.now();

      const reader = new FileReader();
      const dataUrl: string = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const img = new Image();
      img.src = dataUrl;

      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
      });

      return {
        id: crypto.randomUUID(),
        name: file.name,
        file: file,
        preview: dataUrl,
        status: "converting" as const,
        weight: file.size,
        type: file.type,
        width: img.naturalWidth,
        height: img.naturalHeight,
        date: now,
      };
    });

    return Promise.all(promises);
  };

  const processFiles = async (files: File[]) => {
    const validFiles = files.filter((file) => allowedTypes.includes(file.type));

    if (validFiles.length !== files.length) {
      alert("Niektóre pliki zostały odrzucone – tylko obrazy są dozwolone.");
    }

    if (validFiles.length === 0) return;

    const newImages = await mapFilesToImageItems(files);

    ///Sprawdzanie czy któryś z uploadowanych obrazów nie został już przekonwertowany
    const filtered = newImages.filter((file) => !isInImages(file));
    if (filtered.length === 0) return;
    ///

    setImages((prev) => [...prev, ...newImages]);
    addToHistory(newImages);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    processFiles(files);
  };

  return (
    <div
      className={`${styles.dropzone} ${isDragging ? styles.dragging : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className={styles["dropzone-inner"]}>
        <UploadImageIcon />
        <span className={styles.placeholder}>
          Click or drag your files here to convert
        </span>
      </div>
      <input
        type="file"
        accept=".png,.jpg,.jpeg,.webp"
        multiple
        onChange={handleFileChange}
        className={styles.inputFile}
      />
    </div>
  );
}

export default UploadDropzone;
