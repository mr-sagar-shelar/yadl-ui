import type { SVGProps } from "react";
import { memo } from "react";
const CloudDns = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>
        {
          ".prefix__cls-2{fill:#669df6}.prefix__cls-3{fill:#aecbfa}.prefix__cls-4{fill:#fff}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <g data-name="colored-32/dns">
        <path
          id="prefix__Fill-1"
          d="M13 18h-2V8h2z"
          style={{
            fill: "#4285f4",
          }}
        />
        <path
          id="prefix__Fill-2"
          d="M2 21h20v-2H2z"
          className="prefix__cls-2"
        />
        <path
          id="prefix__Fill-3"
          d="M10 22h4v-4h-4z"
          className="prefix__cls-3"
        />
      </g>
      <path d="M2 2h20v6H2z" className="prefix__cls-3" />
      <path d="M12 2h10v6H12z" className="prefix__cls-2" />
      <path d="M4 4h2v2H4z" className="prefix__cls-4" />
      <path d="M2 10h20v6H2z" className="prefix__cls-3" />
      <path d="M12 10h10v6H12z" className="prefix__cls-2" />
      <path d="M4 12h2v2H4z" className="prefix__cls-4" />
    </g>
  </svg>
);
const Memo = memo(CloudDns);
export default Memo;
