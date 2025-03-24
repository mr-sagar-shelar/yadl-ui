import type { SVGProps } from "react";
import { memo } from "react";
const Pubsub = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <filter
        id="prefix__luminosity-noclip"
        width={14.73}
        height={12.76}
        x={4.64}
        y={4.19}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodColor="#fff" result="bg" />
        <feBlend in="SourceGraphic" in2="bg" />
      </filter>
      <style>
        {
          ".prefix__cls-2{fill:#669df6}.prefix__cls-4{fill:#4285f4}.prefix__cls-5{fill:#aecbfa}"
        }
      </style>
      <mask
        id="prefix__mask"
        width={14.73}
        height={12.76}
        x={4.64}
        y={4.19}
        maskUnits="userSpaceOnUse"
      >
        <circle
          cx={12}
          cy={12.23}
          r={3.58}
          style={{
            filter: "url(#prefix__luminosity-noclip)",
          }}
        />
      </mask>
    </defs>
    <g data-name="Product Icons">
      <circle cx={18.97} cy={8.21} r={1.72} className="prefix__cls-2" />
      <circle cx={5.03} cy={8.21} r={1.72} className="prefix__cls-2" />
      <circle cx={12} cy={20.28} r={1.72} className="prefix__cls-2" />
      <g
        style={{
          mask: "url(#prefix__mask)",
        }}
      >
        <path
          d="m11.646 12.86.795-1.384 6.995 4.02-.795 1.384z"
          className="prefix__cls-4"
        />
        <path
          d="m4.633 15.573 6.963-4.02.795 1.377-6.963 4.02z"
          className="prefix__cls-4"
        />
        <path d="M11.2 4.19h1.59v8.04H11.2z" className="prefix__cls-4" />
      </g>
      <circle cx={12} cy={12.23} r={2.78} className="prefix__cls-5" />
      <circle cx={5.03} cy={16.25} r={2.19} className="prefix__cls-5" />
      <circle cx={18.97} cy={16.25} r={2.19} className="prefix__cls-5" />
      <circle cx={12} cy={4.19} r={2.19} className="prefix__cls-5" />
    </g>
  </svg>
);
const Memo = memo(Pubsub);
export default Memo;
