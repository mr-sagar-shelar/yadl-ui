import type { SVGProps } from "react";
import { memo } from "react";
const Firestore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>{".prefix__cls-2{fill:#aecbfa}"}</style>
    </defs>
    <g data-name="Product Icons">
      <g data-name="colored-32/firestore">
        <path
          d="m21 13-9-4v4l9 4Zm0-7-9-4v4l9 4Z"
          style={{
            fill: "#669df6",
          }}
        />
        <path
          id="prefix__Rectangle-7"
          d="m3 6 9-4v4l-9 4z"
          className="prefix__cls-2"
        />
        <path
          id="prefix__Rectangle-7-2"
          d="m3 13 9-4v4l-9 4z"
          className="prefix__cls-2"
          data-name="Rectangle-7"
        />
        <path
          id="prefix__Rectangle-7-3"
          d="m12 18 3.37-1.5 4.51 2L12 22z"
          data-name="Rectangle-7"
          style={{
            fill: "#4285f4",
          }}
        />
      </g>
    </g>
  </svg>
);
const Memo = memo(Firestore);
export default Memo;
