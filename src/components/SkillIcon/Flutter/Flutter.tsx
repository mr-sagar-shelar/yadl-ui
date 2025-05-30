import type { SVGProps } from "react";
import { memo } from "react";
const Flutter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#F4F2ED" rx={60} />
    <path
      fill="#44D1FD"
      d="M144.934 38.062 200.709 38l-93.575 93.526-24.387 24.251L55 127.996zm-.519 83.507c.724-.956 2.056-.484 3.067-.607l53.179.013-48.467 48.42-27.891-27.72z"
    />
    <path
      fill="#1FBCFD"
      d="m96.501 169.442 27.802-27.767 27.891 27.72.116.123-28 27.74z"
    />
    <path
      fill="#08589C"
      d="m124.31 197.258 28-27.74 48.371 48.419c-18.22.041-36.434-.014-54.647.027-1.038.232-1.68-.717-2.343-1.304z"
    />
  </svg>
);
const Memo = memo(Flutter);
export default Memo;
