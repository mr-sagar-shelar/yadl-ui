import type { SVGProps } from "react";
import { memo } from "react";
const CloudMonitoring = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {".prefix__cls-1{fill:#669df6}.prefix__cls-2{fill:#4285f4}"}
      </style>
    </defs>
    <g data-name="Product Icons">
      <path d="M10.83 15.84h2.33v2.64h-2.33z" className="prefix__cls-1" />
      <path
        d="M18.48 13.87a.56.56 0 0 1-.4-.17L14 9.47l-2.74 2.89a.57.57 0 0 1-.76.05l-2.08-1.68-2.2 2.92a.56.56 0 0 1-.45.22H2v1.71a.75.75 0 0 0 .74.75h18.52a.75.75 0 0 0 .74-.75v-1.71Z"
        className="prefix__cls-2"
      />
      <path
        d="M5.5 12.76 7.88 9.6a.55.55 0 0 1 .37-.22.63.63 0 0 1 .42.12l2.12 1.72 2.8-2.94a.54.54 0 0 1 .4-.17.54.54 0 0 1 .4.17l4.33 4.48H22V6a.74.74 0 0 0-.74-.74H2.74A.74.74 0 0 0 2 6v6.81Z"
        className="prefix__cls-1"
      />
      <rect
        width={6.67}
        height={0.61}
        x={8.67}
        y={18.18}
        className="prefix__cls-2"
        rx={0.3}
      />
    </g>
  </svg>
);
const Memo = memo(CloudMonitoring);
export default Memo;
