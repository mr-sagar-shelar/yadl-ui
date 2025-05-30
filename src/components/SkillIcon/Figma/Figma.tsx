import type { SVGProps } from "react";
import { memo } from "react";
const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <g clipPath="url(#prefix__a)">
      <path
        fill="#0ACF83"
        d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228"
      />
      <path
        fill="#A259FF"
        d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333"
      />
      <path
        fill="#F24E1E"
        d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334"
      />
      <path
        fill="#FF7262"
        d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z"
      />
      <path
        fill="#1ABCFE"
        d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128"
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M61 28h133.36v200H61z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Figma);
export default Memo;
