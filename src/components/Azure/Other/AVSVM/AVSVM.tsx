import type { SVGProps } from "react";
import { memo } from "react";
const AVSVM = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__a"
        x1={9}
        x2={9}
        y1={12.798}
        y2={0.798}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#76bc2d" />
        <stop offset={0.817} stopColor="#86d633" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={9}
        x2={9}
        y1={17.434}
        y2={12.798}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.149} stopColor="#ccc" />
        <stop offset={1} stopColor="#707070" />
      </linearGradient>
    </defs>
    <rect width={18} height={12} y={0.798} fill="url(#prefix__a)" rx={0.601} />
    <g fill="#fff">
      <path d="M12 5.053 9 6.807 6 5.052l3-1.754z" />
      <path d="M6 5.052v3.492l2.996-1.74z" opacity={0.8} />
      <path d="m5.998 8.543 3 1.754V6.805l-.004-.002z" />
      <path d="m9 6.802 3 1.742V5.053z" opacity={0.6} />
      <path d="m9 10.298 3-1.754-3-1.742z" opacity={0.8} />
    </g>
    <path
      fill="url(#prefix__b)"
      d="M12.607 16.428c-1.78-.278-1.85-1.562-1.844-3.63H7.232c0 2.068-.065 3.352-1.844 3.63a1.05 1.05 0 0 0-.888 1.006h9a1.05 1.05 0 0 0-.893-1.006"
    />
  </svg>
);
const Memo = memo(AVSVM);
export default Memo;
