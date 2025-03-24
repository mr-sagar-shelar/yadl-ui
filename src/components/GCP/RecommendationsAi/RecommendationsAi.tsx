import type { SVGProps } from "react";
import { memo } from "react";
const RecommendationsAi = (props: SVGProps<SVGSVGElement>) => (
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
          ".prefix__cls-1{fill:#aecbfa}.prefix__cls-2{fill:#4285f4}.prefix__cls-3{fill:#669df6}"
        }
      </style>
    </defs>
    <g data-name="Product Icons">
      <g data-name="colored-32/recommendation">
        <path
          d="M12 2h10v10H12Zm4.46 6.76 2.84-2.83-.8-.8-2 2-1-1-.8.8Z"
          className="prefix__cls-1"
        />
        <path d="M2 14v8h8v-8Zm6 6H4v-4h4Z" className="prefix__cls-2" />
        <path
          id="prefix__Shape-2"
          d="M12 12h10v-1.97L14 10z"
          className="prefix__cls-2"
          data-name="Shape"
        />
        <path
          id="prefix__Shape-3"
          d="M20 4v6.02L22 12V2z"
          className="prefix__cls-3"
          data-name="Shape"
        />
      </g>
      <path d="m10 22-2-2v-4l2-2z" className="prefix__cls-1" />
      <path d="m2 22 2-2h4l2 2z" className="prefix__cls-3" />
      <g data-name="Group">
        <path
          id="prefix__Shape-4"
          d="M2 4v8h8V4Zm6 6H4V6h4Z"
          className="prefix__cls-2"
          data-name="Shape"
        />
      </g>
      <path d="m10 12-2-2V6l2-2z" className="prefix__cls-1" />
      <path d="m2 12 2-2h4l2 2z" className="prefix__cls-3" />
      <g data-name="Group">
        <path
          id="prefix__Shape-5"
          d="M12 14v8h8v-8Zm6 6h-4v-4h4Z"
          className="prefix__cls-2"
          data-name="Shape"
        />
      </g>
      <path d="m20 22-2-2v-4l2-2z" className="prefix__cls-1" />
      <path d="m12 22 2-2h4l2 2z" className="prefix__cls-3" />
    </g>
  </svg>
);
const Memo = memo(RecommendationsAi);
export default Memo;
