import type { SVGProps } from "react";
import { memo } from "react";
const Transfer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#4285F4"
      fillRule="evenodd"
      d="M14 5V2.5L21 7l-7 4.5V9H5.115a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm-4 7.5V15h8.831a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H10v2.5L3 17z"
    />
  </svg>
);
const Memo = memo(Transfer);
export default Memo;
