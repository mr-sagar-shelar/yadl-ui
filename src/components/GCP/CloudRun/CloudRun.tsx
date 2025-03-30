import type { SVGProps } from "react";
import { memo } from "react";
const CloudRun = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {
          ".prefix__cls-1,.prefix__cls-2{fill:#aecbfa;fill-rule:evenodd}.prefix__cls-2{fill:#4285f4}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <path d="M8.9 2.63 12.02 12h9.36z" className="prefix__cls-1" />
      <path
        d="M21.38 12h-9.36L8.9 21.38zM3.44 21.38l3.13-1.57L8.9 12H5.78z"
        className="prefix__cls-2"
      />
      <path d="M3.44 2.63 5.78 12H8.9L6.57 4.19z" className="prefix__cls-1" />
    </g>
  </svg>
);
const Memo = memo(CloudRun);
export default Memo;
