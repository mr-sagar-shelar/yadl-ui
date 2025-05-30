import type { SVGProps } from "react";
import { memo } from "react";
const Powershell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="url(#prefix__a)"
      fillRule="evenodd"
      d="M36.407 203.248a8.242 8.242 0 0 1-6.627-3.021 8.81 8.81 0 0 1-1.5-7.512L58.252 61.787a12.855 12.855 0 0 1 12.004-9.784h149.338a8.26 8.26 0 0 1 6.627 3.021 8.815 8.815 0 0 1 1.5 7.513l-29.993 130.935a12.855 12.855 0 0 1-12.005 9.783H36.406z"
      clipRule="evenodd"
    />
    <path
      fill="url(#prefix__b)"
      fillRule="evenodd"
      d="M70.256 53.686h149.338a6.52 6.52 0 0 1 5.445 2.553 6.52 6.52 0 0 1 1.039 5.924L196.085 193.09a11.25 11.25 0 0 1-10.362 8.476H36.406a6.51 6.51 0 0 1-5.445-2.553 6.52 6.52 0 0 1-1.04-5.923L59.916 62.163a11.24 11.24 0 0 1 10.34-8.477"
      clipRule="evenodd"
    />
    <path
      fill="#2C5591"
      fillRule="evenodd"
      d="M128.286 167.219h36.32a7.986 7.986 0 0 1 7.647 7.977 7.985 7.985 0 0 1-7.647 7.977h-36.32a7.986 7.986 0 0 1-7.647-7.977 7.985 7.985 0 0 1 7.647-7.977M151.846 131.756a12.6 12.6 0 0 1-4.221 4.285l-67.406 48.382a8.74 8.74 0 0 1-11.835-2.186 8.74 8.74 0 0 1 1.566-11.932l60.786-44.019v-.9L92.545 84.781a8.74 8.74 0 0 1 12.725-11.94l45.833 48.753a8.33 8.33 0 0 1 .743 10.162"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M150.138 130.071a12.5 12.5 0 0 1-4.213 4.285L78.54 182.745a8.748 8.748 0 0 1-10.276-14.119l60.793-44.018v-.907L90.866 83.074a8.741 8.741 0 0 1 12.733-11.94l45.825 48.753a8.295 8.295 0 0 1 .714 10.184M127.287 166.278h36.32a7.565 7.565 0 0 1 7.563 7.562 7.564 7.564 0 0 1-7.563 7.563h-36.32a7.564 7.564 0 0 1 0-15.125"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={180.31}
        x2={65.586}
        y1={174.355}
        y2={71.877}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5391FE" />
        <stop offset={1} stopColor="#3E6DBF" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={64.443}
        x2={177.996}
        y1={70.511}
        y2={172.56}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5391FE" />
        <stop offset={1} stopColor="#3E6DBF" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Powershell);
export default Memo;
