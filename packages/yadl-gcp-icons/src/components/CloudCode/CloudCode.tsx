import type { SVGProps } from "react";
import { memo } from "react";
const CloudCode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {
          ".prefix__cls-1{fill:#aecbfa}.prefix__cls-2{fill:#669df6}.prefix__cls-3{fill:#4285f4}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <g data-name="Layer 1-2">
        <path
          d="m5.45 8.53 3.1-3.11 3.1 3.11-3.1 3.12z"
          className="prefix__cls-1"
        />
        <path d="m2 12 3.1-3.12L8.2 12l-3.1 3.12z" className="prefix__cls-2" />
        <path
          d="m5.45 15.47 3.1-3.12 3.1 3.12-3.1 3.12z"
          className="prefix__cls-3"
        />
        <path
          d="m12.35 8.53 3.1-3.11 3.1 3.11-3.1 3.12z"
          className="prefix__cls-1"
        />
        <path
          d="m15.8 12 3.1-3.12L22 12l-3.1 3.12z"
          className="prefix__cls-2"
        />
        <path
          d="m12.35 15.47 3.1-3.12 3.1 3.12-3.1 3.12z"
          className="prefix__cls-3"
        />
      </g>
    </g>
  </svg>
);
const Memo = memo(CloudCode);
export default Memo;
