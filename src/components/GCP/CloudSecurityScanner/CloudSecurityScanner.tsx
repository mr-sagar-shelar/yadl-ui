import type { SVGProps } from "react";
import { memo } from "react";
const CloudSecurityScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <circle
      cx={11.45}
      cy={11.51}
      r={2.89}
      style={{
        fill: "#669df6",
      }}
    />
    <path
      d="M18.05 6.81a8.12 8.12 0 0 0-4.94-3.23l-.27 1.3a6.79 6.79 0 1 1-6.19 1.86l-1-.94a8.1 8.1 0 1 0 13 2.12 1.31 1.31 0 0 1-.6-1.11"
      style={{
        fill: "#aecbfa",
      }}
    />
    <path
      d="M14.46 20.42a2 2 0 1 1 0-3.93"
      style={{
        fill: "#669df6",
      }}
    />
    <path
      d="M14.46 16.49a2 2 0 1 1 0 3.93"
      style={{
        fill: "#4285f4",
      }}
    />
    <path
      d="M19.38 8.1a1.34 1.34 0 0 1 0-2.67v-1a2.38 2.38 0 0 0 0 4.75Z"
      style={{
        fill: "#669df6",
      }}
    />
    <path
      d="M19.38 5.43a1.34 1.34 0 0 1 0 2.67v1a2.38 2.38 0 0 0 0-4.75Z"
      style={{
        fill: "#4285f4",
      }}
    />
    <path
      d="M4.22 12.78a2 2 0 1 1 0-3.93"
      style={{
        fill: "#669df6",
      }}
    />
    <path
      d="M4.22 8.85a2 2 0 0 1 0 3.93"
      style={{
        fill: "#4285f4",
      }}
    />
  </svg>
);
const Memo = memo(CloudSecurityScanner);
export default Memo;
