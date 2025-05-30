import type { SVGProps } from "react";
import { memo } from "react";
const ErrorReporting = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {
          ".prefix__cls-1,.prefix__cls-2{fill:#669df6;fill-rule:evenodd}.prefix__cls-2{fill:#4285f4}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <path
        id="prefix__Fill-1"
        d="M7 2 2 7v10l5 5h5l-2.5-2.86H8.25l-3.39-3.39v-7.5l3.39-3.39H9.5L12 2z"
        className="prefix__cls-1"
      />
      <path
        id="prefix__Fill-2"
        d="M14.5 2 12 4.86h3.75l3.39 3.39v7.5l-3.39 3.39H12L14.5 22H17l5-5V7l-5-5z"
        className="prefix__cls-1"
      />
      <path
        id="prefix__Fill-3"
        d="m12 17-2.5-2.5L12 12 9.5 9.5 12 7H9.5L7 9.5v5L9.5 17z"
        className="prefix__cls-2"
      />
      <path
        id="prefix__Fill-4"
        d="M14.5 7 12 9.5l2.5 2.5-2.5 2.5 2.5 2.5 2.5-2.5v-5z"
        className="prefix__cls-2"
      />
    </g>
  </svg>
);
const Memo = memo(ErrorReporting);
export default Memo;
