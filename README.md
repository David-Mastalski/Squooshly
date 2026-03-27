# Squooshly

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

You can access the live version of the application here: [Live Demo](https://squooshly.netlify.app/)

## 🖼️ Features

* **⚡ WebP Conversion** – Effortless conversion of uploaded images to the modern `.webp` format for superior web performance and smaller file sizes.
* **📐 Smart Resizing** – Automatic downscaling of images exceeding **2000px** (width or height) to maintain optimal dimensions while perfectly preserving aspect ratio.
* **📦 Local History Management** – Powered by **IndexedDB** for persistent local storage. Your original uploads remain safe and accessible even after refreshing the page or closing the browser.
* **🔄 Advanced Image History**:
    * **On-demand conversion**: of saved files to webp format
    * **Easy Cleanup**: Remove individual entries or clear your history with a single click.
* **🛡️ Smart Duplicate Prevention** – Built-in logic to prevent redundant uploads. The system detects if an image is already processed or waiting for download, saving you time and disk space.
* **Light & Dark Mode**: Easily toggle between themes for a comfortable visual experience in any environment.
* **🖼️ Rich UI/UX** – Comprehensive file management featuring:
    * Instant image previews (thumbnails).
    * Detailed file information (name, size, and format).
    * Real-time status tracking: `Converting`, `Converted`, or `Error`.
* **📥 Batch Processing** – Flexibility to download converted images individually or export all processed files at once as a single batch.

## 🔒 Privacy & Performance

* **Client-Side Only**: All image processing happens directly in your browser. No files are ever uploaded to a server, ensuring 100% privacy.
* **Offline Capability**: Thanks to IndexedDB, the application handles large files efficiently without relying on an internet connection for processing.

 ## Installation 
Clone this repository to your local computer
```
git clone https://github.com/David-Mastalski/Squooshly.git
```
Navigate to the application directory

Open the directory with a code editor such as Visual Studio Code
```
npm i
```
```
npm run dev
```
