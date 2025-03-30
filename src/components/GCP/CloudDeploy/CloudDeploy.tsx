import type { SVGProps } from "react";
import { memo } from "react";
const CloudDeploy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      d="M20.39 18.24V8l-8.87-5.11v4.66l4.85 2.77-.02 5.59z"
      style={{
        fill: "#4285f4",
      }}
    />
    <path
      d="M14.79 19.86v-8.63L7.33 6.92v4.02l4.01 2.29-.02 4.62z"
      style={{
        fill: "#669df6",
      }}
    />
    <path
      d="M9.76 21.15v-7.01l-6.07-3.5V14l3.17 1.81-.02 3.66z"
      style={{
        fill: "#aecbfa",
      }}
    />
  </svg>
);
const Memo = memo(CloudDeploy);
export default Memo;
