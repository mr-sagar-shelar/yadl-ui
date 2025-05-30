import type { SVGProps } from "react";
import { memo } from "react";
const VueJS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2EE" rx={60} />
    <path
      fill="#41B883"
      d="M182 50h36l-90 155.25L38 50h68.85L128 86l20.7-36z"
    />
    <path fill="#41B883" d="m38 50 90 155.25L218 50h-36l-54 93.15L73.55 50z" />
    <path
      fill="#35495E"
      d="M73.55 50 128 143.6 182 50h-33.3L128 86l-21.15-36z"
    />
  </svg>
);
const Memo = memo(VueJS);
export default Memo;
