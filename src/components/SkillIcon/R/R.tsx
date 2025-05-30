import type { SVGProps } from "react";
import { memo } from "react";
const R = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <g fillRule="evenodd" clipPath="url(#prefix__a)" clipRule="evenodd">
      <path
        fill="url(#prefix__b)"
        d="M127.849 185.237c-55.007 0-99.599-29.865-99.599-66.704 0-36.84 44.592-66.704 99.599-66.704s99.598 29.864 99.598 66.704-44.591 66.704-99.598 66.704m15.245-107.33c-41.81 0-75.703 20.417-75.703 45.602s33.893 45.602 75.703 45.602 72.665-13.958 72.665-45.602c0-31.633-30.855-45.601-72.665-45.601"
      />
      <path
        fill="url(#prefix__c)"
        d="M179.934 155.144s6.028 1.819 9.53 3.591c1.215.615 3.318 1.842 4.834 3.453 1.486 1.578 2.21 3.177 2.21 3.177l23.757 40.055-38.397.017-17.956-33.719s-3.677-6.317-5.94-8.149c-1.887-1.528-2.692-2.072-4.558-2.072h-9.123l.007 43.916-33.977.014V93.248h68.232s31.077.56 31.077 30.128c0 29.567-29.696 31.768-29.696 31.768m-14.779-37.563-20.57-.013-.01 19.075 20.58-.007s9.53-.03 9.53-9.703c0-9.868-9.53-9.352-9.53-9.352"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__b"
        x1={28.25}
        x2={151.612}
        y1={51.829}
        y2={236.026}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CBCED0" />
        <stop offset={1} stopColor="#84838B" />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1={110.321}
        x2={222.487}
        y1={93.248}
        y2={203.17}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#276DC3" />
        <stop offset={1} stopColor="#165CAA" />
      </linearGradient>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M28 51h200v154.972H28z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(R);
export default Memo;
