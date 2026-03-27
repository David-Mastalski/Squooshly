import "./App.css";
import { useEffect, useState } from "react";
import type { ImageItemProps } from "./types/image";
import Header from "./components/Header/Header";
import UploadedImages from "./components/UploadedImages/UploadedImages";
import UploadDropzone from "./components/UploadDropzone/UploadDropzone";
import DownloadAll from "./components/DownloadAll/DownloadAll";
import { useImageHistory } from "./hooks/useImageHistory";
import Advertisement from "./components/Advertisement/Advertisement";
import History from "./components/History/History";

function App() {
  const [images, setImages] = useState<ImageItemProps[]>([]);
  const { history, addToHistory, removeFromHistory, clearHistory } =
    useImageHistory();

  const convertToWebP = async (image: ImageItemProps) => {
    try {
      const imgEl = new Image();
      imgEl.src = image.preview;

      await new Promise<void>((resolve) => (imgEl.onload = () => resolve()));

      let { height, width } = imgEl;

      if (width > 2000 || height > 2000) {
        const scale = Math.min(2000 / width, 2000 / height);
        height *= scale;
        width *= scale;
      }

      const canvas = document.createElement("canvas");
      canvas.height = height;
      canvas.width = width;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(imgEl, 0, 0, width, height);

      const webpData = canvas.toDataURL("image/webp", 0.8);

      setImages((prev) =>
        prev.map((img) =>
          img.id === image.id
            ? {
                ...img,
                status: "converted",
                webp: webpData,
                width,
                height,
                type: "image/webp",
              }
            : img,
        ),
      );
    } catch (err) {
      console.error("Conversion failed:", err);
      setImages((prev) =>
        prev.map((img) =>
          img.id === image.id ? { ...img, status: "error" } : img,
        ),
      );
    }
  };

  const convertFromHistory = (img: ImageItemProps) => {
    setImages((prev) => [
      ...prev,
      {
        ...img,
        id: crypto.randomUUID(),
        status: "converting",
      },
    ]);
    addToHistory([img])
  };

  const isAlreadyConverted = (img: ImageItemProps) => {
    return images.some(
      (item) =>
        item.name === img.name &&
        item.weight === img.weight &&
        item.status === "converted",
    );
  };

  const isInImages = (img: ImageItemProps) => {
    return images.some(
      (item) =>
        item.name === img.name &&
        item.weight === img.weight
    );
  };

  useEffect(() => {
    images
      .filter((img) => img.status === "converting")
      .forEach((img) => {
        convertToWebP(img);
      });
  }, [images]);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="main-layout">
            <section className="panel main-panel">
              <h1 className="app-title">Convert image to Webp</h1>
              <UploadDropzone
                setImages={setImages}
                addToHistory={addToHistory}
                isInImages={isInImages}
              />
              {images.length > 0 && <UploadedImages images={images} />}
              {images.length > 0 && <DownloadAll images={images} />}
            </section>
            <section className="panel_rightCol">
              <Advertisement />
              {history.length > 0 && (
                <History
                  history={history}
                  removeFromHistory={removeFromHistory}
                  clearHistory={clearHistory}
                  onConvert={convertFromHistory}
                  isAlreadyConverted={isAlreadyConverted}
                />
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
