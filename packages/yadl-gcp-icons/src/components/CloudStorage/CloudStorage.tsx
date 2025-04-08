import type { SVGProps } from "react";
import { memo } from "react";
const CloudStorage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {
          ".prefix__cls-1{fill:#aecbfa}.prefix__cls-2{fill:#669df6}.prefix__cls-3{fill:#4285f4}.prefix__cls-4{fill:#fff}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <path d="M2 4h20v7H2z" className="prefix__cls-1" />
      <path d="M20 4h2v7h-2z" className="prefix__cls-2" />
      <path d="M22 4h-2v7z" className="prefix__cls-3" />
      <path d="M2 4h2v7H2z" className="prefix__cls-2" />
      <path d="M6 7h6v1H6z" className="prefix__cls-4" />
      <rect
        width={3}
        height={3}
        x={15}
        y={6}
        className="prefix__cls-4"
        rx={1.5}
      />
      <path d="M2 13h20v7H2z" className="prefix__cls-1" />
      <path d="M20 13h2v7h-2z" className="prefix__cls-2" />
      <path d="M22 13h-2v7z" className="prefix__cls-3" />
      <path d="M2 13h2v7H2z" className="prefix__cls-2" />
      <path d="M6 16h6v1H6z" className="prefix__cls-4" />
      <rect
        width={3}
        height={3}
        x={15}
        y={15}
        className="prefix__cls-4"
        rx={1.5}
      />
    </g>
  </svg>
);
const Memo = memo(CloudStorage);
export default Memo;
