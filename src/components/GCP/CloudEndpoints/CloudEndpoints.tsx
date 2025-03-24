import type { SVGProps } from "react";
import { memo } from "react";
const CloudEndpoints = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>
        {".prefix__cls-1{fill:#4285f4}.prefix__cls-2{fill:#aecbfa}"}
      </style>
    </defs>
    <g data-name="Product Icons">
      <g data-name="colored-32/endpoints">
        <path d="M15 10H9l-1 2 1 2h6l1-2z" className="prefix__cls-1" />
        <path
          id="prefix__Shape-2"
          d="m16 12-1-2H9l-1 2z"
          className="prefix__cls-2"
          data-name="Shape"
        />
      </g>
      <path d="M18 6h-3l3.97 6 1.5-2.25z" className="prefix__cls-1" />
      <path
        d="m21.95 12-1.48-2.25-1.5 2.25L15 18h3z"
        className="prefix__cls-2"
      />
      <path d="M5.95 18h3l-3.97-6-1.5 2.25z" className="prefix__cls-1" />
      <path d="m2 12 1.48 2.25L4.98 12l3.97-6h-3z" className="prefix__cls-2" />
    </g>
  </svg>
);
const Memo = memo(CloudEndpoints);
export default Memo;
