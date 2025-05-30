import type { SVGProps } from "react";
import { memo } from "react";
const CLion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <path
        fill="#F4F2ED"
        d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"
      />
      <path
        fill="url(#prefix__b)"
        d="m105.017 110.067 3.466-62.567 36.384 20.167z"
      />
      <path
        fill="url(#prefix__c)"
        d="m105.017 110.067 3.466-62.567-46.2 29.117L47.5 165.133z"
      />
      <path
        fill="url(#prefix__d)"
        d="M204.317 95.45 183.733 53.6l-38.866 14.067-39.85 42.4L47.5 165.133 99.383 202.9l65.217-58.817z"
      />
      <path
        fill="url(#prefix__e)"
        d="M177.5 139.233V177.5h-62.833l27.616 21.367 40 8.633 25.217-57.083z"
      />
      <path fill="#000" d="M77.5 77.5h100v100h-100z" />
      <path
        fill="#fff"
        d="M89.967 158.6h37.5v6.25h-37.5zM127.583 89.9h8.334v30.65h16.417v6.95h-24.751zM87.3 108.95v-.1a19.235 19.235 0 0 1 19.717-19.567 19.51 19.51 0 0 1 14.9 5.834l-5.25 6.116a13.97 13.97 0 0 0-9.684-4.266c-6.366 0-10.95 5.283-10.95 11.766v.117c0 6.483 4.484 11.883 10.95 11.883 4.334 0 6.967-1.666 10-4.433l5.2 5.367a19.32 19.32 0 0 1-15.516 6.666 19.09 19.09 0 0 1-13.786-5.593 19.07 19.07 0 0 1-5.58-13.79"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__b"
        x1={105.017}
        x2={150.85}
        y1={78.783}
        y2={78.783}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF318C" />
        <stop offset={0.15} stopColor="#FB348C" />
        <stop offset={0.28} stopColor="#F03C8C" />
        <stop offset={0.42} stopColor="#DE4A8C" />
        <stop offset={0.54} stopColor="#C45D8B" />
        <stop offset={0.67} stopColor="#A2778B" />
        <stop offset={0.79} stopColor="#79958A" />
        <stop offset={0.91} stopColor="#49B98A" />
        <stop offset={1} stopColor="#21D789" />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1={86.65}
        x2={63.117}
        y1={67.8}
        y2={225.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09} stopColor="#21D789" />
        <stop offset={0.9} stopColor="#009AE5" />
      </linearGradient>
      <linearGradient
        id="prefix__d"
        x1={193.417}
        x2={32.45}
        y1={62.333}
        y2={232.333}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09} stopColor="#21D789" />
        <stop offset={0.9} stopColor="#009AE5" />
      </linearGradient>
      <linearGradient
        id="prefix__e"
        x1={144.733}
        x2={199.783}
        y1={168.367}
        y2={176.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09} stopColor="#21D789" />
        <stop offset={0.9} stopColor="#009AE5" />
      </linearGradient>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(CLion);
export default Memo;
