import type { SVGProps } from "react";
import { memo } from "react";
const Zig = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path fill="#F7A41D" d="M92.118 71.882 70.94 97.765l-10.588-16.47z" />
    <path
      fill="#F7A41D"
      d="m92.118 71.883-15.294 12.94-5.883 12.942h-7.059v60h10.589l-12.942 5.882-9.411 20H38V71.883z"
    />
    <path
      fill="#F7A41D"
      d="m74.47 157.765-22.352 25.882-9.412-12.941zM103.882 71.882l7.059 16.47-29.412 9.413z"
    />
    <path
      fill="#F7A41D"
      d="M103.882 71.882h64.706v25.883H81.529l22.353-14.118zM174.471 157.765l-22.353 25.882-8.236-15.294z"
    />
    <path
      fill="#F7A41D"
      d="m174.47 157.765-18.823 10.588-3.53 15.294H87.412v-25.882z"
    />
    <path
      fill="#F7A41D"
      d="M214.47 46 99.176 183.647 41.53 210.706 156.823 71.882zM203.883 71.882l-1.177 21.177-21.176 5.882z"
    />
    <path
      fill="#F7A41D"
      d="M218 71.883v111.764h-55.294l16.471-14.117 5.882-11.765h7.059V98.941H181.53l11.764-10.588 10.589-16.47z"
    />
    <path fill="#F7A41D" d="m185.059 157.765 5.882 17.647-28.235 8.235z" />
  </svg>
);
const Memo = memo(Zig);
export default Memo;
