import React from "react";

interface TrashIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  bgColor?: string;
  iconColor?: string;
}

export const TrashIcon: React.FC<TrashIconProps> = ({
  size = 40,
  bgColor = "currentColor",
  iconColor = "var(--text-b)",
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      {...props}
    >
      <defs>
        <clipPath id="clip-path">
          <rect width="16" height="16" transform="translate(1876 30)" />
        </clipPath>
      </defs>

      <g transform="translate(-1166 -363)">
        <g transform="translate(-424 260)">
          <g transform="translate(-273 86)">
            {/* Tło */}

            {/* <circle
              cx="20"
              cy="20"
              r="20"
              transform="translate(1863 17)"
              fill={bgColor}
            /> */}

            <rect
              x="0"
              y="0"
              width="40"
              height="40"
              rx="8"
              transform="translate(1863 17)"
              fill={bgColor}
            />

            <g transform="translate(-1 -1)">
              <g transform="translate(1877.017 30)">
                {/* Lewa kreska */}
                <g transform="translate(8.146 6.903)">
                  <path
                    d="M9.082,6.127a.462.462,0,0,0-.5.419l-.448,4.992a.462.462,0,0,0,.419.5l.042,0a.462.462,0,0,0,.46-.421L9.5,6.629A.462.462,0,0,0,9.082,6.127Z"
                    transform="translate(-8.13 -6.125)"
                    fill={iconColor}
                  />
                </g>

                {/* Prawa kreska */}
                <g transform="translate(4.225 6.903)">
                  <path
                    d="M6.022,11.538,5.574,6.546a.462.462,0,0,0-.921.083L5.1,11.621a.462.462,0,0,0,.46.421l.042,0A.462.462,0,0,0,6.022,11.538Z"
                    transform="translate(-4.652 -6.125)"
                    fill={iconColor}
                  />
                </g>

                {/* Korpus kosza */}
                <g>
                  <path
                    d="M13.2,1.972H10.7V1.448A1.45,1.45,0,0,0,9.253,0H6.295A1.45,1.45,0,0,0,4.847,1.448v.524h-2.5A1.45,1.45,0,0,0,.9,3.42v.986a.462.462,0,0,0,.462.462h.564l.867,9.591a1.441,1.441,0,0,0,1.442,1.317h7.074a1.441,1.441,0,0,0,1.442-1.317l.867-9.591h.564a.462.462,0,0,0,.462-.462V3.42A1.45,1.45,0,0,0,13.2,1.972ZM5.771,1.448A.524.524,0,0,1,6.295.924H9.253a.524.524,0,0,1,.524.524v.524H5.771ZM2.351,2.9l-.092.009A.523.523,0,0,1,2.351,2.9Zm9.482,11.48a.521.521,0,0,1-.522.476H4.237a.521.521,0,0,1-.522-.476L2.857,4.869h9.835ZM13.721,3.944H1.827V3.42a.524.524,0,0,1,.429-.515L13.2,2.9a.524.524,0,0,1,.524.524Z"
                    transform="translate(-0.902)"
                    fill={iconColor}
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
