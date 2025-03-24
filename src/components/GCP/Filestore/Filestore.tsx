import type { SVGProps } from "react";
import { memo } from "react";
const Filestore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>{".prefix__cls-2{fill:#aecbfa}"}</style>
    </defs>
    <g data-name="Product Icons">
      <g data-name="colored-32/filestore">
        <path
          id="prefix__Rectangle-10-Copy-6"
          d="M8 12h8l-2 2h-4z"
          style={{
            fill: "#4285f4",
          }}
        />
        <path
          id="prefix__Rectangle-10-Copy-5"
          d="M7 4h10l1 2H6z"
          className="prefix__cls-2"
        />
        <path
          id="prefix__Rectangle-10-Copy-6-2"
          d="M4 7h16l1 2H3z"
          className="prefix__cls-2"
          data-name="Rectangle-10-Copy-6"
        />
        <path
          d="M22 20v-9h-6l-2 3h-4l-2-3H2v9z"
          style={{
            fill: "#669df6",
          }}
        />
      </g>
    </g>
  </svg>
);
const Memo = memo(Filestore);
export default Memo;
