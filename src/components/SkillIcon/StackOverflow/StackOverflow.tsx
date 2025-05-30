import type { SVGProps } from "react";
import { memo } from "react";
const StackOverflow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#BCBBBB"
      d="M183.541 206.378V157.73h21.621V228H43v-70.27h21.622v48.648z"
    />
    <path
      fill="#F48024"
      d="m159.216 28-14.594 10.81 53.513 71.893 14.595-10.811zm24.325 99.459-68.649-57.297 11.351-13.513 68.649 57.297zm-91.352-17.297L173.27 148l7.568-16.216-81.081-37.838zm75.676 58.324 3.676-15.945-87.027-18.109-3.676 17.892zm-.541 21.676H80.838v-16.216h86.486z"
    />
  </svg>
);
const Memo = memo(StackOverflow);
export default Memo;
