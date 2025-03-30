import type { SVGProps } from "react";
import { memo } from "react";
const CloudLogging = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {".prefix__cls-1{fill:#4285f4}.prefix__cls-3{fill:#669df6}"}
      </style>
    </defs>
    <g data-name="Product Icons">
      <path d="M6 11h4v2H6zM4 18h6v2H4z" className="prefix__cls-1" />
      <g data-name="colored-32/logs">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
        <path id="prefix__Fill-3" d="M4 18h2V6H4z" className="prefix__cls-1" />
        <path id="prefix__Fill-4" d="M9 7h13V3H9z" className="prefix__cls-3" />
        <path
          id="prefix__Fill-4-2"
          d="M9 14h13v-4H9z"
          className="prefix__cls-3"
          data-name="Fill-4"
        />
        <path
          id="prefix__Fill-4-3"
          d="M9 21h13v-4H9z"
          className="prefix__cls-3"
          data-name="Fill-4"
        />
        <path
          id="prefix__Fill-7"
          d="M2 8h6V2H2z"
          style={{
            fill: "#aecbfa",
          }}
        />
      </g>
    </g>
  </svg>
);
const Memo = memo(CloudLogging);
export default Memo;
