import type { SVGProps } from "react";
import { memo } from "react";
const RuntimeConfig = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {".prefix__cls-1{fill:#aecbfa}.prefix__cls-2{fill:#4285f4}"}
      </style>
    </defs>
    <g data-name="Product Icons">
      <path id="prefix__Fill-11" d="M2 8h6V2H2z" className="prefix__cls-1" />
      <path d="M7 4h13v2H7z" className="prefix__cls-2" />
      <path
        d="M0 0h24v24H0z"
        style={{
          fill: "none",
        }}
      />
      <path id="prefix__Fill-4" d="M15 13H3v-3h12z" className="prefix__cls-1" />
      <path
        id="prefix__Fill-4-Copy-2"
        d="M13 20H3v-4h10z"
        className="prefix__cls-1"
      />
      <path id="prefix__Fill-15" d="M5 8h3V2H5z" className="prefix__cls-2" />
      <path
        id="prefix__Fill-11-2"
        d="M16 22h6v-6h-6z"
        className="prefix__cls-1"
        data-name="Fill-11"
      />
      <path
        id="prefix__Fill-15-2"
        d="M19 22h3v-6h-3z"
        className="prefix__cls-2"
        data-name="Fill-15"
      />
      <path d="M18 4h2v12h-2z" className="prefix__cls-2" />
    </g>
  </svg>
);
const Memo = memo(RuntimeConfig);
export default Memo;
