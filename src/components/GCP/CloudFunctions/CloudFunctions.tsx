import type { SVGProps } from "react";
import { memo } from "react";
const CloudFunctions = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {
          ".prefix__cls-1{fill:#669df6}.prefix__cls-2{fill:#4285f4}.prefix__cls-3{fill:#aecbfa}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <g data-name="colored-32/functions">
        <path d="M2 15.56 5 18V6L2 8.43z" className="prefix__cls-1" />
        <path d="m2 10 3-2V6zM5 18v-2l-3-2z" className="prefix__cls-2" />
        <path d="m8 20-6-6v4l4 4z" className="prefix__cls-3" />
      </g>
      <path d="M5.99 2.01 2 6l.01 4 5.98-5.99z" className="prefix__cls-3" />
      <g data-name="colored-32/functions">
        <g data-name="Shape">
          <path d="m22 8.45-3-2.44v12l3-2.42z" className="prefix__cls-1" />
          <path d="m22 14.01-3 2v2zM19 6.01v2l3 2z" className="prefix__cls-2" />
          <path d="m16 4.01 6 6v-4l-4-4z" className="prefix__cls-3" />
        </g>
      </g>
      <path d="M18.01 22 22 18.01l-.01-4L16.01 20z" className="prefix__cls-3" />
      <circle
        id="prefix__Oval"
        cx={8}
        cy={12}
        r={1}
        className="prefix__cls-3"
      />
      <circle
        id="prefix__Oval-2"
        cx={12}
        cy={12}
        r={1}
        className="prefix__cls-3"
        data-name="Oval"
      />
      <circle
        id="prefix__Oval-3"
        cx={15.99}
        cy={12}
        r={1}
        className="prefix__cls-3"
        data-name="Oval"
      />
    </g>
  </svg>
);
const Memo = memo(CloudFunctions);
export default Memo;
