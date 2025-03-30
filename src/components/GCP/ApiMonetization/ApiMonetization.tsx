import type { SVGProps } from "react";
import { memo } from "react";
const ApiMonetization = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {
          ".prefix__cls-1{fill:#4285f4}.prefix__cls-2{fill:#aecbfa}.prefix__cls-3{fill:#669df6}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <path
        d="M5.87 20.49a1.51 1.51 0 0 1-3 0v-4.28a1.51 1.51 0 1 1 3 0ZM11 20.49a1.51 1.51 0 0 1-3 0v-4.28a1.51 1.51 0 0 1 3 0ZM16.06 20.49a1.51 1.51 0 0 1-3 0v-4.28a1.51 1.51 0 0 1 3 0ZM21.15 20.49a1.51 1.51 0 0 1-3 0v-4.28a1.51 1.51 0 1 1 3 0Z"
        className="prefix__cls-1"
      />
      <circle cx={9.45} cy={11.97} r={1.51} className="prefix__cls-2" />
      <circle cx={14.55} cy={11.97} r={1.51} className="prefix__cls-3" />
      <circle cx={14.55} cy={7.74} r={1.51} className="prefix__cls-2" />
      <circle cx={19.64} cy={11.97} r={1.51} className="prefix__cls-3" />
      <circle cx={19.64} cy={7.74} r={1.51} className="prefix__cls-3" />
      <circle cx={19.64} cy={3.51} r={1.51} className="prefix__cls-2" />
    </g>
  </svg>
);
const Memo = memo(ApiMonetization);
export default Memo;
