import type { SVGProps } from "react";
import { memo } from "react";
const Angular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#E23237"
      d="M34.25 61.125 127.325 28l95.525 32.612L207.412 183.7 127.325 228l-78.787-43.725z"
    />
    <path fill="#B52E31" d="M222.85 60.613 127.325 28v200l80.087-44.3z" />
    <path
      fill="#fff"
      d="m127.469 51.375-58 129 21.644-.438 11.687-29.149h51.875l12.7 29.375 20.637.437zm.143 41.412 19.625 40.982H110.5l17.169-40.982z"
    />
  </svg>
);
const Memo = memo(Angular);
export default Memo;
