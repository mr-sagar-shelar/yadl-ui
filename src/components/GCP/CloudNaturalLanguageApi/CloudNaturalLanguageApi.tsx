import type { SVGProps } from "react";
import { memo } from "react";
const CloudNaturalLanguageApi = (props: SVGProps<SVGSVGElement>) => (
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
          ".prefix__cls-1{fill:#669df6}.prefix__cls-2{fill:#4285f4}.prefix__cls-3{fill:#aecbfa}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <path d="M20 5h-3v2h3v12h-3v2h5V5z" className="prefix__cls-1" />
      <path d="m20 8 2-1h-2zM22 18l-2 1h2z" className="prefix__cls-2" />
      <path d="M4 21h3v-2H4V7h3V5H2v16z" className="prefix__cls-1" />
      <g data-name="Shape">
        <path d="m2 18 2 1H2zM4 8 2 7h2z" className="prefix__cls-2" />
      </g>
      <path
        id="prefix__Rectangle-7-Copy"
        d="M7 12h10v2H7z"
        className="prefix__cls-3"
      />
      <path
        id="prefix__Rectangle-7-Copy-2"
        d="M7 15h10v2H7z"
        className="prefix__cls-3"
        data-name="Rectangle-7-Copy"
      />
      <path
        id="prefix__Rectangle-7-Copy-3"
        d="M7 9h10v2H7z"
        className="prefix__cls-3"
        data-name="Rectangle-7-Copy"
      />
    </g>
  </svg>
);
const Memo = memo(CloudNaturalLanguageApi);
export default Memo;
