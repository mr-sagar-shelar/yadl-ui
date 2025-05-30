import type { SVGProps } from "react";
import { memo } from "react";
const VPNClientWindows = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <path
      fill="#ba141a"
      d="M1.165 2.268v5.169a9.75 9.75 0 0 0 4.064 7.929l3.524 2.537c.115.123.308.13.432.015l.015-.015 3.524-2.537a9.75 9.75 0 0 0 4.111-7.929V2.268h-.446a7.14 7.14 0 0 1-3.97-1.175A6.04 6.04 0 0 0 9 .001a6.03 6.03 0 0 0-3.418 1.057 7.14 7.14 0 0 1-3.97 1.175z"
    />
    <path
      fill="#fff"
      d="M12.418 1.058a6.05 6.05 0 0 0-6.836 0 7.14 7.14 0 0 1-3.97 1.175h-.446v5.204a9.76 9.76 0 0 0 3.641 7.612z"
      opacity={0.15}
    />
    <path
      fill="#fff"
      d="m7.097 4.171 1.938-1.95 1.927 1.95H9.599v3.101H8.436V4.171zM10.962 13.11l-1.927 1.95-1.938-1.95h1.374V9.998h1.163v3.112zM12.383 10.491l-1.926-1.95 1.926-1.962v1.386h3.066v1.187h-3.066zM5.617 6.579l1.926 1.962-1.926 1.95V9.117H2.551V7.93h3.066z"
    />
  </svg>
);
const Memo = memo(VPNClientWindows);
export default Memo;
