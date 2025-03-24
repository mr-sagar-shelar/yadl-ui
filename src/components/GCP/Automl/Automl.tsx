import type { SVGProps } from "react";
import { memo } from "react";
const Automl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>{".prefix__cls-2{fill:#669df6;fill-opacity:.8}"}</style>
    </defs>
    <g data-name="Product Icons">
      <path
        d="m4.5 16.72 5-8.58h1.67l1.66-2.57L11.15 3H7l-5 8.58z"
        style={{
          fill: "#4285f4",
        }}
      />
      <path
        d="m14.5 5.57-1.67 2.57h3.34l1.66-2.57L16.17 3h-3.34z"
        className="prefix__cls-2"
      />
      <path
        d="m19.5 7.28-5 8.58h-1.67l-1.66 2.57L12.85 21H17l5-8.58z"
        style={{
          fill: "#aecbfa",
          fillOpacity: 0.6,
        }}
      />
      <path
        d="M11.17 21 9.5 18.43l1.67-2.57H7.83l-1.66 2.57L7.83 21z"
        className="prefix__cls-2"
      />
    </g>
  </svg>
);
const Memo = memo(Automl);
export default Memo;
