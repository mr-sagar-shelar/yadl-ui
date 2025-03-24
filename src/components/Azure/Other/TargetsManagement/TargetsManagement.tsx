import type { SVGProps } from "react";
import { memo } from "react";
const TargetsManagement = (props: SVGProps<SVGSVGElement>) => (
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
        x1={-51.062}
        x2={-51.062}
        y1={349.229}
        y2={345.247}
        gradientTransform="rotate(-30 -652.127 66.007)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#eeaa45" />
        <stop offset={1} stopColor="#f4cf97" />
      </linearGradient>
      <linearGradient
        id="prefix__b"
        x1={9.026}
        x2={9.026}
        y1={14.515}
        y2={3.541}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0078d4" />
        <stop offset={1} stopColor="#5ea0f0" />
      </linearGradient>
    </defs>
    <circle cx={9.026} cy={9.028} r={1.991} fill="url(#prefix__a)" />
    <rect
      width={1.634}
      height={4.658}
      x={8.209}
      y={0.013}
      fill="#82bbff"
      rx={0.817}
    />
    <rect
      width={1.634}
      height={4.658}
      x={8.209}
      y={13.329}
      fill="#82bbff"
      rx={0.817}
    />
    <g fill="#82bbff">
      <rect
        width={1.634}
        height={4.658}
        x={14.597}
        y={6.699}
        rx={0.817}
        transform="rotate(90 15.414 9.028)"
      />
      <rect
        width={1.634}
        height={4.658}
        x={1.769}
        y={6.699}
        rx={0.817}
        transform="rotate(90 2.586 9.028)"
      />
    </g>
    <path
      fill="url(#prefix__b)"
      d="M9.026 14.515a5.487 5.487 0 1 1 5.487-5.487 5.493 5.493 0 0 1-5.487 5.487m0-9.553a4.066 4.066 0 1 0 4.066 4.066 4.07 4.07 0 0 0-4.066-4.066"
    />
  </svg>
);
const Memo = memo(TargetsManagement);
export default Memo;
