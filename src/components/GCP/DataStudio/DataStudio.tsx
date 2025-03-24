import type { SVGProps } from "react";
import { memo } from "react";
const DataStudio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>
        {".prefix__cls-1{fill:#669df6}.prefix__cls-2{fill:#4285f4}"}
      </style>
    </defs>
    <g data-name="Product Icons">
      <g data-name="Data Studio">
        <path
          d="M19.5 16.17h-7.26a2.53 2.53 0 0 0-2.74 2.5 2.5 2.5 0 0 0 2.74 2.5h7.26Z"
          className="prefix__cls-1"
        />
        <circle cx={19.5} cy={18.67} r={2.5} className="prefix__cls-2" />
        <path
          d="M12 9.5H4.74A2.53 2.53 0 0 0 2 12a2.5 2.5 0 0 0 2.74 2.5H12Z"
          className="prefix__cls-1"
        />
        <circle cx={12} cy={12} r={2.5} className="prefix__cls-2" />
        <path
          d="M19.5 2.83h-7.26a2.54 2.54 0 0 0-2.74 2.5 2.5 2.5 0 0 0 2.74 2.5h7.26Z"
          className="prefix__cls-1"
        />
        <circle cx={19.5} cy={5.33} r={2.5} className="prefix__cls-2" />
      </g>
    </g>
  </svg>
);
const Memo = memo(DataStudio);
export default Memo;
