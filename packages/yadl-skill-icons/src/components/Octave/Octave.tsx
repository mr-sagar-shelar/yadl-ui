import type { SVGProps } from "react";
import { memo } from "react";
const Octave = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="url(#prefix__a)"
      d="M61.852 48.773c-31.004 33.693-23.49 96.481 16.773 140.237 40.264 43.755 98.033 51.91 129.037 18.218 31.004-33.693 23.511-96.484-16.753-140.24-40.263-43.755-98.053-51.907-129.057-18.215M89.965 62.77c24.361-26.473 69.152-20.715 100.052 12.865s36.199 82.255 11.838 108.728c-24.361 26.474-69.164 20.728-100.063-12.852S65.604 89.242 89.965 62.769"
    />
    <path
      fill="#FF7F2A"
      stroke="#D45500"
      strokeWidth={6.289}
      d="M196.287 60.738h-16.771a4.59 4.59 0 0 0-4.592 4.593V82.1a4.59 4.59 0 0 0 4.592 4.593h16.771a4.59 4.59 0 0 0 4.593-4.592V65.33a4.59 4.59 0 0 0-4.593-4.592ZM79.319 94.933H39.816C33.843 94.933 29 99.776 29 105.75v39.503c0 5.973 4.843 10.816 10.816 10.816H79.32c5.973 0 10.816-4.843 10.816-10.816v-39.503c0-5.973-4.843-10.816-10.816-10.816ZM217.396 174.966h-23.865a6.535 6.535 0 0 0-6.535 6.535v23.865a6.535 6.535 0 0 0 6.535 6.535h23.865a6.535 6.535 0 0 0 6.535-6.535v-23.865a6.535 6.535 0 0 0-6.535-6.535Z"
    />
    <defs>
      <radialGradient
        id="prefix__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-47.38 272.923 -1.627)scale(300.774 999.837)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#008CBE" />
        <stop offset={1} stopColor="#B2FFFF" />
      </radialGradient>
    </defs>
  </svg>
);
const Memo = memo(Octave);
export default Memo;
