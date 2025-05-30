import type { SVGProps } from "react";
import { memo } from "react";
const HaxeFlixel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path fill="#0C3" d="M56.805 55.977h142.828V199.84H56.805z" />
    <path fill="#FC3" d="M33 32h47.61l47.609 23.977-71.414 71.931L33 79.954z" />
    <path
      fill="#F36"
      d="M128.219 55.977 175.828 32h47.609v47.954l-23.804 47.954z"
    />
    <path
      fill="#33F"
      d="m56.805 127.908 71.414 71.931-47.61 23.977H33v-47.954z"
    />
    <path
      fill="#0CF"
      d="m199.633 127.908 23.804 47.954v47.954h-47.609l-47.609-23.977z"
    />
  </svg>
);
const Memo = memo(HaxeFlixel);
export default Memo;
