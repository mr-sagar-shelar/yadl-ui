import type { SVGProps } from "react";
import { memo } from "react";
const CloudInterconnect = (props: SVGProps<SVGSVGElement>) => (
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
          ".prefix__cls-1,.prefix__cls-3{fill:#4285f4;fill-rule:evenodd}.prefix__cls-3{fill:#669df6}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <path id="prefix__Fill-3" d="M2 13h4v-2H2z" className="prefix__cls-1" />
      <path
        id="prefix__Fill-6"
        d="M15 17H5V7h10z"
        style={{
          fillRule: "evenodd",
          fill: "#aecbfa",
        }}
      />
      <path
        id="prefix__Fill-1"
        d="M17.33 13H22v-2h-4.67z"
        className="prefix__cls-1"
      />
      <path d="M8 3v2h9v14H8v2h11V3z" className="prefix__cls-3" />
      <path id="prefix__Fill-7" d="M15 17h-5V7h5z" className="prefix__cls-3" />
    </g>
  </svg>
);
const Memo = memo(CloudInterconnect);
export default Memo;
