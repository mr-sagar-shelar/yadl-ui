import type { SVGProps } from "react";
const Vercel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path fill="#000" d="m128 34 95 164.853H33z" />
  </svg>
);
export default Vercel;
