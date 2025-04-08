import type { SVGProps } from "react";
import { memo } from "react";
const GoogleKubernetesEngine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {
          ".prefix__cls-1{fill:#4285f4}.prefix__cls-1,.prefix__cls-2,.prefix__cls-4{fill-rule:evenodd}.prefix__cls-2{fill:#669df6}.prefix__cls-4{fill:#aecbfa}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <path
        d="m14.68 13.06 4.55 2.63v.99l-4.94-2.85z"
        className="prefix__cls-1"
      />
      <path
        d="m9.98 13.65-5.21 3.01-.32-.8 5.08-2.94z"
        className="prefix__cls-2"
      />
      <path
        d="M11.55 3.29h.86v5.78h-.86z"
        style={{
          fill: "#aecbfa",
        }}
      />
      <path
        d="M3.25 7v10L12 22l8.74-5V7L12 2Zm15.63 8.89L12 19.78l-6.88-3.89V8.11L12 4.22l6.87 3.89v7.78Z"
        className="prefix__cls-4"
      />
      <path
        d="m11.98 11.5 3.98-2.29-3.98-2.3-3.97 2.3z"
        className="prefix__cls-4"
      />
      <path
        d="m11.52 12.3-3.86-2.29v4.59l3.86 2.29z"
        className="prefix__cls-2"
      />
      <path d="M12.48 12.3v4.59l3.86-2.29v-4.59z" className="prefix__cls-1" />
    </g>
  </svg>
);
const Memo = memo(GoogleKubernetesEngine);
export default Memo;
