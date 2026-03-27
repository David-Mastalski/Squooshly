import React from 'react';

interface ErrorIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const ErrorIcon: React.FC<ErrorIconProps> = ({ 
  size = 15, 
  color = 'var(--error-red)', 
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
      {/* X w środku */}
      <path
        d="M4.25 4.25L7.75 7.75M7.75 4.25L4.25 7.75"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};