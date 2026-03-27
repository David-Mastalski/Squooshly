import React from "react";

interface ImageSearchIconProps {
  size?: number;
  backgroundFill?: string;
  imageFill?: string;
  iconColor?: string;
  className?: string;
}

const ImageSearchIcon: React.FC<ImageSearchIconProps> = ({
  size = 70,
  backgroundFill = "var(--upload-icon-bg-fill)",
  imageFill = "var(--upload-icon-image-fill)",
  iconColor = "var(--upload-icon-color)",
  className,
}) => {
  const height = size * 0.968;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 100 96.8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="0"
        y="23.2"
        width="80"
        height="73.6"
        rx="8"
        fill={backgroundFill}
      />

      <rect x="20" y="3.2" width="80" height="73.6" rx="8" fill={imageFill} />

      <circle cx="32.8" cy="19.2" r="6.4" fill={iconColor} />

      <path
        d="M77.309 29.483a1.6 1.6 0 00-1.269-.683 1.654 1.654 0 00-1.3.617L53.585 56.617 42.05 42.2a1.6 1.6 0 00-1.223-.6 1.726 1.726 0 00-1.241.559L20 65.01v6.99a8.009 8.009 0 008 8h64a8.008 8.008 0 008-8v-10.1l-22.691-32.417z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ImageSearchIcon;
