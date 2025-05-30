import type { SVGProps } from "react";
import { memo } from "react";
const Rocket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <rect width={256} height={256} fill="#D33847" rx={60} />
      <g filter="url(#prefix__b)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M60.167 154.5c.305 6.261 2.155 11.966 5.534 16.898L55.217 181.48c-1.108 1.163-.205 2.125 1.095 3.496l9.08 9.512c1.254 1.388 2.101 2.251 3.258 1.118l11.373-10.903c2.733 1.249 9.258 3.594 18.929 3.085l7.209-4.97a17 17 0 0 1 2.112-1.209l6.544-3.065-5.124 4.974c-.49.476-1.33 1.168-1.864 1.54l-6.199 4.272 12.446 31.3a2.37 2.37 0 0 0 1.442 1.367c.318.104.645.128.952.072s.583-.193.805-.396l24.546-22.226c.286-.259.47-.616.524-1.02l4.189-31.964c6.723-5.447 13.483-11.888 20.105-19.149 38.113-41.806 42.392-76.916 41.554-94.12-.277-5.668-1.113-8.855-1.145-8.988a2.36 2.36 0 0 0-.608-1.044 2.3 2.3 0 0 0-1.036-.606c-2.022-.538-50.204-12.532-109.382 44.2-.074.08-7.748 7.707-15.878 18.656l-31.521 5.902a1.6 1.6 0 0 0-.941.545L26.29 137.217c-.193.23-.319.514-.367.827s-.015.642.095.962c.109.319.292.617.532.867s.53.444.844.565l30.983 11.867 4.85-5.471a17 17 0 0 1 1.732-1.639l5.498-4.408-3.753 6.029a16 16 0 0 1-1.43 1.926zm64.195-60.272c9.606-9.216 23.904-9.845 31.934-1.396 8.035 8.449 6.758 22.764-2.851 31.984-9.606 9.216-23.9 9.84-31.934 1.395-8.035-8.449-6.754-22.767 2.851-31.983"
          clipRule="evenodd"
        />
      </g>
      <g filter="url(#prefix__c)">
        <path
          fill="url(#prefix__d)"
          fillOpacity={0.1}
          fillRule="evenodd"
          d="M124.303 94.334c9.606-9.22 23.904-9.844 31.934-1.395 8.035 8.449 6.758 22.763-2.852 31.979-9.605 9.221-23.899 9.845-31.933 1.396-8.035-8.449-6.754-22.763 2.851-31.98"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <filter
        id="prefix__b"
        width={217.034}
        height={215.609}
        x={-0.087}
        y={23.815}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-8.663} />
        <feGaussianBlur stdDeviation={8.663} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_195_25" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_195_25"
          result="shape"
        />
      </filter>
      <filter
        id="prefix__c"
        width={79.999}
        height={79.927}
        x={90.183}
        y={69.663}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-8.663} />
        <feGaussianBlur stdDeviation={8.663} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_195_25" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_195_25"
          result="shape"
        />
      </filter>
      <linearGradient
        id="prefix__d"
        x1={108.994}
        x2={157.274}
        y1={138.249}
        y2={92.474}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <clipPath id="prefix__a">
        <rect width={256} height={256} fill="#fff" rx={60} />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Rocket);
export default Memo;
