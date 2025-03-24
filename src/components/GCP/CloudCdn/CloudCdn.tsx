import type { SVGProps } from "react";
import { memo } from "react";
const CloudCdn = (props: SVGProps<SVGSVGElement>) => (
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
          ".prefix__cls-2,.prefix__cls-3{fill:#669df6;fill-rule:evenodd}.prefix__cls-3{fill:#aecbfa}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <path
        d="M2 2h20v20H2z"
        style={{
          fill: "none",
        }}
      />
      <path
        id="prefix__Fill-1"
        d="M12 2v2.41l3.13 3.22V5.21z"
        className="prefix__cls-2"
      />
      <path
        id="prefix__Fill-1-Copy-2"
        d="m19.5 12-3.12 3.13h2.5L22 12z"
        className="prefix__cls-2"
      />
      <path
        id="prefix__Fill-1-Copy-3"
        d="m4.5 12 3.13 3.13h-2.5L2 12z"
        className="prefix__cls-2"
      />
      <path
        id="prefix__Fill-1-Copy"
        d="M12 22v-2.41l3.13-3.21v2.41z"
        className="prefix__cls-2"
      />
      <path
        id="prefix__Fill-2"
        d="M12 2 8.88 5.21v2.42L12 4.41z"
        className="prefix__cls-3"
      />
      <path
        id="prefix__Fill-2-Copy-2"
        d="M18.88 8.88h-2.5L19.5 12H22z"
        className="prefix__cls-3"
      />
      <path
        id="prefix__Fill-2-Copy-3"
        d="M5.13 8.88h2.5L4.5 12H2z"
        className="prefix__cls-3"
      />
      <path
        id="prefix__Fill-2-Copy"
        d="m12 22-3.12-3.21v-2.41L12 19.59z"
        className="prefix__cls-3"
      />
      <path
        id="prefix__Fill-9"
        d="M15.13 15.13H8.88V8.88h6.25z"
        className="prefix__cls-3"
      />
      <path
        id="prefix__Fill-10"
        d="M15.13 8.88v6.25H8.88z"
        className="prefix__cls-2"
      />
      <path
        d="M15.13 8.88v6.25L12 12z"
        style={{
          fillRule: "evenodd",
          fill: "#4285f4",
        }}
      />
    </g>
  </svg>
);
const Memo = memo(CloudCdn);
export default Memo;
