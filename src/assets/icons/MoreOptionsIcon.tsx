import React from "react";

interface MoreOptionsIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const MoreOptionsIcon: React.FC<MoreOptionsIconProps> = ({
  size = 20,
  color = "currentColor",
  className,
  ...props
}) => {
  const circleRadius = size * 0.08;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx={size / 2} cy={size * 0.25} r={circleRadius} fill={color} />
      <circle cx={size / 2} cy={size * 0.5} r={circleRadius} fill={color} />
      <circle cx={size / 2} cy={size * 0.75} r={circleRadius} fill={color} />
    </svg>
  );
};
