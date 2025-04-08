import type { SVGProps } from "react";
import { memo } from "react";
const CloudVisionApi = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {".prefix__cls-2{fill:#669df6}.prefix__cls-3{fill:#aecbfa}"}
      </style>
    </defs>
    <g data-name="Product Icons">
      <g data-name="colored-32/vision">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
        <path d="m6 12 6 4.99V20L2 12z" className="prefix__cls-2" />
        <path
          id="prefix__Shape-2"
          d="M12 16.99 18 12h4l-10 8z"
          className="prefix__cls-2"
          data-name="Shape"
        />
        <path
          id="prefix__Shape-3"
          d="m2 12 10-8v3.01L6 12z"
          className="prefix__cls-3"
          data-name="Shape"
        />
        <path
          id="prefix__Shape-4"
          d="M12 7.01 18 12h4L12 4z"
          className="prefix__cls-3"
          data-name="Shape"
        />
        <circle
          id="prefix__Oval"
          cx={12}
          cy={12}
          r={2}
          style={{
            fill: "#4285f4",
          }}
        />
      </g>
    </g>
  </svg>
);
const Memo = memo(CloudVisionApi);
export default Memo;
