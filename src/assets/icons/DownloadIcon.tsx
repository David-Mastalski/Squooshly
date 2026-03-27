import React from 'react';

interface DownloadIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const DownloadIcon: React.FC<DownloadIconProps> = ({ 
  size = 15, 
  color = "currentColor", 
  strokeWidth = 2,
  className,
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Strzałka w dół */}
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      
      {/* Linia podstawy */}
      <path d="M5 21h14" />
    </svg>
  );
};