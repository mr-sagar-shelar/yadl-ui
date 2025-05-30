import type { SVGProps } from "react";
import { memo } from "react";
const Haskell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#352950"
      d="m28 198.176 47.06-70.588L28 57h35.294l47.06 70.588-47.06 70.588z"
    />
    <path
      fill="#4A3A74"
      d="m75.06 198.176 47.059-70.588L75.059 57h35.295l94.117 141.176h-35.295l-29.41-44.117-29.413 44.117z"
    />
    <path
      fill="#7C3679"
      d="m188.785 157-15.686-23.532 54.901-.002v23.531h-39.216zm-23.529-35.294-15.687-23.532L228 98.172v23.53h-62.749z"
    />
  </svg>
);
const Memo = memo(Haskell);
export default Memo;
