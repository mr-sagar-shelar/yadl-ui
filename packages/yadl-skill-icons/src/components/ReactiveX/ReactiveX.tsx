import type { SVGProps } from "react";
import { memo } from "react";
const ReactiveX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F4ED" rx={60} />
    <path
      fill="#FF0090"
      d="M45.387 153.535c-9.74-51.778 15.999-101.715 75.072-108.358-8.146-8.704-19.275-8.77-24.395-7.71-9.04 2.88-8.757 8.73-19.012 16.287-10.195 5.823-15.315 1.364-22.742 7.4-7.41 5.992-2.24 19.746-5.347 22.42-3.085 5.348-12.656 10.112-14.398 16.866-1.44 8.638 3.908 14.809 3.702 22.213.617 6.171-6.143 9.66-5.171 14.661 2.909 8.17 8.516 13.088 11.16 15.354.606.427 1.246 1.48 1.13.867"
    />
    <path
      fill="url(#prefix__a)"
      d="M150.501 81.86a3.908 3.908 0 1 1 0-7.817 3.908 3.908 0 0 1 0 7.817M47.667 159.183c-9.36-45.001 19.601-82.602 75.684-64.09 32.908 19.251 74.304 17.997 76.171 5.553 4.608-14.918-20.98-45.662-59.237-53.683-75.896-14.81-116.813 67.219-92.618 112.22"
    />
    <path
      fill="url(#prefix__b)"
      d="M172.166 164.201c11.27 1.221 21.967-1.484 31.881-9.564-14.977 16.705-33.704 25.105-55.191 27.39 10.259 8.722 20.153 12.651 29.618 10.97-26.3 7.257-48.335-.731-75.139-27.424-1.404 7.185 6.186 18.381 14.008 25.528-45.387-19.677-49.366-80.974 5.979-96.052-57.372-27.565-89.813 25.993-73.874 69.889 15.595 33.809 57.152 59.836 102.698 54.112 22.124-2.71 55.161-17.963 68.657-54.112-9.512 8.536-26.515 15.97-34.102 16.54 25.68-12.833 39.542-34.641 35.651-64.446-5.319 12.664-12.337 22.389-21.116 29.069 18.648-29.069 15.448-44.094 1.645-60.607 9.873 27.15-2.898 57.283-30.715 78.707"
    />
    <path
      fill="url(#prefix__c)"
      d="M158.988 195.479c-1.949-.364 4.417 2.579-7.89-.679s-24.838-6.398-47.763-29.228c-1.404 7.186 6.186 18.382 14.008 25.528 21.117 14.727 6.756 7.84 38.931 18.962 2.582-5.139 2.714-9.706 2.714-14.583"
    />
    <path
      fill="url(#prefix__d)"
      d="M118.078 79.836s2.797-4.13 3.886-5.992c1.334-2.281 3.384-6.44 3.384-6.44s-21.533-7.026-26.817-7.883c-16.427 4.264-16.486 11.146-7.303 21.68 1.022 1.172 26.85-1.365 26.85-1.365"
    />
    <defs>
      <radialGradient
        id="prefix__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(143.203 0 0 102.44 166.219 88.34)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F80090" />
        <stop offset={1} stopColor="#4D008E" />
      </radialGradient>
      <radialGradient
        id="prefix__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(145.151 0 0 109.801 167.48 91.403)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#57008E" />
        <stop offset={0.292} stopColor="#5C008E" />
        <stop offset={1} stopColor="#F80090" />
      </radialGradient>
      <linearGradient
        id="prefix__c"
        x1={113.347}
        x2={139.005}
        y1={165.572}
        y2={208.722}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F70090" />
        <stop offset={0.67} stopColor="#E50090" />
        <stop offset={0.827} stopColor="#D6008F" stopOpacity={0.2} />
        <stop offset={1} stopColor="#C10090" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="prefix__d"
        x1={111.214}
        x2={107.491}
        y1={75.256}
        y2={68.125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B2008F" stopOpacity={0.151} />
        <stop offset={0.4} stopColor="#F70090" stopOpacity={0.4} />
        <stop offset={0.649} stopColor="#F60090" stopOpacity={0.892} />
        <stop offset={1} stopColor="#FF0090" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(ReactiveX);
export default Memo;
