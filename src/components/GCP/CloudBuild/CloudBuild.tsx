import type { SVGProps } from "react";
import { memo } from "react";
const CloudBuild = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>{".prefix__cls-3{fill:#aecbfa}"}</style>
    </defs>
    <g data-name="Product Icons">
      <path
        d="m12.15 16.24 3.52-2.03v-4.06l-1.18-.69-3.52 6.1z"
        style={{
          fill: "#4285f4",
        }}
      />
      <path
        d="M8.63 10.15v4.06l1.18.68 3.53-6.09-1.19-.69z"
        style={{
          fill: "#669df6",
        }}
      />
      <path
        d="m11.46 17.45-4.22-2.44v-4.86L3.49 7.98v9.2l7.97 4.6zM7.93 8.95l4.22-2.44 4.22 2.44 3.76-2.17-7.98-4.61-7.98 4.61zM17.06 15.01l-4.22 2.44v4.33l7.98-4.6v-9.2l-3.76 2.17z"
        className="prefix__cls-3"
      />
    </g>
  </svg>
);
const Memo = memo(CloudBuild);
export default Memo;
