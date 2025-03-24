import type { SVGProps } from "react";
import { memo } from "react";
const CloudDataFusion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>
        {".prefix__cls-1{fill:#aecbfa}.prefix__cls-3{fill:#669df6}"}
      </style>
    </defs>
    <g data-name="Product Icons">
      <path
        d="M6 8h4V4H3a1 1 0 0 0-1 1v16a1 1 0 0 0 .28.68L6 18Z"
        className="prefix__cls-1"
      />
      <path
        d="m16 18 3.72 3.72A1 1 0 0 0 20 21v-7h-4Z"
        style={{
          fill: "#4285f4",
        }}
      />
      <path
        d="M21.71 2.28 18 6v4h4V3a1 1 0 0 0-.29-.72"
        className="prefix__cls-3"
      />
      <path
        d="m18 6 3.72-3.72A1 1 0 0 0 21 2h-7v4Z"
        className="prefix__cls-1"
      />
      <path d="m2 22 4-4h10l4 4z" className="prefix__cls-3" />
    </g>
  </svg>
);
const Memo = memo(CloudDataFusion);
export default Memo;
