# Squooshly

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## 🖼️ Funkcjonalności

- Konwersja przesłanych obrazów do formatu **.webp**.  
- Automatyczne zmniejszanie zdjęć o większej rozdzielczości niż **2000px** w poziomie lub pionie.  
- **Historia przesłanych zdjęć** przechowywana lokalnie w przeglądarce przy użyciu **IndexedDB**, w oryginalnej formie.  
- Zdjęcia z historii można:
  - konwertować do formatu WebP, jeśli nie zostały już wcześniej przekonwertowane,
  - usuwać z historii.  
- **Blokada duplikatów**:
  - Nie można przesyłać ani konwertować zdjęcia, które już zostało przekonwertowane i czeka na pobranie.
  - Po dodaniu zdjęcia do historii, nie można go ponownie konwertować, jeśli zostało już przekonwertowane.  
- Miniatury i informacje o plikach (nazwa, rozmiar, format).  
- Pobieranie pojedynczych lub wszystkich przekonwertowanych plików.  
- Status konwersji w czasie rzeczywistym: `converting`, `converted`, `error`.

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
