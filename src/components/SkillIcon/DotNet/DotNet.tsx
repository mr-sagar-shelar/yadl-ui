import type { SVGProps } from "react";
import { memo } from "react";
const DotNet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#512BD4" rx={60} />
    <path
      fill="#fff"
      d="M24.052 168.943q-3.355 0-5.703-2.194Q16 164.498 16 161.402q0-3.151 2.349-5.403 2.348-2.25 5.703-2.251 3.411 0 5.76 2.251 2.404 2.251 2.404 5.403 0 3.096-2.404 5.347-2.349 2.194-5.76 2.194M113.467 167.705H98.929l-38.304-59.318a26.4 26.4 0 0 1-2.404-4.672h-.336q.447 2.59.447 11.087v52.903H45.471V87H60.96l37.018 57.912q2.349 3.602 3.02 4.953h.223q-.559-3.208-.559-10.863V87h12.805zM176.098 167.705h-45.014V87h43.225v11.369h-29.916v22.849h27.568v11.312h-27.568v23.863h31.705zM240.071 98.369h-23.038v69.336h-13.309V98.369h-22.982V87h59.329z"
    />
  </svg>
);
const Memo = memo(DotNet);
export default Memo;
