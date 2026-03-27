import JSZip from "jszip";
import type { ImageItemProps } from "../types/image";

export const downloadImage = (file: ImageItemProps) => {
  if (!file.webp) return;
  
  const link = document.createElement("a");
  link.href = file.webp;

  const fileName = file.name.replace(/\.[^/.]+$/, ".webp");
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadImagesAsZip = async (images: ImageItemProps[]) => {
  const zip = new JSZip();

  const convertedImages = images.filter(
    (img) => img.status === "converted" && img.webp,
  );

  for (const img of convertedImages) {
    if (!img.webp) continue;

    const response = await fetch(img.webp);
    const blob = await response.blob();

    const fileName = img.name.replace(/\.[^/.]+$/, ".webp");

    zip.file(fileName, blob);
  }

  const content = await zip.generateAsync({ type: "blob" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(content);
  link.download = "images.zip";
  link.click();
};
