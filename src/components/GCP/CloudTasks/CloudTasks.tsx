import type { SVGProps } from "react";
import { memo } from "react";
const CloudTasks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {".prefix__cls-2{fill:#669df6}.prefix__cls-3{fill:#4285f4}"}
      </style>
    </defs>
    <g data-name="Product Icons">
      <g data-name="colored-32/tasks">
        <path
          d="M0 0h24v24H0z"
          style={{
            fill: "none",
          }}
        />
        <path d="M11 5h2v7h-2z" className="prefix__cls-2" />
        <path
          id="prefix__Rectangle-path-2"
          d="M11 12h2v7h-2z"
          className="prefix__cls-3"
          data-name="Rectangle-path"
        />
        <g data-name="art1">
          <path
            id="prefix__Rectangle-path-3"
            d="M15 5h2v7h-2z"
            className="prefix__cls-2"
            data-name="Rectangle-path"
          />
          <path
            id="prefix__Rectangle-path-4"
            d="M15 12h2v7h-2z"
            className="prefix__cls-3"
            data-name="Rectangle-path"
          />
        </g>
        <g data-name="art1">
          <path
            id="prefix__Rectangle-path-5"
            d="M19 5h2v7h-2z"
            className="prefix__cls-2"
            data-name="Rectangle-path"
          />
          <path
            id="prefix__Rectangle-path-6"
            d="M19 12h2v7h-2z"
            className="prefix__cls-3"
            data-name="Rectangle-path"
          />
        </g>
        <g data-name="art1">
          <path
            id="prefix__Rectangle-path-7"
            d="M7 5h2v7H7z"
            className="prefix__cls-2"
            data-name="Rectangle-path"
          />
          <path
            id="prefix__Rectangle-path-8"
            d="M7 12h2v7H7z"
            className="prefix__cls-3"
            data-name="Rectangle-path"
          />
        </g>
        <g data-name="art1">
          <path
            id="prefix__Rectangle-path-9"
            d="M3 5h2v7H3z"
            className="prefix__cls-2"
            data-name="Rectangle-path"
          />
          <path
            id="prefix__Rectangle-path-10"
            d="M3 12h2v7H3z"
            className="prefix__cls-3"
            data-name="Rectangle-path"
          />
        </g>
      </g>
    </g>
  </svg>
);
const Memo = memo(CloudTasks);
export default Memo;
