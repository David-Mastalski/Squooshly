export const formatFileName = (name: string, type: string): string => {
  if (!name || !type) return "";

  const extension = type.split("/")[1];
  const fileNameWithoutExt = name.includes(".")
    ? name.substring(0, name.lastIndexOf("."))
    : name;

  const startChars = 5;
  const endChars = 3;
  const maxLength = startChars + endChars + 2;

  let processedName: string;

  if (fileNameWithoutExt.length > maxLength) {
    const start = fileNameWithoutExt.slice(0, startChars);
    const end = fileNameWithoutExt.slice(-endChars);
    processedName = `${start}...${end}`;
  } else {
    processedName = fileNameWithoutExt;
  }

  return `${processedName}.${extension}`;
};

export const formatFileWeight = (bytes: number) => {
  if (bytes === 0) return "0 MB";
  const megabytes = bytes / (1024 * 1024);
  return `${megabytes.toFixed(2)} MB`;
};
