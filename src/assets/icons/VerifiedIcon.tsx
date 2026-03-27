import React from 'react';

interface VerifiedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const VerifiedIcon: React.FC<VerifiedIconProps> = ({ 
  size = 13, 
  color = "var(--green)", 
  className,
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Zewnętrzny krąg */}
      <path
        d="M10.243 1.757a6 6 0 00-8.485 8.485 6 6 0 108.485-8.485ZM6 11.3A5.3 5.3 0 116 .7a5.3 5.3 0 010 10.6Z"
        fill={color}
      />
      {/* V-ka (ptaszek) */}
      <path
        d="M8.867 4.075a.352.352 0 00-.5 0l-3.1 3.1L3.631 5.545a.352.352 0 10-.5.5L5.016 7.925a.352.352 0 000.5 0L8.867 4.572a.352.352 0 000-.497Z"
        fill={color}
      />
    </svg>
  );
};