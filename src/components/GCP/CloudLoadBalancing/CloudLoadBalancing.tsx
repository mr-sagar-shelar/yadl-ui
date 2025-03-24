import type { SVGProps } from "react";
import { memo } from "react";
const CloudLoadBalancing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>
        {".prefix__cls-2{fill:#669df6}.prefix__cls-4{fill:#aecbfa}"}
      </style>
    </defs>
    <g data-name="Product Icons">
      <g data-name="colored-32/load-balancing">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
        <path
          d="M18 12h2v4h-2zM11 12h2v4h-2zM4 12h2v4H4z"
          className="prefix__cls-2"
        />
        <path
          id="prefix__Fill-2"
          d="M13 11h-2V7h2z"
          style={{
            fill: "#4285f4",
          }}
        />
        <path d="M4 11h16v2H4z" className="prefix__cls-2" />
        <path d="M6 2h12v5H6z" className="prefix__cls-4" />
        <path d="M12 2h6v5h-6z" className="prefix__cls-2" />
        <path d="M16 16h6v6h-6zM2 16h6v6H2z" className="prefix__cls-4" />
        <path d="M5 16h3v6H5z" className="prefix__cls-2" />
        <path d="M9 16h6v6H9z" className="prefix__cls-4" />
        <path d="M12 16h3v6h-3zM19 16h3v6h-3z" className="prefix__cls-2" />
      </g>
    </g>
  </svg>
);
const Memo = memo(CloudLoadBalancing);
export default Memo;
